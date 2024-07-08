import React from "react";
import Signup from "./components/sign-up";
import Image from "next/image";

export default function SignupPage() {
  return (
    <div className="bg-purple-800 flex justify-between items-center z-20 shadow-xl px-20 py-2 rounded-3xl">
      <div>
        <Image
          className="w-full object-contain"
          src="/signup.png"
          alt="bgshape"
          width={500}
          height={500}
        />
      </div>
      <div className="bg-purple-950 w-[500px] p-10 rounded-3xl shadow-lg">
        <Signup />
      </div>
    </div>
  );
}
