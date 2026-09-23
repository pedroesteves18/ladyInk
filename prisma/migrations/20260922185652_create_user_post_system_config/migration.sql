-- CreateTable
CREATE TABLE "SystemConfig" (
    "id" SERIAL NOT NULL,
    "autoPostEnabled" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "SystemConfig_pkey" PRIMARY KEY ("id")
);
