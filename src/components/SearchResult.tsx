import React from 'react'
import SearchItem, {ISearchData} from "./SearchItem"


export default function SearchResult({searchData}:{searchData:ISearchData[]}) {
    return (
        <div className="overflowY-hidden flex absolute h-[26rem] w-[45rem] max-w-[92%] sm:max-w-[95%] md:max-w-full mt-[4.2rem] bg-[#383b40] text-black z-50 rounded-sm">
        <div className="overflowY-auto w-[45rem] max-w-full">
          {searchData?.map((data) => (
            <SearchItem data={data}/>
          ))}
        </div>
      </div>
    )
}
