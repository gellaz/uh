"use client";

import * as z from "zod";

import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { CalendarIcon } from "lucide-react";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { PasswordInput } from "@/components/PasswordInput";
import React from "react";
import { cn } from "@/lib/utils";
import { createClient } from "@/utils/supabase/client";
import { format } from "date-fns";
import { registerFormSchema } from "@/lib/validation";
import { signUp } from "@/actions/auth";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod";

const stepOneBaseSchema = z.object({
  email: z.string().email(),
  password: z
    .string()
    .min(8, { message: "Password must be at least 8 characters long" })
    .max(100, { message: "Password must be maximum 100 characters long" }),
  confirmPassword: z.string(),
});

const stepTwoBaseSchema = z.object({
  firstName: z.string().min(1, { message: "First name is required" }),
  lastName: z.string().min(1, { message: "Last name is required" }),
  taxId: z.string().min(1, { message: "Tax ID is required" }),
  birthDate: z.coerce
    .date()
    .min(new Date(1920, 0, 1), {
      message: "Date cannot go past January 1 1920",
    })
    .max(new Date(), { message: "Date must be in the past" })
    .refine(
      (date) => {
        const ageDifMs = Date.now() - date.getTime();
        const ageDate = new Date(ageDifMs);

        const age = Math.abs(ageDate.getUTCFullYear() - 1970);

        return age >= 18;
      },
      { message: "You must be 18 years or older" }
    ),
  sex: z.enum(["Male", "Female", "Other"]),
});

const stepThreeBaseSchema = z.object({
  secondaryEmail: z
    .string()
    .email({ message: "Invalid secondary email address" })
    .optional()
    .or(z.literal("")),
  phoneNumber: z.string().optional(),
});

const stepFourBaseSchema = z.object({
  acceptTerms: z
    .boolean()
    .refine((val) => val, "You must accept the Terms and Conditions"),
});

const combinedBaseSchema = stepOneBaseSchema
  .merge(stepTwoBaseSchema)
  .merge(stepThreeBaseSchema)
  .merge(stepFourBaseSchema);

const stepOneSchema = stepOneBaseSchema.refine(
  (data) => data.password === data.confirmPassword,
  {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  }
);

const combinedSchema = combinedBaseSchema.refine(
  (data) => data.password === data.confirmPassword,
  {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  }
);

interface RegisterFormPrivateProps {
  step: number;
  setStep: (step: number) => void;
}

