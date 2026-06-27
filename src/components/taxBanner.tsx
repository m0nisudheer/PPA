import Image from "next/image";

export default function TaxBanner() {
  return (
    <section className="group relative z-20 overflow-visible rounded-2xl bg-[#1E2A52] text-white xl:px-8">
      <div className="relative z-10 grid items-center gap-8 p-4 xl:p-0 lg:px-8 xl:grid-cols-8">
        <div className="col-span-3 flex flex-col lg:flex-row items-center lg:items-start gap-5">
          <Image src="/images/taxDocs.png" alt="" width={90} height={90} />

          <div className="flex flex-col gap-6">
            <h2 className="leading-[100%] tracking-normal text-[36px] font-semibold">
              80G Tax Exemption
            </h2>

            <p className="leading-[130%] tracking-normal text-[20px]">
              All donations are eligible for tax exemption under Section 80G of
              the Income Tax Act, 1961.
            </p>

            <p className="leading-[100%] tracking-normal text-[20px] font-semibold">
              PAN: AAAAA1234A
            </p>
          </div>
        </div>

        <div className="group relative col-span-3 xl:col-span-2 flex justify-center">
          <Image
            src="/images/taxPlayer.png"
            alt=""
            width={200}
            height={240}
            className="relative z-10 h-[240px] md:h-[320px] xl:h-[240px] w-auto object-contain transition-all duration-500 ease-in-out group-hover:z-30 group-hover:-translate-y-6 group-hover:scale-120"
          />
        </div>

        <div className="flex flex-col gap-4 col-span-3">
          <h3 className="text-[20px] leading-[120%] tracking-normal">
            You will receive a donation receipt instantly on your email. This
            can be used for your tax exemption.
          </h3>

          <div className="rounded-lg bg-gradient-to-r from-[#1E2A52] via-[#24376A] to-[#335EA8] px-6 py-4 text-center text-[15px] text-[#D1D5DB]">
            Note: Please make sure to provide your PAN details while donating.
          </div>
        </div>
      </div>
    </section>
  );
}
