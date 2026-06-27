import { NextRequest, NextResponse } from "next/server";
import { prisma } from "../../lib/prisma";
import { DonorType } from "@prisma/client";

export async function GET() {
  try {
    const donors = await prisma.donor.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });

    return NextResponse.json(
      {
        success: true,
        message: "Donors fetched successfully.",
        data: donors,
      },
      { status: 200 },
    );
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        success: false,
        message: "Failed to fetch donors.",
      },
      { status: 500 },
    );
  }
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    if (
      body.donorType !== DonorType.individual &&
      body.donorType !== DonorType.organisation
    ) {
      return NextResponse.json(
        {
          success: false,
          message: "Invalid donor type.",
        },
        { status: 400 },
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
        // amount: body.amount,
        // title: body.title,
        // description: body.description,
        // platformFee: body.platformFee,
      },
    });

    return NextResponse.json(
      {
        success: true,
        message: "Donor created successfully.",
        data: donor,
      },
      { status: 201 },
    );
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        success: false,
        message: "Something went wrong while creating the donor.",
      },
      { status: 500 },
    );
  }
}
