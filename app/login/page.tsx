import { Button } from "@/components/ui/button";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import LoginForm from "@/components/LoginForm";
import { Separator } from "@/components/ui/separator";
import { UserCircle2Icon } from "lucide-react";

export default function LoginPage() {
  return (
    <>
      <Head>
        <title>UrbanHunt - Login</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex min-h-screen flex-col bg-gray-50 sm:flex-row">
        {/* Left Panel */}
        <div className="flex w-full flex-col items-center justify-center bg-gradient-to-br from-orange-400 to-rose-600 p-10 text-white sm:w-2/5 sm:p-20">
          <h1 className="mb-4 text-5xl font-bold sm:text-7xl">Sign In</h1>
          <Image
            src="logo-white.svg"
            alt="Login cover image"
            width={150}
            height={150}
            className="my-4 text-white"
            style={{ fill: "#fff !important" }}
          />
          <h3 className="text-xl font-semibold">Urban Hunt</h3>
          <h4 className="italic">«Hunt for the perfect property»</h4>
          <Separator className="mt-6" />
          <div className="mt-4 flex items-center justify-center">
            <span className="text-md mr-2 sm:text-base">No account?</span>
            <Link href="/register">
              <div className="flex justify-center ">
                <Button
                  variant={"link"}
                  className="text-md text-white sm:text-base"
                >
                  Register
                </Button>
              </div>
            </Link>
          </div>
        </div>
        {/* Right Panel */}
        <div className="flex flex-1 flex-col justify-center p-4 sm:p-8 md:p-16 lg:p-24">
          <div className="mx-auto w-full max-w-md rounded-lg border border-gray-300 bg-white p-8 shadow-lg">
            <div className="flex justify-center">
              <UserCircle2Icon size={100} className="mb-4 text-primary" />
            </div>
            <LoginForm />
            <Separator className="mb-3 mt-6" />
            <Link href="/login">
              <div className="flex justify-center ">
                <Button variant={"link"} className="text-md sm:text-base">
                  Forgot password?
                </Button>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
