import { ChevronLeft } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import useGlobalStore from '@/store/globalStore';

export function SidebarToggle() {
  const { isOpen, toggleSidebar } = useGlobalStore((state) => state.sidebar);

  return (
    <div className="invisible lg:visible absolute top-[12px] -right-[16px] z-20">
      <Button onClick={toggleSidebar} className="w-8 h-8 rounded-md" variant="outline" size="icon">
        <ChevronLeft
          className={cn(
            'h-4 w-4 transition-transform ease-in-out duration-700',
            isOpen === false ? 'rotate-180' : 'rotate-0',
          )}
        />
      </Button>
    </div>
  );
}
