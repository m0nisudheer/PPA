export default function OtherWays({ item }: any) {
  const Icon = item.icon;

  return (
    <div className="rounded-lg bg-white p-6 flex flex-col gap-8">
      <div className="flex items-start gap-4">
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#F4F8ED]">
          <Icon className="h-6 w-6 text-[#2E8B3D]" />
        </div>

        <div className="flex flex-col gap-3">
          <h3 className="text-[16px] 2xl:text-[17px] font-semibold leading-[120%]">
            {item.title}
          </h3>

          <p className="text-[13px] 2xl:text-[14px] text-[#6B7280] leading-[120%] tracking-normal">
            {item.description}
          </p>
        </div>
      </div>

      <button className="w-full rounded border border-[#2E8B3D] cursor-pointer py-1.5 2xl:py-2 text-[13px] 2xl:text-sm font-semibold text-[#2E8B3D] transition hover:bg-[#6F962C] hover:text-white">
        {item.button}
      </button>
    </div>
  );
}
