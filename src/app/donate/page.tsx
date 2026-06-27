"use client";

import YourDetailsForm, { DonorFormData, FormValues } from "@/src/components/donationSummary/detailsForm";
import HeroBanner from "@/src/components/donationSummary/heroBanner";
import {
  DonationHelp,
  DonationSummary,
  TrustStats,
} from "@/src/components/donationSummary/summary";
import { useDonationStore } from "@/src/store/donationStore";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";

const page = () => {
  const router = useRouter();
const amount = useDonationStore((state) => state.amount);
const title = useDonationStore((state) => state.title);
const description = useDonationStore((state) => state.description);
const [processing, setProcessing] = useState(false);

// const handleFormSubmit = (data: DonorFormData) => {
//   const payload = {
//    ...data,
//     amount,
//       platformFee: 50,
//     title,
//     description,
//   };

//   console.log("Final Payload:", payload);

//   setFormData(data);
// }; 

  const loadRazorpay = () => {
  return new Promise<boolean>((resolve) => {
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";

    script.onload = () => resolve(true);
    script.onerror = () => resolve(false);

    document.body.appendChild(script);
  });
};

// const handleFormSubmit = async (data: DonorFormData) => {
//   const payload = {
//     ...data,
//      amount: Number(amount),
//     platformFee: 50,
//     title,
//     description,
//   };

//   try {
//     const response = await axios.post(
//       `${process.env.NEXT_PUBLIC_API_URL}/api/donors`,
//       payload
//     );

//     console.log("Donor Created:", response.data);

//     setFormData(data);
//   } catch (error: any) {
//     console.error(
//       "Error creating donor:",
//       error.response?.data || error.message
//     );
//   }
// };

const handleFormSubmit = async (data: DonorFormData) => {
  try {
    const payload = {
      ...data,
      amount: Number(amount),
      platformFee: 50,
      title,
      description,
    };

    const orderResponse = await axios.post(
      `${process.env.NEXT_PUBLIC_API_URL}/api/payment/create-order`,
      payload
    );

    const { order, donationId } = orderResponse.data;

    const loaded = await loadRazorpay();

    if (!loaded) {
      alert("Failed to load Razorpay.");
      return;
    }

    const options = {
      key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
      amount: order.amount,
      currency: order.currency,
      order_id: order.id,
      name: "Palle Palle KUAATA",
      description: title,

      prefill: {
        name: data.fullName,
        email: data.email,
        contact: data.mobile,
      },

   handler: async function (response: any) {
  try {
    setProcessing(true);

    await axios.post(
      `${process.env.NEXT_PUBLIC_API_URL}/api/payment/verify`,
      {
        ...response,
        donationId,
      }
    );

    router.replace(`/thank-you/${donationId}`);
  } catch (err) {
    setProcessing(false);
    alert("Payment verification failed");
  }
},

      theme: {
        color: "#0A8754",
      },
    };

    const razorpay = new (window as any).Razorpay(options);
    razorpay.open();
  } catch (error: any) {
    alert(error.response?.data?.message || "Something went wrong.");
  }
};


if (processing) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-white">
      <div className="text-center">
        <div className="mx-auto h-12 w-12 animate-spin rounded-full border-4 border-gray-300 border-t-green-600"></div>

        <h2 className="mt-6 text-xl font-semibold">
          Verifying your payment...
        </h2>

        <p className="mt-2 text-gray-500">
          Please wait. Do not refresh or close this page.
        </p>
      </div>
    </div>
  );
}


const donation = {
  amount,
  title,
  description,
};

  return (
    <div className="container">
      <main className="pt-20">
        <section className="relative">
          <HeroBanner />
          <div className="section grid grid-cols-3 gap-4">
            <div className="col-span-3 xl:col-span-2">
             <YourDetailsForm onSubmitData={handleFormSubmit} />
            </div>

            <div className="col-span-3 xl:col-span-1 space-y-4">
              
<DonationSummary donation={donation} />
              <DonationHelp />
            </div>
          </div>
          <TrustStats />
        </section>
      </main>
    </div>
  );
};

export default page;