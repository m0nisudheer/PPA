"use client";

import {
  Target,
  Shirt,
  Heart,
  Trophy,
  Users,
  MapPin,
  Activity,
  ShieldCheck,
  ArrowRight,

} from "lucide-react";
import Image from "next/image";

type DonationData = {
  amount: string;
  title: string;
  description: string;
  icon?: React.ReactNode;
};

type DonationSummaryProps = {
  donation: DonationData;
};

export function DonationSummary({
  donation,
}: DonationSummaryProps) {
  const donationAmount = Number(donation.amount);
  // const platformFee = 50;
  const total = donationAmount;

  const Support = ({ active }: { active: boolean }) => (
    <svg
      width="50"
      height="50"
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

  const impactItems = [
    {
      icon: <Target size={18} />,
      amount: "₹500",
      text: "Provides a child with sports equipment",
    },
    {
      icon: <Shirt size={18} />,
      amount: "₹1,000",
      text: "Supports a child's training for one month",
    },
    {
      icon: <Heart size={18} />,
      amount: "₹2,000",
      text: "Covers nutrition and travel for competitions",
    },
    {
      icon: <Shirt size={18} />,
      amount: "₹5,000",
      text: "Funds sports kit and gear for a child",
    },
    {
      icon: <Trophy size={18} />,
      amount: "₹10,000",
      text: "Supports a child for an entire year",
    },
  ];

  return (
    <div className="flex flex-col gap-4">
      <div className="border-2 border-[#F3F4F6] p-4 bg-[#F6F8F7] rounded-2xl flex flex-col gap-3">
        <div className="flex items-center justify-between">
          <h2 className="text-[20px] font-bold text-[#111827] leading-9 tracking-normal">
             
          </h2>
          {/* <button className="flex items-center gap-1 text-[#6B7280] text-[16px] leading-7 tracking-normal">
            <Pencil size={13} /> Edit
          </button> */}
        </div>

        <div className="flex items-start gap-3 rounded-xl border border-[#E5E7EB] p-3">
          <div className="flex h-14 w-14 2xl:h-16 2xl:w-16 shrink-0 items-center justify-center rounded-full bg-[#F0FDF4]">
            <Support active={true} />
          </div>
          <div className="flex flex-col gap-1">
            <p className="font-bold text-[#111827] leading-[100%] tracking-normal text-[22px] 2xl:text-[24px]">
               ₹{donationAmount.toLocaleString("en-IN")}
            </p>
            <p className="font-bold text-[#111827] text-[14px] 2xl:text-[15px]">
               {donation.title}
            </p>
            <p className="text-[13px] 2xl:text-[14px] text-[#6B7280] leading-[120%] tracking-normal">
               {donation.description}
            </p>
          </div>
        </div>

        <div className="space-y-2">
          <div className="flex justify-between">
            <span className="text-[#4B5563] text-[15px] 2xl:text-[16px]">Donation Amount</span>
            <span className="text-[#111827] text-[15px] 2xl:text-[16px] font-semibold">
              ₹{donationAmount.toLocaleString("en-IN")}
            </span>
          </div>
          {/* <div className="flex justify-between">
            <span className="text-[#4B5563] text-[15px] 2xl:text-[16px]">Platform Fee</span>
            <span className="text-[#111827] text-[15px] 2xl:text-[16px] font-semibold">
              ₹{platformFee}
            </span>
          </div> */}
          <div className="flex justify-between border-t border-gray-100 font-semibold text-gray-900">
            <span className="text-[#111827] text-[17px] 2xl:text-[18px] font-bold">
              Total Amount
            </span>
            <span className="text-[#1A7A3C] text-[20px] 2xl:text-[23px] font-bold">
              ₹{total.toLocaleString("en-IN")}
            </span>
          </div>
        </div>

        {/* <div className="flex items-start gap-3 rounded-xl border border-[#DCFCE7] bg-[#F0FDF4] p-3">
          <div>
            <p className="font-semibold text-[#1A7A3C] text-[16px] leading-normal">
              80G Tax Exemption
            </p>
            <p className="text-[14px] text-[#4B5563] leading-normal">
              All donations are eligible for tax exemption under Section 80G of
              the Income Tax Act, 1961.
            </p>
          </div>
          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full">
            <Image
              src="/images/tax.png"
              alt="Tax Documents"
              width={40}
              height={40}
              className="object-contain"
            />
          </div>
        </div> */}
      </div>
    </div>
  );
}

export function DonationHelp() {

  const impactItems = [
    {
      icon: <Target size={18} />,
      amount: "₹500",
      text: "Provides a child with sports equipment",
    },
    {
      icon: <Shirt size={18} />,
      amount: "₹1,000",
      text: "Supports a child's training for one month",
    },
    {
      icon: <Heart size={18} />,
      amount: "₹2,000",
      text: "Covers nutrition and travel for competitions",
    },
    {
      icon: <Shirt size={18} />,
      amount: "₹5,000",
      text: "Funds sports kit and gear for a child",
    },
    {
      icon: <Trophy size={18} />,
      amount: "₹10,000",
      text: "Supports a child for an entire year",
    },
  ];

  return (
    <div className="flex flex-col gap-4">

      <div className="border-2 border-[#F3F4F6] p-4 rounded-2xl flex flex-col gap-6">
        <div className="flex flex-col gap-4">
          <h3 className="font-bold tracking-normal text-[19px] text-[#111827]">
            How Your Donation Helps
          </h3>
          <div className="grid md:grid-cols-2 gap-4">
            {impactItems.map((item) => (
              <div key={item.amount} className="flex items-start gap-3">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-[#1A7A3C]">
                  {item.icon}
                </div>

                <div>
                  <p className="text-[14px] 2xl:text-[15px] font-semibold text-[#1A7A3C]">
                    {item.amount}
                  </p>
                  <p className="text-[12px] 2xl:text-[13px] text-[#4B5563] leading-[130%] tracking-normal">{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* <div className="rounded-xl bg-[#011C3E] p-5 text-white">
        <p className="font-semibold text-[15px]">Need Help?</p>
        <p className="text-[12px] text-white/60 mt-1 mb-4">Our support team is here to help you.</p>
        <div className="space-y-2.5">
          <a href="tel:+917989116006" className="flex items-center gap-2.5 text-[13px] text-white/80 hover:text-white transition-colors">
            <Phone size={14} /> +91 79891 16006
          </a>
          <a href="mailto:info@pallepallekuaata.com" className="flex items-center gap-2.5 text-[13px] text-white/80 hover:text-white transition-colors">
            <Mail size={14} /> info@pallepallekuaata.com
          </a>
        </div>
      </div> */}
    </div>
  );
}

export function TrustStats() {
  const stats = [
    { icon: <Users size={28} />, value: "5000+", label: "Children Impacted" },
    { icon: <MapPin size={28} />, value: "120+", label: "Villages Reached" },
    { icon: <Activity size={28} />, value: "30+", label: "Sports Programs" },
    { icon: <Heart size={28} />, value: "200+", label: "Volunteers" },
  ];

  return (
    <div className="section border-t border-gray-100">
      <div className="grid grid-cols-1 items-center gap-6 md:gap-12 xl:gap-28 xl:grid-cols-5">
        <div className="col-span-3 xl:col-span-2 rounded-xl border border-gray-100 bg-[#F6F8F7] p-5">
          <div className="flex items-start gap-3">
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border-2 border-[#1A7A3C] text-[#1A7A3C]">
              <ShieldCheck size={16} strokeWidth={2} />
            </div>

            <div className="flex flex-col gap-4">
              <p className="text-[18px] 2xl:text-[22px] font-semibold leading-[100%] tracking-normal text-[#111827]">
                Your Trust, Our Responsibility
              </p>

              <p className="text-[14px] 2xl:text-[15px] leading-[130%] md:leading-[100%] md:tracking-normal text-[#6B7280]">
                We are committed to transparency and accountability. Your
                donation is used efficiently to create a lasting impact in rural
                communities.
              </p>

              <a
                href="#"
                className="inline-flex items-center gap-1 text-[14px] 2xl:text-[15px] font-semibold leading-[100%] tracking-normal text-[#1A7A3C] hover:underline"
              >
                Learn more about our impact
                <ArrowRight size={13} />
              </a>
            </div>
          </div>
        </div>

        <div className="col-span-3 grid grid-cols-2 gap-6 md:grid-cols-4">
          {stats.map((s) => (
            <div
              key={s.label}
              className="flex flex-col items-center gap-3 text-center"
            >
              <div className="text-[#1A7A3C]">{s.icon}</div>

              <p className="text-[18px] 2xl:text-[22px] font-semibold leading-[100%] tracking-normal text-[#111827]">
                {s.value}
              </p>

              <p className="text-[14px] 2xl:text-[15px] leading-[100%] tracking-normal text-[#6B7280]">
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

