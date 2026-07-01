import { ArrowRight, Gift, Users } from "lucide-react";

const CTA = () => {
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 border-t border-[#E5E7EB] pt-5">
      <div className="flex items-center gap-3 rounded-xl border border-[#E5E7EB] p-4">
        <div className="w-10 h-10 rounded-full bg-[#1B7339] flex items-center justify-center shrink-0">
          <Gift size={18} className="text-white" />
        </div>
        <div className="flex flex-col gap-3 flex-1">
          <div>
            <p className="text-[14px]2xl:text-[15px] font-bold text-[#0A2540]">
              Invite Others to Do More
            </p>
            <p className="text-[14px] 2xl:text-[15px] text-[#6B7280]">
              Encourage your friends and family to contribute. Every
              contribution brings us closer to our goal.
            </p>
          </div>
          <div>
            <a
              href="#"
              className="inline-flex items-center gap-1.5 self-start rounded-md bg-[#1B7339] p-2 2xl:px-3 2xl:py-2 text-[12px] font-bold uppercase tracking-wide text-white hover:bg-[#145f2f] transition-colors"
            >
              Invite Friends to Donate <ArrowRight size={12} />
            </a>
          </div>
        </div>
      </div>

      <div className="flex items-center gap-3 rounded-xl border border-[#E5E7EB] p-4">
        <div className="w-10 h-10 rounded-full border border-[#1B7339] flex items-center justify-center shrink-0">
          <Users size={18} className="text-[#1A7A3C]" />
        </div>
        <div className="flex flex-col gap-3 flex-1">
          <div>
            <p className="text-[14px]2xl:text-[15px] font-bold text-[#0A2540]">
              Let's Keep the Momentum Going!
            </p>
            <p className="text-[14px] 2xl:text-[15px] text-[#6B7280]">
              Thank you for being a part of this movement. Together, we can grow
              champions and change lives.
            </p>
          </div>
          <div>
            <a
              href="#"
              className="inline-flex items-center gap-1.5 self-start rounded-md text-[12px] font-bold uppercase text-[#1B7339]"
            >
              Explore Our Programs <ArrowRight size={12} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CTA;
