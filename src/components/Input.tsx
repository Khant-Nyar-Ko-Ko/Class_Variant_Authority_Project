import { cva, VariantProps } from "class-variance-authority";
import { forwardRef, InputHTMLAttributes } from "react";
import { cn } from "../utils/TailwindClass";

const inputVariants = cva(
  "blockw-[300px] rounded-md text-sm font-medium px-4 py-2 duration-300 border",
  {
    variants: {
      variant: {
        default: "bg-white text-black border-gray-300 focus:border-blue-500",
        destructive: "bg-red-100 text-red-900 border-red-500 focus:border-red-700",
        outline: "bg-transparent text-black border-gray-300 focus:border-blue-500",
        subtle: "bg-gray-100 text-gray-700 border-gray-200 focus:border-blue-500",
        ghost: "bg-transparent text-black focus:border-blue-500",
      },
      inputSize: {
        default: "h-10 py-2 px-4",
        sm: "h-8 px-3 rounded-md",
        lg: "h-12 px-5 rounded-md",
      },
      inputType: {
        default: "text",
        password: "password",
        email : "email"
      }
    },
    defaultVariants: {
      variant: "default",
      inputSize: "default",
      inputType: "default"
    },
  }
);

interface InputProps extends InputHTMLAttributes<HTMLInputElement>, VariantProps<typeof inputVariants> {}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, variant, inputSize, inputType, ...props }, ref) => {
    return (
      <input
        ref={ref}
        {...props}
        className={cn(inputVariants({ variant, inputSize, inputType }), className)}
      />
    );
  }
);

export default Input;
