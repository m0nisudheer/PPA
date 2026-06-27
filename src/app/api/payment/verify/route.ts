import crypto from "crypto";
import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/src/app/lib/prisma";

export async function POST(req: NextRequest) {
  try {
    const {
      razorpay_order_id,
      razorpay_payment_id,
      razorpay_signature,
    } = await req.json();

    const donation = await prisma.donation.findFirst({
      where: { razorpayOrderId: razorpay_order_id },
    });

    if (!donation) {
      return NextResponse.json(
        { success: false, message: "Donation not found" },
        { status: 404 }
      );
    }

    if (donation.paymentStatus === "success") {
      return NextResponse.json({
        success: true,
        data: donation,
        message: "Already verified",
      });
    }

    const expectedSignature = crypto
      .createHmac("sha256", process.env.RAZORPAY_KEY_SECRET_ID!)
      .update(`${razorpay_order_id}|${razorpay_payment_id}`)
      .digest("hex");

    const status =
      expectedSignature === razorpay_signature ? "success" : "failed";

    const updated = await prisma.donation.update({
      where: { razorpayOrderId: razorpay_order_id },
      data: {
        razorpayPaymentId: razorpay_payment_id,
        razorpaySignature: razorpay_signature,
        paymentStatus: status,
      },
      include: { donor: true },
    });

    return NextResponse.json({
      success: true,
      data: updated,
    });
  } catch (error: any) {
    return NextResponse.json(
      { success: false, message: error.message },
      { status: 500 }
    );
  }
}