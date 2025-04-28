
import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import ClientHealthCard from '@/components/ClientHealthCard';
import { TrendingDown, TrendingUp, AlertTriangle, Users, MessageSquare } from 'lucide-react';
import ClientCheckInWidget from '@/components/ClientCheckInWidget';
import TestimonialCollectionWidget from '@/components/TestimonialCollectionWidget';

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

const ClientRetention = () => {
  const [showCheckInWidget, setShowCheckInWidget] = useState(false);
  const [showTestimonialWidget, setShowTestimonialWidget] = useState(false);
  
  // Calculate summary metrics
  const atRiskClients = mockClients.filter(client => client.riskStatus === 'high').length;
  const avgHealthScore = Math.round(
    mockClients.reduce((sum, client) => sum + client.healthScore, 0) / mockClients.length
  );
  const totalTestimonials = mockClients.reduce((sum, client) => sum + client.testimonials, 0);
  
  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />
      
      <main className="container py-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold mb-2">Client Retention Dashboard</h1>
            <p className="text-slate-600">Monitor client health and collect valuable testimonials</p>
          </div>
          <div className="mt-4 md:mt-0 flex gap-3">
            <Button 
              onClick={() => setShowCheckInWidget(true)}
              className="button-gradient"
            >
              <MessageSquare className="mr-2 h-4 w-4" />
              Preview Check-In Widget
            </Button>
            <Button 
              onClick={() => setShowTestimonialWidget(true)}
              variant="outline"
            >
              Preview Testimonial Widget
            </Button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-slate-500">Overall Health Score</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-end">
                <p className="text-3xl font-bold">{avgHealthScore}%</p>
                <p className="ml-2 flex items-center text-xs text-green-500">
                  <TrendingUp className="h-4 w-4 mr-1" />
                  <span>+5% this month</span>
                </p>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-slate-500">Clients At Risk</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-end">
                <p className="text-3xl font-bold">{atRiskClients}</p>
                <p className="ml-2 flex items-center text-xs text-red-500">
                  <AlertTriangle className="h-4 w-4 mr-1" />
                  <span>Needs attention</span>
                </p>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-slate-500">Check-In Rate</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-end">
                <p className="text-3xl font-bold">78%</p>
                <p className="ml-2 flex items-center text-xs text-amber-500">
                  <TrendingDown className="h-4 w-4 mr-1" />
                  <span>-3% this month</span>
                </p>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-slate-500">Total Testimonials</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-end">
                <p className="text-3xl font-bold">{totalTestimonials}</p>
                <p className="ml-2 flex items-center text-xs text-green-500">
                  <TrendingUp className="h-4 w-4 mr-1" />
                  <span>+2 this week</span>
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
        
        <Tabs defaultValue="all-clients" className="mb-8">
          <TabsList>
            <TabsTrigger value="all-clients">All Clients</TabsTrigger>
            <TabsTrigger value="at-risk">At Risk</TabsTrigger>
            <TabsTrigger value="healthy">Healthy</TabsTrigger>
          </TabsList>
          
          <TabsContent value="all-clients">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
              {mockClients.map((client) => (
                <ClientHealthCard 
                  key={client.id}
                  clientName={client.name}
                  clientEmail={client.email}
                  healthScore={client.healthScore}
                  lastCheckIn={client.lastCheckIn}
                  missedCheckIns={client.missedCheckIns}
                  sentiment={client.sentiment}
                  riskStatus={client.riskStatus}
                />
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="at-risk">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
              {mockClients
                .filter(client => client.riskStatus === 'high' || client.riskStatus === 'medium')
                .map((client) => (
                  <ClientHealthCard 
                    key={client.id}
                    clientName={client.name}
                    clientEmail={client.email}
                    healthScore={client.healthScore}
                    lastCheckIn={client.lastCheckIn}
                    missedCheckIns={client.missedCheckIns}
                    sentiment={client.sentiment}
                    riskStatus={client.riskStatus}
                  />
                ))}
            </div>
          </TabsContent>
          
          <TabsContent value="healthy">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
              {mockClients
                .filter(client => client.riskStatus === 'low')
                .map((client) => (
                  <ClientHealthCard 
                    key={client.id}
                    clientName={client.name}
                    clientEmail={client.email}
                    healthScore={client.healthScore}
                    lastCheckIn={client.lastCheckIn}
                    missedCheckIns={client.missedCheckIns}
                    sentiment={client.sentiment}
                    riskStatus={client.riskStatus}
                  />
                ))}
            </div>
          </TabsContent>
        </Tabs>
        
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Client Check-In Schedule</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="bg-slate-100 p-6 rounded-md text-center">
              <Users className="h-12 w-12 mx-auto mb-3 text-slate-400" />
              <h3 className="text-lg font-medium mb-1">Set up automated check-ins</h3>
              <p className="text-slate-500 mb-4">Schedule regular check-ins with your clients to monitor their satisfaction</p>
              <Button>Configure Check-In Schedule</Button>
            </div>
          </CardContent>
        </Card>
      </main>
      
      {showCheckInWidget && (
        <ClientCheckInWidget onClose={() => setShowCheckInWidget(false)} />
      )}
      
      {showTestimonialWidget && (
        <TestimonialCollectionWidget onClose={() => setShowTestimonialWidget(false)} />
      )}
    </div>
  );
};

export default ClientRetention;
