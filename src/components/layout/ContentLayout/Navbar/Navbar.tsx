import { UserNav } from '@layout/ContentLayout/Navbar/UserNav';
import { SheetMenu } from '@layout/MainLayout/Sidebar/SheetMenu';
import { ModeToggle } from '@shad/mode-toggle';

export function Navbar() {
  return (
    <header className="sticky top-0 z-10 w-full ">
      <div className="flex items-center mx-4 sm:mx-8 h-14">
        <div className="flex items-center space-x-4 lg:space-x-0">
          <SheetMenu />
        </div>
        <div className="flex items-center justify-end flex-1 space-x-2">
          <ModeToggle />
          <UserNav />
        </div>
      </div>
    </header>
  );
}

export default Navbar;
