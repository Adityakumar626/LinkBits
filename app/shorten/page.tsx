"use client";
import Link from "next/link";
import React, { useState } from "react";

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

    <div className="mx-auto max-w-xl bg-purple-300 p-12 my-20 flex flex-col gap-4 rounded-md">
      <h1 className="text-2xl font-bold text-center mb-4">
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
          className="p-2 rounded-lg text-center bg-fuchsia-600 text-white py-3 cursor-pointer hover:bg-fuchsia-700 "
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
  );
};

export default Page;
