"use client";

import http from "../app/http-common";
import { useQuery } from "@tanstack/react-query";

const getCommets = async (req: any) => {
  const res = await http.get(
    `${req.queryKey[1].substring(0, req.queryKey[1].length - 1)}.json`
  );
  return { comments: res.data };
};

export function useComments(postId: string) {
  const { data, isLoading } = useQuery({
    queryKey: [`comments-${postId}`, postId],
    queryFn: getCommets,
  });

  function mergeComments(comments) {
    let mergedComments = [];
    comments?.forEach(
      (comment) =>
        (mergedComments = [...mergedComments, ...comment.data.children])
    );
    return mergedComments;
  }

  return {
    comments: mergeComments(data?.comments),
    isLoading,
  };
}
