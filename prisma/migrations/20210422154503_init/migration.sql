-- CreateTable
CREATE TABLE "Attraction" (
    "attraction_id" SERIAL NOT NULL,
    "attraction_name" TEXT NOT NULL,
    "cityId" INTEGER NOT NULL,

    PRIMARY KEY ("attraction_id")
);

-- CreateTable
CREATE TABLE "City" (
    "city_id" SERIAL NOT NULL,
    "city_name" TEXT NOT NULL,

    PRIMARY KEY ("city_id")
);

-- CreateTable
CREATE TABLE "Resource" (
    "resource_id" SERIAL NOT NULL,
    "resource_name" TEXT NOT NULL,
    "attractionId" INTEGER NOT NULL,

    PRIMARY KEY ("resource_id")
);

-- AddForeignKey
ALTER TABLE "Attraction" ADD FOREIGN KEY ("cityId") REFERENCES "City"("city_id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Resource" ADD FOREIGN KEY ("attractionId") REFERENCES "Attraction"("attraction_id") ON DELETE CASCADE ON UPDATE CASCADE;
