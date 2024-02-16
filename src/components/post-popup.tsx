import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../components/ui/dialog";
import { useComments } from "../hooks/useComments";

function PostPopup({ children, post }) {
  const { comments } = useComments(post.data.permalink);

  return (
    <Dialog>
      <DialogTrigger className="w-full max-w-[1000px]">
        {children}
      </DialogTrigger>
      <DialogContent className=" max-h-[550px] min-h-[150px] overflow-x-hidden">
        <DialogHeader className="max-w-[450px]">
          <DialogTitle>{post.data.title}</DialogTitle>
          <DialogDescription className="max-w-[450px]">
            {post.data.selftext}
          </DialogDescription>
        </DialogHeader>
        {comments.length > 1 && (
          <>
            <h2 className="text-slate-500 text-xs font-bold">Comments</h2>
            <div className="overflow-scroll ">
              {comments.map(
                (comment) =>
                  comment.data.body && (
                    <div className="flex gap-2" key={comment.data.body}>
                      <div className="h-8 w-8 aspect-square	 bg-slate-300 rounded-full"></div>

                      <div className="bg-slate-100 mb-4 p-2 rounded-xl ">
                        <span className="text-xs font-bold">
                          {comment.data.author}
                        </span>
                        <p className="text-xs text-pretty	 break-words	">
                          {comment.data.body}
                        </p>
                      </div>
                    </div>
                  )
              )}
            </div>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
}

export default PostPopup;
