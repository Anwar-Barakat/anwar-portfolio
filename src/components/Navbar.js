"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

// icons
import {
  HiHome,
  HiUser,
  HiViewColumns,
  HiRectangleGroup,
  HiChatBubbleBottomCenterText,
  HiEnvelope,
} from 'react-icons/hi2';

// nav data
export const navData = [
  { name: 'home', path: '/', icon: <HiHome /> },
  { name: 'about', path: '/about', icon: <HiUser /> },
  { name: 'services', path: '/services', icon: <HiRectangleGroup /> },
  { name: 'work', path: '/work', icon: <HiViewColumns /> },
  {
    name: 'testimonials',
    path: '/testimonials',
    icon: <HiChatBubbleBottomCenterText />,
  },
  {
    name: 'contact',
    path: '/contact',
    icon: <HiEnvelope />,
  },
];

const Navbar = () => {
  const pathname = usePathname();

  return (
    <nav className="flex flex-col items-center xl:justify-center gap-y-4 fixed h-max bottom-0 mt-auto xl:right-[2%] z-50 top-0 w-full xl:w-16 xl:max-w-md xl:h-screen rounded-full">
      <div className="flex xl:flex-col items-center justify-between xl:justify-center w-full gap-y-10 md:px-40 xl:px-0 h-[80px] bg-white/10 xl:h-max py-8 backdrop-blur-sm text-3xl xl:text-xl font-bold xl:rounded-full">
        {navData.map((link, index) => (
          <Link key={index} href={link.path} className={`${link.path === pathname && 'text-accent'} relative flex items-center group hover:text-accent transition-all duration-300`}>
            <div className="">{link.icon}</div>
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
