import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Card, CardContent, CardFooter } from "./ui/card";
import { Button } from "./ui/button";
import { Textarea } from "./ui/textarea";

export function WriteCommentCard() {
  return (
    <Card className="w-full rounded-none">
      <CardContent className="flex items-center gap-2 p-6">
        <Avatar>
          <AvatarImage
            src="https://veganhive.com/f8523bec88396b62446c5ed9610169e7.svg"
            alt="Vegan Bee"
          />
          <AvatarFallback>VB</AvatarFallback>
        </Avatar>
        <Textarea placeholder="Write a comment..." />
      </CardContent>
      <CardFooter className="flex flex-row-reverse">
        <Button variant={"default"}>Comment</Button>
      </CardFooter>
    </Card>
  );
}
