import Razorpay from "razorpay";
import { NextResponse } from "next/server";

export async function GET() {
  const razorpay = new Razorpay({
    key_id: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID!,
    key_secret: process.env.RAZORPAY_KEY_SECRET_ID!,
  });

  try {
    const orders = await razorpay.orders.all({ count: 20 });
    return NextResponse.json({ success: true, data: orders.items });
  } catch (error: any) {
    return NextResponse.json({ success: false, message: error.message }, { status: 500 });
  }
}