import Image from "next/image";

export default function TrustCard({ item }: any) {
  return (
    <div className="flex items-start gap-4">
      <Image
        src={item.icon}
        alt={item.title}
        width={32}
        height={32}
        className="flex-shrink-0"
      />

      <div>
        <h3 className="font-semibold">{item.title}</h3>

        <p className="mt-1 text-[14px] 2xl:text-sm text-gray-500">
          {item.description}
        </p>
      </div>
    </div>
  );
}