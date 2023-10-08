"use client"
import {useState} from "react"
import Image from "next/image";
import SearchIcon from "@/assets/svg/SearchIcon";

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
          <div className="w-full">
            {/* <div> */}
            <fieldset
              onMouseEnter={() => setOnSearchHover(true)}
              onMouseLeave={() => setOnSearchHover(false)}
              onFocus={()=>{setOnSearchHover(false); setOnSearchFocus(true)}}
              onBlur={()=>setOnSearchFocus(false)}
              className={`${
                onSearchHover ? "border-[#ffffffe6]" : "border-[#ffffffa6]"
              } ${onSearchFocus ? "!border-[#cddc39]" : "mt-2"} border rounded-[100px] w-full min-h-[2.875rem] flex relative`}
            >
              {onSearchFocus && <legend className="text-[#cddc39] text-xs ml-[6%] sm:ml-[5%]">Search people by name</legend>}
              <span className={`${onSearchFocus ? "mt-2 mb-4": "my-4"} ml-6`}>
                {onSearchHover ? (
                  <SearchIcon color="#ffffffe6" />
                ) : onSearchFocus ? <SearchIcon color="#cddc39"/> : (
                  <SearchIcon />
                )}
              </span>
              <div className={`${onSearchFocus ? "pb-2" : "py-2"} w-full px-3 flex items-center flex-wrap`}>
                <div className="flex grow">
                  <input
                    placeholder="Search people by name"
                    autoComplete="off"
                    className={`${onSearchHover ? "placeholder:text-[#ffffffe6]" : "placeholder:text-[#ffffffa6]"}  text-[#ffffffe6] transition-[font-size] duration-[4000ms] ease-out-placeholder flex z-10 overflow-hidden whitespace-nowrap text-ellipsis outline-none w-full text-base bg-transparent !border-none`}
                  />
                </div>
              </div>
            </fieldset>
            {/* </div> */}
          </div>
        </div>
      </div>
    </main>
  );
}

const dummyData =[{
  "ardaId": 39931709,
  "ggId": "1572816",
  "name": "Olamide Tofade",
  "comparableName": "olamide tofade",
  "username": "olamidetofade",
  "professionalHeadline": "Software engineer",
  "imageUrl": "https://res.cloudinary.com/torre-technologies-co/image/upload/c_fill,h_150,w_150/v1693540962/origin/starrgate/users/profile_20bf19463fcc889b6a84e2857c61ffb48d01332e.jpg",
  "completion": 0.7778,
  "grammar": 0.0,
  "weight": 0.0,
  "verified": false,
  "connections": [],
  "totalStrength": 0.0,
  "pageRank": 0.15479494166055355,
  "organizationId": null,
  "organizationNumericId": null,
  "publicId": null,
  "status": null,
  "creators": [],
  "relationDegree": 1,
  "contact": false
}{
  "ardaId": 8007636,
  "ggId": "13",
  "name": "Alexander Torrenegra",
  "comparableName": "alexander torrenegra",
  "username": "torrenegra",
  "professionalHeadline": "Head of Torre. Shark at Shark Tank in LatAm.Co-founder of Tribe, Bunny Studio, and Voice123.",
  "imageUrl": "https://res.cloudinary.com/torre-technologies-co/image/upload/c_fill,h_150,w_150/v0/origin/starrgate/users/profile_bd307a3ec329e10a2cff8fb87480823da114f8f4.jpg",
  "completion": 0.8824,
  "grammar": 0.92412,
  "weight": 25991.9597,
  "verified": true,
  "connections": [],
  "totalStrength": 0.15479494166055355,
  "pageRank": 7520.090203997622,
  "organizationId": null,
  "organizationNumericId": null,
  "publicId": null,
  "status": null,
  "creators": [],
  "relationDegree": 1,
  "contact": false
}]
