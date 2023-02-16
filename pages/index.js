import Head from "next/head";
import LivepeerUploader from "@/helpers/uploadFile/uploader";
import React, { useState } from "react";

import { ConnectButton } from "@rainbow-me/rainbowkit";
import { useRouter } from "next/router";
import UploadToIPFS from "../helpers/uploadFile/uploadIPFS.jsx";
import StreamPlayer from "./StreamPlayer";

const Home = () => {
  const router = useRouter();

  return (
    <>
      <Head>
        <title>Vidmon</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        {/* <LivepeerUploader /> */}
        <UploadToIPFS />
        {/* <button
          className="bg-red-500"
          onClick={() => {
            router.push({
              pathname: "VideoPlayer",
              query: {
                videoLink:
                  "https://lp-playback.com/hls/193brz5km4uw974f/index.m3u8",
              },
            });
          }}
        >
          Video Player
        </button> */}
        <StreamPlayer></StreamPlayer>
      </main>
    </>
  );
};
export default Home;
