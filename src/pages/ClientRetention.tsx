import React, { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import ClientHealthCard from '@/components/ClientHealthCard';
import { TrendingDown, TrendingUp, AlertTriangle, Users, MessageSquare, Phone, Calendar, Clock } from 'lucide-react';
import ClientCheckInWidget from '@/components/ClientCheckInWidget';
import TestimonialCollectionWidget from '@/components/TestimonialCollectionWidget';
import {
  AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer
} from 'recharts';
import { format } from 'date-fns';
import { supabase } from "@/supabaseClient";

// Mock data for demonstration
const mockClients = [
  {
    id: 1,
    name: 'Alex Johnson',
    email: 'alex@example.com',
    healthScore: 92,
    lastCheckIn: new Date(2025, 3, 25),
    missedCheckIns: 0,
    sentiment: 'positive' as const,
    riskStatus: 'low' as const,
    testimonials: 2
  },
  {
    id: 2,
    name: 'Sarah Williams',
    email: 'sarah@example.com',
    healthScore: 68,
    lastCheckIn: new Date(2025, 3, 20),
    missedCheckIns: 1,
    sentiment: 'neutral' as const,
    riskStatus: 'medium' as const,
    testimonials: 1
  },
  {
    id: 3,
    name: 'Michael Chen',
    email: 'michael@example.com',
    healthScore: 45,
    lastCheckIn: new Date(2025, 3, 10),
    missedCheckIns: 3,
    sentiment: 'negative' as const,
    riskStatus: 'high' as const,
    testimonials: 0
  },
  {
    id: 4,
    name: 'Emily Davis',
    email: 'emily@example.com',
    healthScore: 88,
    lastCheckIn: new Date(2025, 3, 26),
    missedCheckIns: 0,
    sentiment: 'positive' as const,
    riskStatus: 'low' as const,
    testimonials: 3
  },
  {
    id: 5,
    name: 'James Wilson',
    email: 'james@example.com',
    healthScore: 56,
    lastCheckIn: new Date(2025, 3, 15),
    missedCheckIns: 2,
    sentiment: 'negative' as const,
    riskStatus: 'medium' as const,
    testimonials: 1
  }
];

// Enhanced monthly data with more points for a better curve
const monthlyData = [
  { month: 'Jan', avgHealth: 80, mrr: 1200, expectedMRR: 1100 },
  { month: 'Feb', avgHealth: 85, mrr: 1300, expectedMRR: 1250 },
  { month: 'Mar', avgHealth: 78, mrr: 1250, expectedMRR: 1150 },
  { month: 'Apr', avgHealth: 90, mrr: 1400, expectedMRR: 1380 },
  { month: 'May', avgHealth: 88, mrr: 1450, expectedMRR: 1400 },
  { month: 'Jun', avgHealth: 92, mrr: 1500, expectedMRR: 1480 },
  { month: 'Jul', avgHealth: 95, mrr: 1650, expectedMRR: 1620 },
  { month: 'Aug', avgHealth: 93, mrr: 1700, expectedMRR: 1650 },
];

// Custom tooltip component with updated aesthetic colors
const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white p-4 rounded-lg shadow-md border border-slate-100">
        <p className="font-medium text-slate-700 mb-2">{label}</p>
        {payload.map((entry: any, index: number) => (
          <div key={`item-${index}`} className="flex items-center mb-1 last:mb-0">
            <div 
              className="w-3 h-3 rounded-full mr-2" 
              style={{ backgroundColor: entry.color }}
            />
            <span className="text-slate-500 mr-2">{entry.name}:</span>
            <span className="font-medium text-slate-700">
              {entry.name.includes('Revenue') ? `$${entry.value}` : `${entry.value}%`}
            </span>
          </div>
        ))}
      </div>
    );
  }
  return null;
};

// Custom legend with updated aesthetic
const CustomLegend = (props: any) => {
  const { payload } = props;
  
  return (
    <div className="flex flex-wrap justify-center gap-4 mt-2">
      {payload.map((entry: any, index: number) => (
        <div 
          key={`item-${index}`}
          className="flex items-center px-3 py-1.5 rounded-full bg-white border border-slate-100 shadow-sm"
        >
          <div 
            className="w-3 h-3 rounded-full mr-2" 
            style={{ backgroundColor: entry.color }}
          />
          <span className="text-sm font-medium text-slate-600">{entry.value}</span>
        </div>
      ))}
    </div>
  );
};

