import React from "react";
import { format } from "date-fns";
import clsx from "clsx";

import styles from "./blogHero.module.css";

interface BlogHeroProps extends React.HTMLAttributes<HTMLElement> {
  title: string;
  publishedOn: string;
  className?: string;
}

function blogHero({
  title,
  publishedOn,
  className,
  ...delegated
}: BlogHeroProps) {
  const humanizedDate = publishedOn
    ? format(new Date(publishedOn), "MMMM do, yyyy")
    : "Date not available";

  return (
    <header className={clsx(styles.wrapper, className)} {...delegated}>
      <div className={styles.content}>
        <h1>{title}</h1>
        <p>
          Published on <time dateTime={publishedOn}>{humanizedDate}</time>
        </p>
      </div>
    </header>
  );
}

export default blogHero;
