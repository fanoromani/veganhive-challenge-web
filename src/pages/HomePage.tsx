import { BuzzCard } from "@/components/buzz-card";
import { ProfileCard } from "@/components/profile-card";
import { api } from "../lib/axios";
import { useCallback, useEffect, useState } from "react";
import { Buzz } from "@/lib/types";

export function HomePage() {
  const [buzzes, setBuzzes] = useState<Buzz[]>([]);

  const fetchBuzzes = useCallback(async () => {
    const response = await api.get("/buzzes");
    setBuzzes(response.data);
  }, []);

  useEffect(() => {
    fetchBuzzes();
  }, [fetchBuzzes]);

  return (
    <div className="w-full min-h-screen flex flex-col bg-gradient-to-b from-orange-100 to-yellow-100">
      <div className="space-y-4 flex flex-col items-center md:mt-32">
        <ProfileCard />
        <div className="flex flex-col items-center">
          {buzzes &&
            buzzes.map((buzz) => {
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
                />
              );
            })}
        </div>
      </div>
    </div>
  );
}
