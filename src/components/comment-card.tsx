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
import { Comment, Token } from "@/lib/types";
import { useCallback, useEffect } from "react";
import { api } from "@/lib/axios";
import jwt_decode from "jwt-decode";

interface CommentCardProps extends Comment {
  setCommentsCallback: (data: Comment) => void;
}
export function CommentCard({
  author,
  body,
  likes,
  createdAt,
  id,
  setCommentsCallback,
}: CommentCardProps) {
  const likeComment = useCallback(async () => {
    const token = localStorage.getItem("User-Token");
    if (token) {
      const decodedToken: Token = jwt_decode(token);
      if (decodedToken) {
        const userId = decodedToken.userId;
        console.log(id);
        console.log(userId);
        const response = await api.post(`/comment/${id}/like`, {
          body: userId,
        });
        setCommentsCallback(response.data);
      }
    }
  }, [id, setCommentsCallback]);

  useEffect(() => {
    likeComment;
  }, [likeComment]);
  return (
    <Card className="w-full rounded-none">
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Avatar>
              <AvatarImage src={author.avatar} alt="Vegan Bee" />
              <AvatarFallback>VB</AvatarFallback>
            </Avatar>
            {author.username}
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
                onClick={likeComment}
                variant={"ghost"}
                className="hover:bg-red-500 hover:text-white p-0 rounded-full aspect-square"
              >
                <Heart />
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
