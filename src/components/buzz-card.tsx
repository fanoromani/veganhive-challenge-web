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
import { Buzz, Token } from "@/lib/types";
import { useCallback, useEffect } from "react";
import { api } from "@/lib/axios";
import jwt_decode from "jwt-decode";

interface BuzzCardProps extends Buzz {
  setBuzzesCallback: (data: Buzz) => void;
}
export function BuzzCard({
  createdAt,
  body,
  author,
  likes,
  shares,
  id,
  comments,
  setBuzzesCallback,
}: BuzzCardProps) {
  const likeBuzz = useCallback(async () => {
    const token = localStorage.getItem("User-Token");
    if (token) {
      const decodedToken: Token = jwt_decode(token);
      if (decodedToken) {
        const userId = decodedToken.userId;
        console.log(userId);
        console.log(id);
        const response = await api.post(`/buzz/6519155269318e744271bed0/like`, {
          body: "6518d582d1e9302e560dc556",
        });
        setBuzzesCallback(response.data);
      }
    }
  }, [id, setBuzzesCallback]);

  useEffect(() => {
    likeBuzz;
  }, [likeBuzz]);
  return (
    <Card className="md:w-2/3 max-w-2xl rounded-none">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Avatar>
            <AvatarImage src={author.avatar} alt="Vegan Bee" />
            <AvatarFallback>VB</AvatarFallback>
          </Avatar>
          <div className="flex flex-col gap-1">
            {author.username}
            <CardDescription>{createdAt}</CardDescription>
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
                  onClick={likeBuzz}
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
            {shares} Shares
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
}
