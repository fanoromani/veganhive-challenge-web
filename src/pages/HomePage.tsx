import { BuzzCard } from "@/components/buzz-card";
import { ProfileCard } from "@/components/profile-card";
import { api } from "../lib/axios";
import { Buzz } from "@/lib/types";
import { LoginCard } from "@/components/login-card";
import { useQuery } from "react-query";
import { useUserStore } from "@/lib/userStore";

async function getBuzzes() {
  const response = await api.get("/buzzes");
  return response.data;
}

// eslint-disable-next-line react-refresh/only-export-components
export async function getUser() {
  const response = await api.get("/me");
  return response.data;
}

export function HomePage() {
  const { isLoggedIn, setUser } = useUserStore((state) => ({
    isLoggedIn: state.isLoggedIn,
    setUser: state.setUser,
  }));

  const { data: user } = useQuery("user", getUser, {
    enabled: isLoggedIn,
    onSuccess: (data) => {
      setUser(data);
    },
  });

  const { data: buzzes } = useQuery("buzzes", getBuzzes);

  return (
    <div className="w-full min-h-screen flex flex-col bg-gradient-to-b from-orange-100 to-yellow-100">
      <div className="md:container md:max-w-3xl w-full space-y-8 flex flex-col items-center md:mt-12">
        {isLoggedIn ? <ProfileCard username={user?.username} /> : <LoginCard />}

        <div className="w-full flex flex-col items-center pb-20 md:gap-2">
          {buzzes &&
            buzzes.map((buzz: Buzz) => {
              return (
                <BuzzCard
                  key={buzz.id}
                  id={buzz.id}
                  createdAt={buzz.createdAt}
                  body={buzz.body}
                  author={buzz.author}
                  likes={buzz.likes}
                  shares={buzz.shares}
                  comments={buzz.comments}
                  whoLiked={buzz.whoLiked}
                />
              );
            })}
        </div>
      </div>
    </div>
  );
}
