"use client";
import { handleLogout } from "@/action";
import {
  GraduationCap,
  Hand,
  LayoutDashboard,
  LogOut,
  Settings,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";
import { Button } from "./ui/button";
import { usePathname } from 'next/navigation'

export default function SideNav() {

  const router = useRouter();
  const pathname = usePathname();

  const menuList = [
    {
      id: 1,
      name: "Dashboard",
      icon: LayoutDashboard,
      path: "/dashboard",
    },
    {
      id: 2,
      name: "Students",
      icon: GraduationCap,
      path: "/dashboard/students",
    },
    {
      id: 3,
      name: "Attendance",
      icon: Hand,
      path: "/dashboard/attendance",
    },
    {
      id: 4,
      name: "Settings",
      icon: Settings,
      path: "/dashboard/settings",
    },
  ];
  return (
    <div className="bg-purple-900 rounded-tl-2xl w-[280px] min-h-screen shadow-lg p-4 space-y-6">
      <div
        className="flex items-center space-x-2 cursor-pointer"
        onClick={() => router.push("/dashboard")}
      >
        <Image src="/present_sir.png" alt="logo" width={50} height={50} />
        <h1 className="text-lg font-bold font-sans tracking-wider text-white">
          HAJIRI
        </h1>
      </div>
      <hr className="border-gray-300" />
      <div>
        {menuList.map((menu, index) => (
          <Link
            key={menu.id}
            href={menu.path}
            className={`flex cursor-pointer text-base gap-3 p-4 my-2 rounded-xl font-medium text-white hover:bg-purple-500 ${pathname == menu.path? "bg-purple-700": ""}`}
          >
            <menu.icon />
            {menu.name}
          </Link>
        ))}
        <form action={handleLogout}>
          <Button 
            type="submit"
            className="flex justify-start h-14 w-full bg-transparent cursor-pointer text-base gap-3 p-4 my-2 rounded-xl font-medium text-white hover:bg-purple-500">
            <LogOut />
            Logout
          </Button>
        </form>
      </div>
    </div>
  );
}
