/*
  Warnings:

  - You are about to drop the column `amount` on the `Donor` table. All the data in the column will be lost.
  - You are about to drop the column `description` on the `Donor` table. All the data in the column will be lost.
  - You are about to drop the column `platformFee` on the `Donor` table. All the data in the column will be lost.
  - You are about to drop the column `title` on the `Donor` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[email]` on the table `Donor` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateEnum
CREATE TYPE "PaymentStatus" AS ENUM ('pending', 'success', 'failed');

-- AlterTable
ALTER TABLE "Donor" DROP COLUMN "amount",
DROP COLUMN "description",
DROP COLUMN "platformFee",
DROP COLUMN "title",
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;

-- CreateTable
CREATE TABLE "Donation" (
    "id" SERIAL NOT NULL,
    "donorId" INTEGER NOT NULL,
    "amount" INTEGER NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "platformFee" INTEGER NOT NULL,
    "razorpayOrderId" TEXT NOT NULL,
    "razorpayPaymentId" TEXT,
    "razorpaySignature" TEXT,
    "paymentStatus" "PaymentStatus" NOT NULL DEFAULT 'pending',
    "receipt" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Donation_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Donation_razorpayOrderId_key" ON "Donation"("razorpayOrderId");

-- CreateIndex
CREATE UNIQUE INDEX "Donor_email_key" ON "Donor"("email");

-- AddForeignKey
ALTER TABLE "Donation" ADD CONSTRAINT "Donation_donorId_fkey" FOREIGN KEY ("donorId") REFERENCES "Donor"("id") ON DELETE CASCADE ON UPDATE CASCADE;
