/*
  Warnings:

  - You are about to drop the column `content` on the `Work` table. All the data in the column will be lost.
  - You are about to drop the column `slug` on the `Work` table. All the data in the column will be lost.
  - Added the required column `updatedAt` to the `Work` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Work" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "title" TEXT NOT NULL,
    "category" TEXT,
    "thumbnail" TEXT,
    "techStack" TEXT,
    "summary" TEXT,
    "siteUrl" TEXT,
    "githubUrl" TEXT,
    "detailUrl" TEXT,
    "featured" BOOLEAN NOT NULL DEFAULT false,
    "isPublished" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);
INSERT INTO "new_Work" ("createdAt", "id", "title") SELECT "createdAt", "id", "title" FROM "Work";
DROP TABLE "Work";
ALTER TABLE "new_Work" RENAME TO "Work";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
