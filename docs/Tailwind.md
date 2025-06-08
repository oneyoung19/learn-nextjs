---
title: Tailwind
---

`Tailwind` 是  一个 `CSS` 框架，用于快速构建 `UI`。

可以将其理解为**原子化**的样式设计。

**本章内容基于 `tailwindcss@4` 版本**。

根据官网指南[快速安装](https://tailwindcss.com/docs/installation/using-vite)。

## 1.Layer theme

`theme` 主要用来定义全局样式变量。

### 1-1.内置主题

`Tailwind` 已经定义了一些[内置主题](https://tailwindcss.com/docs/theme#default-theme-variable-reference)。

主要分为以下几个方面：

1. 颜色系统 (`Colors`)
2. 间距与尺寸 (`Spacing & Sizing`)
3. 字体系统 (`Typography`)
4. 圆角与边框 (`Borders & Radius`)
5. 阴影与特效 (`Shadows & Effects`)
6. 断点与响应式 (`Breakpoints`)
7. 动画与过渡 (`Animations & Transitions`)

```css
@theme {
  --font-sans: ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
  --font-serif: ui-serif, Georgia, Cambria, "Times New Roman", Times, serif;
  --font-mono: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
  --color-red-50: oklch(0.971 0.013 17.38);
  --color-red-100: oklch(0.936 0.032 17.717);
  --color-red-200: oklch(0.885 0.062 18.334);
  --color-red-300: oklch(0.808 0.114 19.571);
  --color-red-400: oklch(0.704 0.191 22.216);
  --color-red-500: oklch(0.637 0.237 25.331);
  --color-red-600: oklch(0.577 0.245 27.325);
  --color-red-700: oklch(0.505 0.213 27.518);
  --color-red-800: oklch(0.444 0.177 26.899);
  --color-red-900: oklch(0.396 0.141 25.723);
  --color-red-950: oklch(0.258 0.092 26.042);
  --color-orange-50: oklch(0.98 0.016 73.684);
  --color-orange-100: oklch(0.954 0.038 75.164);
  --color-orange-200: oklch(0.901 0.076 70.697);
  --color-orange-300: oklch(0.837 0.128 66.29);
  --color-orange-400: oklch(0.75 0.183 55.934);
  --color-orange-500: oklch(0.705 0.213 47.604);
  --color-orange-600: oklch(0.646 0.222 41.116);
  --color-orange-700: oklch(0.553 0.195 38.402);
  --color-orange-800: oklch(0.47 0.157 37.304);
  --color-orange-900: oklch(0.408 0.123 38.172);
  --color-orange-950: oklch(0.266 0.079 36.259);
  --color-amber-50: oklch(0.987 0.022 95.277);
  --color-amber-100: oklch(0.962 0.059 95.617);
  --color-amber-200: oklch(0.924 0.12 95.746);
  --color-amber-300: oklch(0.879 0.169 91.605);
  --color-amber-400: oklch(0.828 0.189 84.429);
  --color-amber-500: oklch(0.769 0.188 70.08);
  --color-amber-600: oklch(0.666 0.179 58.318);
  --color-amber-700: oklch(0.555 0.163 48.998);
  --color-amber-800: oklch(0.473 0.137 46.201);
  --color-amber-900: oklch(0.414 0.112 45.904);
  --color-amber-950: oklch(0.279 0.077 45.635);
  --color-yellow-50: oklch(0.987 0.026 102.212);
  --color-yellow-100: oklch(0.973 0.071 103.193);
  --color-yellow-200: oklch(0.945 0.129 101.54);
  --color-yellow-300: oklch(0.905 0.182 98.111);
  --color-yellow-400: oklch(0.852 0.199 91.936);
  --color-yellow-500: oklch(0.795 0.184 86.047);
  --color-yellow-600: oklch(0.681 0.162 75.834);
  --color-yellow-700: oklch(0.554 0.135 66.442);
  --color-yellow-800: oklch(0.476 0.114 61.907);
  --color-yellow-900: oklch(0.421 0.095 57.708);
  --color-yellow-950: oklch(0.286 0.066 53.813);
  --color-lime-50: oklch(0.986 0.031 120.757);
  --color-lime-100: oklch(0.967 0.067 122.328);
  --color-lime-200: oklch(0.938 0.127 124.321);
  --color-lime-300: oklch(0.897 0.196 126.665);
  --color-lime-400: oklch(0.841 0.238 128.85);
  --color-lime-500: oklch(0.768 0.233 130.85);
  --color-lime-600: oklch(0.648 0.2 131.684);
  --color-lime-700: oklch(0.532 0.157 131.589);
  --color-lime-800: oklch(0.453 0.124 130.933);
  --color-lime-900: oklch(0.405 0.101 131.063);
  --color-lime-950: oklch(0.274 0.072 132.109);
  --color-green-50: oklch(0.982 0.018 155.826);
  --color-green-100: oklch(0.962 0.044 156.743);
  --color-green-200: oklch(0.925 0.084 155.995);
  --color-green-300: oklch(0.871 0.15 154.449);
  --color-green-400: oklch(0.792 0.209 151.711);
  --color-green-500: oklch(0.723 0.219 149.579);
  --color-green-600: oklch(0.627 0.194 149.214);
  --color-green-700: oklch(0.527 0.154 150.069);
  --color-green-800: oklch(0.448 0.119 151.328);
  --color-green-900: oklch(0.393 0.095 152.535);
  --color-green-950: oklch(0.266 0.065 152.934);
  --color-emerald-50: oklch(0.979 0.021 166.113);
  --color-emerald-100: oklch(0.95 0.052 163.051);
  --color-emerald-200: oklch(0.905 0.093 164.15);
  --color-emerald-300: oklch(0.845 0.143 164.978);
  --color-emerald-400: oklch(0.765 0.177 163.223);
  --color-emerald-500: oklch(0.696 0.17 162.48);
  --color-emerald-600: oklch(0.596 0.145 163.225);
  --color-emerald-700: oklch(0.508 0.118 165.612);
  --color-emerald-800: oklch(0.432 0.095 166.913);
  --color-emerald-900: oklch(0.378 0.077 168.94);
  --color-emerald-950: oklch(0.262 0.051 172.552);
  --color-teal-50: oklch(0.984 0.014 180.72);
  --color-teal-100: oklch(0.953 0.051 180.801);
  --color-teal-200: oklch(0.91 0.096 180.426);
  --color-teal-300: oklch(0.855 0.138 181.071);
  --color-teal-400: oklch(0.777 0.152 181.912);
  --color-teal-500: oklch(0.704 0.14 182.503);
  --color-teal-600: oklch(0.6 0.118 184.704);
  --color-teal-700: oklch(0.511 0.096 186.391);
  --color-teal-800: oklch(0.437 0.078 188.216);
  --color-teal-900: oklch(0.386 0.063 188.416);
  --color-teal-950: oklch(0.277 0.046 192.524);
  --color-cyan-50: oklch(0.984 0.019 200.873);
  --color-cyan-100: oklch(0.956 0.045 203.388);
  --color-cyan-200: oklch(0.917 0.08 205.041);
  --color-cyan-300: oklch(0.865 0.127 207.078);
  --color-cyan-400: oklch(0.789 0.154 211.53);
  --color-cyan-500: oklch(0.715 0.143 215.221);
  --color-cyan-600: oklch(0.609 0.126 221.723);
  --color-cyan-700: oklch(0.52 0.105 223.128);
  --color-cyan-800: oklch(0.45 0.085 224.283);
  --color-cyan-900: oklch(0.398 0.07 227.392);
  --color-cyan-950: oklch(0.302 0.056 229.695);
  --color-sky-50: oklch(0.977 0.013 236.62);
  --color-sky-100: oklch(0.951 0.026 236.824);
  --color-sky-200: oklch(0.901 0.058 230.902);
  --color-sky-300: oklch(0.828 0.111 230.318);
  --color-sky-400: oklch(0.746 0.16 232.661);
  --color-sky-500: oklch(0.685 0.169 237.323);
  --color-sky-600: oklch(0.588 0.158 241.966);
  --color-sky-700: oklch(0.5 0.134 242.749);
  --color-sky-800: oklch(0.443 0.11 240.79);
  --color-sky-900: oklch(0.391 0.09 240.876);
  --color-sky-950: oklch(0.293 0.066 243.157);
  --color-blue-50: oklch(0.97 0.014 254.604);
  --color-blue-100: oklch(0.932 0.032 255.585);
  --color-blue-200: oklch(0.882 0.059 254.128);
  --color-blue-300: oklch(0.809 0.105 251.813);
  --color-blue-400: oklch(0.707 0.165 254.624);
  --color-blue-500: oklch(0.623 0.214 259.815);
  --color-blue-600: oklch(0.546 0.245 262.881);
  --color-blue-700: oklch(0.488 0.243 264.376);
  --color-blue-800: oklch(0.424 0.199 265.638);
  --color-blue-900: oklch(0.379 0.146 265.522);
  --color-blue-950: oklch(0.282 0.091 267.935);
  --color-indigo-50: oklch(0.962 0.018 272.314);
  --color-indigo-100: oklch(0.93 0.034 272.788);
  --color-indigo-200: oklch(0.87 0.065 274.039);
  --color-indigo-300: oklch(0.785 0.115 274.713);
  --color-indigo-400: oklch(0.673 0.182 276.935);
  --color-indigo-500: oklch(0.585 0.233 277.117);
  --color-indigo-600: oklch(0.511 0.262 276.966);
  --color-indigo-700: oklch(0.457 0.24 277.023);
  --color-indigo-800: oklch(0.398 0.195 277.366);
  --color-indigo-900: oklch(0.359 0.144 278.697);
  --color-indigo-950: oklch(0.257 0.09 281.288);
  --color-violet-50: oklch(0.969 0.016 293.756);
  --color-violet-100: oklch(0.943 0.029 294.588);
  --color-violet-200: oklch(0.894 0.057 293.283);
  --color-violet-300: oklch(0.811 0.111 293.571);
  --color-violet-400: oklch(0.702 0.183 293.541);
  --color-violet-500: oklch(0.606 0.25 292.717);
  --color-violet-600: oklch(0.541 0.281 293.009);
  --color-violet-700: oklch(0.491 0.27 292.581);
  --color-violet-800: oklch(0.432 0.232 292.759);
  --color-violet-900: oklch(0.38 0.189 293.745);
  --color-violet-950: oklch(0.283 0.141 291.089);
  --color-purple-50: oklch(0.977 0.014 308.299);
  --color-purple-100: oklch(0.946 0.033 307.174);
  --color-purple-200: oklch(0.902 0.063 306.703);
  --color-purple-300: oklch(0.827 0.119 306.383);
  --color-purple-400: oklch(0.714 0.203 305.504);
  --color-purple-500: oklch(0.627 0.265 303.9);
  --color-purple-600: oklch(0.558 0.288 302.321);
  --color-purple-700: oklch(0.496 0.265 301.924);
  --color-purple-800: oklch(0.438 0.218 303.724);
  --color-purple-900: oklch(0.381 0.176 304.987);
  --color-purple-950: oklch(0.291 0.149 302.717);
  --color-fuchsia-50: oklch(0.977 0.017 320.058);
  --color-fuchsia-100: oklch(0.952 0.037 318.852);
  --color-fuchsia-200: oklch(0.903 0.076 319.62);
  --color-fuchsia-300: oklch(0.833 0.145 321.434);
  --color-fuchsia-400: oklch(0.74 0.238 322.16);
  --color-fuchsia-500: oklch(0.667 0.295 322.15);
  --color-fuchsia-600: oklch(0.591 0.293 322.896);
  --color-fuchsia-700: oklch(0.518 0.253 323.949);
  --color-fuchsia-800: oklch(0.452 0.211 324.591);
  --color-fuchsia-900: oklch(0.401 0.17 325.612);
  --color-fuchsia-950: oklch(0.293 0.136 325.661);
  --color-pink-50: oklch(0.971 0.014 343.198);
  --color-pink-100: oklch(0.948 0.028 342.258);
  --color-pink-200: oklch(0.899 0.061 343.231);
  --color-pink-300: oklch(0.823 0.12 346.018);
  --color-pink-400: oklch(0.718 0.202 349.761);
  --color-pink-500: oklch(0.656 0.241 354.308);
  --color-pink-600: oklch(0.592 0.249 0.584);
  --color-pink-700: oklch(0.525 0.223 3.958);
  --color-pink-800: oklch(0.459 0.187 3.815);
  --color-pink-900: oklch(0.408 0.153 2.432);
  --color-pink-950: oklch(0.284 0.109 3.907);
  --color-rose-50: oklch(0.969 0.015 12.422);
  --color-rose-100: oklch(0.941 0.03 12.58);
  --color-rose-200: oklch(0.892 0.058 10.001);
  --color-rose-300: oklch(0.81 0.117 11.638);
  --color-rose-400: oklch(0.712 0.194 13.428);
  --color-rose-500: oklch(0.645 0.246 16.439);
  --color-rose-600: oklch(0.586 0.253 17.585);
  --color-rose-700: oklch(0.514 0.222 16.935);
  --color-rose-800: oklch(0.455 0.188 13.697);
  --color-rose-900: oklch(0.41 0.159 10.272);
  --color-rose-950: oklch(0.271 0.105 12.094);
  --color-slate-50: oklch(0.984 0.003 247.858);
  --color-slate-100: oklch(0.968 0.007 247.896);
  --color-slate-200: oklch(0.929 0.013 255.508);
  --color-slate-300: oklch(0.869 0.022 252.894);
  --color-slate-400: oklch(0.704 0.04 256.788);
  --color-slate-500: oklch(0.554 0.046 257.417);
  --color-slate-600: oklch(0.446 0.043 257.281);
  --color-slate-700: oklch(0.372 0.044 257.287);
  --color-slate-800: oklch(0.279 0.041 260.031);
  --color-slate-900: oklch(0.208 0.042 265.755);
  --color-slate-950: oklch(0.129 0.042 264.695);
  --color-gray-50: oklch(0.985 0.002 247.839);
  --color-gray-100: oklch(0.967 0.003 264.542);
  --color-gray-200: oklch(0.928 0.006 264.531);
  --color-gray-300: oklch(0.872 0.01 258.338);
  --color-gray-400: oklch(0.707 0.022 261.325);
  --color-gray-500: oklch(0.551 0.027 264.364);
  --color-gray-600: oklch(0.446 0.03 256.802);
  --color-gray-700: oklch(0.373 0.034 259.733);
  --color-gray-800: oklch(0.278 0.033 256.848);
  --color-gray-900: oklch(0.21 0.034 264.665);
  --color-gray-950: oklch(0.13 0.028 261.692);
  --color-zinc-50: oklch(0.985 0 0);
  --color-zinc-100: oklch(0.967 0.001 286.375);
  --color-zinc-200: oklch(0.92 0.004 286.32);
  --color-zinc-300: oklch(0.871 0.006 286.286);
  --color-zinc-400: oklch(0.705 0.015 286.067);
  --color-zinc-500: oklch(0.552 0.016 285.938);
  --color-zinc-600: oklch(0.442 0.017 285.786);
  --color-zinc-700: oklch(0.37 0.013 285.805);
  --color-zinc-800: oklch(0.274 0.006 286.033);
  --color-zinc-900: oklch(0.21 0.006 285.885);
  --color-zinc-950: oklch(0.141 0.005 285.823);
  --color-neutral-50: oklch(0.985 0 0);
  --color-neutral-100: oklch(0.97 0 0);
  --color-neutral-200: oklch(0.922 0 0);
  --color-neutral-300: oklch(0.87 0 0);
  --color-neutral-400: oklch(0.708 0 0);
  --color-neutral-500: oklch(0.556 0 0);
  --color-neutral-600: oklch(0.439 0 0);
  --color-neutral-700: oklch(0.371 0 0);
  --color-neutral-800: oklch(0.269 0 0);
  --color-neutral-900: oklch(0.205 0 0);
  --color-neutral-950: oklch(0.145 0 0);
  --color-stone-50: oklch(0.985 0.001 106.423);
  --color-stone-100: oklch(0.97 0.001 106.424);
  --color-stone-200: oklch(0.923 0.003 48.717);
  --color-stone-300: oklch(0.869 0.005 56.366);
  --color-stone-400: oklch(0.709 0.01 56.259);
  --color-stone-500: oklch(0.553 0.013 58.071);
  --color-stone-600: oklch(0.444 0.011 73.639);
  --color-stone-700: oklch(0.374 0.01 67.558);
  --color-stone-800: oklch(0.268 0.007 34.298);
  --color-stone-900: oklch(0.216 0.006 56.043);
  --color-stone-950: oklch(0.147 0.004 49.25);
  --color-black: #000;
  --color-white: #fff;
  --spacing: 0.25rem;
  --breakpoint-sm: 40rem;
  --breakpoint-md: 48rem;
  --breakpoint-lg: 64rem;
  --breakpoint-xl: 80rem;
  --breakpoint-2xl: 96rem;
  --container-3xs: 16rem;
  --container-2xs: 18rem;
  --container-xs: 20rem;
  --container-sm: 24rem;
  --container-md: 28rem;
  --container-lg: 32rem;
  --container-xl: 36rem;
  --container-2xl: 42rem;
  --container-3xl: 48rem;
  --container-4xl: 56rem;
  --container-5xl: 64rem;
  --container-6xl: 72rem;
  --container-7xl: 80rem;
  --text-xs: 0.75rem;
  --text-xs--line-height: calc(1 / 0.75);
  --text-sm: 0.875rem;
  --text-sm--line-height: calc(1.25 / 0.875);
  --text-base: 1rem;
  --text-base--line-height: calc(1.5 / 1);
  --text-lg: 1.125rem;
  --text-lg--line-height: calc(1.75 / 1.125);
  --text-xl: 1.25rem;
  --text-xl--line-height: calc(1.75 / 1.25);
  --text-2xl: 1.5rem;
  --text-2xl--line-height: calc(2 / 1.5);
  --text-3xl: 1.875rem;
  --text-3xl--line-height: calc(2.25 / 1.875);
  --text-4xl: 2.25rem;
  --text-4xl--line-height: calc(2.5 / 2.25);
  --text-5xl: 3rem;
  --text-5xl--line-height: 1;
  --text-6xl: 3.75rem;
  --text-6xl--line-height: 1;
  --text-7xl: 4.5rem;
  --text-7xl--line-height: 1;
  --text-8xl: 6rem;
  --text-8xl--line-height: 1;
  --text-9xl: 8rem;
  --text-9xl--line-height: 1;
  --font-weight-thin: 100;
  --font-weight-extralight: 200;
  --font-weight-light: 300;
  --font-weight-normal: 400;
  --font-weight-medium: 500;
  --font-weight-semibold: 600;
  --font-weight-bold: 700;
  --font-weight-extrabold: 800;
  --font-weight-black: 900;
  --tracking-tighter: -0.05em;
  --tracking-tight: -0.025em;
  --tracking-normal: 0em;
  --tracking-wide: 0.025em;
  --tracking-wider: 0.05em;
  --tracking-widest: 0.1em;
  --leading-tight: 1.25;
  --leading-snug: 1.375;
  --leading-normal: 1.5;
  --leading-relaxed: 1.625;
  --leading-loose: 2;
  --radius-xs: 0.125rem;
  --radius-sm: 0.25rem;
  --radius-md: 0.375rem;
  --radius-lg: 0.5rem;
  --radius-xl: 0.75rem;
  --radius-2xl: 1rem;
  --radius-3xl: 1.5rem;
  --radius-4xl: 2rem;
  --shadow-2xs: 0 1px rgb(0 0 0 / 0.05);
  --shadow-xs: 0 1px 2px 0 rgb(0 0 0 / 0.05);
  --shadow-sm: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);
  --shadow-md: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
  --shadow-lg: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
  --shadow-xl: 0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1);
  --shadow-2xl: 0 25px 50px -12px rgb(0 0 0 / 0.25);
  --inset-shadow-2xs: inset 0 1px rgb(0 0 0 / 0.05);
  --inset-shadow-xs: inset 0 1px 1px rgb(0 0 0 / 0.05);
  --inset-shadow-sm: inset 0 2px 4px rgb(0 0 0 / 0.05);
  --drop-shadow-xs: 0 1px 1px rgb(0 0 0 / 0.05);
  --drop-shadow-sm: 0 1px 2px rgb(0 0 0 / 0.15);
  --drop-shadow-md: 0 3px 3px rgb(0 0 0 / 0.12);
  --drop-shadow-lg: 0 4px 4px rgb(0 0 0 / 0.15);
  --drop-shadow-xl: 0 9px 7px rgb(0 0 0 / 0.1);
  --drop-shadow-2xl: 0 25px 25px rgb(0 0 0 / 0.15);
  --blur-xs: 4px;
  --blur-sm: 8px;
  --blur-md: 12px;
  --blur-lg: 16px;
  --blur-xl: 24px;
  --blur-2xl: 40px;
  --blur-3xl: 64px;
  --perspective-dramatic: 100px;
  --perspective-near: 300px;
  --perspective-normal: 500px;
  --perspective-midrange: 800px;
  --perspective-distant: 1200px;
  --aspect-video: 16 / 9;
  --ease-in: cubic-bezier(0.4, 0, 1, 1);
  --ease-out: cubic-bezier(0, 0, 0.2, 1);
  --ease-in-out: cubic-bezier(0.4, 0, 0.2, 1);
  --animate-spin: spin 1s linear infinite;
  --animate-ping: ping 1s cubic-bezier(0, 0, 0.2, 1) infinite;
  --animate-pulse: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
  --animate-bounce: bounce 1s infinite;
  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }
  @keyframes ping {
    75%,
    100% {
      transform: scale(2);
      opacity: 0;
    }
  }
  @keyframes pulse {
    50% {
      opacity: 0.5;
    }
  }
  @keyframes bounce {
    0%,
    100% {
      transform: translateY(-25%);
      animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
    }
    50% {
      transform: none;
      animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
    }
  }
}
```

### 1-2.自定义主题

我们可以定向的**覆盖原有主题**或者**新增自定义主题**：

```css
@theme {
	/* 覆盖 */
	--spacing: 1rem;
	/* 新增 */
	--color-blue: blue;
}
```

然后我们就可以直接使用 `mt-2` 或者 `bg-blue` 等工具类。

### 1-3.自定义变量主题

如果我们想要定义的 `theme` 从全局变量中获取，那么我们可以使用 `@theme inline` 定义：

```css
:root {
	--color-blue: blue;
}

@theme inline {
	--color-blue: var(--color-blue);
}
```

## 2.Layer base

在日常开发中，我们一般会使用 [normalize.css](https://github.com/necolas/normalize.css) 来重置默认的浏览器样式。

而在 `Tailwind CSS` 中，默认提供了 `@layer base` 模块，它会在 `@import 'tailwindcss'` 中默认引入。

当然我们也可以使用 `@layer base` 来额外定义 `base` 样式：

```css
@layer base {
  h1 {
    font-size: var(--text-2xl);
  }
  h2 {
    font-size: var(--text-xl);
  }
}
```

## 3.Layer components

如果在实际业务中，部分 `components` 复用多次，那么可以考虑封装成公共 `class`：

```css
@layer components {
  .card {
    background-color: var(--color-white);
    border-radius: var(--rounded-lg);
    padding: var(--spacing-6);
    box-shadow: var(--shadow-xl);
		@apply text-center;
  }
}
```

## 4.Layer utilities

`Tailwind` 内置了一些 `utilities`，但是 `Tailwind` 也允许[自定义 `utilities`](https://tailwindcss.com/docs/adding-custom-styles#adding-custom-utilities)。

当内置 `utilities` 不满足需求，或者 `CSS` 出现了兼容问题时，我们可以创建自己的 `utilities`。

```css
@utility content-auto {
  content-visibility: auto;
}

@utility scrollbar-hidden {
  &::-webkit-scrollbar {
    display: none;
  }
}

@utility tab-* {
  tab-size: --value(--tab-size-*);
}
```

## 5.Colors

在前文中，我们已经知道了 `Tailwind` 的 `theme` 中定义了一些 `colors` 变量。

本节，我们以 `colors` 为例，总结一下 `theme` 中变量的重定义方式。

### 5-1.覆盖内置变量

```css
@import "tailwindcss";

@theme {
  --color-gray-50: oklch(0.984 0.003 247.858);
  --color-gray-100: oklch(0.968 0.007 247.896);
  --color-gray-200: oklch(0.929 0.013 255.508);
  --color-gray-300: oklch(0.869 0.022 252.894);
  --color-gray-400: oklch(0.704 0.04 256.788);
  --color-gray-500: oklch(0.554 0.046 257.417);
  --color-gray-600: oklch(0.446 0.043 257.281);
  --color-gray-700: oklch(0.372 0.044 257.287);
  --color-gray-800: oklch(0.279 0.041 260.031);
  --color-gray-900: oklch(0.208 0.042 265.755);
  --color-gray-950: oklch(0.129 0.042 264.695);
}
```

### 5-2.新增变量

```css
@import "tailwindcss";

@theme {
  --color-midnight: #121063;
  --color-tahiti: #3ab7bf;
  --color-bermuda: #78dcca;
}
```

### 5-3.禁用内置变量

禁用内置变量，只需要将变量值设置为 `initial` 即可。

```css
@import "tailwindcss";

@theme {
  --color-*: initial;

  --color-white: #fff;
  --color-purple: #3f3cbb;
  --color-midnight: #121063;
  --color-tahiti: #3ab7bf;
  --color-bermuda: #78dcca;
}
```

:::tip
`--color-*: initial;` 是禁用了所有 `color` 内置变量。

也可以使用 `--color-sky-*` 等形式来更细粒度的禁用 `color` 下的某些内置变量。
:::

## 6.Responsive design

网页响应式设计是现代化网页设计绕不开的一个话题。

值得庆幸的是，`Tailwind CSS` 默认提供了**开箱即用**的响应式设计工具。

### 6-1.媒体查询与Rem

`Tailwind` 内置了**媒体查询**和 `rem` 的结合式网页响应式设计。

1. 媒体查询需要确保 `html` 中如下 `DOM`：

```html
<meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no" />
```

2. `rem` 在浏览器默认的 `font-size` 是 `16px`

### 6-2.内置断点

`Tailwind` 内置了以下 `breakpoints`：

| `Breakpoint prefix`	| `Minimum width`	| `CSS` |
| --- | --- | --- |
|`sm`	| `40rem (640px)`	| `@media (width >= 40rem) { ... }` |
|`md`	|`48rem (768px)`	| `@media (width >= 48rem) { ... }` |
|`lg`	|`64rem (1024px)`	| `@media (width >= 64rem) { ... }` |
|`xl`	|`80rem (1280px)`	| `@media (width >= 80rem) { ... }` |
|`2xl`	|`96rem (1536px)`	| `@media (width >= 96rem) { ... }` |

从这个表格中，我们可以看出两点：

1. 内置 `5` 个媒体查询断点，分别对应 `sm`、`md`、`lg`、`xl` 和 `2xl`。
2. [Working mobile-first](https://tailwindcss.com/docs/responsive-design#working-mobile-first) **移动端优先**，也就是说我们在使用 `Tailwind CSS` 时，设置的样式默认是在 `sm` 以下的样式。

如果我们想要设置 `sm`、`md`、`lg`、`xl`、`2xl` 以上的样式，那么我们需要使用 `varient` 来设置：

```html
<div class="bg-red-100 sm:bg-red-200 md:bg-red-300 lg:bg-red-400 xl:bg-red-500 2xl:bg-red-600"></div>
```

如果想要更新粒度的来控制响应式设计，譬如想要在 `sm-lg` 之间设置，那么可以使用 `max-*`：

```html
<div class="bg-red-100 sm:max-lg:bg-red-500"></div>
```

完全的 `max-*` 设置见下表：

|`Variant`| 	`Media query`|
|------| 	----------|
|`max-sm`|	`@media (width < 40rem) { ... }`|
|`max-md`|	`@media (width < 48rem) { ... }`|
|`max-lg`|	`@media (width < 64rem) { ... }`|
|`max-xl`|	`@media (width < 80rem) { ... }`|
|`max-2xl`|	`@media (width < 96rem) { ... }`|

### 6-3.自定义断点

我们可以使用 `--breakpoint-*` 来自定义断点：

```css
@import "tailwindcss";

@theme {
  --breakpoint-xs: 30rem;
  --breakpoint-2xl: 100rem;
  --breakpoint-3xl: 120rem;
}
```

如果需要使用没有意义的一次性断点，则可以使用 `min` 或 `max` 变量，使用任意值动态生成自定义断点：

```html
<div class="max-[600px]:bg-sky-300 min-[320px]:text-center">
  <!-- ... -->
</div>
```

### 6-4.容器查询

[容器查询](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_containment/Container_queries)是现代化浏览器的新特性。

它允许**根据父元素的大小（而不是整个视口的大小）**来设置样式。

媒体查询的语句是 `@media`，而容器查询的语句是 `@container`。

在 `Tailwind` 中，可以直接这样使用：

```html
<div class="@container">
  <div class="flex flex-col @md:flex-row @8xl:bg-sky-500">
    <!-- ... -->
  </div>
</div>
```

同样的，需要设定断点范围时，容器查询可以使用 `@min-*` 和 `@max-*`。

但不同于媒体查询的 `--breakpoint-*`，容器查询提供了 `--container-*` 样式变量：

```css
@theme {
	--container-3xs: 16rem;
  --container-2xs: 18rem;
  --container-xs: 20rem;
  --container-sm: 24rem;
  --container-md: 28rem;
  --container-lg: 32rem;
  --container-xl: 36rem;
  --container-2xl: 42rem;
  --container-3xl: 48rem;
  --container-4xl: 56rem;
  --container-5xl: 64rem;
  --container-6xl: 72rem;
  --container-7xl: 80rem;
}
```

对于使用多个嵌套容器的复杂设计，可以使用 `@container/{name}` 命名容器，譬如 `@sm/{name}` 和 `@md/{name}` 等：

```html
<div class="@container/main">
  <!-- ... -->
  <div class="flex flex-row @sm/main:flex-col">
    <!-- ... -->
  </div>
</div>
```

## 7.Variants

`Tailwind` 中的每个实用程序类都可以通过**在类名的开头添加一个变体来有条件地应用**，该变体描述了想要针对的条件。

内置变体如下：

1. `Pseudo-classes` **伪类**，譬如 `:hover` 、 `:focus` 、 `:first-child` 和 `:required`；
2. `Pseudo-elements` **伪元素**，譬如 `::before` 、 `::after` 、 `::selection` 和 `::placeholder`；
3. `Media and feature queries` **媒体和功能查询**，譬如响应断点、暗模式和 `prefers-reduced-motion`；
4. `Attribute selectors` **属性选择器**，譬如 `[dir="rtl"]` 和 `[open]`；
5. `Child selectors` **子选择器**，譬如 `& > *` 和 `& *`。

### 7-1.Pseudo-classes

伪类[Pseudo-classes](https://tailwindcss.com/docs/hover-focus-and-other-states#pseudo-classes)

### 7-2.Pseudo-elements

伪元素[Pseudo-elements](https://tailwindcss.com/docs/hover-focus-and-other-states#pseudo-elements)

### 7-3.Media and feature queries

媒体和功能查询[Media and feature queries](https://tailwindcss.com/docs/hover-focus-and-other-states#media-and-feature-queries)

### 7-4.Attribute selectors

属性选择器[Attribute selectors](https://tailwindcss.com/docs/hover-focus-and-other-states#attribute-selectors)

### 7-5.Child selectors

子选择器[Child selectors](https://tailwindcss.com/docs/hover-focus-and-other-states#child-selectors)

### ps.Custom variants

此处重点记录下自定义变体[Custom variants](https://tailwindcss.com/docs/hover-focus-and-other-states#custom-variants)。

**任意变体**的用法与**任意值**[arbitrary values](https://tailwindcss.com/docs/adding-custom-styles#using-arbitrary-values)的用法类似。

**任意变体只是用方括号括起来的表示选择器的格式字符串**。

例如，当元素具有 `is-dragging` 类时，以下任意变体会将光标更改为 `grabbing` ：

```html
<ul role="list">
  {#each items as item}
    <li class="[&.is-dragging]:cursor-grabbing">{item}</li>
  {/each}
</ul>
```

如果选择器中需要空格，可以使用下划线。例如，以下任意变体将选择添加了该类的元素内的所有 `p` 元素：

```html
<div class="[&_p]:mt-4">
  <p>Lorem ipsum...</p>
  <ul>
    <li>
      <p>Lorem ipsum...</p>
    </li>
    <!-- ... -->
  </ul>
</div>
```

如果在项目中多次使用相同的任意变体，则可能值得使用 `@custom-variant` 指令创建自定义变体：

```css
@custom-variant theme-midnight (&:where([data-theme="midnight"] *));
```

然后这样使用：

```html
<html data-theme="midnight">
  <button class="theme-midnight:bg-black ..."></button>
</html>
```

## 8.Directives

### 8-1.@import

[@import](https://tailwindcss.com/docs/functions-and-directives#import-directive) 用来引入样式文件或者 `tailwindcss` 预设样式。

```css
@import 'tailwindcss';
```

它其实等同于：

```css
@layer theme, base, components, utilities;

@import "./theme.css" layer(theme);
@import "./preflight.css" layer(base);
@import "./utilities.css" layer(utilities);
```

### 8-2.@theme

[@theme](https://tailwindcss.com/docs/functions-and-directives#theme-directive) 用来定义全局样式变量。

```css
@theme {
  --font-display: "Satoshi", "sans-serif";
  --breakpoint-3xl: 120rem;
  --color-red-50: oklch(0.971 0.013 17.38);
  --color-red-100: oklch(0.936 0.032 17.717);
  --color-red-200: oklch(0.885 0.062 18.334);
  --color-red-300: oklch(0.808 0.114 19.571);
  --color-red-400: oklch(0.704 0.191 22.216);
  --color-red-500: oklch(0.637 0.237 25.331);
  --color-red-600: oklch(0.577 0.245 27.325);
  --color-red-700: oklch(0.505 0.213 27.518);
  --color-red-800: oklch(0.444 0.177 26.899);
  --color-red-900: oklch(0.396 0.141 25.723);
  --color-red-950: oklch(0.258 0.092 26.042);
  /* ... */
}
```

### 8-3.@layer

`@layer` 用来定义样式的层级，支持如下值：

1. `@layer base`：**基础样式**，用来处理样式的初始化，可以理解成 `reset` 样式。
2. `@layer components`：**组件样式**，用来自定义 `class`。
3. `@layer utilities`：**工具样式**，用来自定义工具类。

:::tip
不支持使用 `@layer theme`，会存在问题，请直接使用 `@theme`。
:::

### 8-4.@source

[@source](https://tailwindcss.com/docs/functions-and-directives#source-directive)用来定义依赖样式的来源。

`tailwindcss` 默认会根据[内置的规则](https://tailwindcss.com/docs/detecting-classes-in-source-files)来解析文件，从而获取到对应的样式设置。

**内置的规则解析，默认是不包含 `node_modules` 中的文件的**。

假设我们在开发中使用了 `node_modules` 下某一依赖库提供的 `tailwindcss` 样式，那么我们使用 `@source` 来引入该样式来源。

```css
@source "../node_modules/@my-company/ui-lib";
```

### 8-5.@utility

[@utility](https://tailwindcss.com/docs/functions-and-directives#utility-directive) 可以用来自定义工具类样式。

```css
@utility content-auto {
  content-visibility: auto;
}

@utility scrollbar-hidden {
  &::-webkit-scrollbar {
    display: none;
  }
}

@utility tab-* {
  tab-size: --value(--tab-size-*);
}
```

### 8-6.@variant

[@variant](https://tailwindcss.com/docs/functions-and-directives#variant-directive) 可以在 `css` 中引用变体。

```css
.my-element {
  background: white;
  @variant dark {
    background: black;
  }
}
```

### 8-7.@custom-variant

[@custom-variant](https://tailwindcss.com/docs/functions-and-directives#custom-variant-directive) 可以自定义变体。

```css
@custom-variant theme-midnight (&:where([data-theme="midnight"] *));
```

### 8-8.@apply

[@apply](https://tailwindcss.com/docs/functions-and-directives#apply-directive) 可以在 `css` 中引用工具类样式。

```css
.select2-dropdown {
  @apply rounded-b-lg shadow-md;
}
.select2-search {
  @apply rounded border border-gray-300;
}
.select2-results__group {
  @apply text-lg font-bold text-gray-900;
}
```

### 8-9.@reference

[@reference](https://tailwindcss.com/docs/functions-and-directives#reference-directive) 用来在 `CSS modules` 中声明样式引用。

譬如在 `Vue` 的 `SFC` 中：

```vue
<template>
  <h1>Hello world!</h1>
</template>
<style>
  @reference "../../app.css";
  h1 {
    @apply text-2xl font-bold text-red-500;
  }
</style>
```

## 9.Functions

`Tailwind` 提供内置的函数来更方便的调整颜色 `color` 和间距 `spacing`。

### 9-1.--alpha()

`--alpha()` 函数用于设置透明度。

```css
.my-element {
  color: --alpha(var(--color-lime-300) / 50%);
}
```

### 9-2.--spacing()

`--spacing()` 函数用于设置间距。

```css
.my-element {
  margin: --spacing(4);
}
```

编译后的结果如下：

```css
.my-element {
  margin: calc(var(--spacing) * 4);
}
```

