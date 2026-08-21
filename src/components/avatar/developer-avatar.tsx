"use client";

import { motion } from "framer-motion";

export function DeveloperAvatar() {
  return (
    <motion.svg
      viewBox="0 0 420 460"
      className="h-full w-full drop-shadow-[0_30px_60px_rgba(5,7,11,0.25)]"
      animate={{ y: [0, -10, 0] }}
      transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
    >
      <defs>
        <linearGradient id="skin" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#f6d2a8" />
          <stop offset="100%" stopColor="#e7b083" />
        </linearGradient>
        <linearGradient id="hair" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#2a2f3d" />
          <stop offset="100%" stopColor="#12151d" />
        </linearGradient>
        <linearGradient id="hoodie" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#242a38" />
          <stop offset="100%" stopColor="#12151d" />
        </linearGradient>
        <linearGradient id="pants" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#2e3444" />
          <stop offset="100%" stopColor="#1a1e29" />
        </linearGradient>
        <linearGradient id="pantsAlt" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#252b39" />
          <stop offset="100%" stopColor="#151822" />
        </linearGradient>
        <linearGradient id="backpack" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#39415a" />
          <stop offset="100%" stopColor="#1f2432" />
        </linearGradient>
        <linearGradient id="screen" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#4f8bff" />
          <stop offset="100%" stopColor="#7dd3fc" />
        </linearGradient>
        <radialGradient id="lens" cx="0.3" cy="0.3" r="0.9">
          <stop offset="0%" stopColor="#bcd8ff" stopOpacity="0.55" />
          <stop offset="100%" stopColor="#4f8bff" stopOpacity="0.18" />
        </radialGradient>
        <filter id="soft-shadow" x="-40%" y="-40%" width="180%" height="180%">
          <feGaussianBlur in="SourceAlpha" stdDeviation="6" result="blur" />
          <feOffset in="blur" dx="0" dy="8" result="offsetBlur" />
          <feComponentTransfer in="offsetBlur" result="shadow">
            <feFuncA type="linear" slope="0.25" />
          </feComponentTransfer>
          <feMerge>
            <feMergeNode in="shadow" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* ground shadow */}
      <ellipse cx="210" cy="432" rx="132" ry="16" fill="#05070b" opacity="0.16" />

      {/* backpack */}
      <rect x="112" y="238" width="76" height="104" rx="26" fill="url(#backpack)" />
      <rect x="132" y="256" width="36" height="44" rx="12" fill="#12151d" opacity="0.35" />
      <rect x="122" y="230" width="20" height="26" rx="8" fill="url(#backpack)" />
      <rect x="168" y="230" width="20" height="26" rx="8" fill="url(#backpack)" />

      {/* crossed legs */}
      <rect x="80" y="345" width="150" height="40" rx="20" fill="url(#pants)" transform="rotate(-16 155 365)" />
      <rect x="190" y="345" width="150" height="40" rx="20" fill="url(#pantsAlt)" transform="rotate(16 265 365)" />
      <rect x="70" y="368" width="46" height="26" rx="12" fill="#0e1015" transform="rotate(-10 93 381)" />
      <rect x="304" y="368" width="46" height="26" rx="12" fill="#0e1015" transform="rotate(10 327 381)" />

      {/* laptop */}
      <g filter="url(#soft-shadow)">
        <rect x="138" y="336" width="146" height="12" rx="6" fill="#181c26" />
        <rect x="150" y="266" width="120" height="76" rx="10" fill="#12151d" transform="rotate(-3 210 304)" />
        <rect x="158" y="274" width="104" height="58" rx="6" fill="url(#screen)" opacity="0.92" transform="rotate(-3 210 304)" />
        <g transform="rotate(-3 210 304)" opacity="0.85">
          <rect x="166" y="283" width="46" height="4" rx="2" fill="#eaf4ff" opacity="0.85" />
          <rect x="166" y="293" width="70" height="4" rx="2" fill="#eaf4ff" opacity="0.65" />
          <rect x="166" y="303" width="34" height="4" rx="2" fill="#eaf4ff" opacity="0.7" />
          <rect x="166" y="313" width="58" height="4" rx="2" fill="#eaf4ff" opacity="0.5" />
        </g>
      </g>

      {/* mug */}
      <g>
        <path d="M332 358 q14 0 14 12 q0 6 -6 6" fill="none" stroke="#e7b083" strokeWidth="5" strokeLinecap="round" />
        <rect x="304" y="352" width="30" height="30" rx="6" fill="#f5f1ea" />
        <ellipse cx="319" cy="352" rx="15" ry="4" fill="#e2ddd2" />
      </g>

      {/* torso / hoodie */}
      <rect x="148" y="206" width="128" height="140" rx="46" fill="url(#hoodie)" />
      <path d="M178 216 q32 -22 64 0 l0 26 q-32 -16 -64 0 z" fill="#1a1e29" opacity="0.6" />
      <circle cx="210" cy="252" r="3.5" fill="#4f8bff" opacity="0.8" />
      <circle cx="210" cy="268" r="3.5" fill="#4f8bff" opacity="0.6" />

      {/* sleeves + hands */}
      <rect x="150" y="238" width="34" height="78" rx="17" fill="url(#hoodie)" transform="rotate(18 167 277)" />
      <rect x="236" y="238" width="34" height="78" rx="17" fill="url(#hoodie)" transform="rotate(-18 253 277)" />
      <circle cx="182" cy="308" r="15" fill="url(#skin)" />
      <circle cx="238" cy="308" r="15" fill="url(#skin)" />

      {/* watch */}
      <rect x="170" y="300" width="18" height="10" rx="4" fill="#0e1015" transform="rotate(18 179 305)" />
      <circle cx="179" cy="305" r="6" fill="#4f8bff" opacity="0.85" transform="rotate(18 179 305)" />

      {/* head */}
      <circle cx="210" cy="150" r="60" fill="url(#skin)" />

      {/* ears */}
      <circle cx="152" cy="154" r="9" fill="url(#skin)" />
      <circle cx="268" cy="154" r="9" fill="url(#skin)" />

      {/* hair */}
      <path
        d="M148 140
           Q140 70 210 66
           Q280 70 272 140
           Q266 108 236 100
           Q246 118 236 122
           Q216 96 200 112
           Q206 96 188 104
           Q178 116 184 128
           Q160 118 148 140 Z"
        fill="url(#hair)"
      />
      <path d="M150 132 Q146 158 158 176" stroke="url(#hair)" strokeWidth="16" strokeLinecap="round" fill="none" />
      <path d="M270 132 Q274 158 262 176" stroke="url(#hair)" strokeWidth="16" strokeLinecap="round" fill="none" />

      {/* glasses */}
      <rect x="176" y="144" width="34" height="24" rx="10" fill="url(#lens)" stroke="#12151d" strokeWidth="3" />
      <rect x="210" y="144" width="34" height="24" rx="10" fill="url(#lens)" stroke="#12151d" strokeWidth="3" />
      <rect x="209" y="152" width="4" height="4" fill="#12151d" />
      <path d="M176 152 q-10 -4 -16 2" stroke="#12151d" strokeWidth="3" fill="none" strokeLinecap="round" />
      <path d="M244 152 q10 -4 16 2" stroke="#12151d" strokeWidth="3" fill="none" strokeLinecap="round" />

      {/* eyebrows */}
      <path d="M182 138 q10 -5 20 0" stroke="#12151d" strokeWidth="3.5" fill="none" strokeLinecap="round" />
      <path d="M216 138 q10 -5 20 0" stroke="#12151d" strokeWidth="3.5" fill="none" strokeLinecap="round" />

      {/* mouth + cheeks */}
      <path d="M196 182 q14 12 28 0" stroke="#8a4b30" strokeWidth="3.5" fill="none" strokeLinecap="round" />
      <circle cx="176" cy="172" r="7" fill="#f2a688" opacity="0.35" />
      <circle cx="244" cy="172" r="7" fill="#f2a688" opacity="0.35" />
    </motion.svg>
  );
}
