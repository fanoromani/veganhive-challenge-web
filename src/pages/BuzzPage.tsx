import { WriteCommentCard } from "@/components/write-comment-card";
import { BuzzPageCard } from "@/components/buzz-page-card";
import { CommentCard } from "@/components/comment-card";
import { ArrowBigLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { NavLink } from "react-router-dom";

export function BuzzPage() {
  return (
    <div className="w-full min-h-screen flex flex-col items-center bg-gradient-to-b from-orange-100 to-yellow-100">
      <div className="max-w-3xl flex flex-col md:mt-32">
        <NavLink to="/" title="Home">
          <Button>
            <ArrowBigLeft />
          </Button>
        </NavLink>
        <BuzzPageCard />
        <WriteCommentCard />
        <CommentCard />
        <CommentCard />
        <CommentCard />
        <CommentCard />
      </div>
    </div>
  );
}
