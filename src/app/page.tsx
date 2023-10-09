"use client";
import { useState } from "react";
import SearchResult from "@/components/SearchResult";
import SearchInput from "@/components/SearchInput";

export default function Home() {
  const [onSearchHover, setOnSearchHover] = useState(false);
  const [onSearchFocus, setOnSearchFocus] = useState(false);
  return (
    <main className="bg-[#010101] min-h-screen text-sm tracking-[0.01em]">
      <div className="flex items-center flex h-14 w-full bg-[#27292d] pr-2">
        <h1 className="mx-4 text-xl tracking-[0.005em] pb-2 text-[#ffffffe6]">
          Search
        </h1>
      </div>
      <div className="w-full relative flex flex-col justify-center items-center overflowY-auto py-6 px-4 min-h-[92vh]">
        <div className="flex flex-col justify-start items-center min-h-[20.313rem] w-[45rem] max-w-full">
          <SearchInput
            onSearchHover={onSearchHover}
            setOnSearchHover={setOnSearchHover}
            onSearchFocus={onSearchFocus}
            setOnSearchFocus={setOnSearchFocus}
          />
          <SearchResult searchData={dummyData} />
        </div>
      </div>
    </main>
  );
}

const dummyData = [
  {
    ardaId: 39931709,
    ggId: "1572816",
    name: "Olamide Tofade",
    comparableName: "olamide tofade",
    username: "olamidetofade",
    professionalHeadline: "Software engineer",
    imageUrl:
      "https://res.cloudinary.com/torre-technologies-co/image/upload/c_fill,h_150,w_150/v1693540962/origin/starrgate/users/profile_20bf19463fcc889b6a84e2857c61ffb48d01332e.jpg",

    verified: false,
    connections: [],
    totalStrength: 0.0,
    pageRank: 0.15479494166055355,
    organizationId: null,
    organizationNumericId: null,
    publicId: null,
    contact: false,
  },
  {
    ardaId: 8007636,
    ggId: "13",
    name: "Alexander Torrenegra",
    comparableName: "alexander torrenegra",
    username: "torrenegra",
    professionalHeadline:
      "Head of Torre. Shark at Shark Tank in LatAm.Co-founder of Tribe, Bunny Studio, and Voice123.",
    imageUrl:
      "https://res.cloudinary.com/torre-technologies-co/image/upload/c_fill,h_150,w_150/v0/origin/starrgate/users/profile_bd307a3ec329e10a2cff8fb87480823da114f8f4.jpg",
    verified: true,
    connections: [],
    totalStrength: 0.15479494166055355,
    pageRank: 7520.090203997622,
    organizationId: null,
    organizationNumericId: null,
    publicId: null,
    contact: false,
  },
];
