import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/src/app/lib/prisma";

export async function GET(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params; // ✅ REQUIRED FIX

    if (!id) {
      return NextResponse.json(
        { success: false, message: "Missing id" },
        { status: 400 }
      );
    }

    const donation = await prisma.donation.findUnique({
      where: {
        id: id, // ✅ string UUID
      },
      include: {
        donor: true,
      },
    });

    if (!donation) {
      return NextResponse.json(
        { success: false, message: "Donation not found" },
        { status: 404 }
      );
    }

    return NextResponse.json({
      success: true,
      data: donation,
    });
  } catch (error: any) {
    console.error(error);

    return NextResponse.json(
      {
        success: false,
        message: error.message,
      },
      { status: 500 }
    );
  }
}