// Define a type for scheduled calls
interface ScheduledCall {
  clientName: string;
  clientEmail: string;
  startTime: Date;
  endTime: Date;
}

const ClientRetention = () => {
  const [showCheckInWidget, setShowCheckInWidget] = useState(false);
  const [showTestimonialWidget, setShowTestimonialWidget] = useState(false);
  const [scheduledCalls, setScheduledCalls] = useState<ScheduledCall[]>([]);
  const [isPaid, setIsPaid] = useState<boolean | null>(null);
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  
  const baseUrl = window.location.origin;
  
  // Calculate summary metrics
  const atRiskClients = mockClients.filter(client => client.healthScore < 50);
  const avgHealthScore = Math.round(
    mockClients.reduce((sum, client) => sum + client.healthScore, 0) / mockClients.length
  );
  const totalTestimonials = mockClients.reduce((sum, client) => sum + client.testimonials, 0);
  
  // Function to add a scheduled call
  const handleCallScheduled = (callDetails: ScheduledCall) => {
    setScheduledCalls(prevCalls => [...prevCalls, callDetails].sort((a, b) => a.startTime.getTime() - b.startTime.getTime()));
  };

  const handleCopyLink = (type) => {
    const url = `${baseUrl}/client-widget?type=${type}&clientId=123`;
    navigator.clipboard.writeText(url).then(() => {
      alert('Link copied!');
    });
  };

  useEffect(() => {
    const fetchPaidStatus = async () => {
      const { data: { user } } = await supabase.auth.getUser();
      setUser(user);
      if (user) {
        const { data } = await supabase
          .from("users")
          .select("is_paid")
          .eq("id", user.id)
          .single();
        setIsPaid(data?.is_paid ?? false);
      }
      setLoading(false);
    };

    // Always fetch on mount
    fetchPaidStatus();

    // If coming from Stripe success, refetch again after a short delay
    if (window.location.search.includes("success=1")) {
      // Optionally, you can add a small delay to ensure webhook has finished
      setTimeout(() => {
        fetchPaidStatus();
        // Optionally, clean up the URL
        const url = new URL(window.location.href);
        url.searchParams.delete("success");
        window.history.replaceState({}, document.title, url.pathname);
      }, 1500); // 1.5 seconds
    }
  }, []);

  if (loading) {
    return <div className="flex justify-center items-center h-screen">Loading...</div>;
  }

  return (
    <div className="min-h-screen bg-slate-50 relative">
      {/* Navbar always on top */}
      <div className="relative z-50">
        <Navbar user={user} isPaid={isPaid} />
      </div>
      <main className="container py-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold mb-2">Welcome back, Coach! 👋</h1>
            <p className="text-slate-600">Here's a quick look at how your clients are feeling today.</p>
          </div>
          <div className="mt-4 md:mt-0 flex gap-3">
            <Button
              onClick={() => setShowCheckInWidget(true)}
              className="bg-emerald-500 hover:bg-emerald-600 text-white shadow-sm rounded-full"
            >
              <MessageSquare className="mr-2 h-4 w-4" />
              Send a Check-in
            </Button>
            <Button
              onClick={() => setShowTestimonialWidget(true)}
              variant="outline"
              className="border-slate-200 text-slate-600 hover:bg-violet-50 shadow-sm rounded-full"
            >
              Collect a Testimonial
            </Button>
          </div>
        </div>
        
        <div className="mb-10 bg-white rounded-xl shadow-md overflow-hidden border border-slate-100">
          <div className="p-6">
            <h2 className="text-xl font-bold mb-1 text-slate-800">Performance Trends</h2>
            <p className="text-slate-500 text-sm mb-6">Client health and revenue metrics over time</p>
            
            <ResponsiveContainer width="100%" height={350}>
              <AreaChart
                data={monthlyData}
                margin={{ top: 10, right: 30, left: 10, bottom: 30 }}
              >
                <defs>
                  {/* Health Score - Soft lavender/purple */}
                  <linearGradient id="colorHealth" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#8b5cf6" stopOpacity={0.3} />
                    <stop offset="95%" stopColor="#8b5cf6" stopOpacity={0} />
                  </linearGradient>
                  
                  {/* Current Revenue - Warm orange (similar to the background in your image) */}
                  <linearGradient id="colorMRR" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#fb923c" stopOpacity={0.3} />
                    <stop offset="95%" stopColor="#fb923c" stopOpacity={0} />
                  </linearGradient>
                  
                  {/* Projected Revenue - Soft teal (complementary to the orange) */}
                  <linearGradient id="colorExpectedMRR" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#2dd4bf" stopOpacity={0.3} />
                    <stop offset="95%" stopColor="#2dd4bf" stopOpacity={0} />
                  </linearGradient>
                  
                  {/* Pattern for the chart background */}
                  <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
                    <path d="M 10 0 L 0 0 0 10" fill="none" stroke="rgba(0, 0, 0, 0.03)" strokeWidth="1"/>
                  </pattern>
                </defs>
                
                {/* Subtle grid background */}
                <rect width="100%" height="100%" fill="url(#grid)" />
                
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="rgba(0,0,0,0.04)" />
                
                <XAxis 
                  dataKey="month" 
                  tick={{ fill: '#64748b' }}
                  axisLine={{ stroke: '#e2e8f0' }}
                  tickLine={{ stroke: '#e2e8f0' }}
                />
                
                <YAxis 
                  yAxisId="left" 
                  orientation="left" 
                  stroke="#a78bfa"
                  tick={{ fill: '#64748b' }}
                  axisLine={{ stroke: '#e2e8f0' }}
                  tickLine={{ stroke: '#e2e8f0' }}
                  label={{ 
                    value: 'Health Score (%)', 
                    angle: -90, 
                    position: 'insideLeft', 
                    style: { textAnchor: 'middle', fill: '#64748b', fontSize: 12 } 
                  }} 
                />
                
                <YAxis 
                  yAxisId="right" 
                  orientation="right" 
                  stroke="#f97316"
                  tick={{ fill: '#64748b' }}
                  axisLine={{ stroke: '#e2e8f0' }}
                  tickLine={{ stroke: '#e2e8f0' }}
                  label={{ 
                    value: 'Revenue ($)', 
                    angle: 90, 
                    position: 'insideRight', 
                    style: { textAnchor: 'middle', fill: '#64748b', fontSize: 12 } 
                  }} 
                />
                
                <Tooltip content={<CustomTooltip />} />
                <Legend content={<CustomLegend />} />
                
                <Area 
                  yAxisId="left" 
                  type="monotone" 
                  dataKey="avgHealth" 
                  name="Health Score" 
                  stroke="#8b5cf6" 
                  strokeWidth={2}
                  fillOpacity={1} 
                  fill="url(#colorHealth)" 
                  activeDot={{ r: 6, strokeWidth: 2, stroke: '#fff' }}
                  animationDuration={1500}
                  animationEasing="ease-in-out"
                />
                
                <Area 
                  yAxisId="right" 
                  type="monotone" 
                  dataKey="mrr" 
                  name="Current Revenue" 
                  stroke="#fb923c" 
                  strokeWidth={2}
                  fillOpacity={1} 
                  fill="url(#colorMRR)" 
                  activeDot={{ r: 6, strokeWidth: 2, stroke: '#fff' }}
                  animationDuration={1500}
                  animationEasing="ease-in-out"
                />
                
                <Area 
                  yAxisId="right" 
                  type="monotone" 
                  dataKey="expectedMRR" 
                  name="Projected MRR" 
                  stroke="#2dd4bf" 
                  strokeWidth={2}
                  fillOpacity={1} 
                  fill="url(#colorExpectedMRR)" 
                  activeDot={{ r: 6, strokeWidth: 2, stroke: '#fff' }}
                  animationDuration={1500}
                  animationEasing="ease-in-out"
                />
              </AreaChart>
            </ResponsiveContainer>
            {monthlyData.length <= 1 && (
              <div className="text-center text-slate-500 mt-4">
                Your metrics will appear here as you use Testy!
              </div>
            )}
          </div>
        </div>
        
        {/* Risk notification BELOW the chart */}
        {/* {atRiskClients.length > 0 && (
          <div className="mb-8 flex items-center bg-rose-50 border border-rose-100 rounded-lg px-4 py-2 text-rose-700 text-sm font-medium shadow-sm">
            <Phone className="h-4 w-4 mr-2 text-rose-400" />
            {atRiskClients.length} client{atRiskClients.length > 1 ? 's are' : ' is'} at risk.
            <span className="ml-1 text-rose-500 font-normal">Schedule a call from their card.</span>
          </div>
        )} */}
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card className="shadow-sm border border-slate-100 bg-violet-50 hover:shadow-md transition-shadow rounded-2xl">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-violet-700">Overall Vibes</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-end">
                <p className="text-3xl font-bold text-violet-800">{avgHealthScore}%</p>
                <p className="ml-2 flex items-center text-xs text-emerald-500">
                  <TrendingUp className="h-4 w-4 mr-1" />
                  <span>+5% this month</span>
                </p>
              </div>
            </CardContent>
          </Card>
          
          <Card className="shadow-sm border border-slate-100 bg-pink-50 hover:shadow-md transition-shadow rounded-2xl">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-slate-600">Clients At Risk</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-end">
                <p className="text-3xl font-bold text-pink-800">{atRiskClients.length}</p>
                <p className="ml-2 flex items-center text-xs text-pink-500">
                  <TrendingDown className="h-4 w-4 mr-1" />
                  <span>Needs attention</span>
                </p>
              </div>
            </CardContent>
          </Card>
          
          <Card className="shadow-sm border border-slate-100 bg-emerald-50 hover:shadow-md transition-shadow rounded-2xl">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-emerald-700">Check-In Frequency</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-end">
                <p className="text-3xl font-bold text-emerald-800">78%</p>
                <p className="ml-2 flex items-center text-xs text-amber-600">
                  <TrendingDown className="h-4 w-4 mr-1" />
                  <span>-3% this month</span>
                </p>
              </div>
            </CardContent>
          </Card>
          
          <Card className="shadow-sm border border-slate-100 bg-yellow-50 hover:shadow-md transition-shadow rounded-2xl">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-yellow-700">Happy Client Stories</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-end">
                <p className="text-3xl font-bold text-yellow-800">{totalTestimonials}</p>
                <p className="ml-2 flex items-center text-xs text-emerald-500">
                  <TrendingUp className="h-4 w-4 mr-1" />
                  <span>+2 this week 🎊</span>
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
        
        <Tabs defaultValue="all-clients" className="mb-8">
          <TabsList className="bg-white border border-slate-200 p-1 rounded-lg">
            <TabsTrigger 
              value="all-clients" 
              className="data-[state=active]:bg-violet-50 data-[state=active]:text-violet-700 data-[state=active]:shadow-sm rounded-md px-4"
            >
              All Clients
            </TabsTrigger>
            <TabsTrigger 
              value="at-risk" 
              className="data-[state=active]:bg-rose-50 data-[state=active]:text-rose-700 data-[state=active]:shadow-sm rounded-md px-4"
            >
              At Risk
            </TabsTrigger>
            <TabsTrigger 
              value="healthy" 
              className="data-[state=active]:bg-emerald-50 data-[state=active]:text-emerald-700 data-[state=active]:shadow-sm rounded-md px-4"
            >
              Healthy
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="all-clients" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {mockClients.map((client, index) => (
                <ClientHealthCard
                  key={index}
                  clientName={client.name}
                  clientEmail={client.email}
                  healthScore={client.healthScore}
                  lastCheckIn={client.lastCheckIn}
                  missedCheckIns={client.missedCheckIns}
                  sentiment={client.sentiment}
                  riskStatus={client.healthScore < 50 ? 'high' : client.healthScore < 75 ? 'medium' : 'low'}
                  onCallScheduled={handleCallScheduled}
                />
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="at-risk" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {mockClients
                .filter(client => client.healthScore < 50)
                .map((client, index) => (
                  <ClientHealthCard
                    key={index}
                    clientName={client.name}
                    clientEmail={client.email}
                    healthScore={client.healthScore}
                    lastCheckIn={client.lastCheckIn}
                    missedCheckIns={client.missedCheckIns}
                    sentiment={client.sentiment}
                    riskStatus="high"
                    onCallScheduled={handleCallScheduled}
                  />
                ))}
            </div>
          </TabsContent>
          
          <TabsContent value="healthy" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {mockClients
                .filter(client => client.healthScore >= 75)
                .map((client, index) => (
                  <ClientHealthCard
                    key={index}
                    clientName={client.name}
                    clientEmail={client.email}
                    healthScore={client.healthScore}
                    lastCheckIn={client.lastCheckIn}
                    missedCheckIns={client.missedCheckIns}
                    sentiment={client.sentiment}
                    riskStatus="low"
                    onCallScheduled={handleCallScheduled}
                  />
                ))}
            </div>
          </TabsContent>
        </Tabs>

        {/* NEW: Scheduled Calls Section */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold mb-6 text-slate-800">Upcoming Check-In Calls</h2>
          {scheduledCalls.length > 0 ? (
            <div className="bg-white rounded-lg shadow-sm border border-slate-100 p-6 space-y-4">
              {scheduledCalls.map((call, index) => (
                <div key={index} className="flex flex-col sm:flex-row justify-between items-start sm:items-center p-4 border-b border-slate-100 last:border-b-0">
                  <div>
                    <p className="font-medium text-slate-700">{call.clientName}</p>
                    <p className="text-sm text-slate-500">{call.clientEmail}</p>
                  </div>
                  <div className="mt-2 sm:mt-0 text-sm text-slate-600 flex flex-col sm:items-end">
                     <div className="flex items-center">
                       <Calendar className="h-4 w-4 mr-1.5 text-slate-400" />
                       <span>{format(call.startTime, 'EEEE, MMMM d, yyyy')}</span>
                     </div>
                     <div className="flex items-center mt-1">
                       <Clock className="h-4 w-4 mr-1.5 text-slate-400" />
                       <span>{format(call.startTime, 'h:mm a')} - {format(call.endTime, 'h:mm a')}</span>
                     </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-10 bg-white rounded-lg shadow-sm border border-slate-100">
              <Calendar className="mx-auto h-12 w-12 text-slate-300" />
              <h3 className="mt-2 text-sm font-medium text-slate-700">No upcoming calls</h3>
              <p className="mt-1 text-sm text-slate-500">Schedule calls with at-risk clients from their cards.</p>
            </div>
          )}
        </div>
      </main>
      
      {showCheckInWidget && (
        <ClientCheckInWidget onClose={() => setShowCheckInWidget(false)} />
      )}
      
      {showTestimonialWidget && (
        <TestimonialCollectionWidget onClose={() => setShowTestimonialWidget(false)} />
      )}

      {/* Overlay for unpaid users, starts below the navbar */}
      {!isPaid && (
        <div
          className="fixed left-0 right-0 bottom-0 z-40 flex items-center justify-center"
          style={{
            top: '64px', // Adjust this to match your Navbar height (e.g., 64px)
            backdropFilter: 'blur(8px)',
            background: 'rgba(255,255,255,0.6)',
            pointerEvents: 'auto',
          }}
        >
          <div className="bg-white p-8 rounded-xl shadow-lg max-w-md text-center z-60">
            <h2 className="text-2xl font-bold mb-4">Unlock the Dashboard</h2>
            <p className="mb-6 text-slate-600">
              Upgrade to access all Testy dashboard features and start collecting powerful testimonials!
            </p>
            <Button
              onClick={async () => {
                const res = await fetch('/api/create-checkout-session', {
                  method: 'POST',
                  headers: { 'Content-Type': 'application/json' },
                  body: JSON.stringify({ user_id: user.id, email: user.email }),
                });
                if (!res.ok) {
                  alert("Failed to create checkout session. Please try again later.");
                  return;
                }
                const { url } = await res.json();
                window.location.href = url;
              }}
              className="bg-black hover:bg-slate-800 text-white rounded-full px-6 py-2 font-semibold shadow transition"
            >
              Upgrade Now
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ClientRetention;
