-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Todo" (
    "TodoId" TEXT NOT NULL PRIMARY KEY,
    "Title" TEXT NOT NULL,
    "Content" TEXT NOT NULL,
    "CreatedAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "Completed" BOOLEAN NOT NULL DEFAULT false
);
INSERT INTO "new_Todo" ("Completed", "Content", "CreatedAt", "Title", "TodoId") SELECT "Completed", "Content", "CreatedAt", "Title", "TodoId" FROM "Todo";
DROP TABLE "Todo";
ALTER TABLE "new_Todo" RENAME TO "Todo";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
