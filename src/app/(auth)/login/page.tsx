import React from "react";
import Login from "./components/sign-in";
import Image from "next/image";

export default function LoginPage() {
  return (
    <div className="bg-purple-800 flex justify-between items-center z-20 shadow-xl px-20 py-6 rounded-3xl space-x-24">
      <div>
        <Image
          className="w-full object-contain"
          src="/login.png"
          alt="bgshape"
          width={500}
          height={500}
        />
      </div>
      <div className="bg-purple-950 w-[450px] p-10 rounded-3xl shadow-lg">
        <Login />
      </div>
    </div>
  );
}
