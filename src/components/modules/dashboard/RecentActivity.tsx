'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { useOrders } from '@/hooks/queries/useOrders';
import { formatCurrency, formatRelativeDate } from '@/lib/formatters';
import { LoadingState } from '@/components/shared/LoadingState';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

export function RecentActivity() {
  const { data: orders, isLoading } = useOrders();

  if (isLoading) {
    return (
      <Card className="shadow-sm">
        <CardHeader>
          <CardTitle>Recent Applications</CardTitle>
          <CardDescription>Your most recently updated applications</CardDescription>
        </CardHeader>
        <CardContent>
          <LoadingState />
        </CardContent>
      </Card>
    );
  }

  const recentOrders = orders?.slice(0, 4) ?? [];

  return (
    <Card className="shadow-sm">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-4">
        <div>
          <CardTitle>Recent Orders</CardTitle>
          <CardDescription className="mt-1.5">
            Your most recently updated orders
          </CardDescription>
        </div>
        <Link href="/dashboard/orders">
          <Button variant="ghost" size="sm" className="gap-1">
            View All
            <ArrowRight className="h-3.5 w-3.5" />
          </Button>
        </Link>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          {recentOrders.map((order, index) => (
            <div
              key={order.id}
              className="flex items-center gap-4 rounded-lg border bg-card p-4 transition-colors hover:bg-muted/50"
            >
              <Avatar className="h-10 w-10 border-2 border-background shadow-sm">
                <AvatarImage src={`https://avatar.vercel.sh/${order.userEmail}`} />
                <AvatarFallback className="bg-linear-to-br from-primary/20 to-primary/10 text-primary font-semibold">
                  {order.userName.charAt(0)}
                </AvatarFallback>
              </Avatar>
              <div className="flex-1 space-y-1">
                <p className="text-sm font-medium leading-none">
                  {order.userName}
                </p>
                <p className="text-xs text-muted-foreground">
                  Updated {formatRelativeDate(order.createdAt)}
                </p>
              </div>
              <div className="flex items-center gap-3">
                <Badge
                  variant={
                    order.status === 'delivered'
                      ? 'default'
                      : order.status === 'cancelled'
                        ? 'destructive'
                        : 'secondary'
                  }
                  className="font-medium"
                >
                  {order.status}
                </Badge>
                <div className="text-sm font-semibold">{formatCurrency(order.total)}</div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
