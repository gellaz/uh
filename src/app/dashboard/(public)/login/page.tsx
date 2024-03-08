import { Button } from "@/components/ui/button";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import LoginForm from "@/app/dashboard/(public)/login/_components/LoginForm";
import { Separator } from "@/components/ui/separator";

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
          <Image
            src="/logo-white.svg"
            alt="Login cover image"
            width={150}
            height={150}
            className="my-10"
            style={{ fill: "#fff !important" }}
          />
          <h1>Urban Hunt</h1>
          <h6 className="italic">«Hunt for the perfect property»</h6>
          <Separator className="mt-6" />
          <div className="mt-4 flex items-center justify-center">
            <span className="mr-1 text-base">
              You don&apos;t have an account yet?
            </span>
            <Button asChild variant={"link"} className=" text-white">
              <Link href="/dashboard/register">Create account</Link>
            </Button>
          </div>
        </div>
        {/* Right Panel */}
        <div className="flex flex-1 flex-col justify-center p-4 sm:p-8 md:p-16 lg:p-24">
          <div className="mx-auto w-full max-w-md rounded-lg border border-gray-300 bg-white p-8 shadow-lg">
            <div className="col mb-6 h-fit">
              <h2>Welcome back</h2>
              <p>Please enter your credentials to log in</p>
            </div>
            <LoginForm />
            <Separator className="mb-3 mt-6" />
            <Link href="/dashboard/login">
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
