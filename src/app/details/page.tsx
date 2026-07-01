"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";

import YourDetailsForm, {
  DonorFormData,
} from "@/src/components/donationSummary/detailsForm";
import HeroBanner from "@/src/components/donationSummary/heroBanner";
import {
  DonationHelp,
  DonationSummary,
  TrustStats,
} from "@/src/components/donationSummary/summary";
import { useDonationStore } from "@/src/store/donationStore";

const Page = () => {
  const router = useRouter();

  const amount = useDonationStore((state) => state.amount);
  const title = useDonationStore((state) => state.title);
  const description = useDonationStore((state) => state.description);

  const [loadingPayment, setLoadingPayment] = useState(false);
  const [processing, setProcessing] = useState(false);

  const loadRazorpay = () => {
    return new Promise<boolean>((resolve) => {
      if ((window as any).Razorpay) {
        resolve(true);
        return;
      }

      const script = document.createElement("script");
      script.src = "https://checkout.razorpay.com/v1/checkout.js";

      script.onload = () => resolve(true);
      script.onerror = () => resolve(false);

      document.body.appendChild(script);
    });
  };

  const verifyPayment = async (response: any, donationId: string) => {
    try {
      await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/api/payment/verify`,
        {
          ...response,
          donationId,
        },
      );

      router.replace(`/successful/${donationId}`);
    } catch (error) {
      setProcessing(false);
      alert("Payment verification failed.");
    }
  };

  const handleFormSubmit = async (data: DonorFormData) => {
    setLoadingPayment(true);

    try {
      const payload = {
        ...data,
        amount: Number(amount),
        // platformFee: 50,
        title,
        description,
      };

      const { data: orderResponse } = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/api/payment/create-order`,
        payload,
      );

      const { order, donationId } = orderResponse;

      const loaded = await loadRazorpay();

      if (!loaded) {
        setLoadingPayment(false);
        alert("Failed to load Razorpay.");
        return;
      }

      const razorpay = new (window as any).Razorpay({
        key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
        amount: order.amount,
        currency: order.currency,
        order_id: order.id,
        name: "Palle Palle Kuaata",
        description: title,

        prefill: {
          name: data.fullName,
          email: data.email,
          contact: data.mobile,
        },

        handler: (response: any) => {
          setLoadingPayment(false);
          setProcessing(true);

          void verifyPayment(response, donationId);
        },

        modal: {
          ondismiss: () => {
            setLoadingPayment(false);
          },
        },

        theme: {
          color: "#0A8754",
        },
      });

      setLoadingPayment(false);
      razorpay.open();
    } catch (error: any) {
      setLoadingPayment(false);
      alert(error.response?.data?.message || "Something went wrong.");
    }
  };

  // if (loadingPayment) {
  //   return (
  //     <div className="fixed inset-0 z-50 flex items-center justify-center bg-white">
  //       <div className="text-center">
  //         <div className="mx-auto h-12 w-12 animate-spin rounded-full border-4 border-gray-300 border-t-green-600" />

  //         <h2 className="mt-6 text-xl font-semibold">
  //           Preparing secure payment...
  //         </h2>

  //         <p className="mt-2 text-gray-500">
  //           Please wait while we initialize your payment.
  //         </p>
  //       </div>
  //     </div>
  //   );
  // }

  if (processing) {
    return (
     <div className="fixed inset-0 z-50 flex items-center justify-center bg-white">
        <div className="text-center">
          <div className="mx-auto h-12 w-12 animate-spin rounded-full border-4 border-gray-300 border-t-green-600" />

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

          <div className="section grid grid-cols-3 gap-2 2xl:gap-4">
            <div className="col-span-3 xl:col-span-2">
              <YourDetailsForm onSubmitData={handleFormSubmit} loading={loadingPayment}/>
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

export default Page;
