import Image from "next/image";
import { useTheme } from "next-themes";
import darkLambIcon from "@/public/lamb-icon-dark.svg";
import lightLambIcon from "@/public/lamb-icon-light.svg";

export function LambIcon({ width = 32, height = 32 }) {
  const { theme } = useTheme();
  
  return (
    <Image 
      src={theme === 'dark' ? lightLambIcon : darkLambIcon}
      width={width}
      height={height}
      alt="Lamb icon"
    />
  );
}