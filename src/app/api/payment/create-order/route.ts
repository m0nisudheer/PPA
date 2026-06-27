import Razorpay from "razorpay";
import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/src/app/lib/prisma";

const razorpay = new Razorpay({
  key_id: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID!,
  key_secret: process.env.RAZORPAY_KEY_SECRET_ID!,
});

export async function POST(req: NextRequest) {
  try {
    const {
      fullName,
      email,
      mobile,
      donorType,
      pan,
      addressLine1,
      addressLine2,
      city,
      state,
      pinCode,
      amount,
      title,
      description,
      platformFee,
    } = await req.json();

    const donor = await prisma.donor.upsert({
      where: { email },
      update: {},
      create: {
        fullName,
        email,
        mobile,
        donorType,
        pan,
        addressLine1,
        addressLine2,
        city,
        state,
        pinCode,
      },
    });

  const order = await razorpay.orders.create({
  amount: amount * 100,
  currency: "INR",
  receipt: `don_${Date.now()}`,
});

    const donation = await prisma.donation.create({
      data: {
        donorId: donor.id,
        amount,
        title,
        description,
        platformFee,
        razorpayOrderId: order.id,
        paymentStatus: "pending",
      },
    });

    return NextResponse.json({
      success: true,
      order,
      donationId: donation.id,
    });
  } catch (error: any) {
    return NextResponse.json(
      { success: false, message: error.message },
      { status: 500 }
    );
  }
}