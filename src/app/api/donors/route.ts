import { NextRequest, NextResponse } from "next/server";
import { prisma } from "../../lib/prisma";

export async function GET() {
  try {
    const donors = await prisma.donor.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });

    return NextResponse.json({
      success: true,
      message: "Donors fetched successfully.",
      data: donors,
    });
  } catch (error: any) {
    return NextResponse.json(
      {
        success: false,
        message: error.message || "Failed to fetch donors.",
      },
      { status: 500 }
    );
  }
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    if (
      body.donorType !== "individual" &&
      body.donorType !== "organisation"
    ) {
      return NextResponse.json(
        {
          success: false,
          message: "Invalid donor type.",
        },
        { status: 400 }
      );
    }

    const donor = await prisma.donor.create({
      data: {
        donorType: body.donorType,
        fullName: body.fullName,
        email: body.email,
        mobile: body.mobile,
        pan: body.pan || null,
        addressLine1: body.addressLine1 || null,
        addressLine2: body.addressLine2 || null,
        city: body.city || null,
        state: body.state || null,
        pinCode: body.pinCode || null,
      },
    });

    return NextResponse.json({
      success: true,
      message: "Donor created successfully.",
      data: donor,
    });
  } catch (error: any) {
    return NextResponse.json(
      {
        success: false,
        message: error.message || "Something went wrong.",
      },
      { status: 500 }
    );
  }
}