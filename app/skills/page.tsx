"use client";

import React from "react";

import { skills } from "@/utils/skillsArray";
import { Meteors } from "@/components/ui/meteors";
import { HoverEffect } from "@/components/ui/card-hover-effect";

export default function SkillsPage() {
    return (
        <div className="min-h-dvh w-full flex items-center justify-center bg-black/[0.96] antialiased bg-grid-white/[0.04] relative overflow-hidden px-2 py-24 lg:pb-4 lg:pt-24">
            <div className="w-full lg:w-[80%] lg:mx-auto lg:max-w-[1000px]">
                <Meteors number={50} />
                <HoverEffect items={skills} />
            </div>
        </div>
    );
}
