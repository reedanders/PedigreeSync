import { useId } from "react";

export function BackgroundIllustration(props: React.ComponentPropsWithoutRef<'div'>) {
  let id = useId()

  return (
    <div {...props} aria-hidden="true">
      <svg
        viewBox="0 0 1026 1026"
        fill="none"
        aria-hidden="true"
        className="absolute inset-0 h-full w-full"
      >
        {/* First horizontal line with left-to-right pulse */}
        <line
          x1="200"
          y1="300"
          x2="680"
          y2="300"
          stroke={`url(#${id}-base-gradient-1)`}
          strokeOpacity="0.7"
        />
        <line
          x1="200"
          y1="300"
          x2="440"
          y2="300"
          stroke={`url(#${id}-gradient-1)`}
          strokeLinecap="round"
          className="animate-pulse-left-to-right"
        />
        <defs>
          <linearGradient
            id={`${id}-base-gradient-1`}
            x1="200"
            y1="300"
            x2="680"
            y2="300"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#D4D4D4" stopOpacity="0" />
            <stop offset="0.1" stopColor="#D4D4D4" stopOpacity="0.7" />
            <stop offset="0.9" stopColor="#D4D4D4" stopOpacity="0.7" />
            <stop offset="1" stopColor="#D4D4D4" stopOpacity="0" />
          </linearGradient>
          <linearGradient
            id={`${id}-gradient-1`}
            x1="200"
            y1="300"
            x2="440"
            y2="300"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#4ade80" stopOpacity="0" />
            <stop offset="0.2" stopColor="#4ade80" stopOpacity="1" />
            <stop offset="0.8" stopColor="#4ade80" stopOpacity="1" />
            <stop offset="1" stopColor="#4ade80" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>
      <svg
        viewBox="0 0 1026 1026"
        fill="none"
        aria-hidden="true"
        className="absolute inset-0 h-full w-full"
      >
        {/* Second horizontal line with right-to-left pulse */}
        <line
          x1="240"
          y1="150"
          x2="720"
          y2="150"
          stroke={`url(#${id}-base-gradient-2)`}
          strokeOpacity="0.7"
        />
        <line
          x1="560"
          y1="150"
          x2="720"
          y2="150"
          stroke={`url(#${id}-gradient-2)`}
          strokeLinecap="round"
          className="animate-pulse-right-to-left"
        />
        <defs>
          <linearGradient
            id={`${id}-base-gradient-2`}
            x1="240"
            y1="150"
            x2="720"
            y2="150"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#D4D4D4" stopOpacity="0" />
            <stop offset="0.1" stopColor="#D4D4D4" stopOpacity="0.7" />
            <stop offset="0.9" stopColor="#D4D4D4" stopOpacity="0.7" />
            <stop offset="1" stopColor="#D4D4D4" stopOpacity="0" />
          </linearGradient>
          <linearGradient
            id={`${id}-gradient-2`}
            x1="720"
            y1="150"
            x2="560"
            y2="150"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#4ade80" stopOpacity="0" />
            <stop offset="0.2" stopColor="#4ade80" stopOpacity="1" />
            <stop offset="0.8" stopColor="#4ade80" stopOpacity="1" />
            <stop offset="1" stopColor="#4ade80" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>
      <svg
        viewBox="0 0 1026 1026"
        fill="none"
        aria-hidden="true"
        className="absolute inset-0 h-full w-full"
      >
        {/* Third horizontal line with left-to-right pulse */}
        <line
          x1="280"
          y1="550"
          x2="680"
          y2="550"
          stroke={`url(#${id}-base-gradient-3)`}
          strokeOpacity="0.7"
        />
        <line
          x1="280"
          y1="550"
          x2="480"
          y2="550"
          stroke={`url(#${id}-gradient-3)`}
          strokeLinecap="round"
          className="animate-pulse-left-to-right-slow"
        />
        <defs>
          <linearGradient
            id={`${id}-base-gradient-3`}
            x1="280"
            y1="550"
            x2="680"
            y2="550"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#D4D4D4" stopOpacity="0" />
            <stop offset="0.1" stopColor="#D4D4D4" stopOpacity="0.7" />
            <stop offset="0.9" stopColor="#D4D4D4" stopOpacity="0.7" />
            <stop offset="1" stopColor="#D4D4D4" stopOpacity="0" />
          </linearGradient>
          <linearGradient
            id={`${id}-gradient-3`}
            x1="280"
            y1="550"
            x2="480"
            y2="550"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#4ade80" stopOpacity="0" />
            <stop offset="0.2" stopColor="#4ade80" stopOpacity="1" />
            <stop offset="0.8" stopColor="#4ade80" stopOpacity="1" />
            <stop offset="1" stopColor="#4ade80" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  )
}
