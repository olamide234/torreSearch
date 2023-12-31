"use client";
import { useState, useEffect } from "react";
import axios from "axios";
import SearchResult from "@/components/SearchResult";
import SearchInput from "@/components/SearchInput";
import { ISearchData } from "@/components/SearchItem";

interface IResult extends ISearchData {
  completion: number;
  grammar: number;
  weight: number;
  connections: any[];
  totalStrength: number;
  pageRank: number;
  status: string | null;
  creators: any[];
  relationDegree: number;
}

type IData = {
  data: IResult;
};

export default function Home() {
  const [result, setResult] = useState([]);
  const [onSearchHover, setOnSearchHover] = useState(false);
  const [onSearchFocus, setOnSearchFocus] = useState(false);

  const [searchInput, setSearchInput] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!onSearchFocus && result.length > 0) setResult([]);
    return () => {};
  }, [onSearchFocus]);

  const handleChange = (evt: any) => {
    setSearchInput(evt.target.value);
  };

  const debounce = (func: Function) => {
    let timer: string | number | ReturnType<typeof setTimeout> | null;
    return function (...args) {
      const context = this;
      if (timer) clearTimeout(timer);
      timer = setTimeout(() => {
        timer = null;
        func.apply(context, args);
      }, 100);
    };
  };

  const onSearch = async () => {
    setLoading(true);
    const response = await axios
      .post(`${process.env.NEXT_PUBLIC_SEARCH_API}/entities/_searchStream`, {
        excludeContacts: true,
        excludedPeople: [],
        identityType: "person",
        limit: 10,
        meta: false,
        query: searchInput,
        torreGgId: `${process.env.NEXT_PUBLIC_TORRE_ID}`,
      })
      .then((response) => {
        const contentType = response.headers["content-type"];
        if (contentType === "application/x-ndjson") {
          const ndjson = response.data
            .split("\n")
            .filter(Boolean)
            .map(JSON.parse);
          setResult(ndjson);
        } else {
          setResult(response.data);
        }
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
      });
  };

  const optimizedFn = debounce(onSearch);

  return (
    <main className="bg-[#010101] min-h-screen text-sm tracking-[0.01em]">
      <div className="flex items-center flex h-14 w-full bg-[#27292d] pr-2">
        <h1 className="mx-4 text-xl tracking-[0.005em] pb-2 text-[#ffffffe6]">
          Search
        </h1>
      </div>
      <div className="w-full relative flex flex-col justify-center items-center overflow-y-auto py-6 px-4 min-h-[92vh]">
        <div className="flex flex-col justify-start items-center min-h-[20.313rem] w-[45rem] max-w-full">
          <SearchInput
            onSearchHover={onSearchHover}
            setOnSearchHover={setOnSearchHover}
            onSearchFocus={onSearchFocus}
            setOnSearchFocus={setOnSearchFocus}
            handleChange={(e) => handleChange(e)}
            onSearch={optimizedFn}
          />
          {loading ? (
            <div className="text-white">Loading</div>
          ) : (
            result?.length > 0 && <SearchResult searchData={result} />
          )}
        </div>
      </div>
    </main>
  );
}
