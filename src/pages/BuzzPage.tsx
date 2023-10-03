import { WriteCommentCard } from "@/components/write-comment-card";
import { BuzzPageCard } from "@/components/buzz-page-card";
import { ArrowBigLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { NavLink, useParams } from "react-router-dom";
import { api } from "@/lib/axios";
import { Buzz, Comment } from "@/lib/types";
import { CommentCard } from "@/components/comment-card";
import { useQuery } from "react-query";
import { useUserStore } from "@/lib/userStore";
import { getUser } from "./HomePage";

async function fetchBuzz(id: string) {
  const response = await api.get(`/buzz/${id}`);
  return response.data;
}

async function fetchComments(id: string) {
  const response = await api.get(`/comments/${id}`);
  return response.data;
}

export function BuzzPage() {
  const { id } = useParams();

  const { isLoggedIn, setUser } = useUserStore((state) => ({
    isLoggedIn: state.isLoggedIn,
    setUser: state.setUser,
  }));

  const { data: user } = useQuery("user", getUser, {
    enabled: isLoggedIn,
    onSuccess: (data) => {
      setUser(data);
    },
  });

  const { data: buzz } = useQuery<Buzz>(
    `buzz-${id}`,
    () => fetchBuzz(id as string),
    {
      enabled: !!id,
    }
  );

  const { data: comments } = useQuery<Comment[]>(
    `comments-${id}`,
    () => fetchComments(id as string),
    {
      enabled: !!id,
    }
  );

  return (
    <div className="w-full min-h-screen flex flex-col items-center bg-gradient-to-b from-orange-100 to-yellow-100">
      <div className="md:container md:max-w-3xl w-full flex flex-col md:mt-32">
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
            whoLiked={buzz.whoLiked}
          />
        )}
        <WriteCommentCard
          avatar={user?.avatar}
          username={user?.username}
          buzzId={id}
        />

        {comments &&
          comments.map((comment) => (
            <CommentCard
              key={comment.id}
              id={comment.id}
              author={comment.author}
              body={comment.body}
              createdAt={comment.createdAt}
              likes={comment.likes}
              buzzId={id as string}
              whoLiked={comment.whoLiked}
            />
          ))}
      </div>
    </div>
  );
}
