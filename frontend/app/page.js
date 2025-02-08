import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <Tabs defaultValue="account" className="w-[400px]">
        <TabsList>
        <TabsTrigger value="account">Students</TabsTrigger>
        <TabsTrigger value="password">Organizations</TabsTrigger>
      </TabsList>
      <TabsContent value="account">
        <Input type="email" placeholder="Email" />
        <Input type="password" placeholder="Password" />
      </TabsContent>

      <div>
        <TabsContent value="password">Change your password here.</TabsContent>
      </div>

      </Tabs>
    
    </div>
  );
}
