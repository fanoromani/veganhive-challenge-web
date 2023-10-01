import { Heart } from "lucide-react";
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
import { Label } from "./ui/label";
import { Comment } from "@/lib/types";
import { api } from "@/lib/axios";
import { useMutation } from "react-query";
import { queryClient } from "@/lib/queryClient";
import { useUserStore } from "@/lib/userStore";

async function likeComment(id: string) {
  const response = await api.post(`/comment/${id}/like`);
  return response.data;
}

export function CommentCard({
  author,
  body,
  likes,
  createdAt,
  id,
  buzzId,
  whoLiked,
}: Comment) {
  const user = useUserStore((state) => state.user);

  const mutation = useMutation(likeComment, {
    onSuccess: () => {
      queryClient.invalidateQueries(`comments-${buzzId}`);
    },
  });

  const hasLiked = whoLiked?.find(
    (usersWhoLiked) => usersWhoLiked.userId === user?.id
  );

  return (
    <Card className="w-full rounded-none">
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Avatar>
              <AvatarImage src={author?.avatar} alt="Vegan Bee" />
              <AvatarFallback>VB</AvatarFallback>
            </Avatar>
            {author?.username}
          </div>
          <CardDescription>{createdAt}</CardDescription>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p>{body}</p>
      </CardContent>
      <CardFooter className="space-x-2">
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
        <Label>{likes} Likes</Label>
      </CardFooter>
    </Card>
  );
}
