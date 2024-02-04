"use client";

import PasswordInput from "@/components/PasswordInput";
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
import { createClient, supabase } from "@/utils/supabase/client";
import { loginSchema, type ILogin } from "@/validation/auth";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { z } from "zod";

const formSchema = z.object({
  email: z.string().email({ message: "Insert a valid email" }),
  password: z.string().min(0, { message: "Insert your password" }),
});

export default function LoginForm() {
  const router = useRouter();

  const form = useForm<ILogin>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    const { error } = await supabase.auth.signInWithPassword(values);

    if (error) {
      router.push("/error");
    }

    router.push("/");
  }

  return (
    <>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          {/** Email */}
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input type="text" placeholder="user@mail.com" {...field} />
                </FormControl>
                <FormMessage className="text-xs" />
              </FormItem>
            )}
          ></FormField>
          {/** Password */}
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-sm">Password</FormLabel>
                <FormControl>
                  <PasswordInput placeholder="Password" {...field} />
                </FormControl>
                <FormMessage className="text-xs" />
              </FormItem>
            )}
          ></FormField>
          <Button type="submit" className="w-full">
            Login
          </Button>
        </form>
      </Form>
    </>
  );
}
