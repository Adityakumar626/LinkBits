"use client";
import Link from "next/link";
import React, { useState } from "react";
import { Luckiest_Guy } from "next/font/google";

const luckiestGuy = Luckiest_Guy({ subsets: ["latin"], weight: "400" });

const Page = () => {
  const [url, seturl] = useState("");
  const [shortUrl, setshortUrl] = useState("");
  const [generated, setgenerated] = useState("");

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

    fetch("/api/generate", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        seturl("");
        setshortUrl("");
        console.log(result);
        setgenerated(`${process.env.NEXT_PUBLIC_HOST}/${shortUrl}`);
        alert(result.message);
      })
      .catch((error) => console.error(error));
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
            className="p-2 focus:outline-fuchsia-800 rounded-md bg-gray-50"
            value={url}
            onChange={(e) => {
              seturl(e.target.value);
            }}
          />
          <input
            type="text"
            placeholder="Enter Your preferred short URL text"
            className="p-2 focus:outline-fuchsia-800 rounded-md bg-gray-50"
            value={shortUrl}
            onChange={(e) => {
              setshortUrl(e.target.value);
            }}
          />
          <button
            onClick={generate}
            className="p-2 rounded-lg text-center bg-blue-600 text-white py-3 cursor-pointer hover:bg-blue-700 "
          >
            Generate
          </button>
        </div>
        {generated && (
          <code>
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
