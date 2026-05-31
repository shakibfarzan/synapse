-- CreateEnum
CREATE TYPE "Mood" AS ENUM ('DREAMY', 'DARK', 'CALM', 'CHAOTIC');

-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "imageUrl" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Thought" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "mood" "Mood" NOT NULL,
    "isFavorite" BOOLEAN NOT NULL DEFAULT false,
    "isArchived" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "userId" TEXT NOT NULL,

    CONSTRAINT "Thought_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Tag" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Tag_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ThoughtTag" (
    "thoughtId" TEXT NOT NULL,
    "tagId" TEXT NOT NULL,

    CONSTRAINT "ThoughtTag_pkey" PRIMARY KEY ("thoughtId","tagId")
);

-- CreateTable
CREATE TABLE "Connection" (
    "id" TEXT NOT NULL,
    "sourceId" TEXT NOT NULL,
    "targetId" TEXT NOT NULL,
    "label" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Connection_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE INDEX "User_email_idx" ON "User"("email");

-- CreateIndex
CREATE INDEX "Thought_userId_idx" ON "Thought"("userId");

-- CreateIndex
CREATE INDEX "Thought_mood_idx" ON "Thought"("mood");

-- CreateIndex
CREATE INDEX "Thought_createdAt_idx" ON "Thought"("createdAt");

-- CreateIndex
CREATE INDEX "Tag_userId_idx" ON "Tag"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "Tag_userId_name_key" ON "Tag"("userId", "name");

-- CreateIndex
CREATE INDEX "Connection_sourceId_idx" ON "Connection"("sourceId");

-- CreateIndex
CREATE INDEX "Connection_targetId_idx" ON "Connection"("targetId");

-- CreateIndex
CREATE UNIQUE INDEX "Connection_sourceId_targetId_key" ON "Connection"("sourceId", "targetId");

-- AddForeignKey
ALTER TABLE "Thought" ADD CONSTRAINT "Thought_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ThoughtTag" ADD CONSTRAINT "ThoughtTag_thoughtId_fkey" FOREIGN KEY ("thoughtId") REFERENCES "Thought"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ThoughtTag" ADD CONSTRAINT "ThoughtTag_tagId_fkey" FOREIGN KEY ("tagId") REFERENCES "Tag"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Connection" ADD CONSTRAINT "Connection_sourceId_fkey" FOREIGN KEY ("sourceId") REFERENCES "Thought"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Connection" ADD CONSTRAINT "Connection_targetId_fkey" FOREIGN KEY ("targetId") REFERENCES "Thought"("id") ON DELETE CASCADE ON UPDATE CASCADE;
