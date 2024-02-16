"use client";

import { useQuery } from "@tanstack/react-query";
import { useSearchParams } from "next/navigation";

import http from "../app/http-common";

const getPosts = async (filter: any) => {
  console.log(filter);
  const posts = await http.get(
    `/r/${filter.queryKey[1]}.json?limit=${filter.queryKey[2]}&after=${filter.queryKey[3].after}&before=${filter.queryKey[3].before}&count=50`
  );
  console.log(posts);
  return {
    posts: posts.data.data.children,
    before: posts.data.data.before,
    after: posts.data.data.after,
  };
};

export function usePosts({ category }: { category: string }) {
  const searchParams = useSearchParams();
  const { data, isLoading } = useQuery({
    queryKey: [
      "posts",
      category,
      searchParams.get("limit") ?? "8",
      { before: searchParams.get("before"), after: searchParams.get("after") },
    ],
    queryFn: getPosts,
  });

  return {
    data,
    isLoading,
  };
}
