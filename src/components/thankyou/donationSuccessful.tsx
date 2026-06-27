"use client";

import { Download, Mail, Share2 } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";

interface OrgInfo {
  name: string;
  tagline: string;
  regNo: string;
  reg12A: string;
  reg80G: string;
  pan: string;
  address: string;
  phone: string;
  email: string;
  website: string;
  mapUrl: string;
  facebook: string;
  instagram: string;
  youtube: string;
  twitter: string;
  linkedin: string;
}

interface DonorInfo {
  name: string;
  email: string;
  addressLine1: string;
  addressLine2: string;
  pan: string;
}

interface DonationInfo {
  purpose: string;
  amount: number;
  platformFee: number;
}

interface TransactionInfo {
  paymentMode: string;
  transactionId: string;
  dateTime: string;
  status: string;
}

export interface ReceiptData {
  receiptNo: string;
  receiptDate: string;
  place: string;
  org: OrgInfo;
  donor: DonorInfo;
  donation: DonationInfo;
  transaction: TransactionInfo;
}

interface DonationSuccessfulProps {
  data: ReceiptData;
}

function formatINR(amount: number): string {
  return "₹" + amount.toLocaleString("en-IN");
}

function SectionBadge({ label }: { label: string }) {
  return (
    <div className="inline-flex items-center rounded overflow-hidden">
      <div className="flex items-center justify-center bg-[#1A7A3C] px-2 py-1">
        <div className="w-4 h-4 rounded-full bg-white flex items-center justify-center">
          <div className="w-2 h-2 rounded-full bg-[#1A7A3C]" />
        </div>
      </div>
      <div className="bg-[#0f2d47] px-3 py-1">
        <span className="text-white text-[100px] font-bold tracking-wider uppercase">
          {label}
        </span>
      </div>
    </div>
  );
}

function InfoRow({
  label,
  value,
  mono = false,
  muted = false,
}: {
  label: string;
  value: string;
  mono?: boolean;
  muted?: boolean;
}) {
  return (
    <div className="flex gap-2 py-1.5 border-b border-gray-100 last:border-0">
      <span className="w-24 shrink-0 text-[12px] font-semibold text-gray-700">
        {label}
      </span>
      <span className="text-[12px] text-gray-500 shrink-0">:</span>
      <span
        className={`text-[12px] ${mono ? "font-mono" : ""} ${muted ? "text-gray-500" : "text-gray-900"}`}
      >
        {value}
      </span>
    </div>
  );
}

function MetaCell({
  icon,
  label,
  value,
  border,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  border?: boolean;
}) {
  return (
    <div
      className={`flex items-center gap-3 flex-1 px-4 ${border ? "border-l border-gray-200" : ""}`}
    >
      <div className="w-9 h-9 rounded-md bg-green-50 border border-green-200 flex items-center justify-center shrink-0">
        {icon}
      </div>
      <div>
        <p className="text-[10px] text-gray-500 mb-0.5">{label}</p>
        <p className="text-[13px] font-bold text-[#0f2d47]">{value}</p>
      </div>
    </div>
  );
}

function TxCell({
  label,
  value,
  isStatus = false,
  border = false,
}: {
  label: string;
  value: string;
  isStatus?: boolean;
  border?: boolean;
}) {
  return (
    <div
      className={`flex flex-col gap-1 flex-1 px-4 ${border ? "border-l border-gray-200" : ""}`}
    >
      <p className="text-[10px] text-gray-500">{label}</p>
      <p
        className={`text-[13px] font-bold ${isStatus ? "text-[#1A7A3C]" : "text-gray-900"}`}
      >
        {isStatus && (
          <span className="inline-flex items-center gap-1">
            <span className="w-3.5 h-3.5 rounded-full bg-[#1A7A3C] flex items-center justify-center">
              <svg
                className="w-2 h-2 text-white"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={3}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </span>
            {value}
          </span>
        )}
        {!isStatus && value}
      </p>
    </div>
  );
}

