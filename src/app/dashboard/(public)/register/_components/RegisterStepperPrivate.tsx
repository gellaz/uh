import {
  HeartHandshakeIcon,
  KeyRoundIcon,
  PhoneIcon,
  UserSquare2Icon,
} from "lucide-react";

interface RegisterStepperPrivateProps {
  step: number;
}

export default function RegisterStepperPrivate({
  step,
}: RegisterStepperPrivateProps) {
  function textClass(stepNumber: number) {
    return `font-medium leading-tight ${step === stepNumber ? "text-orange-500" : "text-gray-500"
      }`;
  }

  function iconBg(stepNumber: number) {
    return step === stepNumber
      ? "bg-orange-500 text-white"
      : "bg-gray-100 text-gray-500";
  }

  return (
    <>
      <ol className="relative border-l border-gray-200 dark:border-gray-700">
        {[
          { Icon: KeyRoundIcon, text: "1. Access credentials" },
          { Icon: UserSquare2Icon, text: "2. Personal info" },
          { Icon: PhoneIcon, text: "3. Contacts" },
          { Icon: HeartHandshakeIcon, text: "4. Terms & conditions" },
        ].map((item, index) => (
          <li key={index} className={`mb-10 ml-6 ${textClass(index + 1)}`}>
            <div className="flex items-center">
              <span
                className={`absolute -left-4 flex h-8 w-8 items-center justify-center rounded-full ring-4 ring-white dark:ring-gray-900 ${iconBg(
                  index + 1
                )}`}
              >
                <item.Icon className="h-5 w-5" />
              </span>

              <h6 className="ml-2">{item.text}</h6>
            </div>
          </li>
        ))}
      </ol>
    </>
  );
}
