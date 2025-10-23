"use client";

import React, {ReactNode} from "react";
import { MotionConfig } from "framer-motion";

type RespectMotionConfigProps = {
  children: ReactNode;
};

function RespectMotionConfig({children}:RespectMotionConfigProps){
    return <MotionConfig reducedMotion='user'>{children}</MotionConfig>
}


export default RespectMotionConfig;
