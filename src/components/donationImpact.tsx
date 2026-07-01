import Image from "next/image";

export default function ImpactCard({ item }: any) {
  return (
    <div className="flex flex-col gap-4 xl:gap-7 2xl:gap-9">
      <div className="flex items-start gap-3">
        <Image
          src={item.icon}
          alt={item.title}
          width={24}
          height={24}
          className="shrink-0"
        />

        <div className="flex flex-col gap-3">
          <h3 className="text-[16px] 2xl:text-[17px] font-bold leading-[42%] tracking-normal">
            {item.title}
          </h3>
          <p className="text-[13px] leading-[130%] tracking-normal text-[#6B7280]">
            {item.description}
          </p>
        </div>
      </div>

      <div className="mt-auto">
        <Image
          src={item.image}
          alt={item.title}
          width={320}
          height={180}
          className="h-36 w-full rounded-lg object-cover"
        />
      </div>
    </div>
  );
}
