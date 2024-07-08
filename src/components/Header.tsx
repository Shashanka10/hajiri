"use client";
import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { User2Icon } from "lucide-react";
import { useRouter } from "next/navigation";
export default function Header() {
  const router = useRouter();
  return (
    <div className="p-4 shadow-sm bg-purple-800 rounded-tr-2xl z-20">
      <div className="flex justify-end mr-8">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
              <AvatarFallback>SL</AvatarFallback>
            </Avatar>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-[200px] mr-4 bg-purple-500 border border-purple-500">
            <DropdownMenuLabel className="flex justify-center text-lg text-white">
              My Account
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuGroup className="text-white">
              <DropdownMenuItem
                onClick={() => router.push("/profile")}
                className="flex justify-around items-center cursor-pointer text-base"
              >
                Profile
                <User2Icon className="w-4 h-4" />
              </DropdownMenuItem>
            </DropdownMenuGroup>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
}
