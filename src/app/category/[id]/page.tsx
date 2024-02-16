"use client";

import { useRouter } from "next/navigation";
import { useSearchParams } from "next/navigation";

import Post from "../../../components/post";
import Filter from "../../../components/filter";
import { usePosts } from "../../../hooks/usePosts";

export default function Category({ params }: { params: { id: string } }) {
  const router = useRouter();
  const searchParams = useSearchParams();

  const { data, isLoading } = usePosts({
    category: params.id,
  });

  return (
    <main className="flex min-h-screen flex-col items-center p-8 lg:p-24">
      <h1 className="text-5xl font-bold uppercase mb-10">{params.id}</h1>
      <Filter selectedId={params.id}></Filter>

      {isLoading && (
        <>
          <div className="skeleton h-48 w-full min-w-24 border rounded-xl max-w-[1000px] mb-4"></div>
          <div className="skeleton h-48 w-full min-w-24 border rounded-xl max-w-[1000px] mb-4"></div>
        </>
      )}
      {!isLoading &&
        data?.posts.map((post: any, i: number) => (
          <Post post={post} key={i * Math.random()}></Post>
        ))}

      {!isLoading && (
        <div className="flex gap-4 mt-8">
          <button
            className={`px-4 py-2 rounded transition duration-500 ${
              data?.before ? "bg-sky-200" : "text-slate-300"
            }`}
            onClick={() =>
              router.push(`/category/${params.id}?before=${data?.before}`)
            }
            disabled={data?.before ? false : true}
          >
            Before
          </button>
          <button
            disabled={data?.after ? false : true}
            className={`px-4 py-2 rounded transition duration-500 ${
              data?.after ? "bg-sky-200 hover:bg-sky-100" : "text-slate-300"
            }`}
            onClick={() =>
              router.push(`/category/${params.id}?after=${data?.after}`)
            }
          >
            After
          </button>
        </div>
      )}
    </main>
  );
}
