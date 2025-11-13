'use client';

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { CheckCircle2 } from 'lucide-react';

const systemServices = [
  {
    name: 'API Services',
    status: 'operational',
    description: 'All systems operational',
  },
  {
    name: 'LLM Endpoints',
    status: 'operational',
    description: 'Running smoothly',
  },
];

export function SystemStatus() {
  return (
    <Card className="shadow-sm">
      <CardHeader>
        <CardTitle>System Status</CardTitle>
        <CardDescription className="mt-1.5">
          Current system health
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {systemServices.map((service) => (
            <div key={service.name} className="flex items-center gap-3">
              <div className="flex h-2 w-2 shrink-0">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500"></span>
                </span>
              </div>
              <div className="flex-1">
                <p className="text-sm font-medium leading-none">
                  {service.name}
                </p>
                <p className="text-xs text-muted-foreground mt-1">
                  {service.description}
                </p>
              </div>
              <CheckCircle2 className="h-4 w-4 text-green-600" />
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
