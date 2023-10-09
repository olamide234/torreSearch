import React from "react";
import SearchIcon from "@/assets/svg/SearchIcon";

export default function SearchInput({
  onSearchHover,
  onSearchFocus,
  setOnSearchHover,
  setOnSearchFocus,
  handleChange,
  onSearch
}: {
  onSearchHover: boolean;
  onSearchFocus: boolean;
  setOnSearchHover: (val: boolean) => void;
  setOnSearchFocus: (val: boolean) => void;
  handleChange:(val: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>)=>void;
  onSearch:()=>void;
}) {
  return (
    <div className="w-full">
      <fieldset
        onMouseEnter={() => setOnSearchHover(true)}
        onMouseLeave={() => setOnSearchHover(false)}
        onFocus={() => {
          setOnSearchHover(false);
          setOnSearchFocus(true);
        }}
        onBlur={() => setOnSearchFocus(false)}
        className={`${
          onSearchHover ? "border-[#ffffffe6]" : "border-[#ffffffa6]"
        } ${
          onSearchFocus ? "!border-[#cddc39]" : "mt-2"
        } border rounded-[100px] w-full min-h-[2.875rem] flex relative`}
      >
        {onSearchFocus && (
          <legend className="text-[#cddc39] text-xs ml-[6%] sm:ml-[5%]">
            Search people by name
          </legend>
        )}
        <span className={`${onSearchFocus ? "mt-2 mb-4" : "my-4"} ml-6`}>
          {onSearchHover ? (
            <SearchIcon color="#ffffffe6" />
          ) : onSearchFocus ? (
            <SearchIcon color="#cddc39" />
          ) : (
            <SearchIcon />
          )}
        </span>
        <div
          className={`${
            onSearchFocus ? "pb-2" : "py-2"
          } w-full px-3 flex items-center flex-wrap`}
        >
          <div className="flex grow">
            <input
            onBlur={onSearch}
                onChange={(e)=>handleChange(e)}
              placeholder="Search people by name"
              autoComplete="off"
              className={`${
                onSearchHover
                  ? "placeholder:text-[#ffffffe6]"
                  : "placeholder:text-[#ffffffa6]"
              }  text-[#ffffffe6]  flex z-10 overflow-hidden whitespace-nowrap text-ellipsis outline-none w-full text-base bg-transparent !border-none`}
            />
          </div>
        </div>
      </fieldset>
    </div>
  );
}
