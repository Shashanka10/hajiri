"use client";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  return (
    <div className="flex flex-col items-center space-y-28 z-20">
      <div className="space-y-6 text-center">
        <h1 className="text-7xl font-bold">Welcome</h1>
        <h2 className="text-7xl font-bold">To</h2>
        <h3 className="text-7xl font-bold">HAJIRI</h3>
      </div>
      <div>
        <Button
          className="w-[250px] h-14 " 
          onClick={() => router.push("/login")}
        >Login Page</Button>
      </div>
    </div>
  );
}
