import { PostCard } from "@/components/post-card";
import { ProfileCard } from "@/components/profile-card";

export function HomePage() {
  return (
    <div className="w-full min-h-screen flex flex-col bg-gradient-to-b from-orange-100 to-yellow-100">
      <div className="space-y-4 flex flex-col items-center md:mt-32">
        <ProfileCard />
        <div>
          <PostCard />
          <PostCard />
          <PostCard />
          <PostCard />
          <PostCard />
        </div>
      </div>
    </div>
  );
}
