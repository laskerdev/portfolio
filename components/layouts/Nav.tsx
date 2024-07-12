"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { menuLinks } from "@/constants/navigations";

const Nav = () => {
  const pathname = usePathname();

  return (
    <nav className="flex gap-6">
      {menuLinks.map((link) => {
        return (
          <Link
            key={link.name}
            href={link.path}
            className={`${link.path === pathname && "text-accent border-b-2 border-accent"} 
            capitalize font-medium hover:text-accent-hover transition-all`}
          >
            {link.name}
          </Link>
        )
      })}
    </nav>
  )
}

export default Nav;