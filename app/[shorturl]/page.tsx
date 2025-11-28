import { redirect } from "next/navigation";
import clientPromise from "@/lib/mongodb";

export default async function Page({
  params,
}: {
  params: Promise<{ shorturl: string }>;
}) {
  const { shorturl } = await params;

  const client = await clientPromise; // connect to mongodb
  const db = client.db(process.env.MONGODB_DB); // use database named "linkbits"
  const collection = db.collection("url"); // use collection named "url"

  const doc = await collection.findOne({ shortUrl: shorturl }); // this checks if the shortUrl already exists in the database
  console.log(doc);
  if (doc) {
    redirect(doc.url);
  } else {
    redirect(`${process.env.NEXT_PUBLIC_HOST}`);
  }
}
