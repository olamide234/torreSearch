import React from "react";
import { useRouter } from "next/navigation";

export interface ISearchData {
  ardaId: number;
  ggId: string;
  name: string;
  comparableName: string;
  username: string;
  professionalHeadline: string;
  imageUrl: string;
  verified: boolean;
  organizationId: string | null;
  organizationNumericId: string | null;
  publicId: string | null;
  contact: boolean;
}

export default function SearchItem({ data }: { data: ISearchData }) {
  const router = useRouter();
  return (
    <div
      onMouseDown={() => router.push(`https://torre.ai/${data?.username}`)}
      className="cursor-pointer hover:bg-[#484c53] py-4 px-[2%] md:px-6 w-[45rem] max-w-full md:max-w-full flex items-center gap-3"
    >
      <div className="w-10 h-10 border-2 border-[#7a838f] rounded-[50%]">
        <img
          src={data?.imageUrl}
          alt="image"
          style={{
            width: "100%",
            height: "100%",
            borderRadius: "23px",
          }}
        />
      </div>
      <div className="max-w-[80%] sm:max-w-[90%]">
        <h5 className="text-[#ffffffe6] text-base tracking-[0.01em]">
          {data?.name}
        </h5>
        <p className="text-sm tracking-[0.02em] overflow-hidden whitespace-nowrap text-ellipsis text-[#ffffffa6]">
          {data?.professionalHeadline}
        </p>
      </div>
    </div>
  );
}