export default function RegisterFormPrivate({
  step,
  setStep,
}: RegisterFormPrivateProps) {
  const supabase = createClient();
  const router = useRouter();
  const [registrationComplete, setRegistrationComplete] = React.useState(false);

  const currentSchema =
    step === 1
      ? stepOneSchema
      : step === 2
        ? stepTwoBaseSchema
        : step === 3
          ? stepThreeBaseSchema
          : combinedSchema;

  const defaultFormValues = {
    email: "",
    password: "",
    confirmPassword: "",
    firstName: "",
    lastName: "",
    taxId: "",
    birthDate: undefined,
    sex: undefined,
    secondaryEmail: "",
    phoneNumber: "",
    acceptTerms: undefined,
  };

  const form = useForm<z.infer<typeof combinedSchema>>({
    resolver: zodResolver(currentSchema),
    defaultValues: defaultFormValues,
  });

  async function handleBackClick(
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) {
    e.preventDefault();
    setStep(step - 1);
  }

  async function validateForm(values: z.infer<typeof registerFormSchema>) {
    const isFormValid = await form.trigger();
    return isFormValid;
  }

  async function submitForm(values: z.infer<typeof registerFormSchema>) {
    setRegistrationComplete(true);
    signUp(values);
  }

  async function onSubmit(values: z.infer<typeof registerFormSchema>) {
    console.log(values);

    if (step < 4) {
      setStep(step + 1);
    } else {
      const isFormValid = await validateForm(values);

      if (isFormValid) {
        submitForm(values);
      }
    }
  }

  return (
    <>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="w-full space-y-6"
        >
          {step === 1 && (
            // Step 1: Email, Password, Confirm Password
            <>
              {/** email */}
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email (*)</FormLabel>
                    <FormControl>
                      <Input placeholder="user@mail.com" {...field} />
                    </FormControl>
                    <FormMessage className="text-xs" />
                  </FormItem>
                )}
              ></FormField>
              {/** password */}
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Password (*)</FormLabel>
                    <FormControl>
                      <PasswordInput placeholder="Password" {...field} />
                    </FormControl>
                    <FormMessage className="text-xs" />
                  </FormItem>
                )}
              ></FormField>
              {/** confirmPassword */}
              <FormField
                control={form.control}
                name="confirmPassword"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Confirm password (*)</FormLabel>
                    <FormControl>
                      <PasswordInput
                        placeholder="Confirm password"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage className="text-xs" />
                  </FormItem>
                )}
              ></FormField>
            </>
          )}
          {step === 2 && (
            // Step 2: Personal information
            <>
              {/** firstName */}
              <FormField
                control={form.control}
                name="firstName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>First name (*)</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter your first name" {...field} />
                    </FormControl>

                    <FormMessage className="text-xs" />
                  </FormItem>
                )}
              ></FormField>
              {/** lastName */}
              <FormField
                control={form.control}
                name="lastName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Last name (*)</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter your last name" {...field} />
                    </FormControl>
                    <FormMessage className="text-xs" />
                  </FormItem>
                )}
              ></FormField>
              {/** taxId */}
              <FormField
                control={form.control}
                name="taxId"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Tax ID (*)</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter your tax ID" {...field} />
                    </FormControl>
                    <FormMessage className="text-xs" />
                  </FormItem>
                )}
              ></FormField>
              {/** birthDate and sex */}
              <div className="flex space-x-4">
                {/** birthDate */}
                <FormField
                  control={form.control}
                  name="birthDate"
                  render={({ field }) => (
                    <FormItem className="w-1/2 ">
                      <FormLabel>Date of birth (*)</FormLabel>
                      <Popover>
                        <PopoverTrigger asChild>
                          <FormControl>
                            <Button
                              variant={"outline"}
                              className={cn(
                                "w-full justify-start text-left font-normal",
                                !field.value && "text-muted-foreground"
                              )}
                            >
                              {field.value ? (
                                format(field.value, "PPP")
                              ) : (
                                <span>Pick a date</span>
                              )}
                              <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                            </Button>
                          </FormControl>
                        </PopoverTrigger>
                        <PopoverContent align="start" className="w-auto p-0">
                          <Calendar
                            mode="single"
                            captionLayout="dropdown-buttons"
                            selected={field.value}
                            onSelect={field.onChange}
                            disabled={(date) =>
                              date > new Date() || date < new Date("1900-01-01")
                            }
                            initialFocus
                            fromYear={1900}
                            toYear={new Date().getFullYear()}
                          />
                        </PopoverContent>
                      </Popover>
                      <FormMessage className="text-xs" />
                    </FormItem>
                  )}
                ></FormField>
                {/** sex */}
                <FormField
                  control={form.control}
                  name="sex"
                  render={({ field }) => (
                    <FormItem className="w-1/2">
                      <FormLabel>Sex</FormLabel>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select your gender" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="Male">Male</SelectItem>
                          <SelectItem value="Female">Female</SelectItem>
                          <SelectItem value="Other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage className="text-xs" />
                    </FormItem>
                  )}
                ></FormField>
              </div>
            </>
          )}
          {step === 3 && (
            // Step 3: Contact information
            <>
              {/** primary contact email */}
              <FormField
                control={form.control}
                name="email"
                render={({}) => (
                  <FormItem>
                    <FormLabel>Primary contact email</FormLabel>
                    <FormControl>
                      <Input value={form.getValues().email} disabled />
                    </FormControl>
                    <FormMessage className="text-xs" />
                  </FormItem>
                )}
              ></FormField>
              {/** secondary contact email */}
              <FormField
                control={form.control}
                name="secondaryEmail"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Secondary contact email</FormLabel>
                    <FormControl>
                      <Input placeholder="user.secondary@mail.com" {...field} />
                    </FormControl>
                    <FormMessage className="text-xs" />
                  </FormItem>
                )}
              ></FormField>
              {/** phoneNumber */}
              <FormField
                control={form.control}
                name="phoneNumber"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Phone number</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter your phone number" {...field} />
                    </FormControl>
                    <FormMessage className="text-xs" />
                  </FormItem>
                )}
              ></FormField>
            </>
          )}
          {step === 4 && (
            // Step 4: Terms & Conditions
            <>
              <p className="text-pretty">
                Read the terms and conditions carefully before proceeding. By
                clicking &quot;Create account&quot;, you agree to abide by the
                terms and conditions outlined in the document.
              </p>
              {/** acceptTerms */}
              <FormField
                control={form.control}
                name="acceptTerms"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Checkbox
                        checked={field.value}
                        onCheckedChange={field.onChange}
                      />
                    </FormControl>
                    <span className="ml-2 text-sm ">
                      Accept terms and conditions
                    </span>
                    <FormMessage className="text-xs" />
                  </FormItem>
                )}
              ></FormField>
            </>
          )}
          {/* Navigation buttons */}
          <div
            className={step > 1 ? "flex justify-between" : "flex justify-end"}
          >
            {step > 1 && (
              <Button
                variant={"secondary"}
                onClick={handleBackClick}
                className="flex-1"
              >
                Back
              </Button>
            )}
            {step < 4 ? (
              <Button
                type="submit"
                className={step > 1 ? "ml-4 flex-1" : "w-1/2"}
              >
                Next
              </Button>
            ) : (
              <AlertDialog>
                <AlertDialogTrigger asChild>
                  <Button
                    type="submit"
                    className={step > 1 ? "ml-4 flex-1" : "w-1/2"}
                  >
                    Create account
                  </Button>
                </AlertDialogTrigger>
                {registrationComplete && (
                  <AlertDialogContent>
                    <AlertDialogHeader>
                      <AlertDialogTitle>Registration complete</AlertDialogTitle>
                      <AlertDialogDescription>
                        We sent you an email to confirm your account.
                      </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                      <AlertDialogCancel
                        onClick={() => router.push("/dashboard/login")}
                      >
                        Close
                      </AlertDialogCancel>
                    </AlertDialogFooter>
                  </AlertDialogContent>
                )}
              </AlertDialog>
            )}
          </div>
        </form>
      </Form>
    </>
  );
}
