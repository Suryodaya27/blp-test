"use client";
import React, { useState } from 'react';
import mainImage from '@/public/assets/background-image.png';
import Image from "next/image";

const fallbackSVG = (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1920 1080" className="w-full h-full"
    preserveAspectRatio="xMidYMid slice">
    <defs>
      <pattern id="a" width={20} height={20} patternUnits="userSpaceOnUse">
        <path
          fill="none"
          stroke="rgba(41, 128, 185, 0.15)"
          strokeWidth={0.5}
          d="M20 0H0v20"
        />
      </pattern>
      <pattern id="c" width={100} height={100} patternUnits="userSpaceOnUse">
        <path fill="url(#a)" d="M0 0h100v100H0z" />
        <path fill="none" stroke="rgba(41, 128, 185, 0.3)" d="M100 0H0v100" />
      </pattern>
      <pattern id="d" width={200} height={200} patternUnits="userSpaceOnUse">
        <circle
          cx={100}
          cy={100}
          r={80}
          fill="none"
          stroke="rgba(41, 128, 185, 0.1)"
          strokeWidth={0.5}
        />
        <circle
          cx={100}
          cy={100}
          r={40}
          fill="none"
          stroke="rgba(41, 128, 185, 0.15)"
          strokeWidth={0.5}
        />
      </pattern>
      <radialGradient id="b" cx="50%" cy="50%" r="50%">
        <stop
          offset="0%"
          style={{
            stopColor: "rgba(13,37,63,.8)",
            stopOpacity: 1,
          }}
        />
        <stop
          offset="100%"
          style={{
            stopColor: "#050f19",
            stopOpacity: 1,
          }}
        />
      </radialGradient>
    </defs>
    <path fill="#0a1929" d="M0 0h1920v1080H0z" />
    <path fill="url(#b)" d="M0 0h1920v1080H0z" />
    <path fill="url(#c)" d="M0 0h1920v1080H0z" />
    <path fill="url(#d)" d="M0 0h1920v1080H0z" opacity={0.3} />
    <g opacity={0.4}>
      <path
        stroke="rgba(52, 152, 219, 0.5)"
        strokeWidth={2}
        d="M0 0h300M0 0v300"
      />
      <circle
        cx={50}
        cy={50}
        r={40}
        fill="none"
        stroke="rgba(52, 152, 219, 0.3)"
      />
      <circle
        cx={50}
        cy={50}
        r={30}
        fill="none"
        stroke="rgba(52, 152, 219, 0.3)"
        strokeWidth={0.5}
      />
      <path
        stroke="rgba(52, 152, 219, 0.3)"
        strokeWidth={0.5}
        d="M50 10v80M10 50h80"
      />
    </g>
    <g opacity={0.4}>
      <path
        stroke="rgba(52, 152, 219, 0.5)"
        strokeWidth={2}
        d="M1920 1080h-300M1920 1080V780"
      />
      <circle
        cx={1870}
        cy={1030}
        r={40}
        fill="none"
        stroke="rgba(52, 152, 219, 0.3)"
      />
      <circle
        cx={1870}
        cy={1030}
        r={30}
        fill="none"
        stroke="rgba(52, 152, 219, 0.3)"
        strokeWidth={0.5}
      />
      <path
        stroke="rgba(52, 152, 219, 0.3)"
        strokeWidth={0.5}
        d="M1870 990v80M1830 1030h80"
      />
    </g>
    <g
      stroke="rgba(52, 152, 219, 0.4)"
      strokeDasharray="5,5"
      strokeWidth={0.5}
      opacity={0.2}
    >
      <path d="M0 300 300 0M1920 780l-300 300" />
    </g>
    <g
      fill="none"
      stroke="rgba(52, 152, 219, 0.3)"
      strokeWidth={0.5}
      opacity={0.15}
    >
      <circle cx={960} cy={540} r={200} />
      <circle cx={960} cy={540} r={150} />
      <circle cx={960} cy={540} r={100} />
    </g>
    <g strokeWidth={0.5} opacity={0.25}>
      <path
        fill="none"
        stroke="rgba(52, 152, 219, 0.4)"
        d="M1700 100h80v80h-80z"
      />
      <path
        stroke="rgba(52, 152, 219, 0.3)"
        d="m1700 100 80 80M1780 100l-80 80"
      />
      <path
        fill="none"
        stroke="rgba(52, 152, 219, 0.4)"
        d="M140 900h80v80h-80z"
      />
      <path
        stroke="rgba(52, 152, 219, 0.3)"
        d="m140 900 80 80M220 900l-80 80"
      />
    </g>
    <g opacity={0.3}>
      <circle cx={200} cy={400} r={4} fill="rgba(52, 152, 219, 0.8)" />
      <circle cx={280} cy={350} r={4} fill="rgba(52, 152, 219, 0.8)" />
      <circle cx={320} cy={450} r={4} fill="rgba(52, 152, 219, 0.8)" />
      <circle cx={250} cy={500} r={4} fill="rgba(52, 152, 219, 0.8)" />
      <circle cx={150} cy={480} r={4} fill="rgba(52, 152, 219, 0.8)" />
      <circle cx={180} cy={550} r={4} fill="rgba(52, 152, 219, 0.8)" />
      <circle cx={300} cy={520} r={4} fill="rgba(52, 152, 219, 0.8)" />
      <path
        stroke="rgba(52, 152, 219, 0.4)"
        d="m200 400 80-50M200 400l120 50M200 400l-50 80M280 350l40 100M320 450l-70 50M320 450l-20 70M250 500l-70 50M150 480l30 70M250 500l50 20"
      />
    </g>
    <g opacity={0.3}>
      <circle cx={1650} cy={600} r={4} fill="rgba(52, 152, 219, 0.8)" />
      <circle cx={1720} cy={550} r={4} fill="rgba(52, 152, 219, 0.8)" />
      <circle cx={1780} cy={620} r={4} fill="rgba(52, 152, 219, 0.8)" />
      <circle cx={1700} cy={700} r={4} fill="rgba(52, 152, 219, 0.8)" />
      <circle cx={1600} cy={680} r={4} fill="rgba(52, 152, 219, 0.8)" />
      <circle cx={1750} cy={750} r={4} fill="rgba(52, 152, 219, 0.8)" />
      <path
        stroke="rgba(52, 152, 219, 0.4)"
        d="m1650 600 70-50M1720 550l60 70M1650 600l130 20M1780 620l-80 80M1700 700l-100-20M1600 680l50-80M1700 700l50 50"
      />
    </g>
    <g opacity={0.2}>
      <path
        fill="none"
        stroke="rgba(52, 152, 219, 0.5)"
        strokeDasharray="10,5"
        strokeWidth={2}
        d="m400 800 100-50 100-30 100-40"
      />
      <circle cx={400} cy={800} r={6} fill="rgba(52, 152, 219, 0.6)" />
      <circle cx={500} cy={750} r={5} fill="rgba(52, 152, 219, 0.6)" />
      <circle cx={600} cy={720} r={5} fill="rgba(52, 152, 219, 0.6)" />
      <circle cx={700} cy={680} r={5} fill="rgba(52, 152, 219, 0.6)" />
      <path fill="rgba(52, 152, 219, 0.6)" d="m700 680 10 10 10-25-15 10z" />
    </g>
    <g opacity={0.25}>
      <circle cx={1400} cy={300} r={3} fill="rgba(52, 152, 219, 0.7)" />
      <circle cx={1450} cy={280} r={2.5} fill="rgba(52, 152, 219, 0.7)" />
      <circle cx={1420} cy={340} r={3} fill="rgba(52, 152, 219, 0.7)" />
      <circle cx={1480} cy={320} r={2.5} fill="rgba(52, 152, 219, 0.7)" />
      <circle cx={1440} cy={360} r={3} fill="rgba(52, 152, 219, 0.7)" />
      <circle cx={1500} cy={290} r={2.5} fill="rgba(52, 152, 219, 0.7)" />
      <path
        fill="none"
        stroke="rgba(52, 152, 219, 0.4)"
        strokeDasharray="3,3"
        strokeWidth={1.5}
        d="M1400 300q40 10 100-10"
      />
    </g>
    <g opacity={0.25}>
      <circle cx={500} cy={200} r={8} fill="rgba(52, 152, 219, 0.8)" />
      <circle cx={450} cy={150} r={4} fill="rgba(52, 152, 219, 0.6)" />
      <circle cx={550} cy={150} r={4} fill="rgba(52, 152, 219, 0.6)" />
      <circle cx={580} cy={200} r={4} fill="rgba(52, 152, 219, 0.6)" />
      <circle cx={550} cy={250} r={4} fill="rgba(52, 152, 219, 0.6)" />
      <circle cx={450} cy={250} r={4} fill="rgba(52, 152, 219, 0.6)" />
      <circle cx={420} cy={200} r={4} fill="rgba(52, 152, 219, 0.6)" />
      <path
        stroke="rgba(52, 152, 219, 0.4)"
        strokeWidth={1.5}
        d="m500 200-50-50M500 200l50-50M500 200h80M500 200l50 50M500 200l-50 50M500 200h-80"
      />
    </g>
    <g opacity={0.2}>
      <path
        fill="none"
        stroke="rgba(52, 152, 219, 0.5)"
        strokeWidth={1.5}
        d="M1200 850h100l-20 100h-60Z"
      />
      <path stroke="rgba(52, 152, 219, 0.4)" d="M1210 880h80M1220 910h60" />
      <circle cx={1250} cy={970} r={5} fill="rgba(52, 152, 219, 0.6)" />
    </g>
    <g opacity={0.15}>
      <circle
        cx={850}
        cy={250}
        r={60}
        fill="none"
        stroke="rgba(52, 152, 219, 0.4)"
      >
        <animate
          attributeName="r"
          dur="3s"
          from={40}
          repeatCount="indefinite"
          to={80}
        />
        <animate
          attributeName="opacity"
          dur="3s"
          from={0.6}
          repeatCount="indefinite"
          to={0}
        />
      </circle>
      <circle
        cx={850}
        cy={250}
        r={40}
        fill="none"
        stroke="rgba(52, 152, 219, 0.6)"
      >
        <animate
          attributeName="r"
          begin="1s"
          dur="3s"
          from={30}
          repeatCount="indefinite"
          to={70}
        />
        <animate
          attributeName="opacity"
          begin="1s"
          dur="3s"
          from={0.8}
          repeatCount="indefinite"
          to={0}
        />
      </circle>
      <circle cx={850} cy={250} r={10} fill="rgba(52, 152, 219, 0.8)" />
    </g>
    <g opacity={0.25}>
      <path
        fill="none"
        stroke="rgba(52, 152, 219, 0.5)"
        strokeDasharray="5,10"
        strokeWidth={2}
        d="M100 700q100-50 200 0"
      >
        <animate
          attributeName="stroke-dashoffset"
          dur="2s"
          from={0}
          repeatCount="indefinite"
          to={15}
        />
      </path>
      <circle cx={100} cy={700} r={4} fill="rgba(52, 152, 219, 0.7)" />
      <circle cx={300} cy={700} r={4} fill="rgba(52, 152, 219, 0.7)" />
      <path
        fill="none"
        stroke="rgba(52, 152, 219, 0.5)"
        strokeDasharray="5,10"
        strokeWidth={2}
        d="M1600 400q-100-50-200 0"
      >
        <animate
          attributeName="stroke-dashoffset"
          dur="2s"
          from={0}
          repeatCount="indefinite"
          to={15}
        />
      </path>
      <circle cx={1600} cy={400} r={4} fill="rgba(52, 152, 219, 0.7)" />
      <circle cx={1400} cy={400} r={4} fill="rgba(52, 152, 219, 0.7)" />
    </g>
    <g opacity={0.2}>
      <circle
        cx={1100}
        cy={300}
        r={50}
        fill="none"
        stroke="rgba(52, 152, 219, 0.4)"
      />
      <circle
        cx={1100}
        cy={300}
        r={35}
        fill="none"
        stroke="rgba(52, 152, 219, 0.5)"
      />
      <circle
        cx={1100}
        cy={300}
        r={20}
        fill="none"
        stroke="rgba(52, 152, 219, 0.6)"
      />
      <circle cx={1100} cy={300} r={8} fill="rgba(52, 152, 219, 0.7)" />
      <path
        stroke="rgba(52, 152, 219, 0.4)"
        strokeWidth={0.5}
        d="M1050 300h100M1100 250v100"
      />
    </g>
    <g
      fill="none"
      stroke="rgba(52, 152, 219, 0.4)"
      strokeWidth={0.8}
      opacity={0.15}
    >
      <path d="M800 900h30l15 26-15 26h-30l-15-26zM860 900h30l15 26-15 26h-30l-15-26zM830 952h30l15 26-15 26h-30l-15-26zM890 952h30l15 26-15 26h-30l-15-26z" />
    </g>
    <g opacity={0.2}>
      <path
        fill="rgba(52, 152, 219, 0.3)"
        stroke="rgba(52, 152, 219, 0.5)"
        d="M1450 850h20l-5-50h-10Z"
      />
      <circle cx={1460} cy={795} r={3} fill="rgba(52, 152, 219, 0.8)" />
      <path
        fill="none"
        stroke="rgba(52, 152, 219, 0.4)"
        d="M1440 810q-10-15 0-30M1480 810q10-15 0-30"
      />
      <path
        fill="none"
        stroke="rgba(52, 152, 219, 0.3)"
        d="M1425 820q-15-25 0-50M1495 820q15-25 0-50"
      />
    </g>
    <g opacity={0.25}>
      <path
        fill="rgba(52, 152, 219, 0.2)"
        stroke="rgba(52, 152, 219, 0.4)"
        strokeWidth={0.5}
        d="M100 250h150v4H100z"
      />
      <path fill="rgba(52, 152, 219, 0.6)" d="M100 250h110v4H100z" />
      <path
        fill="rgba(52, 152, 219, 0.2)"
        stroke="rgba(52, 152, 219, 0.4)"
        strokeWidth={0.5}
        d="M100 270h150v4H100z"
      />
      <path fill="rgba(52, 152, 219, 0.6)" d="M100 270h135v4H100z" />
      <path
        fill="rgba(52, 152, 219, 0.2)"
        stroke="rgba(52, 152, 219, 0.4)"
        strokeWidth={0.5}
        d="M100 290h150v4H100z"
      />
      <path fill="rgba(52, 152, 219, 0.6)" d="M100 290h90v4h-90z" />
    </g>
    <g opacity={0.2}>
      <path
        fill="none"
        stroke="rgba(52, 152, 219, 0.5)"
        strokeWidth={2}
        d="M1700 900q20 20 40 0t40 0"
      />
      <path
        fill="none"
        stroke="rgba(52, 152, 219, 0.5)"
        strokeWidth={2}
        d="M1700 910q20-20 40 0t40 0"
      />
      <path stroke="rgba(52, 152, 219, 0.4)" d="M1750 905" />
    </g>
    <g fill="rgba(52, 152, 219, 0.8)" opacity={0.3}>
      <circle cx={600} cy={500} r={2}>
        <animateTransform
          attributeName="transform"
          dur="4s"
          repeatCount="indefinite"
          type="translate"
          values="0,0; 10,-20; 0,0"
        />
      </circle>
      <circle cx={1300} cy={600} r={2}>
        <animateTransform
          attributeName="transform"
          dur="5s"
          repeatCount="indefinite"
          type="translate"
          values="0,0; -15,15; 0,0"
        />
      </circle>
      <circle cx={950} cy={800} r={2}>
        <animateTransform
          attributeName="transform"
          dur="6s"
          repeatCount="indefinite"
          type="translate"
          values="0,0; 20,10; 0,0"
        />
      </circle>
    </g>
    <g opacity={0.25}>
      <path
        fill="none"
        stroke="rgba(52, 152, 219, 0.6)"
        d="m350 600 5 15h16l-13 9 5 15-13-9-13 9 5-15-13-9h16z"
      />
      <circle cx={350} cy={608} r={2} fill="rgba(52, 152, 219, 0.7)" />
      <path
        fill="none"
        stroke="rgba(52, 152, 219, 0.6)"
        d="m1550 480 4 12h13l-10 7 4 12-10-7-10 7 4-12-10-7h13z"
      />
      <circle cx={1550} cy={486} r={2} fill="rgba(52, 152, 219, 0.7)" />
      <path
        fill="none"
        stroke="rgba(52, 152, 219, 0.6)"
        d="m750 150 4 12h13l-10 7 4 12-10-7-10 7 4-12-10-7h13z"
      />
      <circle cx={750} cy={156} r={2} fill="rgba(52, 152, 219, 0.7)" />
    </g>
    <g opacity={0.3}>
      <path
        fill="rgba(52, 152, 219, 0.5)"
        stroke="rgba(52, 152, 219, 0.6)"
        d="m1250 500 30-15v30Z"
      />
      <path
        fill="rgba(52, 152, 219, 0.5)"
        stroke="rgba(52, 152, 219, 0.6)"
        d="M1245 495h10v10h-10z"
      />
      <path
        fill="none"
        stroke="rgba(52, 152, 219, 0.5)"
        strokeWidth={1.5}
        d="M1280 490q30-10 40-15M1280 500h50M1280 510q30 10 40 15"
      />
    </g>
    <g opacity={0.2}>
      <rect
        width={30}
        height={30}
        x={550}
        y={850}
        fill="none"
        stroke="rgba(52, 152, 219, 0.5)"
        strokeWidth={1.5}
        rx={8}
      />
      <circle
        cx={565}
        cy={865}
        r={8}
        fill="none"
        stroke="rgba(52, 152, 219, 0.5)"
        strokeWidth={1.5}
      />
      <circle cx={574} cy={856} r={2} fill="rgba(52, 152, 219, 0.6)" />
      <circle
        cx={650}
        cy={865}
        r={15}
        fill="none"
        stroke="rgba(52, 152, 219, 0.5)"
        strokeWidth={1.5}
      />
      <path fill="rgba(52, 152, 219, 0.5)" d="M645 858v14l13-7Z" />
    </g>
    <g stroke="rgba(52, 152, 219, 0.5)" strokeWidth={2} opacity={0.25}>
      <path d="m400 120 20 60M430 120l20 60M390 140h70M385 160h70" />
    </g>
    <g opacity={0.3}>
      <ellipse
        cx={1350}
        cy={180}
        fill="none"
        stroke="rgba(52, 152, 219, 0.5)"
        strokeWidth={1.5}
        rx={30}
        ry={18}
      />
      <circle
        cx={1350}
        cy={180}
        r={8}
        fill="none"
        stroke="rgba(52, 152, 219, 0.6)"
        strokeWidth={1.5}
      />
      <circle cx={1350} cy={180} r={4} fill="rgba(52, 152, 219, 0.7)" />
      <path
        stroke="rgba(52, 152, 219, 0.4)"
        strokeDasharray="2,2"
        d="m1320 175-10-5M1380 175l10-5"
      />
    </g>
    <g
      fill="none"
      stroke="rgba(52, 152, 219, 0.6)"
      strokeWidth={1.5}
      opacity={0.25}
    >
      <path d="M900 450v-30l20-5 20 5v30q0 20-20 30-20-10-20-30Z" />
      <path d="m915 440 5 5 10-13" />
    </g>
    <g opacity={0.25}>
      <circle
        cx={1150}
        cy={750}
        r={8}
        fill="none"
        stroke="rgba(52, 152, 219, 0.5)"
        strokeWidth={1.5}
      />
      <path
        fill="rgba(52, 152, 219, 0.6)"
        d="M1147 747q0-2 2-2t2 2q0 2-2 3-2-1-2-3"
      />
      <path
        fill="none"
        stroke="rgba(52, 152, 219, 0.6)"
        d="M1147 753q2 2 4 0"
      />
      <circle
        cx={1180}
        cy={760}
        r={8}
        fill="none"
        stroke="rgba(52, 152, 219, 0.5)"
        strokeWidth={1.5}
      />
      <path
        stroke="rgba(52, 152, 219, 0.6)"
        strokeWidth={1.5}
        d="m1175 757 10 10M1175 767l10-10"
      />
    </g>
    <g opacity={0.2}>
      <circle cx={650} cy={350} r={5} fill="rgba(52, 152, 219, 0.7)" />
      <path
        stroke="rgba(52, 152, 219, 0.4)"
        d="m650 350-20-20M650 350v-25M650 350l20-20"
      />
      <circle cx={630} cy={330} r={4} fill="rgba(52, 152, 219, 0.6)" />
      <circle cx={650} cy={325} r={4} fill="rgba(52, 152, 219, 0.6)" />
      <circle cx={670} cy={330} r={4} fill="rgba(52, 152, 219, 0.6)" />
      <path stroke="rgba(52, 152, 219, 0.4)" d="m630 330-10-15M630 330v-20" />
      <circle cx={620} cy={315} r={3} fill="rgba(52, 152, 219, 0.5)" />
      <circle cx={630} cy={310} r={3} fill="rgba(52, 152, 219, 0.5)" />
      <path stroke="rgba(52, 152, 219, 0.4)" d="m670 330 10-15M670 330l20-10" />
      <circle cx={680} cy={315} r={3} fill="rgba(52, 152, 219, 0.5)" />
      <circle cx={690} cy={320} r={3} fill="rgba(52, 152, 219, 0.5)" />
    </g>
    <g opacity={0.15}>
      <defs>
        <radialGradient id="e" cx="50%" cy="0%">
          <stop
            offset="0%"
            style={{
              stopColor: "rgba(52,152,219,.4)",
              stopOpacity: 1,
            }}
          />
          <stop
            offset="100%"
            style={{
              stopColor: "transparent",
              stopOpacity: 0,
            }}
          />
        </radialGradient>
      </defs>
      <path fill="url(#e)" d="m1500 100-20 100h40Z" />
      <path
        fill="rgba(52, 152, 219, 0.6)"
        stroke="rgba(52, 152, 219, 0.7)"
        d="M1495 95h10v8h-10z"
      />
    </g>
    <g opacity={0.2}>
      <path
        fill="none"
        stroke="rgba(52, 152, 219, 0.4)"
        d="M200 1000h15v15h-15zM220 1000h15v15h-15z"
      />
      <path
        fill="rgba(52, 152, 219, 0.3)"
        stroke="rgba(52, 152, 219, 0.5)"
        d="M240 1000h15v15h-15z"
      />
      <path
        fill="none"
        stroke="rgba(52, 152, 219, 0.4)"
        d="M260 1000h15v15h-15z"
      />
      <path
        fill="rgba(52, 152, 219, 0.3)"
        stroke="rgba(52, 152, 219, 0.5)"
        d="M280 1000h15v15h-15z"
      />
      <circle cx={247} cy={1007} r={2} fill="rgba(52, 152, 219, 0.8)" />
      <circle cx={287} cy={1007} r={2} fill="rgba(52, 152, 219, 0.8)" />
    </g>
    <g opacity={0.3}>
      <path
        fill="none"
        stroke="rgba(52, 152, 219, 0.6)"
        strokeLinecap="round"
        strokeWidth={2.5}
        d="m1050 950 50-50v20l30-30"
      />
      <path fill="rgba(52, 152, 219, 0.6)" d="m1115 895 15-5-5 15" />
      <path
        fill="rgba(52, 152, 219, 0.7)"
        d="m1135 885 2 5 5 2-5 2-2 5-2-5-5-2 5-2Z"
      />
    </g>
  </svg>
);

const AnimatedBackground = () => {
  // const [imgError, setImgError] = useState(false);
  const [imgError, setImgError] = useState(true); // Force fallback for demonstration
  return (
    <div className="fixed inset-0 w-full h-full pointer-events-none overflow-hidden" style={{ zIndex: -10 }} aria-hidden="true">
      {!imgError ? (
        <Image
          src={mainImage}
          alt="Background"
          layout="fill"
          objectFit="cover"
          onError={() => setImgError(true)}
        />
      ) : (
        fallbackSVG
      )}
      <div
        className="absolute inset-0 w-full h-full"
        style={{ background: 'rgba(18, 28, 44, 0.55)', pointerEvents: 'none' }}
      />
    </div>
  );
};

export default AnimatedBackground;