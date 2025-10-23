import React from "react";

export interface CSSVarStyle extends React.CSSProperties {
  [key: `--${string}`]: string | number;
}
