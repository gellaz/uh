import { EyeIcon, EyeOffIcon } from "lucide-react";
import { Input, type InputProps } from "@/components/ui/input";
import React, { useState } from "react";

const PasswordInput: React.FC<InputProps> = ({ className, ...props }) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="relative">
      <Input
        type={showPassword ? "text" : "password"}
        className={className}
        {...props}
      />
      <div className="absolute inset-y-0 right-0 flex items-center pr-3 text-sm leading-5">
        {showPassword ? (
          <EyeOffIcon
            className="text-gray-400 hover:cursor-pointer"
            onClick={() => setShowPassword(false)}
          />
        ) : (
          <EyeIcon
            className="text-gray-400 hover:cursor-pointer"
            onClick={() => setShowPassword(true)}
          />
        )}
      </div>
    </div>
  );
};

export default PasswordInput;
