"use client";

import React from "react";
import { IoIosSearch } from "react-icons/io";
import { Button } from "./ui/button";
import { useSearchUrlHandler } from "@/hooks/use-search-url-handler";

export default function SearchProducts() {
  const { searchValue, setSearchValue, handleSubmit } = useSearchUrlHandler();

  return (
    <div className="px-8 mt-32 flex flex-col items-center justify-center">
      <h2 className="text-lg lg:text-xl mb-4 text-center">
        Search the product you want quickly
      </h2>
      <form
        onSubmit={handleSubmit}
        className="mx-8 relative flex items-center gap-3 w-[280px] md:w-[350px] border bg-neutral-100 rounded-lg p-0"
      >
        <div className="flex-1 mr-24">
          <IoIosSearch className="absolute size-5 md:size-6 top-1/2 -translate-y-1/2 left-2" />
          <input
            value={searchValue} // Bind the input value to state
            onChange={(e) => setSearchValue(e.target.value)}
            placeholder="What are you looking for?"
            className="border-none outline-none flex-1 w-full h-full pl-10 py-[8px] md:py-[12px] bg-neutral-100 rounded-lg  text-[15px]"
          />
        </div>
        <Button className="h-full absolute top-0 right-0">Search</Button>
      </form>
    </div>
  );
}
