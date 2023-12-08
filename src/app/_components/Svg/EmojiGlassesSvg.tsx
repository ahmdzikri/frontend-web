import * as React from "react"
import { SVGProps } from "react"

export const EmojiGlassesSvg: React.FC<SVGProps<SVGSVGElement>> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={500}
    height={500}
    style={{
      width: "100%",
      height: "100%",
      transform: "translate3d(0px,0px,0px)",
      contentVisibility: "visible",
    }}
    {...props}
  >
  <defs>
    <linearGradient
      id="j"
      x1={247}
      x2={201}
      y1={708}
      y2={-76}
      gradientUnits="userSpaceOnUse"
      spreadMethod="pad"
    >
      <stop offset="0%" stopColor="#FFF" />
      <stop offset="5%" stopColor="#FFF" />
      <stop offset="100%" stopColor="#FFF" />
    </linearGradient>
    <linearGradient
      id="a"
      x1={247}
      x2={201}
      y1={708}
      y2={-76}
      gradientUnits="userSpaceOnUse"
      spreadMethod="pad"
    >
      <stop offset="0%" stopColor="#FFF" />
      <stop offset="82%" stopColor="#FFF" stopOpacity={0.5} />
      <stop offset="100%" stopColor="#FFF" stopOpacity={0} />
    </linearGradient>
    <linearGradient
      id="h"
      x1={247}
      x2={201}
      y1={708}
      y2={-76}
      gradientUnits="userSpaceOnUse"
      spreadMethod="pad"
    >
      <stop offset="0%" stopColor="#FFF" />
      <stop offset="5%" stopColor="#FFF" />
      <stop offset="100%" stopColor="#FFF" />
    </linearGradient>
    <linearGradient
      id="b"
      x1={247}
      x2={201}
      y1={708}
      y2={-76}
      gradientUnits="userSpaceOnUse"
      spreadMethod="pad"
    >
      <stop offset="0%" stopColor="#FFF" />
      <stop offset="82%" stopColor="#FFF" stopOpacity={0.5} />
      <stop offset="100%" stopColor="#FFF" stopOpacity={0} />
    </linearGradient>
    <mask id="k">
      <path
        fill="url(#a)"
        d="M-87.5-75c-43.5-7-70-18-88 .5s13.25 62.5 18.25 72.25S-137 25-95.5 25.5-31.75-24-36-38s-8-30-51.5-37z"
      />
    </mask>
    <mask id="i">
      <path
        fill="url(#b)"
        d="M-87.5-75c-43.5-7-70-18-88 .5s13.25 62.5 18.25 72.25S-137 25-95.5 25.5-31.75-24-36-38s-8-30-51.5-37z"
      />
    </mask>
    <mask id="f">
      <path
        fill="url(#c)"
        d="M0-218c120.314 0 218 97.686 218 218S120.314 218 0 218-218 120.314-218 0s97.686-218 218-218z"
      />
    </mask>
    <radialGradient
      id="e"
      cx={13}
      cy={-236}
      r={337.231}
      fx={13}
      fy={-236}
      gradientUnits="userSpaceOnUse"
      spreadMethod="pad"
    >
      <stop offset="0%" stopColor="#FFF" />
      <stop offset="61%" stopColor="gray" />
      <stop offset="100%" />
    </radialGradient>
    <radialGradient
      id="c"
      cx={13}
      cy={-236}
      r={337.231}
      fx={13}
      fy={-236}
      gradientUnits="userSpaceOnUse"
      spreadMethod="pad"
    >
      <stop offset="0%" stopColor="#FFF" />
      <stop offset="31%" stopColor="#FFF" stopOpacity={0.5} />
      <stop offset="62%" stopColor="#FFF" stopOpacity={0} />
    </radialGradient>
    <clipPath id="d">
      <path d="M0 0h500v500H0z" />
    </clipPath>
    <clipPath id="g">
      <path d="M0 0h500v500H0z" />
    </clipPath>
  </defs>
  <g clipPath="url(#d)">
    <g
      style={{
        display: "block",
      }}
    >
      <path
        fill="#FFD452"
        d="M250 12c120.314 0 218 97.686 218 218s-97.686 218-218 218S32 350.314 32 230 129.686 12 250 12z"
      />
      <path
        fill="url(#e)"
        fillOpacity={0.72}
        d="M0-218c120.314 0 218 97.686 218 218S120.314 218 0 218-218 120.314-218 0s97.686-218 218-218z"
        mask="url(#f)"
        style={{
          mixBlendMode: "overlay",
        }}
        transform="translate(250 230)"
      />
    </g>
    <path
      fill="none"
      stroke="#2B2423"
      strokeLinecap="round"
      strokeWidth={23}
      d="M-60.338-6.411c14.225 11.264 33.985 21.45 58.926 21.45 25.918 0 46.63-10.523 61.515-22.004"
      style={{
        display: "block",
      }}
      transform="translate(250 347)"
    />
    <g
      clipPath="url(#g)"
      style={{
        display: "block",
      }}
      transform="matrix(.91 0 0 .91 22.5 46.36)"
    >
      <g
        style={{
          display: "block",
        }}
      >
        <path
          fill="#191919"
          d="M108.75 153.75c-42-2.75-44-1.75-57 0S30 160 42.5 185s15.25 23.75 20.25 38.5S93 277.75 117 284.25s66.25 12.5 93.5-20 25.5-61.5 39.5-58.75 2.75-14.375 2.75-14.375-4.375 1-14.875-1.125-22.5-13.25-34.75-17.25-52.375-16.25-94.375-19z"
        />
        <path
          fill="none"
          d="M108.75 153.75c-42-2.75-44-1.75-57 0S30 160 42.5 185s15.25 23.75 20.25 38.5S93 277.75 117 284.25s66.25 12.5 93.5-20 25.5-61.5 39.5-58.75 2.75-14.375 2.75-14.375-4.375 1-14.875-1.125-22.5-13.25-34.75-17.25-52.375-16.25-94.375-19z"
        />
      </g>
      <g
        style={{
          display: "block",
        }}
      >
        <path
          fill="#191919"
          d="M391.25 153.75c42-2.75 44-1.75 57 0S470 160 457.5 185s-15.25 23.75-20.25 38.5S407 277.75 383 284.25s-66.25 12.5-93.5-20-25.5-61.5-39.5-58.75-2.75-14.375-2.75-14.375 4.375 1 14.875-1.125 22.5-13.25 34.75-17.25 52.375-16.25 94.375-19z"
        />
        <path
          fill="none"
          d="M391.25 153.75c42-2.75 44-1.75 57 0S470 160 457.5 185s-15.25 23.75-20.25 38.5S407 277.75 383 284.25s-66.25 12.5-93.5-20-25.5-61.5-39.5-58.75-2.75-14.375-2.75-14.375 4.375 1 14.875-1.125 22.5-13.25 34.75-17.25 52.375-16.25 94.375-19z"
        />
      </g>
      <g
        opacity={0.55}
        style={{
          display: "block",
        }}
      >
        <g opacity={1}>
          <path
            fill="url(#h)"
            fillRule="evenodd"
            d="M-87.5-75c-43.5-7-70-18-88 .5s13.25 62.5 18.25 72.25S-137 25-95.5 25.5-31.75-24-36-38s-8-30-51.5-37z"
            mask="url(#i)"
            transform="translate(250 250)"
          />
          <path
            fill="none"
            d="M162.5 175c-43.5-7-70-18-88 .5s13.25 62.5 18.25 72.25S113 275 154.5 275.5 218.25 226 214 212s-8-30-51.5-37z"
          />
        </g>
      </g>
      <g
        opacity={0.55}
        style={{
          display: "block",
        }}
      >
        <g opacity={1}>
          <path
            fill="url(#j)"
            fillRule="evenodd"
            d="M-87.5-75c-43.5-7-70-18-88 .5s13.25 62.5 18.25 72.25S-137 25-95.5 25.5-31.75-24-36-38s-8-30-51.5-37z"
            mask="url(#k)"
            transform="matrix(-1 0 0 1 250 250)"
          />
          <path
            fill="none"
            d="M337.5 175c43.5-7 70-18 88 .5s-13.25 62.5-18.25 72.25S387 275 345.5 275.5 281.75 226 286 212s8-30 51.5-37z"
          />
        </g>
      </g>
    </g>
  </g>
</svg>
)