import React, { ReactNode } from "react";
import clsx from "clsx";
import styles from "./VisuallyHidden.module.css";

// Polymorphic props
type VisuallyHiddenProps<E extends React.ElementType> = {
  as?: E;
  children: ReactNode;
  className?: string;
} & React.ComponentPropsWithoutRef<E>;

function VisuallyHidden<E extends React.ElementType = "span">({
  as,
  className,
  children,
  ...delegated
}: VisuallyHiddenProps<E>) {
  const Element = as || "span";
  return (
    <Element className={clsx(styles.wrapper, className)} {...delegated}>
      {children}
    </Element>
  );
}

export default VisuallyHidden;