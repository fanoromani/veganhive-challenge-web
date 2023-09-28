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

export function PostCard() {
  return (
    <Card className="max-w-3xl rounded-none">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Avatar>
            <AvatarImage
              src="https://veganhive.com/f8523bec88396b62446c5ed9610169e7.svg"
              alt="Vegan Bee"
            />
            <AvatarFallback>VB</AvatarFallback>
          </Avatar>
          <div className="flex flex-col gap-1">
            Vegan Bee
            <CardDescription>08 Aug</CardDescription>
          </div>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p>
          Vivamus dapibus pulvinar turpis vitae molestie. Quisque at blandit
          magna, posuere venenatis ligula. Sed ac turpis vel est aliquet
          aliquet. Nullam pretium nulla nunc, nec mattis nunc porttitor et. Ut
          in libero convallis augue luctus dignissim vitae sodales quam.
          Suspendisse potenti.
        </p>
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
                <p>Like this Buzz</p>
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
                  <MessageCircle />
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>Add a comment</p>
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
            5 Likes
          </Button>
          <Button variant={"ghost"} className="p-1">
            3 Comments
          </Button>
          <Button variant={"ghost"} className="p-1">
            2 Shares
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
}
