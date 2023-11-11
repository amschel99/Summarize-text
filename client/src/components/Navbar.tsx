import { FC } from "react";
import ThemeToggle from "./ThemeToggle";

interface NavbarProps {}

const Navbar: FC<NavbarProps> = ({}) => {
  return (
    <div className="flex items-center h-16 px-4">
      <div className="flex items-center ml-auto space-x-4">
        <ThemeToggle />
        {/* <UserButton afterSignOutUrl="/" /> */}
      </div>
    </div>
  );
};

export default Navbar;
