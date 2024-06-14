import { cn } from "@/utils";
import { ComponentProps } from "react";
import { Text, TouchableOpacity } from "react-native";

type ButtonProps = ComponentProps<typeof TouchableOpacity> & {
  label: string;
  labelClassName?: string;
  children?: React.ReactNode;
};
export function Button({
  label,
  labelClassName,
  children,
  className,
  ...props
}: ButtonProps) {
  return (
    <TouchableOpacity
      className={cn(
        "bg-green-500 p-4 justify-center items-center rounded-lg",
        className
      )}
      {...props}
    >
      <Text className={cn("text-white font-bold", labelClassName)}>
        {label}
      </Text>
    </TouchableOpacity>
  );
}
