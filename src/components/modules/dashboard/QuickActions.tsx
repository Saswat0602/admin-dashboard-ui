'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Users, Package, FileText, BarChart3 } from 'lucide-react';
import Link from 'next/link';

const quickActions = [
  {
    title: 'New Application',
    description: 'Create a new app',
    icon: Package,
    href: '/dashboard/products/new',
    color: 'from-blue-500/10 to-blue-500/5',
  },
  {
    title: 'New Function',
    description: 'Add a function',
    icon: FileText,
    href: '/dashboard/content/posts/new',
    color: 'from-amber-500/10 to-amber-500/5',
  },
  {
    title: 'LLM Config',
    description: 'Configure AI models',
    icon: Users,
    href: '/dashboard/users/new',
    color: 'from-cyan-500/10 to-cyan-500/5',
  },
  {
    title: 'View Analytics',
    description: 'Check insights',
    icon: BarChart3,
    href: '/dashboard/analytics',
    color: 'from-violet-500/10 to-violet-500/5',
  },
];

export function QuickActions() {
  return (
    <Card className="shadow-sm">
      <CardHeader>
        <CardTitle>Quick Actions</CardTitle>
        <CardDescription className="mt-1.5">
          Common tasks and shortcuts
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid gap-3">
          {quickActions.map((action) => (
            <Link key={action.title} href={action.href}>
              <div className={`group relative overflow-hidden rounded-lg border bg-linear-to-br ${action.color} p-4 transition-all hover:shadow-md hover:border-primary/50`}>
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-background/50 backdrop-blur-sm border">
                    <action.icon className="h-5 w-5 text-foreground" />
                  </div>
                  <div className="flex-1">
                    <div className="font-semibold text-sm">{action.title}</div>
                    <div className="text-xs text-muted-foreground">
                      {action.description}
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
