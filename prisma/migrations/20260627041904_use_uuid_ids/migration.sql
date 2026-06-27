/*
  Warnings:

  - The primary key for the `Donation` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `Donor` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- DropForeignKey
ALTER TABLE "Donation" DROP CONSTRAINT "Donation_donorId_fkey";

-- AlterTable
ALTER TABLE "Donation" DROP CONSTRAINT "Donation_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ALTER COLUMN "donorId" SET DATA TYPE TEXT,
ALTER COLUMN "updatedAt" DROP DEFAULT,
ADD CONSTRAINT "Donation_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "Donation_id_seq";

-- AlterTable
ALTER TABLE "Donor" DROP CONSTRAINT "Donor_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ALTER COLUMN "updatedAt" DROP DEFAULT,
ADD CONSTRAINT "Donor_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "Donor_id_seq";

-- AddForeignKey
ALTER TABLE "Donation" ADD CONSTRAINT "Donation_donorId_fkey" FOREIGN KEY ("donorId") REFERENCES "Donor"("id") ON DELETE CASCADE ON UPDATE CASCADE;
