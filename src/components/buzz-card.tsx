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

export function BuzzCard({
  createdAt,
  body,
  author,
  likes,
  shares,
  id,
  comments,
}: Buzz) {
  return (
    <Card className="md:w-2/3 w-full rounded-none">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Avatar>
            <AvatarImage src={author.avatar} alt="Vegan Bee" />
            <AvatarFallback>VB</AvatarFallback>
          </Avatar>
          <div className="flex flex-col gap-1">
            {author.name}
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
