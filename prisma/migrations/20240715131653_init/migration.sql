-- CreateTable
CREATE TABLE "Todo" (
    "TodoId" TEXT NOT NULL PRIMARY KEY,
    "Title" TEXT NOT NULL,
    "Content" TEXT NOT NULL,
    "CreatedAt" DATETIME NOT NULL,
    "Completed" BOOLEAN NOT NULL DEFAULT false
);
