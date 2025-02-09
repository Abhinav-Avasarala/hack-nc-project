'use client';

import { useRouter } from "next/navigation";
import { useState } from "react";
import axios from 'axios';
import { Button } from "@/components/ui/button"
import { InterestSelector } from "@/components/ui/InterestSelector";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from "@/components/ui/tabs"




const signup = () => {

    const router = useRouter();
    
    const [name, setName] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [major, setMajor] = useState('');
    const [career_goal, setCareerGoal] = useState('');

    const handleSignUpUser = async (e) => {
        e.preventDefault();
        try {
          const response = await axios.post(
            'http://localhost:3000/api/register',
            { name, username, email, password, major, career_goal }
          );
          
          if(response.status == 201) {
            router.push("/dashboard");
          } else {
            console.log("Error on api request for signup: " + response.status);
          }
        } catch (err){
          console.log("Error on signup:" + err);
        }
        
      }
    return ( 
        <div className="flex flex-col items-center justify-center min-h-screen py-10 overflow-y-auto">
            <Tabs defaultValue="account" className="w-[400px]">
            <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="account">Students</TabsTrigger>
            <TabsTrigger value="password">Organizations</TabsTrigger>
            </TabsList>
            <TabsContent value="account">
            <Card>
                <CardHeader>
                <CardTitle>Students</CardTitle>
                <CardDescription>
                    If you are a student looking to explore opportunites near you, fill out this form
                </CardDescription>
                </CardHeader>
                <CardContent className="space-y-2">
                <div className="space-y-1">
                    <Label htmlFor="name">Name</Label>
                    <Input id="name" defaultValue="" onChange = {(e) => setName(e.target.value)}/>
                </div>
                <div className="space-y-1">
                    <Label htmlFor="username">Username</Label>
                    <Input id="username"  defaultValue="" onChange = {(e) => setUsername(e.target.value)} />
                </div>
                <div className="space-y-1">
                    <Label htmlFor="username">Password</Label>
                    <Input id="username" type = "password" defaultValue="" onChange = {(e) => setPassword(e.target.value)}/>
                </div>
                <div className="space-y-1">
                    <Label htmlFor="username">Email</Label>
                    <Input id="username" defaultValue="" onChange = {(e) => setEmail(e.target.value)}/>
                </div>

                <div className="space-y-1">
                    <Label htmlFor="username">Major</Label>
                    <Input id="username" defaultValue="" onChange = {(e) => setMajor(e.target.value)}/>
                </div>

                <div className="space-y-1">
                    <Label htmlFor="username">Career Goal</Label>
                    <Input id="username" defaultValue="" onChange = {(e) => setCareerGoal(e.target.value)}/>
                </div>

                <div className="space-y-1">
                    <InterestSelector />
                </div>


                </CardContent>
                <CardFooter>
                <Button onClick={ handleSignUpUser }> 
                    Save changes
                </Button>
                </CardFooter>
            </Card>
            </TabsContent>
            <TabsContent value="password">
            <Card>
                <CardHeader>
                <CardTitle>Organizations</CardTitle>
                <CardDescription>
                    If you are a club/organization looking to get reach potential members, fill out this form
                </CardDescription>
                </CardHeader>
                <CardContent className="space-y-2">
                <div className="space-y-1">
                    <Label htmlFor="current">Organization Name</Label>
                    <Input id="username" defaultValue="" />
                </div>
                <div className="space-y-1">
                    <Label htmlFor="new">Email</Label>
                    <Input id="username" defaultValue="" />
                </div>

                <div className="space-y-1">
                    <Label htmlFor="new">Password</Label>
                    <Input id="new" type="password" />
                </div>

                
                <div className="space-y-1">
                    <Label htmlFor="new">Website</Label>
                    <Input id="username" defaultValue="" />
                </div>

                <div className="space-y-1">
                    <Label htmlFor="new">Type</Label>
                    <Input id="username" defaultValue="" />
                </div>

                <div className="space-y-1">
                    <Label htmlFor="new">Description</Label>
                    <Input id="username" defaultValue="" />
                </div>
                </CardContent>
                <CardFooter>
                <Button>Save password</Button>
                </CardFooter>
            </Card>
            </TabsContent>
        </Tabs>
        </div>

     );
}
 
export default signup;