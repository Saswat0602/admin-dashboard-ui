'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { useModuleStore } from '@/stores/moduleStore';
import { useUIStore } from '@/stores/uiStore';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Separator } from '@/components/ui/separator';
import { ChevronLeft, ChevronRight, LayoutDashboard } from 'lucide-react';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { normalizeRoute } from '@/lib/routes';

export function Sidebar() {
  const pathname = usePathname();
  const { getEnabledModules } = useModuleStore();
  const { sidebarCollapsed, toggleSidebar } = useUIStore();

  const enabledModules = getEnabledModules();

  return (
    <aside
      className={cn(
        'flex flex-col border-r bg-linear-to-b from-background to-muted/20 backdrop-blur-sm transition-all duration-300',
        sidebarCollapsed ? 'w-16' : 'w-64'
      )}
    >
      <div className="flex h-16 items-center justify-between px-4">
        {!sidebarCollapsed && (
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-linear-to-br from-primary to-primary/60">
              <LayoutDashboard className="h-4 w-4 text-primary-foreground" />
            </div>
            <h1 className="text-lg font-bold bg-linear-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
              Taskosaur
            </h1>
          </div>
        )}
        <Button
          variant="ghost"
          size="icon"
          onClick={toggleSidebar}
          className={cn("ml-auto hover:bg-muted", sidebarCollapsed && "ml-0")}
        >
          {sidebarCollapsed ? (
            <ChevronRight className="h-4 w-4" />
          ) : (
            <ChevronLeft className="h-4 w-4" />
          )}
        </Button>
      </div>
      <Separator className="bg-border/50" />
      <ScrollArea className="flex-1 px-3 py-4">
        <TooltipProvider delayDuration={0}>
          <nav className="flex flex-col gap-1">
            {enabledModules.map((module) => {
              const Icon = module.icon;
              const target = normalizeRoute(module.route);
              const isActive = pathname === target || (module.route !== '' && pathname.startsWith(target));

              const NavButton = (
                <Link key={module.id} href={target} className="w-full">
                  <Button
                    variant={isActive ? 'secondary' : 'ghost'}
                    className={cn(
                      'w-full justify-start gap-3 transition-all',
                      sidebarCollapsed ? 'justify-center px-2' : 'px-3',
                      isActive && 'bg-primary/10 text-primary hover:bg-primary/20 font-medium shadow-sm'
                    )}
                  >
                    <Icon className={cn("h-5 w-5 shrink-0", isActive && "text-primary")} />
                    {!sidebarCollapsed && (
                      <span className="flex-1 text-left">{module.name}</span>
                    )}
                    {isActive && !sidebarCollapsed && (
                      <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                    )}
                  </Button>
                </Link>
              );

              if (sidebarCollapsed) {
                return (
                  <Tooltip key={module.id}>
                    <TooltipTrigger asChild>
                      {NavButton}
                    </TooltipTrigger>
                    <TooltipContent side="right">
                      <p>{module.name}</p>
                    </TooltipContent>
                  </Tooltip>
                );
              }

              return NavButton;
            })}
          </nav>
        </TooltipProvider>
      </ScrollArea>
    </aside>
  );
}
