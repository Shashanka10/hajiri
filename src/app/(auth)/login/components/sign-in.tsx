"use client";
import { useRouter } from "next/navigation";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa6";
import Link from "next/link";
import { signInSchema, signInType } from "@/lib/schema/signin";
import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { useToast } from "@/components/ui/use-toast";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { handleGithubLogin, handleGoogleLogin } from "@/action";
import { useState } from "react";
import { Eye, EyeOffIcon } from "lucide-react";

export default function Login() {
  const router = useRouter();
  const { toast } = useToast();
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const form = useForm<signInType>({
    resolver: zodResolver(signInSchema),
  });

  const onSubmit: SubmitHandler<signInType> = (data)=> {
    console.log(data);
    toast({
      title: "Login successful!!",
      description: "You have been logged in succcessfully.",
    });
    router.push("/dashboard");
  };
  return (
    <div className="space-y-5">
      <div>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <div className="space-y-3">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem className="space-y-1">
                    <FormLabel className="text-white">Email</FormLabel>
                    <FormControl>
                      <Input
                        className="h-12"
                        type="email"
                        placeholder="enter your email"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage className="text-xs" />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem className="space-y-1">
                    <FormLabel className="text-white">Password</FormLabel>
                    <FormControl>
                      <div className="flex relative items-center">
                      <Input
                        className="h-12"
                        type={showPassword? "text": "password"}
                        placeholder="enter your password"
                        {...field}
                      />
                      <button 
                        className="flex items-center"
                        onClick={()=> setShowPassword(!showPassword)}
                      >
                      {showPassword? 
                        (<EyeOffIcon className="absolute right-2 text-gray-400"/>           
                        ): (
                          <Eye className="absolute right-2 text-gray-400"/>
                        )}
                      </button>
                      </div>
                    </FormControl>
                    <FormMessage className="text-xs" />
                  </FormItem>
                )}
              />
            </div>
            <Button
              type="submit"
              className="w-full bg-purple-700 transition-all delay-100 p-6 rounded-xl hover:bg-purple-500"
            >
              SignIn
            </Button>
          </form>
        </Form>
      </div>
      <div className="flex justify-center text-white gap-3">
        <h2>Don't have an account?</h2>
        <Link
          href="/signup"
          className="text-purple-500 font-semibold transition-all cursor-pointer hover:text-white"
        >
          SignUp
        </Link>
      </div>
      <div className="space-y-3">
        <div>
        <form action={handleGoogleLogin}>
          <Button
            type="submit"
            className="w-full bg-purple-700 transition-all delay-100 gap-3 p-6 rounded-xl hover:bg-purple-500"
          >
            Signin with Google
            <FcGoogle className="items-center w-5 h-5" />
          </Button>
          </form>
        </div>
        <div>
          <form action={handleGithubLogin}>
            <Button 
              type="submit"
              className="w-full bg-purple-700 transition-all delay-100 gap-3 p-6 rounded-xl hover:bg-purple-500">
              Signin with Github
              <FaGithub className="items-center w-5 h-5" />
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}
