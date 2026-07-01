import Razorpay from "razorpay";
import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/src/app/lib/prisma";

export async function POST(req: NextRequest) {
  const razorpay = new Razorpay({
    key_id: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID!,
    key_secret: process.env.RAZORPAY_KEY_SECRET_ID!,
  });

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
      // platformFee,
    } = await req.json();

    // Create or update donor
    const donor = await prisma.donor.upsert({
      where: { email },
      update: {
        fullName,
        mobile,
        donorType,
        pan,
        addressLine1,
        addressLine2,
        city,
        state,
        pinCode,
      },
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

    // Create Razorpay order
    const order = await razorpay.orders.create({
      amount: amount * 100, // Amount in paise
      currency: "INR",
      receipt: `don_${Date.now()}`,
    });

    // Create donation
    const donation = await prisma.donation.create({
      data: {
        donorId: donor.id,
        donorType: donor.donorType, // Required if Donation model has donorType
        amount,
        title,
        description,
        // platformFee,
        razorpayOrderId: order.id,
        paymentStatus: "pending",
      },
    });

    return NextResponse.json(
      {
        success: true,
        order,
        donationId: donation.id,
      },
      { status: 200 }
    );
  } catch (error: any) {
    console.error(error);

    return NextResponse.json(
      {
        success: false,
        message: error.message || "Something went wrong.",
      },
      { status: 500 }
    );
  }
}