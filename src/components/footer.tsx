import Image from "next/image";
import Link from "next/link";
import { Mail, MailCheck, Phone } from "lucide-react";
import { FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa";

export const footerData = {
  company: {
    logo: "/images/logo.png",
    title: "Palle Palleku Aata",
    subtitle: "Developing Rural Talent in Sports",
    description:
      "A non-profit organization dedicated to discovering and developing rural talent through the power of sports.",
  },

  social: [
    { id: 1, icon: FaInstagram, href: "#" },
    { id: 2, icon: FaFacebookF, href: "#" },
    { id: 3, icon: FaWhatsapp, href: "#" },
  ],

  quickLinks: [
    "About Us",
    "Our Programs",
    "Impact",
    "Success Stories",
    "Gallery",
    "Blog",
  ],

  getInvolved: [
    "Volunteer",
    "Sponsor a Child",
    "Partner With Us",
    "Organize an Event",
    "Donate",
  ],

  resources: ["Annual Reports", "Media Kit", "Downloads", "Policies", "FAQ"],

  contact: {
    address: [
      "S-1-B/177/A, MLA Colony,",
      "Banjara Hills, Hyderabad,",
      "Telangana 500034",
    ],
    phone: "+91 78931 90006",
    email: "info@pallepallekuaata.com",
  },
};

export default function Footer() {
  return (
    <div>
      <footer className="w-full bg-[#011C3E] text-white footer space-y-2">
        <div className="container mx-auto bg-[#011C3E] text-white">
          <div className="grid grid-cols-7 gap-6 md:gap-12 xl:gap-8">
            <div className="col-span-10 xl:col-span-3">
              <div className="flex flex-col items-center gap-4 md:gap-6 text-center md:flex-row md:items-start md:text-left">
                {/* <div className="shrink-0 ">
                  <Image
                    src={footerData.company.logo}
                    alt="Logo"
                    width={120}
                    height={120}
                  />
                </div> */}
                <div className="shrink-0">
  <Image
    src={footerData.company.logo}
    alt="Logo"
    width={120}
    height={120}
    className="h-12 w-auto md:h-20 2xl:h-24"
  />
</div>

                <div className="flex flex-col items-center gap-4 2xl:gap-6 md:items-start">
                  <div className="flex flex-col gap-2">
                    <h2 className="text-[24px] 2xl:text-[28px] font-semibold leading-[120%] tracking-[-0.03em]">
                      {footerData.company.title}
                    </h2>

                    <p className="text-[16px] 2xl:text-[18px] text-[#6BB643]">
                      {footerData.company.subtitle}
                    </p>
                  </div>

                  <div className="flex flex-col gap-5">
                    <p className="text-[16px] 2xl:text-[18px]">
                      {footerData.company.description}
                    </p>

                    <div className="flex justify-center gap-2 2xl:gap-4 md:justify-start">
                      {footerData.social.map((item: any) => {
                        const Icon = item.icon;

                        return (
                          <Link
  key={item.id}
  href={item.href}
  className="flex h-6 w-6 2xl:h-10 2xl:w-10 items-center justify-center rounded-full bg-white text-[#011C3E] transition hover:bg-[#72B62C] hover:text-white"
>
  <Icon className="h-3.5 w-3.5 2xl:h-5 2xl:w-5" />
</Link>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-span-10 xl:col-span-4">
              <div className="grid grid-cols-2 md:grid-cols-4 md:col-span-4 gap-y-8 2xl:gap-8">
                <div className="flex flex-col gap-4">
                  <h3 className="text-[18px] 2xl:text-[20px] font-normal text-[#6BB643] leading-[120%] tracking-[-0.03em]">
                    Quick Links
                  </h3>

                  <ul className="flex flex-col gap-2">
                    {footerData.quickLinks.map((link: string) => (
                      <li key={link}>
                        <Link href="#" className="hover:text-[#6BB643]">
                          {link}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-col gap-4">
                  <h3 className="text-[18px] 2xl:text-[20px] font-normal text-[#6BB643] leading-[120%] tracking-[-0.03em]">
                    Get Involved
                  </h3>

                  <ul className="flex flex-col gap-2">
                    {footerData.getInvolved.map((link: string) => (
                      <li key={link}>
                        <Link href="#" className="hover:text-[#72B62C]">
                          {link}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-col gap-4">
                  <h3 className="text-[18px] 2xl:text-[20px] font-normal text-[#6BB643] leading-[120%] tracking-[-0.03em]">
                    Resources
                  </h3>

                  <ul className="flex flex-col gap-2">
                    {footerData.resources.map((link: string) => (
                      <li key={link}>
                        <Link href="#" className="hover:text-[#72B62C]">
                          {link}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-col gap-4">
                  <h3 className="text-[18px] 2xl:text-[20px] font-normal text-[#6BB643] leading-[120%] tracking-[-0.03em]">
                    Contact Us
                  </h3>

                  <div className="flex flex-col gap-2">
                    <div className="space-y-2">
                      {footerData.contact.address.map((line: string) => (
                        <p key={line}>{line}</p>
                      ))}
                    </div>

                    <div className="flex items-center gap-1 md:gap-2">
                      <Phone size={14} />
                      <span>{footerData.contact.phone}</span>
                    </div>

                    <div className="flex items-center">
                      {/* <Mail size={18} /> */}
                      <span>{footerData.contact.email}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <div className="bg-[#001536]">
        <div className="footer flex flex-col items-center justify-between gap-4 py-5 text-[13px] text-gray-300 md:flex-row">
          <p>
            Privacy Policy | Terms & Conditions
          </p>

          <p>© 2024 Palle Palleku Aata. All Rights Reserved.</p>
        </div>
      </div>
    </div>
  );
}
