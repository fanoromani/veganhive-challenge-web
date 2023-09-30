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

export function CommentCard({ author, body, likes, createdAt }: Comment) {
  return (
    <Card className="w-full rounded-none">
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Avatar>
              <AvatarImage src={author.avatar} alt="Vegan Bee" />
              <AvatarFallback>VB</AvatarFallback>
            </Avatar>
            {author.name}
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