async function downloadReceiptPDF(data: ReceiptData): Promise<void> {
  const { jsPDF } = await import("jspdf");

  // const doc = new jsPDF({ unit: "pt", format: "a4", orientation: "portrait" });
  const doc = new jsPDF({
    unit: "pt",
    format: [595.28, 646],
    orientation: "portrait",
    compress: true,
  });
  const logo = new Image();
  logo.crossOrigin = "anonymous";
  logo.src = window.location.origin + "/images/logo.png";

  const heartHandsIcon = new Image();
  heartHandsIcon.crossOrigin = "anonymous";
  heartHandsIcon.src = `${window.location.origin}/images/heartHandsIcon.png`;

  const linkedin = new Image();
  linkedin.crossOrigin = "anonymous";
  linkedin.src = `${window.location.origin}/images/linkedin.png`;

  const facebook = new Image();
  facebook.crossOrigin = "anonymous";
  facebook.src = `${window.location.origin}/images/facebook.png`;

  const instagram = new Image();
  instagram.crossOrigin = "anonymous";
  instagram.src = `${window.location.origin}/images/instagram.png`;

  const twitter = new Image();
  twitter.crossOrigin = "anonymous";
  twitter.src = `${window.location.origin}/images/twitter.png`;

  const youtube = new Image();
  youtube.crossOrigin = "anonymous";
  youtube.src = `${window.location.origin}/images/youtube.png`;

  const phone = new Image();
  phone.crossOrigin = "anonymous";
  phone.src = `${window.location.origin}/images/phone.png`;

  const taxIcon = new Image();
  taxIcon.crossOrigin = "anonymous";
  taxIcon.src = `${window.location.origin}/images/tax.png`;

  const lockIcon = new Image();
  lockIcon.crossOrigin = "anonymous";
  lockIcon.src = `${window.location.origin}/images/trust/lock.png`;

  const location = new Image();
  lockIcon.crossOrigin = "anonymous";
  location.src = `${window.location.origin}/images/location.png`;

  const verifiedIcon = new Image();
  verifiedIcon.crossOrigin = "anonymous";
  verifiedIcon.src = `${window.location.origin}/images/trust/Verified.png`;

  const donorHeader = new Image();
  donorHeader.crossOrigin = "anonymous";
  donorHeader.src = `${window.location.origin}/images/trust/transparent.png`;

  const summaryHeader = new Image();
  summaryHeader.crossOrigin = "anonymous";
  summaryHeader.src = `${window.location.origin}/images/volunteer.png`;

  const stampImage = new Image();
  stampImage.crossOrigin = "anonymous";
  stampImage.src = `${window.location.origin}/images/stamp.png`;

  const qrCode = new Image();
  qrCode.crossOrigin = "anonymous";
  qrCode.src = `${window.location.origin}/images/qrCode.png`;

  const images = [
    logo,
    heartHandsIcon,
    taxIcon,
    lockIcon,
    verifiedIcon,
    donorHeader,
    summaryHeader,
    stampImage,
    youtube,
    linkedin,
    facebook,
    instagram,
    twitter,
    phone,
    location,
    qrCode,
  ];

  await Promise.all(
    images.map(
      (img) =>
        new Promise<void>((resolve, reject) => {
          if (img.complete && img.naturalWidth > 0) {
            resolve();
            return;
          }

          img.onload = () => resolve();
          img.onerror = () =>
            reject(new Error(`Failed to load image: ${img.src}`));
        }),
    ),
  );

  const PW = 595.28;
  const M = 20;
  const CW = PW - M * 2;

  const NAVY = "#0f2d47";
  const GREEN = "#1A7A3C";
  const GREEN_LIGHT = "#f0fdf4";
  const GREEN_MID = "#bbf7d0";
  const GRAY_200 = "#E5E7EB";
  const GRAY_600 = "#6B7280";
  const GRAY_800 = "#374151";
  const DARK = "#111827";
  const WHITE = "#ffffff";

  const total = data.donation.amount + data.donation.platformFee;
  const fmt = (n: number) => "Rs." + n.toLocaleString("en-IN");

  type FontStyle = "normal" | "bold" | "italic" | "bolditalic";
  type Align = "left" | "center" | "right";

  function setFont(style: FontStyle = "normal", size = 9, color = DARK) {
    doc.setFont("helvetica", style);
    doc.setFontSize(size);
    doc.setTextColor(color);
  }

  function drawText(
    str: string,
    x: number,
    y: number,
    opts: {
      style?: FontStyle;
      size?: number;
      color?: string;
      align?: Align;
    } = {},
  ) {
    const { style = "normal", size = 9, color = DARK, align = "left" } = opts;
    setFont(style, size, color);
    doc.text(str, x, y, { align });
  }

  function fillRect(
    x: number,
    y: number,
    w: number,
    h: number,
    color: string,
    r = 0,
  ) {
    doc.setFillColor(color);
    r > 0 ? doc.roundedRect(x, y, w, h, r, r, "F") : doc.rect(x, y, w, h, "F");
  }

  function strokeRect(
    x: number,
    y: number,
    w: number,
    h: number,
    color: string,
    lw = 0.5,
    r = 0,
  ) {
    doc.setDrawColor(color);
    doc.setLineWidth(lw);
    r > 0 ? doc.roundedRect(x, y, w, h, r, r, "D") : doc.rect(x, y, w, h, "D");
  }

  function fillStrokeRect(
    x: number,
    y: number,
    w: number,
    h: number,
    fill: string,
    stroke: string,
    lw = 0.5,
    r = 0,
  ) {
    doc.setFillColor(fill);
    doc.setDrawColor(stroke);
    doc.setLineWidth(lw);
    r > 0
      ? doc.roundedRect(x, y, w, h, r, r, "FD")
      : doc.rect(x, y, w, h, "FD");
  }

  function hLine(x: number, y: number, w: number, color = GRAY_200, lw = 0.5) {
    doc.setDrawColor(color);
    doc.setLineWidth(lw);
    doc.line(x, y, x + w, y);
  }

  function vLine(
    x: number,
    y1: number,
    y2: number,
    color = GRAY_200,
    lw = 0.5,
  ) {
    doc.setDrawColor(color);
    doc.setLineWidth(lw);
    doc.line(x, y1, x, y2);
  }

  function circle(
    cx: number,
    cy: number,
    r: number,
    mode: "F" | "D" | "FD",
    fill?: string,
    stroke?: string,
    lw = 0.5,
  ) {
    if (fill) doc.setFillColor(fill);
    if (stroke) {
      doc.setDrawColor(stroke);
      doc.setLineWidth(lw);
    }
    doc.circle(cx, cy, r, mode);
  }

  function sectionBadge(x: number, y: number, label: string, width = 110) {
    fillStrokeRect(x, y, width, 12, "#ECFDF3", GREEN_MID, 0.35, 3);

    drawText(label, x + 8, y + 9.5, {
      style: "bold",
      size: 8,
      color: GREEN,
    });
  }

  let y = 8;

  const headerH = 70;

  const logoWidth = 46;
  const logoHeight = 50;
  const headingMT = 6;

  const logoX = M;
  const logoY = y + (headerH - logoHeight) / 2;

  doc.addImage(logo, "PNG", logoX, logoY, logoWidth, logoHeight);

  const textX = logoX + logoWidth + 12;

  const centerY = y + headerH / 2 + headingMT;

  //Name
  drawText(data.org.name, textX, centerY - 6, {
    style: "bold",
    size: 16,
    color: NAVY,
  });

  //  Tagline
  drawText(data.org.tagline, textX, centerY + 6, {
    size: 9,
    color: GRAY_600,
  });

  fillRect(textX, centerY + 14, 80, 0.8, GREEN);

  const regItems = [
    { label: "Regd :", value: data.org.regNo },
    { label: "12A :", value: data.org.reg12A },
    { label: "80G :", value: data.org.reg80G },
    { label: "PAN :", value: data.org.pan },
  ];

  regItems.forEach((item, i) => {
    const ry = y + 14 + i * 12;

    const valueWidth = doc.getTextWidth(item.value);

    const xRight = PW - M;

    doc.setFont("helvetica", "normal");
    doc.setFontSize(7);
    doc.setTextColor(GRAY_800);
    doc.text(item.value, xRight, ry, { align: "right" });

    doc.setFont("helvetica", "bold");
    doc.setFontSize(7);
    doc.setTextColor(GRAY_800);
    doc.text(item.label, xRight - valueWidth - 2, ry, { align: "right" });
  });

  y += headerH;
  hLine(M, y, CW, GRAY_200, 1);
  y += 6;

  const BH = 75;

  doc.addImage(heartHandsIcon, "PNG", M, y, CW, BH);

  y += BH + 6;

  const MH = 36;
  strokeRect(M, y, CW, MH, GRAY_200, 0.7, 6);

  const colW1 = CW * 0.4;
  const colW2 = CW * 0.2;
  const colW3 = CW * 0.4;

  const metaCols: {
    label: string;
    value: string;
    icon: HTMLImageElement;
  }[] = [
    {
      label: "Receipt No.",
      value: data.receiptNo,
      icon: taxIcon,
    },
    {
      label: "Receipt Date",
      value: data.receiptDate,
      icon: lockIcon,
    },
    {
      label: "Place",
      value: data.place,
      icon: verifiedIcon,
    },
  ];

  const widths = [colW1, colW2, colW3];

  let cx = M;

  metaCols.forEach(({ label, value, icon }, i) => {
    const w = widths[i];

    if (i > 0) {
      vLine(cx, y + 5, y + MH - 5, GRAY_200);
    }

    doc.addImage(icon.src, "PNG", cx + 8, y + 10, 14, 16);

    drawText(label, cx + 30, y + 15, {
      size: 6.5,
      color: GRAY_600,
    });

    drawText(value, cx + 30, y + 27, {
      style: "bold",
      size: 8.5,
      color: NAVY,
    });

    cx += w;
  });
  y += MH + 8;

  //donation inform
  const HEADER_H = 10;
  const GAP = 4;
  const SEC_H = 112;
  const HW = (CW - 8) / 2;

  const donorY = y + HEADER_H + GAP;

  sectionBadge(M, y, "DONOR INFORMATION");

  strokeRect(M, donorY, HW, SEC_H, GRAY_200, 0.6, 6);

  const donorRows: [string, string][] = [
    ["Name", data.donor.name],
    ["Email", data.donor.email],
    ["Address", data.donor.addressLine1],
    ["", data.donor.addressLine2],
    ["PAN", data.donor.pan ? `${data.donor.pan} (Optional)` : ""],
  ];

  const LABEL_W = 54;
  const LEFT_PAD = 10;
  const VALUE_X = M + LEFT_PAD + LABEL_W + 8;

  let rowY = donorY + 16;

  donorRows.forEach(([label, value], index) => {
    if (!value) return;

    if (label) {
      drawText(label, M + LEFT_PAD, rowY, {
        style: "bold",
        size: 8,
        color: GRAY_800,
      });

      drawText(":", M + LEFT_PAD + LABEL_W, rowY, {
        size: 8,
        color: GRAY_600,
      });
    }

    drawText(value, VALUE_X, rowY, {
      size: 8,
      color: DARK,
    });

    if (index < donorRows.length - 1) {
      hLine(M + 8, rowY + 9, HW - 16, GRAY_200, 0.25);
    }

    rowY += 19;
  });

  const SX = M + HW + 8;

  sectionBadge(SX, y, "DONATION SUMMARY");

  strokeRect(SX, donorY, HW, SEC_H, GRAY_200, 0.6, 6);

  fillStrokeRect(
    SX + 8,
    donorY + 8,
    HW - 16,
    25,
    GREEN_LIGHT,
    GREEN_MID,
    0.8,
    5,
  );

  drawText("TOTAL AMOUNT", SX + 14, donorY + 24, {
    style: "bold",
    size: 8,
    color: GRAY_800,
  });

  drawText(fmt(total), SX + HW - 12, donorY + 25, {
    style: "bold",
    size: 14,
    color: GREEN,
    align: "right",
  });

  const summaryRows: [string, string][] = [
    ["Purpose", data.donation.purpose],
    ["Donation", fmt(data.donation.amount)],
    ["Platform Fee", fmt(data.donation.platformFee)],
  ];

  let sy = donorY + 54;

  summaryRows.forEach(([label, value], index) => {
    drawText(label, SX + 10, sy, {
      style: "bold",
      size: 8,
      color: GRAY_800,
    });

    drawText(value, SX + HW - 10, sy, {
      size: 8,
      color: DARK,
      align: "right",
    });

    if (index < summaryRows.length - 1) {
      hLine(SX + 8, sy + 8, HW - 16, GRAY_200, 0.25);
    }

    sy += 19;
  });

  y = donorY + SEC_H + 8;

  // Transactions

  const TH = 40;

  sectionBadge(M, y, "TRANSACTION DETAILS");

  const txY = y + HEADER_H + GAP;

  strokeRect(M, txY, CW, TH, GRAY_200, 0.6, 6);

  const txCols: [string, number, string, boolean][] = [
    ["Payment Mode", 0.18, data.transaction.paymentMode, false],
    ["Transaction ID", 0.3, data.transaction.transactionId, false],
    ["Transaction Date", 0.3, data.transaction.dateTime, false],
    ["Status", 0.22, data.transaction.status, true],
  ];

  let tx = M;

  txCols.forEach(([label, frac, value, status], index) => {
    const colW = CW * frac;

    drawText(label, tx + 8, txY + 14, {
      size: 6.5,
      color: GRAY_600,
    });

    drawText(value, tx + 8, txY + 27, {
      style: "bold",
      size: 8,
      color: status ? GREEN : DARK,
    });

    if (index < txCols.length - 1) {
      vLine(tx + colW, txY + 6, txY + TH - 6, GRAY_200);
    }

    tx += colW;
  });

  y = txY + TH;

  y += 10;

  hLine(M, y, CW, GRAY_200, 1);
  y += 8;

  const footerHeight = 140;

  doc.addImage(stampImage, "PNG", M, y, CW, footerHeight);

  y += footerHeight + 6;

  // footer
  const FH = 62;

  fillRect(0, y, PW, FH, NAVY);

  const COL = PW / 4;
  const PAD = 12;

  doc.setDrawColor(255, 255, 255);
  doc.setLineWidth(0.25);

  for (let i = 1; i < 4; i++) {
    const x = COL * i;
    doc.line(x, y + 6, x, y + FH - 6);
  }

  const FC1 = PAD;

  doc.addImage(location, "PNG", FC1, y + 6, 12, 20);

  drawText("OUR LOCATION", FC1 + 20, y + 15, {
    style: "bold",
    size: 7,
    color: WHITE,
  });

  data.org.address.split("\n").forEach((line, i) => {
    drawText(line, FC1 + 20, y + 26 + i * 7, {
      size: 6,
      color: "#d1d5db",
    });
  });

  doc.link(FC1, y + 8, COL - 20, FH - 16, {
    url: data.org.mapUrl,
  });

  const FC2 = COL + PAD;

  doc.addImage(phone, "PNG", FC2, y + 5, 16, 16);

  drawText("CONTACT", FC2 + 22, y + 15, {
    style: "bold",
    size: 7,
    color: WHITE,
  });

  drawText(data.org.phone, FC2 + 22, y + 27, {
    size: 6,
    color: "#d1d5db",
  });

  drawText(data.org.email, FC2 + 22, y + 36, {
    size: 6,
    color: "#d1d5db",
  });

  doc.link(textX, y + 22, 60, 8, {
    url: `tel:${data.org.phone.replace(/\s+/g, "")}`,
  });

  doc.link(textX, y + 31, 80, 8, {
    url: `mailto:${data.org.email}`,
  });

  const FC3 = COL * 2 + PAD;
  const iconSize = 16;

  doc.addImage(logo, "PNG", FC3, y + 5, iconSize, iconSize);

  drawText("WEBSITE", FC3 + 22, y + 15, {
    style: "bold",
    size: 7,
    color: WHITE,
  });

  drawText(data.org.website, FC3 + 22, y + 27, {
    size: 6,
    color: "#d1d5db",
  });

  doc.link(FC3 + 22, y + 22, 90, 8, {
    url: data.org.website,
  });

  const socialIcons = [
    { image: facebook, url: data.org.facebook },
    { image: instagram, url: data.org.instagram },
    { image: youtube, url: data.org.youtube },
    { image: twitter, url: data.org.twitter },
    { image: linkedin, url: data.org.linkedin },
  ];

  const socialIconSize = 8;
  const socialGap = 12;

  const socialStartX = FC3 + 22;
  const socialY = y + 38;

  socialIcons.forEach(({ image, url }, index) => {
    const x = socialStartX + index * socialGap;

    doc.addImage(image, "PNG", x, socialY, socialIconSize, socialIconSize);

    doc.link(x, socialY, socialIconSize, socialIconSize, {
      url,
    });
  });

  const FC4 = COL * 3;

  const qrSize = 40;
  const gap = 12;

  const qrX = FC4 + 10;
  const qrY = y + 12;

  const labelStartX = qrX + qrSize + gap;

  const textTopMargin = 6;

  const lineGap = 10;
  const labelStartY = y + 20 + textTopMargin;

  doc.addImage(qrCode, "PNG", qrX, qrY, qrSize, qrSize);

  doc.link(qrX, qrY, qrSize, qrSize, {
    url: data.org.website,
  });

  drawText("SCAN TO", labelStartX, labelStartY, {
    size: 8,
    color: "#ffffff",
  });

  drawText("KNOW MORE", labelStartX, labelStartY + lineGap, {
    size: 8,
    color: "#ffffff",
    style: "bold",
  });

  drawText("ABOUT US", labelStartX, labelStartY + lineGap * 2, {
    size: 8,
    color: "#ffffff",
  });

  y += FH;

  const stripH = 22;

  fillRect(0, y, PW, stripH, GREEN);

  const imgSize = 12;
  const gaP = 4;

  const text = data.org.tagline;

  const textWidth = doc.getTextWidth(text);

  const groupWidth = imgSize + gaP + textWidth;

  const startX = (PW - groupWidth) / 2;

  const imgY = y + (stripH - imgSize) / 2;

  doc.addImage(summaryHeader, "PNG", startX, imgY, imgSize, imgSize);

  drawText(text, startX + imgSize + gaP, y + stripH / 2 + 2, {
    style: "bold",
    size: 7.5,
    color: WHITE,
    align: "left",
  });

  y += stripH;

  doc.save(`PPA-Receipt-${data.receiptNo.replace(/\//g, "-")}.pdf`);
}

