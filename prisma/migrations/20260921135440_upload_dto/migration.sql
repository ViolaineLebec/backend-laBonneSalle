/*
  Warnings:

  - Made the column `name` on table `room` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE `room` MODIFY `name` VARCHAR(191) NOT NULL;
