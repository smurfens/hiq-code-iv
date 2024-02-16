import Image from "next/image";
import PostPopup from "./post-popup";

import { formatDistance } from "date-fns";
import { ArrowUpRightFromSquare, Heart, MessageCircle } from "lucide-react";

export default function Post(props: { post: any; comments?: any }) {
  return (
    <PostPopup post={props.post}>
      <div
        className="w-full min-h-24 p-4 border shadow rounded-xl mb-4 relative post-card max-w-[1000px]"
        key=""
      >
        <div className="flex gap-2 items-center mb-2">
          {props.post.data.thumbnail.includes("http") ? (
            <div className="w-12 h-12 rounded-full">
              <Image
                src={props.post.data.thumbnail}
                alt=""
                width={48}
                height={48}
                className="rounded-full object-fit h-12"
              />
            </div>
          ) : (
            <div className="w-12 h-12 bg-slate-300 rounded-full"></div>
          )}
          <div>
            <div className="flex gap-2  items-center ">
              <p className="font-bold " aria-label="Subreddit">
                {props.post.data.subreddit_name_prefixed}
              </p>
              <p className="text-xs text-slate-500">
                {formatDistance(
                  new Date(props.post.data.created * 1000),
                  new Date(),
                  {
                    addSuffix: true,
                  }
                )}
              </p>
            </div>
            <p
              aria-label={`created by ${props.post.data.author}`}
              className="text-s text-slate-500 text-left"
            >
              {props.post.data.author}
            </p>
          </div>
        </div>
        <h2 className="text-2xl font-bold text-left">
          {props.post.data.title}
        </h2>

        <div className="flex gap-4 mt-4">
          <div className="flex gap-1">
            <MessageCircle></MessageCircle>
            <p aria-label="number of comments" className="font-bold">
              {props.post.data.num_comments}
            </p>
          </div>
          <a
            target="_blank"
            href={`https://www.reddit.com${props.post.data.permalink}`}
            onClick={(e) => e.stopPropagation()}
            className="hover:opacity-50"
          >
            <ArrowUpRightFromSquare></ArrowUpRightFromSquare>
          </a>
        </div>

        <div className="absolute -right-2	-top-2  h-10 w-10 rounded-full flex items-center justify-center ">
          <p
            className={`text-white z-10 font-bold ${
              props.post.data.score.toString().length > 3
                ? "text-[10px]"
                : props.post.data.score.toString().length > 2
                ? "text-xs"
                : ""
            }`}
            aria-label="upvotes"
          >
            {props.post.data.score}
          </p>
          <Heart className="fill-red-500 stroke-none absolute top-50 left-50 w-20 h-12"></Heart>
        </div>
      </div>
    </PostPopup>
  );
}
