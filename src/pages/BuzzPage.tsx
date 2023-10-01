import { WriteCommentCard } from "@/components/write-comment-card";
import { BuzzPageCard } from "@/components/buzz-page-card";
import { ArrowBigLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { NavLink, useParams } from "react-router-dom";
import { api } from "@/lib/axios";
import { useCallback, useEffect, useState } from "react";
import { Buzz, Comment } from "@/lib/types";
import { CommentCard } from "@/components/comment-card";

export function BuzzPage() {
  const { id } = useParams();
  const [buzz, setBuzz] = useState<Buzz | null>(null);
  const [comments, setComments] = useState<Comment[]>([]);

  const fetchComments = useCallback(async () => {
    const response = await api.get(`/comments/${id}`);
    setComments(response.data);
  }, [id]);

  useEffect(() => {
    fetchComments();
  }, [fetchComments]);

  const setCommentsCallback = (data: Comment) => {
    setComments((state) => [...state, data]);
  };

  const fetchBuzz = useCallback(async () => {
    const response = await api.get(`/buzz/${id}`);
    setBuzz(response.data);
  }, [id]);

  useEffect(() => {
    fetchBuzz();
  }, [fetchBuzz]);

  return (
    <div className="w-full min-h-screen flex flex-col items-center bg-gradient-to-b from-orange-100 to-yellow-100">
      <div className="max-w-3xl flex flex-col md:mt-32">
        <NavLink to="/" title="Home">
          <Button>
            <ArrowBigLeft />
          </Button>
        </NavLink>
        {buzz && (
          <BuzzPageCard
            id={id}
            author={buzz.author}
            comments={buzz.comments}
            createdAt={buzz.createdAt}
            body={buzz?.body}
            likes={buzz?.likes}
            shares={buzz?.shares}
          />
        )}
        <WriteCommentCard
          setCommentsCallback={setCommentsCallback}
          buzzId={id}
        />
        {comments &&
          comments.map((comment) => (
            <CommentCard
              setCommentsCallback={setCommentsCallback}
              key={comment.id}
              id={comment.id}
              author={comment.author}
              body={comment.body}
              createdAt={comment.createdAt}
              likes={comment.likes}
            />
          ))}
      </div>
    </div>
  );
}
