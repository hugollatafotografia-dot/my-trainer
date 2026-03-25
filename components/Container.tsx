import type { ElementType, ReactNode } from "react";

import { cn } from "@/lib/utils";

type ContainerProps<T extends ElementType> = {
  as?: T;
  children: ReactNode;
  className?: string;
};

export default function Container<T extends ElementType = "div">({
  as,
  children,
  className,
}: ContainerProps<T>) {
  const Component = as ?? "div";

  return <Component className={cn("container-shell", className)}>{children}</Component>;
}
