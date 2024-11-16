import { cn } from "@/utils/cn";
import { cva } from "class-variance-authority";
import { ButtonProps } from "@/components/Ui/Button.types";

export default function Button({
  className,
  variant,
  onClick,
  ...props
}: ButtonProps) {
  return (
    <button
      {...props}
      className={cn(buttonVariants({ variant }), className)}
      onClick={onClick}
    />
  );
}

const buttonVariants = cva(
  "py-4 px-8 h-12 w-40 rounded-[50px] hover:opacity-50",
  {
    variants: {
      variant: {
        primary: "bg-primary text-white",
        secondary: "border-2 border-primary text-primary",
      },
    },
    defaultVariants: {
      variant: "primary",
    },
  }
);
