import clientPromise from "@/lib/mongodb";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const body = await request.json(); // { url: string, shortUrl: string }

  if (!body.url || !body.shortUrl) {
    return NextResponse.json(
      { message: "URL and ShortUrl are required", success: false, error: true },
      { status: 400 } // Bad Request if input is missing
    );
  }

  const client = await clientPromise; // connect to mongodb
  const db = client.db(process.env.MONGODB_DB); // use database from .env
  const collection = db.collection("url"); // use collection named "url"

  // check if short url exists in db
  const doc = await collection.findOne({ shortUrl: body.shortUrl }); // this checks if the shortUrl already exists in the database
  if (doc) {
    return NextResponse.json(
      {
        message: "Short URL already exists, try anything else",
        success: false,
        error: true,
      },
      { status: 409 }
    );
  }

  const result = await collection.insertOne({
    url: body.url,
    shortUrl: body.shortUrl,
  });

  return NextResponse.json({
    message: "url generated successfully",
    success: true,
    error: false,
  });
}
