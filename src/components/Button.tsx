import { VariantProps, cva } from "class-variance-authority";
import { ButtonHTMLAttributes, forwardRef } from "react";
import { cn } from "../utils/TailwindClass";

const buttonVariants = cva(
  "flex item-center justify-center text-center rounded-md text-sm font-medium px-4 py-2 duration-300",
  {
    variants: {
      variant: {
        default: "bg-green-900 text-white hover:bg-green-700",
        destructive: "bg-red-500 text-white hover:bg-red-900",
        outline: "bg-transparent text-green-900 border border-green-900 hover:bg-green-700 hover:text-white",
        subtle: "bg-green-100 text-blue-100 hover:bg-blue-200",
        ghost: "bg-transparent hover:bg-blue-100",
      },
      size: {
        default: "h-10 py-2 px-4",
        sm: "h-9 px-2 rounded-md",
        lg: "h-11 px-8 rounded-md",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, children, variant, size, ...props }, ref) => {
    return (
      <button ref={ref} {...props} className={cn(buttonVariants({ variant, size, className}))}>
        {children}
      </button>
    );
  }
);

export default Button;
