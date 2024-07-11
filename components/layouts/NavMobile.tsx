"use client";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { CiMenuFries } from "react-icons/ci";
import { menuLinks } from "@/constants/Navigations";


const NavMobile = () => {
  const pathname = usePathname();

  return (
    <Sheet>
      <SheetTrigger className="flex justify-center items-center">
        <CiMenuFries className="text-[32px] text-accent" />
      </SheetTrigger>
      <SheetContent className="flex flex-col">
        <div className="my-20 text-center">
          <h1 className="text-2xl font-semibold one1pm-logo">
            <span className="text-accent">11PM.</span>dev
          </h1>
        </div>
        <nav className="flex flex-col justify-center items-center gap-8">
          {menuLinks.map((link, index) => {
            return (
              <Link
                key={index}
                className={`${link.path === pathname && "text-accent border-b-2 border-accent"} capitalize text-xl hover:text-accent-hover transition-all`}
                href={link.path}
              >
                {link.name}
              </Link>
            )
          })}
        </nav>
      </SheetContent>
    </Sheet>
  )
}

export default NavMobile;