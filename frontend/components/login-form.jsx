'use client'
import { useState } from "react";
import axios from 'axios';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";

import { useRouter } from "next/navigation";





export function LoginForm({
  className,
  ...props
}) {
  const router = useRouter();


  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (e) => {
    // e.preventDefault();
    // try {
    //   const response = await axios.post(
    //     'http://localhost:3000/api/login',
    //     { email, password },
    //     { withCredentials: true } 
    //   );
      
    //   if(response.status == 200) {
    //     router.push("/dashboard");
    //   }
    // } catch (err){
    //   console.log("Error:" + err);
    // }
    router.push("/dashboard");

    
  }


  return (
    (<form className={cn("flex flex-col gap-6", className)} {...props}>
      <div className="flex flex-col items-center gap-2 text-center">
        <h1 className="text-2xl font-bold">Login to your account</h1>
        <p className="text-balance text-sm text-muted-foreground">
          Enter your email below to login to your account
        </p>
      </div>
      <div className="grid gap-6">
        <div className="grid gap-2">
          <Label htmlFor="email">Email</Label>
          <Input id="email" type="email" placeholder="m@example.com" required onChange = {(e) => setEmail(e.target.value)}/>
        </div>
        <div className="grid gap-2">
          <div className="flex items-center">
            <Label htmlFor="password">Password</Label>
            <a href="#" className="ml-auto text-sm underline-offset-4 hover:underline">
              Forgot your password?
            </a>
          </div>
          <Input id="password" type="password" required onChange = {(e) => setPassword(e.target.value)}/>
        </div>
        <Button onClick={ handleLogin } type="submit" className="w-full">
          Login
        </Button>
      </div>
      <div className="text-center text-sm">
        Don&apos;t have an account?{" "}
          <a onClick={() => router.push('/signup')} className="underline underline-offset-4">
            Sign up
          </a>

      </div>
    </form>)
  );
}
