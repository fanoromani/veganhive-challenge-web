import { Avatar, AvatarImage, AvatarFallback } from "./ui/avatar";
import { Button } from "./ui/button";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { NewBuzzButton } from "./new-buzz-button";
import { useUserStore } from "@/lib/userStore";
import { toast } from "react-toastify";

interface ProfileCardProps {
  username: string | undefined;
  avatar: string;
  description: string;
  buzzes: number;
}
export function ProfileCard({
  username,
  avatar,
  description,
  buzzes,
}: ProfileCardProps) {
  const setIsLoggedIn = useUserStore((state) => state.setIsLoggedIn);

  const onLogout = () => {
    setIsLoggedIn(false);
    localStorage.removeItem("User-Token");
    toast.success("You logged out successfully");
  };

  return (
    <Card className="w-full bg-gradient-to-b from-orange-300 to-yellow-200 border-none rounded-none md:rounded-xl drop-shadow-xl">
      <CardHeader>
        <CardTitle className="flex items-center gap-4 text-3xl">
          <Avatar className="h-32 w-32 border-4 border-white drop-shadow-2xl">
            <AvatarImage
              src={
                avatar
                  ? avatar
                  : "https://veganhive.com/f8523bec88396b62446c5ed9610169e7.svg"
              }
              alt="Vegan Bee"
            />
            <AvatarFallback>
              {username?.slice(0, 1).toUpperCase()}
            </AvatarFallback>
          </Avatar>

          <div>
            {username}
            <CardDescription>{description}</CardDescription>
          </div>

          <Button variant="destructive" onClick={onLogout}>
            Logout
          </Button>
        </CardTitle>
      </CardHeader>

      <CardFooter className="flex justify-between">
        <div>
          <Button variant={"ghost"} className="p-1">
            {buzzes} Buzzes
          </Button>
        </div>

        <NewBuzzButton />
      </CardFooter>
    </Card>
  );
}
