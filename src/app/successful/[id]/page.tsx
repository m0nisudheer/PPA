"use client";

import { DonationSummary } from "@/src/components/donationSummary/summary";
import DonationSuccessful, { ReceiptData } from "@/src/components/thankyou/donationSuccessful";
import HeroBanner from "@/src/components/thankyou/heroBanner";
import { MadeDifference } from "@/src/components/thankyou/madeDifference";
import WhatHappensNext from "@/src/components/thankyou/whatHappendNext";
import { WouldYouLike } from "@/src/components/thankyou/wouldYouLike";
import { useDonationStore } from "@/src/store/donationStore";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";  
import axios from "axios";

const Page = () => {
  const amount = useDonationStore((state) => state.amount);
  const title = useDonationStore((state) => state.title);
  const description = useDonationStore((state) => state.description);

  const { id } = useParams();  

  const [receipt, setReceipt] = useState<ReceiptData | null>(null);

  useEffect(() => {
    if (!id) return;

    axios
      .get(`${process.env.NEXT_PUBLIC_API_URL}/api/donations/${id}`)
      .then((res) => {
        const d = res.data.data;
        const donor = d.donor;

        const receiptData: ReceiptData = {
          receiptNo: d.id,
          receiptDate: new Date(d.createdAt).toLocaleDateString("en-IN", {
            day: "2-digit",
            month: "long",
            year: "numeric",
          }),
          place: `${donor.city}, ${donor.state}`,

          org: {
            name: "Palle Palleku Aata",
            tagline: "Every Child Should Play by Choice, Not by Chance.",
            regNo: "220/2016",
            reg12A: "AAAA1234AE20214",
            reg80G: "AAAA1234AF20214",
            pan: "AAAAA1234A",
            address: "1-98/10/A, MLA Colony, Banjara Hills,\nHyderabad, Telangana - 500034",
            phone: "+91 79891 16006",
            email: "info@pallepallekuaata.com",
            website: "https://www.pallepallekuaata.com",
            mapUrl: "https://maps.google.com/?q=Palle+Palleku+Aata+Hyderabad",
            facebook: "https://facebook.com/pallepallekuaata",
            instagram: "https://instagram.com/pallepallekuaata",
            youtube: "https://youtube.com/@pallepallekuaata",
            twitter: "https://x.com/pallepallekuaata",
            linkedin: "https://linkedin.com/company/pallepallekuaata",
          },

          donor: {
            name: donor.fullName,
            email: donor.email,
            addressLine1: donor.addressLine1 || `${donor.city},`,
            addressLine2: donor.addressLine2 || `${donor.state} - ${donor.pinCode}`,
            pan: donor.pan || "",
          },

          donation: {
            purpose: d.title,
            amount: d.amount,
            platformFee: d.platformFee,
          },

          transaction: {
            paymentMode: "UPI",
            transactionId: d.razorpayPaymentId,
            dateTime: new Date(d.createdAt).toLocaleString("en-IN", {
              day: "2-digit",
              month: "long",
              year: "numeric",
              hour: "2-digit",
              minute: "2-digit",
              hour12: true,
            }),
            status: d.paymentStatus.charAt(0).toUpperCase() + d.paymentStatus.slice(1),
          },
        };

        setReceipt(receiptData);
      })
      .catch((err) => console.error("Failed to fetch receipt:", err));
  }, [id]);

  const donation = { amount, title, description };

  return (
    <div className="container">
      <main className="pt-20">
        <section className="relative">
          <HeroBanner />
          <div className="section grid grid-cols-3 gap-4">
            {/* <div className="col-span-3 xl:col-span-2 space-y-4">
              {receipt ? (
                <DonationSuccessful data={receipt} />
              ) : (
                <div className="flex items-center justify-center h-40 text-gray-400">
                  Loading receipt...
                </div>
              )}
            </div> */}
            <div className="col-span-3 xl:col-span-2">
  {receipt ? (
    <DonationSuccessful data={receipt} />
  ) : (
    <div className="animate-pulse space-y-6">
      {/* Success Header */}
      <div className="flex flex-col items-center rounded-2xl bg-white py-6">
        <div className="h-24 w-24 rounded-full bg-gray-200" />
        <div className="mt-6 h-10 w-72 rounded bg-gray-200" />
        <div className="mt-4 h-5 w-[420px] max-w-full rounded bg-gray-200" />
      </div>

      {/* Transaction Details */}
      <div className="rounded-2xl border border-[#E5E7EB] bg-[#F9FAFB] p-5">
        <div className="h-7 w-56 rounded bg-gray-200" />

        {[1, 2, 3, 4].map((item) => (
          <div
            key={item}
            className="flex items-center justify-between border-b border-[#E5E7EB] py-4 last:border-0"
          >
            <div className="h-4 w-36 rounded bg-gray-200" />
            <div className="h-4 w-48 rounded bg-gray-200" />
          </div>
        ))}

        <div className="h-14 w-full rounded-xl bg-gray-200" />

        <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
          <div className="h-14 rounded-xl border border-[#E5E7EB] bg-gray-200" />
          <div className="h-14 rounded-xl border border-[#E5E7EB] bg-gray-200" />
        </div>
      </div>
    </div>
  )}
</div>

            <div className="col-span-3 xl:col-span-1 space-y-4">
              <DonationSummary donation={donation} />
              <WhatHappensNext />
            </div>
          </div>
          <MadeDifference />
          <WouldYouLike />
        </section>
      </main>
    </div>
  );
};
export default Page;
