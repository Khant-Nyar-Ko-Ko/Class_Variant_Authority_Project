import { cva, VariantProps } from "class-variance-authority";
import { forwardRef, HTMLAttributes } from "react";
import { cn } from "../utils/TailwindClass";

const textVariants = cva(
  "font-medium",
  {
    variants: {
      size: {
        lg: "text-lg",
        md: "text-md",
        sm: "text-sm",
        xs: "text-xs",
      },
      variantColor: {
        primary: "text-black",
        secondary: "text-gray-600",
        muted: "text-gray-400",
        white: "text-white",
      },
    },
    defaultVariants: {
      size: "md",
      variantColor: "primary",
    },
  }
);

interface TextProps extends HTMLAttributes<HTMLParagraphElement>, VariantProps<typeof textVariants> {}

const Text = forwardRef<HTMLParagraphElement, TextProps>(
  ({ className, children, size, variantColor, ...props }, ref) => {
    return (
      <p
        ref={ref}
        {...props}
        className={cn(textVariants({ size, variantColor }), className)}
      >{children}</p>
    );
  }
);

Text.displayName = "Text";

export default Text;
