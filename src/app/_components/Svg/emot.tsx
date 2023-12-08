import * as React from "react"
import { SVGProps } from "react"
export const EmotSvg = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    width={500}
    height={500}
    style={{
      width: "100%",
      height: "100%",
      transform: "translate3d(0,0,0)",
      contentVisibility: "visible",
    }}
    {...props}
  >
    <defs>
      <radialGradient
        id="d"
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
        id="b"
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
      <clipPath id="c">
        <path d="M0 0h500v500H0z" />
      </clipPath>
      <clipPath id="g">
        <path d="M0 0h500v500H0z" />
      </clipPath>
      <mask id="f" mask-type="alpha">
        <use xlinkHref="#a" />
      </mask>
      <mask id="e">
        <path
          fill="url(#b)"
          d="M0-218c120.314 0 218 97.686 218 218S120.314 218 0 218-218 120.314-218 0s97.686-218 218-218z"
        />
      </mask>
      <path
        id="a"
        fill="#32150E"
        d="M60.5-28v56c0 33.39-27.11 60.5-60.5 60.5S-60.5 61.39-60.5 28v-56c0-33.39 27.11-60.5 60.5-60.5S60.5-61.39 60.5-28z"
        style={{
          display: "block",
        }}
        transform="matrix(.98702 0 0 .98228 247.452 327.088)"
      />
    </defs>
    <g clipPath="url(#c)">
      <g
        style={{
          display: "block",
        }}
      >
        <path
          fill="#FFD452"
          d="M264.791 7.255c116.645 3.744 208.037 110.014 203.956 237.157C464.665 371.555 366.645 471.745 250 468 133.355 464.255 41.963 357.985 46.044 230.842 50.126 103.7 148.146 3.51 264.791 7.255z"
        />
        <path
          fill="url(#d)"
          fillOpacity={0.72}
          d="M0-218c120.314 0 218 97.686 218 218S120.314 218 0 218-218 120.314-218 0s97.686-218 218-218z"
          mask="url(#e)"
          style={{
            mixBlendMode: "overlay",
          }}
          transform="matrix(.9695 .03112 -.03392 1.05676 257.396 237.627)"
        />
      </g>
      <g
        mask="url(#f)"
        style={{
          display: "block",
        }}
      >
        <g clipPath="url(#g)">
          <path
            fill="#32150E"
            d="M60.5-28v56c0 33.39-27.11 60.5-60.5 60.5S-60.5 61.39-60.5 28v-56c0-33.39 27.11-60.5 60.5-60.5S60.5-61.39 60.5-28z"
            style={{
              display: "block",
            }}
            transform="matrix(1.98 0 0 1.98 250 330)"
          />
          <g
            style={{
              display: "block",
            }}
          >
            <path
              fill="#EC384D"
              d="M255.436 362.622c3.362-5.38 10.948-7.13 23.685-3.606 26.367 7.292 45.263 25.063 45.263 46.093 0 27.256-31.564 49.35-70.5 49.35s-70.5-22.094-70.5-49.35c0-18.67 14.409-35.455 36.658-43.303 25.342-8.939 31.38-4.689 35.394.816z"
            />
            <path
              fill="none"
              d="M255.436 362.622c3.362-5.38 10.948-7.13 23.685-3.606 26.367 7.292 45.263 25.063 45.263 46.093 0 27.256-31.564 49.35-70.5 49.35s-70.5-22.094-70.5-49.35c0-18.67 14.409-35.455 36.658-43.303 25.342-8.939 31.38-4.689 35.394.816z"
            />
          </g>
        </g>
      </g>
      <path
        fill="#FFF"
        d="M0-34c18.765 0 34 15.235 34 34S18.765 34 0 34-34 18.765-34 0s15.235-34 34-34z"
        style={{
          display: "block",
        }}
        transform="matrix(1.22447 -.67873 .84842 1.53058 342.96 166.794)"
      />
      <path
        fill="#FFF"
        d="M0-34c18.765 0 34 15.235 34 34S18.765 34 0 34-34 18.765-34 0s15.235-34 34-34z"
        style={{
          display: "block",
        }}
        transform="matrix(1.22447 .67873 -.84842 1.53058 164.918 167.005)"
      />
    </g>
  </svg>
)
