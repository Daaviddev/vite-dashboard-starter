import { Outlet } from 'react-router-dom';

import Sidebar from '@layout/MainLayout/Sidebar/Sidebar';

import { ThemeProvider } from '@/common/themes/theme-provider';
import { cn } from '@/lib/utils';
import useGlobalStore from '@/store/globalStore';

const MainLayout = () => {
  const { isOpen } = useGlobalStore((state) => state.sidebar);

  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div className="flex h-screen bg-background/95 shadow backdrop-blur supports-[backdrop-filter]:bg-background/60 dark:shadow-secondary">
        <Sidebar />
        <main
          className={cn(
            'flex-1 overflow-auto bg-zinc-50 dark:bg-zinc-900 transition-[margin-left] ease-in-out duration-300',
            !isOpen ? 'lg:ml-[90px]' : 'lg:ml-72',
          )}
        >
          <Outlet />
        </main>
      </div>
    </ThemeProvider>
  );
};

export default MainLayout;