export default function DonationSuccessful({ data }: DonationSuccessfulProps) {
  const { donation } = data;
  const total = donation.amount + donation.platformFee;
  const router = useRouter();
  const [downloading, setDownloading] = useState(false);

 const handleDownload = async (): Promise<void> => {
  try {
    setDownloading(true);
    await downloadReceiptPDF(data);
  } finally {
    setDownloading(false);
  }
};

  return (
    <div className="flex flex-col items-center gap-6 px-4 py-8 border border-gray-200 rounded-2xl mx-auto">
      <div className="relative flex items-center justify-center">
        <span className="absolute -top-6 -left-8 w-2 h-2 rounded-full border-2 border-[#6BB643] opacity-60" />
        <span className="absolute top-0 right-[-3rem] w-2.5 h-2.5 rounded-full border-2 border-[#6BB643] opacity-40" />
        <span className="absolute bottom-0 -left-10 w-2.5 h-2.5 rounded-full bg-[#6BB643] opacity-30" />
        <span className="absolute -bottom-4 right-[-2rem] w-1 h-1 rounded-full bg-[#6BB643] opacity-40" />
        <span className="absolute top-2 right-[-4rem] text-[#6BB643] opacity-70 text-sm">
          ▷
        </span>

        <div className="w-24 h-24 rounded-full bg-[#e8f5e1] flex items-center justify-center">
          <div className="w-16 h-16 rounded-full bg-[#3a7d1e] flex items-center justify-center shadow-lg">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-8 h-8 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={3}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center gap-2 text-center">
        <h2 className="text-[26px] md:text-[30px] font-bold text-[#111827] leading-tight">
          Donation Successful!
        </h2>
        <p className="text-[15px] md:text-[17px] text-[#6B7280]">
          Thank you for believing in rural talent and supporting our mission.
        </p>
      </div>

      <div className="flex items-center gap-2 bg-[#F9FAFB] rounded-full px-5 py-2.5 text-sm text-[#6B7280]">
        <Mail size={15} className="text-[#6B7280]" />
        <span>We have sent the donation receipt to your email.</span>
        <Mail size={15} className="text-[#6B7280]" />
      </div>

      <div className="w-full rounded-2xl border border-[#E5E7EB] bg-[#F9FAFB] p-5 flex flex-col gap-4">
        <h3 className="text-[17px] font-bold text-[#111827]">
          Transaction Details
        </h3>
        <div className="flex flex-col gap-3">
          {[
            {
              label: "Transaction ID",
              value: data.transaction.transactionId,
              bold: false,
            },
            {
              label: "Payment Mode",
              value: data.transaction.paymentMode,
              bold: false,
            },
            {
              label: "Transaction Date",
              value: data.transaction.dateTime,
              bold: true,
            },
            {
              label: "Payment Status",
              value: data.transaction.status,
              isStatus: true,
            },
          ].map(({ label, value, bold, isStatus }) => (
            <div key={label} className="flex items-center justify-between">
              <span className="text-[14px] text-[#6B7280]">{label}</span>
              <span
                className={`text-[14px] ${
                  isStatus
                    ? "text-[#3a7d1e] font-semibold"
                    : bold
                      ? "font-semibold text-[#111827]"
                      : "text-[#111827]"
                }`}
              >
                {value}
              </span>
            </div>
          ))}
        </div>

<button
  onClick={handleDownload}
  disabled={downloading}
  className="mt-2 cursor-pointer flex w-full items-center justify-center gap-2 rounded-xl bg-[#3a7d1e] py-4 text-sm font-bold uppercase tracking-widest text-white hover:bg-[#2f6618] transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
>
  {downloading ? (
    <>
      <span className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent" />
      Downloading...
    </>
  ) : (
    <>
      <Download size={18} />
      Download Receipt
    </>
  )}
</button>

        <div className="grid grid-cols-2 gap-3">
          <button className="flex items-center justify-center gap-2 rounded-xl border border-[#E5E7EB] bg-white py-3.5 text-sm font-semibold uppercase tracking-wider text-[#374151] hover:bg-gray-50 transition-colors">
            <Mail size={16} />
            View Receipt on Email
          </button>
          <button
            onClick={() => router.push("/shareyour-support")}
            className="cursor-pointer flex items-center justify-center gap-2 rounded-xl border border-[#E5E7EB] bg-white py-3.5 text-sm font-semibold tracking-wider text-[#374151] hover:bg-gray-50 transition-colors"
          >
            <Share2 size={16} />
            Share Your Support
          </button>
        </div>
      </div>
    </div>
  );
}
