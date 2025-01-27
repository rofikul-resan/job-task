import React from "react";

interface MiniSkeletonProps {
  className?: string;
  style?: React.CSSProperties;
  theme?: "light" | "dark";
}
const MiniSkeleton: React.FC<MiniSkeletonProps> = ({
  className,
  style,
  theme,
}) => {
  return (
    <div style={style} className={`rounded-md p-4 ${className}`}>
      <div
        className={`${
          theme === "dark" ? "bg-[#DDE2ED88]" : "bg-[#DDE2ED]"
        } h-1.5 w-3/12 rounded-lg`}
      ></div>
      <div className="space-y-3 mt-4">
        <div
          className={`${
            theme === "dark" ? "bg-[#DDE2ED88]" : "bg-[#DDE2ED]"
          } h-1.5 w-11/12 rounded-lg`}
        ></div>
        <div
          className={`${
            theme === "dark" ? "bg-[#DDE2ED88]" : "bg-[#DDE2ED]"
          } h-1.5 w-9/12 rounded-lg`}
        ></div>
        <div
          className={`${
            theme === "dark" ? "bg-[#DDE2ED88]" : "bg-[#DDE2ED]"
          } h-1.5 w-7/12 rounded-lg`}
        ></div>
      </div>
    </div>
  );
};

export default MiniSkeleton;
