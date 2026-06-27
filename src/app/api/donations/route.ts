import { NextResponse } from "next/server";
import { prisma } from "@/src/app/lib/prisma";

type Donation = {
  id: string;
  amount: number;
  title: string;
  description: string;
  paymentStatus: string;
  razorpayOrderId: string;
  razorpayPaymentId: string | null;
  createdAt: Date;
};

type DonorWithDonations = {
  id: string;
  fullName: string;
  email: string;
  mobile: string;
  donorType: string;
  donations: Donation[];
};

export async function GET() {
  try {
    const donors = await prisma.donor.findMany({
      select: {
        id: true,
        fullName: true,
        email: true,
        mobile: true,
        donorType: true,
        donations: {
          orderBy: {
            createdAt: "desc",
          },
          select: {
            id: true,
            amount: true,
            title: true,
            description: true,
            paymentStatus: true,
            razorpayOrderId: true,
            razorpayPaymentId: true,
            createdAt: true,
          },
        },
      },
    });

    const data = donors.map((donor: DonorWithDonations) => {
      const totalDonations = donor.donations.length;

      const totalAmount = donor.donations.reduce(
        (sum, d) => sum + d.amount,
        0
      );

      return {
        ...donor,
        totalDonations,
        totalAmount,
      };
    });

    return NextResponse.json({
      success: true,
      data,
    });
  } catch (error: any) {
    return NextResponse.json(
      {
        success: false,
        message: error.message,
      },
      { status: 500 }
    );
  }
}