import { PostCard } from "./components/post-card";
import { ProfileCard } from "./components/profile-card";

function App() {
  return (
    <div className="w-full flex flex-col bg-gradient-to-b from-orange-100 to-yellow-100">
      <div className="space-y-4 flex flex-col items-center md:mt-32">
        <ProfileCard />
        <div>
          <PostCard />
          <PostCard />
          <PostCard />
          <PostCard />
        </div>
      </div>
    </div>
  );
}

export default App;
