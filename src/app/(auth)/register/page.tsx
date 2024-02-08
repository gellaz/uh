"use client";

import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/src/components/ui/tabs";

import { Button } from "@/src/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import RegisterFormPrivate from "@/src/components/RegisterFormPrivate";
import RegisterStepperPrivate from "@/src/components/RegisterStepperPrivate";
import { Separator } from "@/src/components/ui/separator";
import { UserPlus2Icon } from "lucide-react";
import { useState } from "react";

export default function RegisterPage() {
  const [step, setStep] = useState(1);

  return (
    <>
      <Tabs defaultValue="private">
        <div className="flex min-h-screen flex-col bg-gray-50 sm:flex-row">
          {/* Left Panel */}
          <div className="sm:p-18 flex w-full flex-col items-center justify-center bg-gradient-to-br from-orange-400 to-rose-600 p-14 text-white sm:w-2/5">
            <h1 className="mb-4 text-5xl font-bold sm:text-6xl">Sign Up</h1>
            <p className="py-2">as</p>
            <TabsList className="w-full">
              <TabsTrigger
                value="private"
                className="w-full justify-center data-[state=active]:bg-primary data-[state=active]:text-white "
              >
                Private
              </TabsTrigger>
              <TabsTrigger
                value="agent"
                className="w-full justify-center data-[state=active]:bg-primary data-[state=active]:text-white "
              >
                Agent
              </TabsTrigger>
            </TabsList>
            <Image
              src="logo-white.svg"
              alt="Signup cover image"
              width={150}
              height={150}
              className="my-4"
            />
            <h3 className="text-xl font-semibold">Urban Hunt</h3>
            <h4 className="italic">«Join the community of hunters»</h4>
            <Separator className="mt-6" />
            <div className="mt-4 flex items-center justify-center">
              <span className="text-md mr-2 sm:text-base">
                Already have an account?
              </span>
              <Link href="/login">
                <Button
                  variant="link"
                  className="text-md text-white sm:text-base"
                >
                  Login
                </Button>
              </Link>
            </div>
          </div>
          <div className="flex flex-col justify-center">
            <RegisterStepperPrivate step={step} />
          </div>
          {/* Right Panel */}
          <div className="flex flex-1 flex-col justify-center">
            <div className="mx-auto flex w-full max-w-md flex-col items-center rounded-lg border border-gray-300 bg-white p-6 shadow-lg">
              <div className="mx-auto w-full max-w-md">
                <div className="flex justify-center">
                  <UserPlus2Icon size={100} className="mb-4 text-primary" />
                </div>
                <TabsContent value="private" className="w-full">
                  <RegisterFormPrivate step={step} setStep={setStep} />
                </TabsContent>
                <TabsContent value="agent" className="w-full">
                  <RegisterFormPrivate step={step} setStep={setStep} />
                </TabsContent>
              </div>
            </div>
          </div>
        </div>
      </Tabs>
    </>
  );
}
