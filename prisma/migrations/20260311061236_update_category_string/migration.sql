/*
  Warnings:

  - Made the column `category` on table `Work` required. This step will fail if there are existing NULL values in that column.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Work" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "title" TEXT NOT NULL,
    "category" TEXT NOT NULL,
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
INSERT INTO "new_Work" ("category", "createdAt", "detailUrl", "featured", "githubUrl", "id", "isPublished", "siteUrl", "summary", "techStack", "thumbnail", "title", "updatedAt") SELECT "category", "createdAt", "detailUrl", "featured", "githubUrl", "id", "isPublished", "siteUrl", "summary", "techStack", "thumbnail", "title", "updatedAt" FROM "Work";
DROP TABLE "Work";
ALTER TABLE "new_Work" RENAME TO "Work";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
