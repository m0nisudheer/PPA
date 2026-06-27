"use client";

import { useState } from "react";
import {
  Share2,
  MessageCircle,
  Mail,
  Link2,
  CheckCircle2,
  Lightbulb,
  ArrowRight,
  Gift,
  Users,
  HeartHandshake,
  Trophy,
} from "lucide-react";

type Tab = "social" | "whatsapp" | "email" | "copylink";

const TABS: { id: Tab; label: string; icon: React.ReactNode }[] = [
  { id: "social", label: "Social Media", icon: <Share2 size={14} /> },
  { id: "whatsapp", label: "WhatsApp", icon: <MessageCircle size={14} /> },
  { id: "email", label: "Email", icon: <Mail size={14} /> },
  { id: "copylink", label: "Copy Link", icon: <Link2 size={14} /> },
];

const SOCIAL_PLATFORMS = [
  {
    label: "facebook",
    color: "#1877F2",
    bg: "white",
    textClass: "font-bold text-[#0A66C2]",
    prefix: (
      <svg viewBox="0 0 24 24" fill="#1877F2" className="w-5 h-5 shrink-0">
        <path d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073C0 18.1 4.388 23.094 10.125 24v-8.437H7.078v-3.49h3.047V9.41c0-3.025 1.792-4.697 4.533-4.697 1.312 0 2.686.236 2.686.236v2.97h-1.513c-1.491 0-1.956.93-1.956 1.874v2.25h3.328l-.532 3.49h-2.796V24C19.612 23.094 24 18.1 24 12.073z" />
      </svg>
    ),
  },
  {
    label: "Twitter",
    color: "#000",
    bg: "white",
    textClass: "font-bold text-black",
    prefix: (
      <svg viewBox="0 0 24 24" fill="black" className="w-5 h-5 shrink-0">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.737-8.835L1.254 2.25H8.08l4.253 5.622 5.911-5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    color: "#0A66C2",
    bg: "white",
    textClass: "font-bold text-[#0A66C2]",
    prefix: (
      <svg viewBox="0 0 24 24" fill="#0A66C2" className="w-5 h-5 shrink-0">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    label: "Instagram",
    color: "#E1306C",
    bg: "white",
    textClass: "font-bold text-[#E1306C]",
    prefix: (
      <svg
        viewBox="0 0 24 24"
        className="w-5 h-5 shrink-0"
        fill="url(#ig-grad)"
      >
        <defs>
          <linearGradient id="ig-grad" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#f09433" />
            <stop offset="25%" stopColor="#e6683c" />
            <stop offset="50%" stopColor="#dc2743" />
            <stop offset="75%" stopColor="#cc2366" />
            <stop offset="100%" stopColor="#bc1888" />
          </linearGradient>
        </defs>
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
      </svg>
    ),
  },
];

const IMPACT_POINTS = [
  {
    title: "You empower young talent",
    desc: "Your support helps children discover their potential and achieve their dreams.",
    icon: Trophy,
  },
  {
    title: "You build stronger communities",
    desc: "Sports create unity, discipline and healthier rural communities.",
    icon: Users,
  },
  {
    title: "You create lasting impact",
    desc: "Together, we are building a brighter future for rural India.",
    icon: HeartHandshake,
  },
];

const Support = ({ active }: { active: boolean }) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 50 50"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M11.7207 21.5391C12.7661 21.7924 12.504 23.9798 12.5042 24.8699L12.5039 29.0536L12.5021 39.1619C12.5021 41.0669 12.473 43.0602 12.5196 44.9599L37.4681 44.9745C37.5255 43.7903 37.5019 42.4934 37.502 41.3005L37.5021 35.5393C37.5021 31.3242 37.5766 26.8723 37.5013 22.6804C37.5938 22.5508 37.667 22.3969 37.7528 22.2846C37.9637 22.0089 38.6681 21.4929 39.0412 21.7096L38.8177 21.8076C39.3582 21.884 39.5208 22.8014 39.5427 23.2025C39.6557 25.271 39.3507 43.9444 39.5924 44.2739C39.6479 44.7847 39.7186 45.31 39.6962 45.8259C39.691 45.9476 39.6761 46.0635 39.6941 46.185C39.5559 46.5123 39.3328 46.7541 39.1155 47.0384C38.8906 47.1212 38.6132 47.2318 38.3781 47.2427C37.0207 47.3054 35.6322 47.2855 34.2725 47.2854L27.2826 47.2842L18.926 47.2834C17.566 47.2835 15.8218 47.3328 14.5018 47.2719C13.5367 47.102 11.744 47.5316 10.8558 46.7964C10.6842 46.6647 10.3482 46.083 10.3547 45.8854C10.4223 43.8494 10.4463 41.7754 10.452 39.74L10.4221 30.3584C10.4219 28.4049 10.4357 26.4387 10.4211 24.4855C10.4028 23.9712 10.3485 23.4693 10.2687 22.9616C10.2474 22.7382 10.3935 22.4913 10.4577 22.3002C10.6866 21.6194 11.0447 21.5616 11.7207 21.5391ZM39.4964 44.0677L39.5002 28.9081C39.5002 28.4844 39.5442 24.9476 39.4346 24.7806L39.4332 37.5395L39.4331 41.7473C39.433 42.0767 39.3915 43.9435 39.4964 44.0677Z"
      fill={active ? "#70AA44" : "#111827"}
    />
    <path
      d="M39.435 24.7812C39.5446 24.9482 39.5006 28.485 39.5006 28.9087L39.4968 44.0684C39.3918 43.9441 39.4334 42.0773 39.4334 41.7479L39.4335 37.5401L39.435 24.7812Z"
      fill="black"
      fill-opacity="0.964706"
    />
    <path
      d="M37.6549 9.99805C39.9464 10.6899 40.9816 11.5694 42.6331 13.2037L45.2213 15.8121C45.8924 16.4889 46.8618 17.3445 47.4081 18.1227C47.5371 18.3064 47.628 18.9006 47.5245 19.1039C47.0045 20.1253 45.7228 21.079 44.9389 21.9415C44.5947 22.3203 44.3005 22.6249 43.9883 22.9665C43.2724 23.009 43.1055 23.5066 42.35 23.41C42.2001 23.2314 41.9857 23.1509 41.7679 23.0253C41.7641 22.8827 41.6824 22.346 41.7403 22.2348C42.3318 21.0992 44.9929 19.7454 44.8114 18.4349C44.6254 18.1865 44.3997 17.9417 44.1778 17.7247C43.0382 16.6104 41.888 15.5238 40.8206 14.3375C40.6493 14.1472 40.4705 14.2704 40.4657 13.9771C40.4316 13.8797 39.8733 13.4952 39.8111 13.4972C39.5851 13.5047 39.0894 12.9253 39.1586 12.9554C38.536 12.6845 37.4236 12.2133 36.7571 12.2985C34.8117 12.0764 33.9871 12.1058 32.0754 12.1479C31.8429 12.6458 31.7143 13.1344 31.4915 13.6086C30.6481 15.4033 29.3687 16.8388 27.4648 17.5388C25.6781 18.1958 23.6891 18.0477 21.9498 17.258C20.1481 16.4399 19.042 14.9989 18.2908 13.2027C18.1612 12.8927 18.108 12.5288 18.0096 12.2064C17.3506 12.0709 16.793 12.1295 16.1561 12.1009C13 11.9588 10.5524 12.9068 8.54022 15.3926C7.62684 16.5209 6.0763 17.5668 5.22801 18.7631C6.08529 19.9761 7.77689 20.8575 8.43646 22.2187C8.50599 22.3623 8.52176 22.6763 8.53089 22.8446C8.33333 23.0596 7.91473 23.3629 7.63758 23.4446L7.61131 23.4521C7.43792 23.4945 6.76322 23.3 6.66546 23.1989C5.35467 21.8427 3.99739 20.5352 2.69682 19.1686C2.65823 19.128 2.65628 18.4721 2.65479 18.3764C2.8403 18.03 4.38216 16.5383 4.7748 16.1585C6.28041 14.7018 7.75985 12.9599 9.42435 11.6894C9.77733 11.42 10.7544 10.9355 11.1715 10.7657C11.8453 10.4914 11.9618 10.5552 12.6134 10.0962C13.928 10.0326 15.2442 10.0064 16.5603 10.0176C17.6389 10.0168 18.5536 9.96392 19.6178 10.1688L19.7285 10.0835L19.7911 10.0982L19.6868 10.2625C19.7742 10.4635 19.8534 10.6839 19.9993 10.8445L20.0344 10.827C20.023 10.6696 20.0071 10.5113 20.0129 10.354C20.0492 10.511 20.0983 10.7561 20.1564 10.8968L20.2582 10.926C20.3804 11.3657 20.473 12.134 20.613 12.4934C22.3153 16.8628 28.4771 16.5252 29.5447 11.8363C29.8812 11.5729 29.7676 10.8577 30.0484 10.4414C30.1479 10.2919 30.2961 10.1816 30.4679 10.1293C30.875 10.0075 31.6695 10.0192 32.1031 10.0174C33.0655 10.013 34.0279 10.0167 34.9903 10.0286C35.7098 10.043 37.0191 10.1331 37.6549 9.99805Z"
      fill={active ? "#70AA44" : "#111827"}
    />
    <path
      d="M14.5018 47.2718C13.8876 47.3929 12.292 47.2801 11.6286 47.2349C10.4274 47.1532 10.0988 45.9912 10.0586 44.9499C10.0019 43.4812 10.0219 41.9716 10.0216 40.483L10.0211 32.4L10.0217 26.5615C10.022 25.4464 9.99277 24.3197 10.0777 23.2085C10.1627 22.0965 10.4307 21.2987 11.7206 21.539C11.0447 21.5616 10.6865 21.6193 10.4576 22.3002C10.3934 22.4912 10.2473 22.7381 10.2686 22.9615C10.3485 23.4692 10.4028 23.9711 10.421 24.4854C10.4356 26.4386 10.4218 28.4049 10.422 30.3583L10.4519 39.7399C10.4462 41.7753 10.4223 43.8493 10.3546 45.8853C10.3481 46.083 10.6842 46.6647 10.8558 46.7964C11.7439 47.5316 13.5367 47.102 14.5018 47.2718Z"
      fill={active ? "#70AA44" : "#111827"}
      fill-opacity="0.882353"
    />
    <path
      d="M8.53088 22.8452C8.38743 23.8077 7.61321 24.0736 6.79841 23.6189C6.62678 23.5223 6.46658 23.4065 6.32087 23.274C6.20281 23.1649 6.07971 23.0355 5.97131 22.9163C4.99397 21.8271 3.83354 20.8051 2.85242 19.733C1.84032 18.6272 2.6651 17.8868 3.48265 17.0877C3.87174 16.7074 4.27487 16.2966 4.6568 15.9115L7.19666 13.3473C7.75754 12.7861 8.64944 11.883 9.27283 11.4494C10.1874 10.9072 11.4219 10.2031 12.4741 9.95106C14.2337 9.59471 16.0748 9.77304 17.8611 9.72196C18.6622 9.69906 19.3862 9.6723 20.0898 10.0856C20.1785 10.4067 20.2388 10.5925 20.2582 10.9266L20.1564 10.8974C20.0983 10.7567 20.0491 10.5116 20.0129 10.3545C20.0071 10.5119 20.023 10.6702 20.0344 10.8276L19.9993 10.8451C19.8534 10.6845 19.7741 10.4641 19.6867 10.2631L19.7911 10.0988L19.7284 10.0841L19.6178 10.1694C18.5536 9.96449 17.6388 10.0174 16.5603 10.0182C15.2442 10.007 13.928 10.0332 12.6134 10.0968C11.9617 10.5557 11.8453 10.4919 11.1715 10.7662C10.7544 10.9361 9.77732 11.4205 9.42434 11.69C7.75984 12.9604 6.2804 14.7024 4.77479 16.1591C4.38215 16.5389 2.84029 18.0306 2.65478 18.3769C2.65628 18.4727 2.65822 19.1286 2.69681 19.1691C3.99738 20.5358 5.35466 21.8432 6.66545 23.1995C6.76321 23.3006 7.43792 23.4951 7.6113 23.4526L7.63757 23.4452C7.91472 23.3635 8.33333 23.0602 8.53088 22.8452Z"
      fill={active ? "#70AA44" : "#111827"}
      fill-opacity="0.941176"
    />
    <path
      d="M38.0841 21.5741C38.844 21.4092 39.1305 21.4542 39.68 22.0137C39.744 22.332 39.9411 23.1251 39.9482 23.3925C39.9835 24.7004 39.9678 26.0328 39.9667 27.3431L39.9635 34.4815L39.9649 41.1701C39.9654 42.2115 40.0408 44.7755 39.8004 45.6577C39.7753 45.0331 39.8522 44.4012 39.8383 43.7704C39.8325 43.2754 39.7543 42.7722 39.7541 42.2781C39.7517 36.9194 39.7602 31.5607 39.7568 26.2021C39.7562 25.3071 39.7079 24.434 39.664 23.5408L39.6223 23.5257C39.552 28.4771 39.5357 33.4292 39.5735 38.381L39.579 42.4323C39.5807 42.8742 39.6202 43.8403 39.5947 44.2428L39.5925 44.2732C39.3508 43.9437 39.6559 25.2703 39.5428 23.2018C39.5209 22.8007 39.3583 21.8833 38.8179 21.8069L39.0413 21.7089C38.6682 21.4922 37.9639 22.0082 37.753 22.2839C37.6671 22.3962 37.5939 22.5501 37.5015 22.6797C37.537 22.4397 37.5637 22.2272 37.6304 21.9923L38.0841 21.5741Z"
      fill={active ? "#70AA44" : "#111827"}
      fill-opacity="0.898039"
    />
    <path
      d="M36.7573 12.2992C37.4238 12.214 38.5363 12.6852 39.1589 12.9562C39.0897 12.926 39.5854 13.5054 39.8113 13.4979C39.8736 13.4959 40.4319 13.8804 40.466 13.9778C40.4708 14.2711 40.6495 14.1479 40.8208 14.3383C41.8882 15.5245 43.0384 16.6111 44.1781 17.7254C44.4 17.9424 44.6256 18.1872 44.8116 18.4356C44.9932 19.7461 42.3321 21.0999 41.7406 22.2355C41.6826 22.3467 41.7644 22.8834 41.7682 23.0261C41.9859 23.1516 42.2004 23.2321 42.3503 23.4107C43.1058 23.5074 43.2727 23.0097 43.9885 22.9672C43.3482 23.5723 42.7911 24.104 41.8372 23.6782C41.7454 23.6372 41.4693 23.0928 41.4597 22.9931C41.2953 21.2794 43.9684 20.0618 44.7448 18.7687C44.398 18.0782 42.5571 16.6096 41.9346 15.9065C41.2658 15.151 40.2979 14.1551 39.5119 13.5462C38.7211 12.9336 37.7221 12.5568 36.7573 12.2992Z"
      fill={active ? "#70AA44" : "#111827"}
      fill-opacity="0.937255"
    />
    <path
      d="M31.6293 23.5412C31.7721 23.5246 31.9159 23.5168 32.0597 23.5176C32.5211 23.5219 32.687 23.673 32.9899 23.9807C33.213 24.6974 33.1642 24.8497 32.8732 25.4992C32.7379 25.5958 32.5935 25.6754 32.4496 25.7587C31.8432 25.7399 31.3836 25.654 30.9406 25.2394C30.7668 24.2825 30.8273 24.0566 31.6293 23.5412Z"
      fill={active ? "#70AA44" : "#111827"}
      fill-opacity="0.980392"
    />
    <path
      d="M39.5925 44.2729L39.5947 44.2424C39.6202 43.84 39.5807 42.8738 39.579 42.4319L39.5735 38.3807C39.5358 33.4289 39.552 28.4768 39.6223 23.5254L39.664 23.5405C39.7079 24.4337 39.7563 25.3068 39.7568 26.2018C39.7602 31.5604 39.7517 36.9191 39.7541 42.2777C39.7543 42.7718 39.8325 43.2751 39.8383 43.7701C39.8523 44.4008 39.7753 45.0328 39.8004 45.6574C39.7779 45.8173 39.7575 46.0439 39.6942 46.1839C39.6762 46.0625 39.6911 45.9466 39.6964 45.8249C39.7188 45.309 39.648 44.7837 39.5925 44.2729Z"
      fill={active ? "#70AA44" : "#111827"}
      fill-opacity="0.701961"
    />
    <path
      d="M29.5449 11.8365C29.6146 11.3752 29.6777 10.9041 29.8036 10.4542C29.859 10.256 29.9193 10.0338 30.1116 9.93059C30.7537 9.58591 35.2721 9.70129 36.2375 9.77351C36.7168 9.80935 37.1937 9.85857 37.6551 9.99831C37.0193 10.1334 35.71 10.0433 34.9905 10.0288C34.0281 10.017 33.0657 10.0133 32.1033 10.0176C31.6697 10.0195 30.8752 10.0077 30.4681 10.1296C30.2963 10.1819 30.1481 10.2922 30.0486 10.4416C29.7678 10.858 29.8814 11.5732 29.5449 11.8365Z"
      fill={active ? "#70AA44" : "#111827"}
      fill-opacity="0.945098"
    />
  </svg>
);

export default function SupportCard() {
  const [activeTab, setActiveTab] = useState<Tab>("social");
  const [message, setMessage] = useState("");
  const MAX = 200;

  return (
    <div className="flex flex-col gap-6 rounded-2xl px-5 py-7 md:px-6 md:py-8 shadow-xl bg-white mx-auto">
      <div className="flex flex-col items-center gap-2 md:gap-1 text-center">
        <h2 className="text-[20px] md:text-[28px] font-bold text-[#111827] leading-[100%] tracking-normal">
          Share Your Support
        </h2>
        <p className="text-[15px] md:text-[16px] text-[#6B7280] leading-[100%] tracking-normal">
          Choose your favorite way to share and inspire others to support rural
          talent.
        </p>
      </div>

      <div className="grid grid-cols-4 border-t border-b border-[#F3F4F6]">
        {TABS.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`flex items-center cursor-pointer justify-center gap-1.5 py-3 text-[13px] font-medium transition-all duration-200
        ${
          activeTab === tab.id
            ? "bg-[#F0FDF4] border-b-2 border-[#1B7339] text-[#1B7339]"
            : "bg-white text-[#6B7280] hover:bg-[#F9FAFB] hover:text-[#111827]"
        }`}
          >
            {tab.icon}
            <span className="hidden sm:inline">{tab.label}</span>
          </button>
        ))}
      </div>

      {activeTab === "social" && (
        <div className="flex flex-col gap-5">
          <div className="flex flex-col items-center gap-1">
            <p className="text-[15px] md:text-[18px] font-bold text-[#0A2540] leading-[110%] tracking-normal">
              Share on Social Media
            </p>
            <p className="text-[15px] text-[#6B7280] leading-[110%] tracking-normal text-center">
              Help us reach more hearts by sharing on your social platforms.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 md:gap-8 lg:gap-12">
            {SOCIAL_PLATFORMS.map((p) => (
              <button key={p.label} className="flex items-center gap-2">
                {p.prefix}
                <span className={`text-[20px] ${p.textClass}`}>{p.label}</span>
              </button>
            ))}
            <button className="flex items-center gap-2 rounded-lg bg-[#6B7280] px-4 py-1 md:px-6 md:py-1 text-white text-[18px] font-medium hover:bg-[#4B5563] transition-colors">
              <Share2 size={15} />
              More
            </button>
          </div>

          <div className="grid grid-cols-1 gap-5 xl:grid-cols-2">
            <div className="flex flex-col gap-3">
              <div>
                <p className="text-[16px] md:text-[18px] font-bold text-[#0A2540]">
                  Share Preview
                </p>
                <p className="text-[15px] text-[#6B7280]">
                  This is how your post will look.
                </p>
              </div>

              <div className="rounded-xl border border-[#E5E7EB] overflow-hidden">
                <div className="flex gap-3 p-3 md:p-4">
                  <div className="text-[#1A7A3C] text-3xl leading-none font-serif mt-0.5">
                    "
                  </div>
                  <div className="flex-1 flex gap-3">
                    <div className="flex flex-col md:flex-row gap-6">
                      <p className="text-[15px] md:text-[18px] text-[#0A2540] font-medium flex flex-col gap-2 px-5">
                        <div>
                          I just supported rural talent through Palle Palleku
                          Aata.
                        </div>
                        <div>
                          Join me in empowering young athletes and building a
                          brighter future!
                        </div>
                      </p>
                      <img
                        src="/images/UrSupport.png"
                        alt="preview"
                        className="w-56 h-52 md:w-52 md:h-52 rounded-lg object-cover shrink-0"
                      />
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-between px-4 py-2">
                  <a
                    href="https://www.pallepallekuaata.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[11px] text-[#2563EB] hover:underline"
                  >
                    www.pallepallekuaata.com
                  </a>

                  <span className="text-[11px] text-[#6B7280]">
                    #SupportRuralTalent
                  </span>
                </div>
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-[15px] md:text-[16px] font-bold text-[#0A2540]">
                  Add a Personal Message{" "}
                  <span className="font-normal text-[13px] md:text-[15px] text-[#9CA3AF]">
                    (Optional)
                  </span>
                </label>
                <textarea
                  placeholder="Write your personal message..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value.slice(0, MAX))}
                  rows={4}
                  className="w-full rounded-lg border border-[#E5E7EB] px-3 py-2.5 text-[17px] text-[#111827] placeholder:text-[#9CA3AF] outline-none focus:border-[#1A7A3C] focus:ring-2 focus:ring-[#1A7A3C]/20 resize-none"
                />
                <p className="text-[11px] text-[#9CA3AF] text-right">
                  {message.length}/{MAX}
                </p>
              </div>

              <div className="flex items-start gap-2 rounded-lg bg-[#F0FDF4] border border-[#DCFCE7] p-2 md:p-3">
                <Lightbulb
                  size={20}
                  className="text-[#1A7A3C] mt-0.5 shrink-0"
                />
                <div className="flex flex-col gap-2">
                  <p className="text-[15px] md:text-[16px] font-bold text-[#1B7339] leading-[100%] tracking-normal">
                    Tip: Personalize your message
                  </p>
                  <p className="text-[15px] md:text-[16px] text-[#166534CC] leading-[130%] md:leading-[100%] tracking-normal">
                    Adding a personal note makes your post more meaningful and
                    encourages more people to take action.
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-4">
              <div className="rounded-xl border bg-[#F9FAFB] border-[#E5E7EB] p-4 flex flex-col gap-6">
                <div className="flex items-center justify-between">
                  <p className="text-[15px] md:text-[16px] leading-[100%] tracking-normal font-bold text-[#15803D]">
                    Donation Summary
                  </p>
                  <a
                    href="#"
                    className="text-[13px] font-medium text-[#1A7A3C] hover:underline"
                  >
                    View Receipt
                  </a>
                </div>

                <div className="flex items-start gap-3 rounded-lg bg-[white] border border-[#E5E7EB] p-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#F0FDF4]">
                    <Support active={true} />
                  </div>
                  <div className="flex flex-col gap-1">
                    <p className="text-[20px] md:text-[26px] font-bold text-[#0A2540] leading-[100%] tracking-normal">
                      ₹2,000
                    </p>
                    <p className="text-[15px] md:text-[16px] font-bold text-[#0A2540] ">
                      Support Their Journey
                    </p>
                    <p className="text-[14px] text-[#6B7280] leading-[130%] md:leading-[100%] tracking-normal">
                      Help cover sports kit, nutrition and travel for
                      competitions.
                    </p>
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  {[
                    { label: "Donation Amount", value: "₹2,000" },
                    { label: "Platform Fee", value: "₹50" },
                  ].map(({ label, value }) => (
                    <div
                      key={label}
                      className="flex justify-between text-[15px] md:text-[16px] text-[#4B5563]"
                    >
                      <span>{label}</span>
                      <span>{value}</span>
                    </div>
                  ))}
                  <div className="flex justify-between md:text-[16px] font-bold text-[#0A2540] py-2 border-t border-[#E5E7EB]">
                    <span>Total Amount</span>
                    <span className="text-[#16A34A] text-[18px] md:text-[20px] font-bold leading-none tracking-normal">
                      ₹2,050
                    </span>
                  </div>
                </div>
              </div>

              <div className="rounded-xl border border-[#E5E7EB] p-4 flex flex-col gap-5">
                <p className="text-[15px] md:text-[16px] font-bold text-[#15803D] leading-[120%] md:leading-[30px] tracking-normal">
                  Your Impact Matters
                </p>
                <div className="space-y-4">
                  {IMPACT_POINTS.map((pt) => {
                    const Icon = pt.icon;

                    return (
                      <div key={pt.title} className="flex items-start gap-3">
                        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#F0FDF4] shrink-0">
                          <Icon size={16} className="text-[#1A7A3C]" />
                        </div>

                        <div className="flex flex-col gap-2">
                          <p className="text-[15px] md:text-[16px] font-bold text-[#0A2540] leading-[130%] md:leading-[100%] tracking-normal">
                            {pt.title}
                          </p>
                          <p className="text-[15px] md:text-[16px] text-[#6B7280] leading-[120%] md:leading-[100%] tracking-normal">
                            {pt.desc}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {activeTab !== "social" && (
        <div className="flex items-center justify-center py-12 text-[#9CA3AF] text-[14px]">
          {TABS.find((t) => t.id === activeTab)?.label} sharing coming soon.
        </div>
      )}
    </div>
  );
}
