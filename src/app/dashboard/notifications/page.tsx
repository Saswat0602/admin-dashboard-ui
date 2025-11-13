'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useNotifications } from '@/hooks/queries/useNotifications';
import { Badge } from '@/components/ui/badge';
import { formatRelativeDate } from '@/lib/formatters';
import { LoadingState } from '@/components/shared/LoadingState';
import { Bell } from 'lucide-react';
import { EmptyState } from '@/components/shared/EmptyState';

export default function NotificationsPage() {
  const { data: notifications, isLoading } = useNotifications();

  if (isLoading) {
    return <LoadingState message="Loading notifications..." />;
  }

  const unreadNotifications = notifications?.filter((n) => !n.read) ?? [];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Notifications</h1>
          <p className="text-muted-foreground">
            Stay updated with your latest activities
          </p>
        </div>
        {unreadNotifications.length > 0 && (
          <Badge>{unreadNotifications.length} unread</Badge>
        )}
      </div>

      <Card>
        <CardHeader>
          <CardTitle>All Notifications</CardTitle>
        </CardHeader>
        <CardContent>
          {notifications && notifications.length > 0 ? (
            <div className="space-y-4">
              {notifications.map((notification) => (
                <div
                  key={notification.id}
                  className={`flex items-start gap-4 rounded-lg border p-4 ${
                    !notification.read ? 'bg-muted/50' : ''
                  }`}
                >
                  <Bell className="h-5 w-5 text-muted-foreground" />
                  <div className="flex-1 space-y-1">
                    <p className="font-medium">{notification.title}</p>
                    <p className="text-sm text-muted-foreground">
                      {notification.message}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {formatRelativeDate(notification.createdAt)}
                    </p>
                  </div>
                  {!notification.read && (
                    <Badge variant="default">New</Badge>
                  )}
                </div>
              ))}
            </div>
          ) : (
            <EmptyState
              title="No notifications"
              description="You're all caught up! No new notifications."
            />
          )}
        </CardContent>
      </Card>
    </div>
  );
}
