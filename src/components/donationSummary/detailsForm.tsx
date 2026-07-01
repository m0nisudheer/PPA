"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { ArrowRight, Shield } from "lucide-react";

export type FormValues = {
  fullName: string;
  email: string;
  mobile: string;
  pan?: string;
  addressLine1?: string;
  addressLine2?: string;
  city: string;
  state: string;
  pinCode: string;
};

export type DonorFormData = FormValues & {
  donorType: "individual" | "organisation";
};

type Props = {
  onSubmitData: (
    data: FormValues & {
      donorType: "individual" | "organisation";
    },
  ) => void;
  loading?: boolean;
};

export default function YourDetailsForm({
  onSubmitData,
  loading = false,
}: Props) {
  const [donorType, setDonorType] = useState<"individual" | "organisation">(
    "individual",
  );

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();

  const onSubmit = (data: FormValues) => {
    onSubmitData({
      donorType,
      ...data,
    });
  };

  const inputClass = (hasError?: boolean) =>
    `w-full h-9 2xl:h-10 rounded-md border px-3
   outline-none transition
   focus:border-[#6BB643] focus:ring-2 focus:ring-[#6BB643]/20
   font-inter text-[16px] font-normal text-[#111827] placeholder:font-inter placeholder:font-normal placeholder:text-[#9CA3AF] placeholder:text-[12px] 2xl:text-[13px]
   ${hasError ? "border-red-400" : "border-gray-200"}`;

  return (
    <div className="border-2 border-[#F3F4F6] p-4 md:p-6 rounded-2xl flex flex-col gap-6">
      <div className="flex flex-col gap-2">
        <h3 className="text-[22px] font-semibold 2xl:text-[28px] leading-none tracking-normal text-[#111827]">
          Your Details
        </h3>

        <p className="text-[15px] 2xl:text-[18px] leading-5 2xl:leading-7 text-[#6B7280]">
          Please provide your details to complete the donation.
        </p>
      </div>

      <div className="flex flex-col gap-4">
        <div className="grid md:grid-cols-2 overflow-hidden rounded-md border border-gray-200">
          {(["individual", "organisation"] as const).map((type) => (
            <button
              key={type}
              type="button"
              onClick={() => setDonorType(type)}
              className={`cursor-pointer py-1.5 2xl:py-2.5 text-sm font-medium transition-colors first:border-r first:border-gray-200 ${
                donorType === type
                  ? "bg-[#3a7d1e] text-white"
                  : "bg-white text-[#4B5563] hover:bg-gray-50"
              }`}
            >
              {type === "individual"
                ? "I am an Individual"
                : "I am donating on behalf of an Organization"}
            </button>
          ))}
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          noValidate
          className="space-y-4"
        >
          <div className="grid md:grid-cols-2 gap-2 2xl:gap-4">
            <div className="flex flex-col gap-1 h-20">
              <label className="text-sm text-[#374151] tracking-normal leading-[100%] 2xl:text-[16px]">
                Full Name <span className="text-red-500">*</span>
              </label>
              <input
                placeholder="Enter your full name"
                {...register("fullName", { required: "Full Name Required" })}
                className={`${inputClass(!!errors.fullName)}`}
              />
              {errors.fullName && (
                <p className="text-[11px] 2xl:text-sm text-red-500">
                  {errors.fullName.message}
                </p>
              )}
            </div>

            <div className="flex flex-col gap-1 h-20">
              <label className="text-sm text-[#374151] tracking-normal leading-[100%] 2xl:text-[16px]">
                Email Address <span className="text-red-500">*</span>
              </label>

              <input
                type="email"
                placeholder="Enter your email"
                {...register("email", {
                  required: "Email Address Required",
                  pattern: {
                    value: /^\S+@\S+\.\S+$/,
                    message: "Invalid email address",
                  },
                })}
                className={`${inputClass(!!errors.email)}`}
              />

              {errors.email && (
                <p className="text-[11px] 2xl:text-sm text-red-500">
                  {errors.email.message}
                </p>
              )}
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-2 2xl:gap-4">
            <div className="flex flex-col gap-1 h-20">
              <label className="text-sm text-[#374151] tracking-normal leading-[100%] 2xl:text-[16px]">
                Mobile Number <span className="text-red-500">*</span>
              </label>

              <div
                className={`flex h-9 2xl:h-10 overflow-hidden rounded-md border transition focus-within:border-[#6BB643] focus-within:ring-2 focus-within:ring-[#6BB643]/20 ${
                  errors.mobile ? "border-red-400" : "border-gray-200"
                }`}
              >
                <span className="flex items-center border-r border-gray-200 bg-gray-50 px-3 text-[12px] md:text-[16px] 2xl:text-[18px] font-normal text-[#6B7280]">
                  🇮🇳 +91
                </span>

                <input
                  type="tel"
                  placeholder="10-digit number"
                  {...register("mobile", {
                    required: "Mobile Number Required",
                    pattern: {
                      value: /^[0-9]{10}$/,
                      message: "Enter a valid 10-digit mobile number",
                    },
                  })}
                  className="flex-1 bg-white px-3 font-inter text-[16px] font-normal text-[#111827] placeholder:font-inter placeholder:text-[14px] 2xl:text-[16px] placeholder:font-normal placeholder:text-[#9CA3AF] outline-none"
                />
              </div>

              {errors.mobile && (
                <p className="text-[11px] 2xl:text-sm text-red-500">
                  {errors.mobile.message}
                </p>
              )}
            </div>

            <div className="flex flex-col">
              <label className="text-sm text-[#374151]">
                PAN Number{" "}
                <span className="font-normal text-gray-400">(Optional)</span>
              </label>

              <input
                placeholder="Enter PAN number"
                maxLength={10}
                {...register("pan", {
                  setValueAs: (value) => value?.toUpperCase().trim(),
                  pattern: {
                    value: /^[A-Z]{5}[0-9]{4}[A-Z]$/,
                    message: "Invalid PAN format (e.g. ABCDE1234F)",
                  },
                })}
                onInput={(e) => {
                  e.currentTarget.value = e.currentTarget.value.toUpperCase();
                }}
                className={inputClass(!!errors.pan)}
              />

              {errors.pan && (
                <p className="text-[11px] 2xl:text-sm text-red-500">
                  {errors.pan.message}
                </p>
              )}
            </div>
          </div>

          <div className="border-t border-gray-200 py-2" />

          <div className="grid md:grid-cols-2 gap-2 2xl:gap-4">
            <div className="flex flex-col gap-1 h-20">
              <label className="text-sm text-[#374151] tracking-normal leading-[100%] 2xl:text-[16px]">
                Address Line 1
              </label>

              <input
                placeholder="House / Flat / Building"
                {...register("addressLine1")}
                className={inputClass()}
              />
            </div>

            <div className="flex flex-col gap-1 h-20">
              <label className="text-sm text-[#374151] tracking-normal leading-[100%] 2xl:text-[16px]">
                Address Line 2
              </label>

              <input
                placeholder="Area / Street / Landmark"
                {...register("addressLine2")}
                className={`${inputClass()}`}
              />
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-2 2xl:gap-4">
            <div className="flex flex-col gap-1 h-20">
              <label className="text-sm text-[#374151] tracking-normal leading-[100%] 2xl:text-[16px]">
                City <span className="text-red-500">*</span>
              </label>

              <input
                placeholder="Enter city"
                {...register("city", {
                  required: "City Required",
                })}
                className={`${inputClass(!!errors.city)}`}
              />

              {errors.city && (
                <p className="text-[11px] 2xl:text-sm text-red-500">
                  {errors.city.message}
                </p>
              )}
            </div>

            <div className="flex flex-col gap-1 h-20">
              <label className="text-sm text-[#374151] tracking-normal leading-[100%] 2xl:text-[16px]">
                State <span className="text-red-500">*</span>
              </label>

              <input
                placeholder="State"
                {...register("state", {
                  required: "State Required",
                })}
                className={`${inputClass(!!errors.state)}`}
              />

              {errors.state && (
                <p className="text-[11px] 2xl:text-sm text-red-500">
                  {errors.state.message}
                </p>
              )}
            </div>

            <div className="flex flex-col gap-1 h-20">
              <label className="text-sm text-[#374151] tracking-normal leading-[100%] 2xl:text-[16px]">
                PIN Code <span className="text-red-500">*</span>
              </label>

              <input
                placeholder="6-digit PIN"
                maxLength={6}
                {...register("pinCode", {
                  required: "PIN Code Required",
                  pattern: {
                    value: /^[0-9]{6}$/,
                    message: "Invalid PIN Code",
                  },
                })}
                className={`${inputClass(!!errors.pinCode)}`}
              />

              {errors.pinCode && (
                <p className="text-[11px] 2xl:text-sm text-red-500">
                  {errors.pinCode.message}
                </p>
              )}
            </div>
          </div>

          <div>
            <button
              type="submit"
              disabled={loading}
              className={`flex w-full items-center justify-center gap-2 rounded-md py-2 2xl:py-3.5 text-sm font-medium uppercase tracking-wide text-white transition ${
                loading
                  ? "cursor-not-allowed bg-gray-400"
                  : "cursor-pointer bg-[#3a7d1e] hover:bg-[#2f6718]"
              }`}
            >
              {loading ? (
                <>
                  <span className="h-3 w-3 2xl:h-4 2xl:w-4 animate-spin rounded-full border-2 border-white border-t-transparent" />
                  Preparing Payment...
                </>
              ) : (
                <>
                  Proceed to Payment <ArrowRight size={15} />
                </>
              )}
            </button>
            <div className="mt-2 flex items-center justify-center gap-1.5 text-xs text-[#909194]">
              <Shield size={12} />
              <span>
                Your information is 100% secure and will never be shared.
              </span>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
