"use client";
import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";

export const useSearchUrlHandler = () => {
  const [searchValue, setSearchValue] = useState("");
  const router = useRouter();
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (searchValue.trim()) {
      router.push(`/products?product_name=${searchValue}`);
    } else {
      router.push("/products");
    }
  };
  return { handleSubmit, searchValue, setSearchValue };
};
