import { Link } from 'react-router-dom';

import { SidebarMenu } from '@layout/MainLayout/Sidebar/SidebarMenu';
import { SidebarToggle } from '@layout/MainLayout/Sidebar/SidebarToggle';
import { Button } from '@shad/button';
import { PanelsTopLeft } from 'lucide-react';

import { cn } from '@/lib/utils';
import useGlobalStore from '@/store/globalStore';

const Sidebar = () => {
  const { isOpen } = useGlobalStore((state) => state.sidebar);

  return (
    <aside
      className={cn(
        'fixed top-0 left-0 z-20 h-screen max-h-screen -translate-x-full lg:translate-x-0 transition-[width] ease-in-out duration-300',
        !isOpen ? 'w-[90px]' : 'w-72',
      )}
    >
      <SidebarToggle />
      <div className="relative flex flex-col h-full px-3 py-4 overflow-y-auto shadow-md dark:shadow-secondary">
        <Button
          className={cn(
            'transition-transform ease-in-out duration-300 mb-1 justify-start',
            !isOpen ? 'translate-x-0' : 'translate-x-1',
          )}
          variant="link"
          asChild
        >
          <Link to="/dashboard/home" className="flex items-center justify-start gap-2">
            <PanelsTopLeft className="w-6 h-6 mr-1" />
            <h1
              className={cn(
                'font-bold text-lg whitespace-nowrap transition-[transform,opacity,display] ease-in-out duration-300',
                isOpen ? 'translate-x-0 opacity-100' : '-translate-x-96 opacity-0 hidden',
              )}
            >
              Brand
            </h1>
          </Link>
        </Button>
        <SidebarMenu isOpen={isOpen} />
      </div>
    </aside>
  );
};
export default Sidebar;
