"use client";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { signUpSchema, signUpType } from "@/lib/schema/signup";
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
import { useState } from "react";
import { Eye, EyeOffIcon } from "lucide-react";

export default function Signup() {
  const router = useRouter();
  const { toast } = useToast();
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const form = useForm<signUpType>({
    resolver: zodResolver(signUpSchema),
  });

  const onSubmit: SubmitHandler<signUpType> = async(data)=> {
    try {
      const res = await fetch("/api/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        }})

      if(res.status === 400){
        throw new Error("Email already registered")
      }

      if(res.status === 200){
        toast({
          title: "Signup successful!!",
          description: "You have created account succcessfully.",
        });
        router.push("/login");
      }

    } catch (error) {
      console.log(error)
      throw new Error("error occured. Try again!!")
      
    }
  };

  return (
    <div>
      <div className="space-y-5">
        <div>
          <Form {...form}>
            <form 
              onSubmit={form.handleSubmit(onSubmit)} 
              className="space-y-6">
              <div className="space-y-3">
                <div className="flex gap-4">
                  <FormField
                    control={form.control}
                    name="firstname"
                    render={({ field }) => (
                      <FormItem className="space-y-1">
                        <FormLabel className="text-white">First Name</FormLabel>
                        <FormControl>
                          <Input
                            className="h-12"
                            type="text"
                            placeholder="enter your first name"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage className="text-xs" />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="lastname"
                    render={({ field }) => (
                      <FormItem className="space-y-1">
                        <FormLabel className="text-white">Last Name</FormLabel>
                        <FormControl>
                          <Input
                            className="h-12"
                            type="text"
                            placeholder="enter your last name"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage className="text-xs" />
                      </FormItem>
                    )}
                  />
                </div>
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
                  name="dob"
                  render={({ field }) => (
                    <FormItem className="space-y-1">
                      <FormLabel className="text-white">DOB</FormLabel>
                      <FormControl>
                        <Input 
                          className="h-12"
                          type="date" 
                          {...field} />
                      </FormControl>
                      <FormMessage className="text-xs" />
                    </FormItem>
                  )}
                />
                <div className="flex gap-4">
                  <FormField
                    control={form.control}
                    name="password"
                    render={({ field }) => (
                      <FormItem className="space-y-1">
                        <FormLabel className="text-white">Password</FormLabel>
                        <FormControl>
                          <div className="flex items-center relative">
                        <Input
                        className="h-12"
                        type={showPassword? "text": "password"}
                        placeholder="set password"
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
                  <FormField
                    control={form.control}
                    name="confirmpassword"
                    render={({ field }) => (
                      <FormItem className="space-y-1">
                        <FormLabel className="text-white">
                          Confirm Password
                        </FormLabel>
                        <FormControl>
                        <div className="flex items-center relative">
                        <Input
                        className="h-12"
                        type={showPassword? "text": "password"}
                        placeholder="password again"
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
              </div>
              <div className="flex justify-center text-white gap-3">
                <h2>Already have an account?</h2>
                <Link
                  href="/login"
                  className="text-purple-500 font-bold cursor-pointer hover:text-white"
                >
                  LogIn
                </Link>
              </div>
              <Button
                type="submit"
                className="w-full bg-purple-700 transition-all delay-100 p-6 rounded-xl hover:bg-purple-500"
              >
                SignUp
              </Button>
            </form>
          </Form>
        </div>
      </div>
    </div>
  );
}
