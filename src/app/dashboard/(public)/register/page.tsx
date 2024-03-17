"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import RegisterFormPrivate from "@/app/dashboard/(public)/register/_components/RegisterFormPrivate";
import RegisterStepperPrivate from "@/app/dashboard/(public)/register/_components/RegisterStepperPrivate";
import { Separator } from "@/components/ui/separator";
import { UserPlusIcon } from "lucide-react";
import { useState } from "react";

export default function RegisterPage() {
  const [step, setStep] = useState(1);

  return (
    <>
      <Tabs defaultValue="private">
        <div className="flex min-h-screen flex-col bg-gray-50 sm:flex-row">
          <div className="sm:p-18 flex w-full flex-col items-center justify-center bg-gradient-to-br from-orange-400 to-rose-600 p-14 text-white sm:w-2/5">
            <Image
              src="/logo-white.svg"
              alt="Signup cover image"
              width={150}
              height={150}
              className="my-10"
            />
            <h1>Urban Hunt</h1>
            <h6 className="italic">«Join the community of hunters»</h6>
            <Separator className="mt-6" />
            <div className="mt-4 flex items-center justify-center">
              <span className="mr-1 text-base">Do you have an account?</span>
              <Button asChild variant={"link"} className=" text-white">
                <Link href="/dashboard/login">Login</Link>
              </Button>
            </div>
          </div>
          <div className="flex flex-col justify-center">
            <RegisterStepperPrivate step={step} />
          </div>
          {/* Right Panel */}
          <div className="flex flex-1 flex-col justify-center">
            <div className="mx-auto flex w-full max-w-md flex-col items-center rounded-lg border border-gray-300 bg-white p-6 shadow-lg">
              <div className="mx-auto w-full max-w-md">
                <div className="mb-6 flex h-fit w-full flex-col">
                  <h2>Join our comminuty</h2>
                  <p>Please enter your information to create an account</p>
                </div>
                {/* <TabsList className="w-full mb-6">
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
                </TabsList> */}
                {/* <TabsContent value="private" className="w-full"> */}
                <RegisterFormPrivate step={step} setStep={setStep} />
                {/* </TabsContent> */}
                {/* <TabsContent value="agent" className="w-full">
                  <RegisterFormPrivate step={step} setStep={setStep} />
                </TabsContent> */}
              </div>
            </div>
          </div>
        </div>
      </Tabs>
    </>
  );
}
