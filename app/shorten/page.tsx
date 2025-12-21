"use client";
import Link from "next/link";
import React, { useState } from "react";
import { Luckiest_Guy } from "next/font/google";
import { Delius } from "next/font/google";

const luckiestGuy = Luckiest_Guy({ subsets: ["latin"], weight: "400" });
const delius = Delius({ subsets: ["latin"], weight: "400" });

const Page = () => {
  const [url, seturl] = useState("");
  const [shortUrl, setshortUrl] = useState("");
  const [generated, setgenerated] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const generate = async () => {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
      url: url,
      shortUrl: shortUrl,
    });

    const requestOptions: RequestInit = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    setLoading(true); // Set loading state to true while request is being processed

    try {
      const response = await fetch("/api/generate", requestOptions);
      const result = await response.json();

      setLoading(false);

      if (result.success) {
        // Success: Show the generated URL
        setgenerated(`${process.env.NEXT_PUBLIC_HOST}/${shortUrl}`);
        setError(""); // Clear any previous error
      } else {
        // Error: Show the error message (e.g., "Short URL already exists")
        setgenerated(""); // Clear the generated URL if error occurs
        setError(result.message); // Display the error message
        alert(result.message);
      }
    } catch (error) {
      console.error("Error:", error);
      setLoading(false);
      setError(
        "An error occurred while generating the short URL. Please try again."
      );
    }
  };

  return (
    // <div class="absolute top-0 -z-10 h-full w-full bg-white"><div class="absolute bottom-auto left-auto right-0 top-0 h-[500px] w-[500px] -translate-x-[30%] translate-y-[20%] rounded-full "></div></div>

    <div className="bg-linear-to-r from-sky-300/80 to-sky-600 min-h-screen flex flex-col items-center ">
      <div className="mx-auto max-w-xl bg-linear-to-r from-sky-200 to-sky-300/80 p-18 my-20 flex flex-col gap-4 rounded-lg">
        <h1
          className={`text-3xl font-light text-center mb-4 ${luckiestGuy.className}`}
        >
          Generate Your Shortened URL
        </h1>
        <div className="flex flex-col gap-5">
          <input
            type="text"
            placeholder="Enter Your URL"
            className="p-2 focus:outline-sky-400 rounded-md bg-gray-50 border-2 border-sky-500"
            value={url}
            onChange={(e) => {
              seturl(e.target.value);
            }}
          />
          <input
            type="text"
            placeholder="Enter Your preferred Short URL text"
            className="p-2 focus:outline-sky-400 rounded-md bg-gray-50 border-2 border-sky-500"
            value={shortUrl}
            onChange={(e) => {
              setshortUrl(e.target.value);
            }}
          />
          <button
            onClick={generate}
            className={`p-2 rounded-lg text-center bg-blue-600 text-white py-3 ${delius.className} cursor-pointer hover:bg-blue-700`}
          >
            {loading ? (
              <span>Loading...</span> // Show loading text
            ) : (
              "Generate"
            )}
          </button>
        </div>
        {/* {error && <div className="text-red-600 text-center mt-4">{error}</div>} */}
        {generated && (
          <code className="">
            <span className="font-bold">Your shortened URL is:</span>{" "}
            <Link
              href={generated}
              className="text-blue-600 underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              {generated}
            </Link>
          </code>
        )}
      </div>
    </div>
  );
};

export default Page;
