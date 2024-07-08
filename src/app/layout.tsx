import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import Image from "next/image";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Attendance Tracker",
  description: "Attendance tracking app created using nextjs",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex flex-col items-center justify-center min-h-screen bg-[#BE75F6]">
          <div className="absolute top-0 bottom-0 left-0">
            <Image
              className="w-[350px] h-full"
              src="/shape1.png"
              alt="bgshape"
              width={500}
              height={500}
              priority= {true}
            />
          </div>
          <div className="absolute bottom-0 right-0">
            <Image
              className="w-full"
              src="/circ.png"
              alt="bgshape"
              width={500}
              height={500}
            />
          </div>
          <div className="absolute top-0 left-64">
            <Image
              className="w-full"
              src="/circle1.png"
              alt="bgshape"
              width={500}
              height={500}
            />
          </div>
          {children}
          <Toaster />
        </div>
      </body>
    </html>
  );
}
