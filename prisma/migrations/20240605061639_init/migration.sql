/*
  Warnings:

  - Added the required column `date` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `message` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `phone` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `service` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `therapist` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `user` ADD COLUMN `date` DATETIME(3) NOT NULL,
    ADD COLUMN `message` VARCHAR(191) NOT NULL,
    ADD COLUMN `phone` VARCHAR(191) NOT NULL,
    ADD COLUMN `service` VARCHAR(191) NOT NULL,
    ADD COLUMN `therapist` VARCHAR(191) NOT NULL;
