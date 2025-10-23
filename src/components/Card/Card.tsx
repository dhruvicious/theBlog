import React, {ReactNode, HTMLAttributes}from "react";
import clsx from "clsx";

import styles from "./Card.module.css";

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode; 
  className?: string;
}

function Card({ children, className, ...delegated }: CardProps) {
  return (
    <div className={clsx(styles.wrapper, className)} {...delegated}>
      {children}
    </div>
  );
}

export default Card;
