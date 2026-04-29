-- AlterTable
ALTER TABLE "User" ADD COLUMN     "passwordId" TEXT;

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_passwordId_fkey" FOREIGN KEY ("passwordId") REFERENCES "Password"("id") ON DELETE SET NULL ON UPDATE CASCADE;
