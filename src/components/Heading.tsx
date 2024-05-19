import { cva, VariantProps } from "class-variance-authority";
import { forwardRef, HTMLAttributes, ElementType } from "react";
import { cn } from "../utils/TailwindClass";

const headingVariants = cva(
  "font-bold",
  {
    variants: {
      size: {
        xl: "text-4xl",
        lg: "text-3xl",
        md: "text-2xl",
        sm: "text-xl",
      },
      variantColor: {
        primary: "text-blue-600",
        secondary: "text-gray-600",
        danger: "text-red-600",
        success: "text-green-600",
      },
    },
    defaultVariants: {
      size: "md",
      variantColor: "primary",
    },
  }
);

interface HeadingProps extends HTMLAttributes<HTMLHeadingElement>, VariantProps<typeof headingVariants> {
  as?: ElementType;
}

const Heading = forwardRef<HTMLHeadingElement, HeadingProps>(
  ({ className, children, size, variantColor, as: Tag = 'h1', ...props }, ref) => {
    return (
      <Tag
        ref={ref}
        {...props}
        className={cn(headingVariants({ size, variantColor }), className)}
      >{children}</Tag>
    );
  }
);


export default Heading;
