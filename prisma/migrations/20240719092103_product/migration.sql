/*
  Warnings:

  - You are about to drop the `_ProductToSaveProduct` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "_ProductToSaveProduct" DROP CONSTRAINT "_ProductToSaveProduct_A_fkey";

-- DropForeignKey
ALTER TABLE "_ProductToSaveProduct" DROP CONSTRAINT "_ProductToSaveProduct_B_fkey";

-- DropTable
DROP TABLE "_ProductToSaveProduct";

-- AddForeignKey
ALTER TABLE "SaveProduct" ADD CONSTRAINT "SaveProduct_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Product"("id") ON DELETE CASCADE ON UPDATE CASCADE;
