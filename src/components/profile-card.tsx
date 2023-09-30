import { Avatar, AvatarImage, AvatarFallback } from "./ui/avatar";
import { Button } from "./ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { NewBuzzButton } from "./new-buzz-button";

export function ProfileCard() {
  return (
    <Card className="max-w-3xl bg-gradient-to-b from-orange-300 to-yellow-200 border-none rounded-none md:rounded-xl drop-shadow-xl">
      <CardHeader>
        <CardTitle className="flex items-center gap-4 text-3xl">
          <Avatar className="h-32 w-32 border-4 border-white drop-shadow-2xl">
            <AvatarImage
              src="https://veganhive.com/f8523bec88396b62446c5ed9610169e7.svg"
              alt="Vegan Bee"
            />
            <AvatarFallback>VB</AvatarFallback>
          </Avatar>
          <div>
            Vegan Bee
            <CardDescription>Worker Bee</CardDescription>
          </div>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras mauris
          turpis, posuere eget aliquet vel, ullamcorper sed velit.
        </p>
      </CardContent>
      <CardFooter className="flex justify-between">
        <div>
          <Button variant={"ghost"} className="p-1">
            3 Buzzes
          </Button>
          <Button variant={"ghost"} className="p-1">
            3 Followers
          </Button>
          <Button variant={"ghost"} className="p-1">
            3 Following
          </Button>
        </div>
        <NewBuzzButton />
      </CardFooter>
    </Card>
  );
}
