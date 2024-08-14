import React from "react";

type SectionHeaderProps = {
  title: string;
  description: string;
};
export default function SectionHeader({
  title,
  description,
}: SectionHeaderProps) {
  return (
    <div>
      <div className="flex items-center gap-3">
        <div className="w-2 h-10 md:w-4 md:h-12 bg-rose-500" />
        <span className="text-rose-500 text-xl font-bold">{title}</span>
      </div>
      <p className="text-2xl md:text-4xl font-medium mt-4">{description}</p>
    </div>
  );
}
