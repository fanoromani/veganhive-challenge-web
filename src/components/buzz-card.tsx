import { Forward, Heart, MessageCircle } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Button } from "./ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/tooltip";
import { NavLink } from "react-router-dom";
import { Buzz } from "@/lib/types";
import { api } from "@/lib/axios";
import { useMutation } from "react-query";
import { queryClient } from "@/lib/queryClient";
import { toast } from "react-toastify";
import { useUserStore } from "@/lib/userStore";
import { formatDate } from "@/lib/formatter";

// eslint-disable-next-line react-refresh/only-export-components
export async function likeBuzz(id: string) {
  const response = await api.post(`/buzz/${id}/like`);
  return response.data;
}

export function BuzzCard({
  createdAt,
  body,
  author,
  likes,
  shares,
  id,
  comments,
  whoLiked,
}: Buzz) {
  const user = useUserStore((state) => state.user);

  const mutation = useMutation(likeBuzz, {
    onSuccess: () => {
      toast.success("Buzz liked! 🐝");
      queryClient.invalidateQueries("buzzes");
    },
  });

  const hasLiked = whoLiked.find(
    (usersWhoLiked) => usersWhoLiked.userId === user?.id
  );

  return (
    <Card className="w-full rounded-none md:rounded-lg">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Avatar>
            <AvatarImage src={author.avatar} alt="Vegan Bee" />
            <AvatarFallback>
              {author?.username.slice(0, 1).toUpperCase()}
            </AvatarFallback>
          </Avatar>
          <div className="flex flex-col gap-1">
            {author.username}
            <CardDescription>{formatDate(createdAt)}</CardDescription>
          </div>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p>{body}</p>
      </CardContent>
      <CardFooter className="flex justify-between">
        <div className="flex gap-2">
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  onClick={() => mutation.mutate(id as string)}
                  variant={"ghost"}
                  className="hover:bg-red-500 hover:text-white p-0 rounded-full aspect-square"
                >
                  <Heart fill={hasLiked ? "red" : "white"} />
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>Like</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <NavLink to={`/buzz/${id}`} title="Buzz">
                  <Button
                    variant={"ghost"}
                    className="hover:bg-primary hover:text-white p-0 rounded-full aspect-square"
                  >
                    <MessageCircle />
                  </Button>
                </NavLink>
              </TooltipTrigger>
              <TooltipContent>
                <p>Comment</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  variant={"ghost"}
                  className="hover:bg-primary hover:text-white p-0 rounded-full aspect-square"
                >
                  <Forward />
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>Share</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
        <div>
          <Button variant={"ghost"} className="p-1">
            {likes} Likes
          </Button>
          <NavLink to={`/buzz/${id}`} title="Buzz">
            <Button variant={"ghost"} className="p-1">
              {comments.length} Comments
            </Button>
          </NavLink>
          <Button variant={"ghost"} className="p-1">
            0 Shares
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
}
