import { NextResponse } from "next/server";
import { prisma } from "@/src/app/lib/prisma";

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
          select: {
            amount: true,
          },
        },
      },
    });

   const data = donors.map((donor: (typeof donors)[number]) => {
  const totalDonations = donor.donations.length;

  const totalAmount = donor.donations.reduce(
    (sum: number, d: { amount: number }) => sum + d.amount,
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