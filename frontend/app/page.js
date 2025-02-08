import { LoginForm } from "@/components/login-form";
import { GalleryVerticalEnd } from "lucide-react";

export default function Home() {
  return ( 
    <div className="grid min-h-svh lg:grid-cols-2">
    <div className="flex flex-col gap-4 p-6 md:p-10">
      <div className="flex justify-center gap-2 md:justify-start">
        <a href="#" className="flex items-center gap-2 font-medium">
          <div className="flex h-6 w-6 items-center justify-center rounded-md bg-primary text-primary-foreground">
            <GalleryVerticalEnd className="size-4" />
          </div>
          Opportunify
        </a>
      </div>
      <div className="flex flex-1 items-center justify-center">
        <div className="w-full max-w-xs">
          <LoginForm />
        </div>
      </div>
    </div>
    <div className="relative items-center hidden bg-[#e7e9ec] lg:block">
      <img
        src="/Opportunify.png"
        alt="Image"
        className="absolute inset-0 h-250 w-full object-cover bg-[#e7e9ec] top[-60px]"
      />
    </div>
  </div>
  );
}
