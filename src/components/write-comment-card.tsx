import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Card, CardContent, CardFooter } from "./ui/card";
import { Button } from "./ui/button";
import { Textarea } from "./ui/textarea";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { api } from "@/lib/axios";
import { Comment, Token } from "@/lib/types";
import { useCallback } from "react";
import jwt_decode from "jwt-decode";

const newCommentFormSchema = z.object({
  body: z.string(),
});
type NewCommentFormInputs = z.infer<typeof newCommentFormSchema>;

interface WriteCommentCardProps {
  setCommentsCallback: (data: Comment) => void;
  buzzId: string | undefined;
}

export function WriteCommentCard({
  setCommentsCallback,
  buzzId,
}: WriteCommentCardProps) {
  const { register, handleSubmit } = useForm<NewCommentFormInputs>();

  const handleCreateNewComment = useCallback(
    async (data: NewCommentFormInputs) => {
      const { body } = data;
      const token = localStorage.getItem("User-Token");
      if (token) {
        const decodedToken: Token = jwt_decode(token);
        if (decodedToken) {
          const userId = decodedToken.userId;
          const response = await api.post(`/comment/${userId}/${buzzId}`, {
            body: body,
          });
          console.log(userId);
          setCommentsCallback(response.data);
        }
      }
    },
    [setCommentsCallback, buzzId]
  );

  return (
    <Card className="w-full rounded-none">
      <form onSubmit={handleSubmit(handleCreateNewComment)}>
        <CardContent className="flex items-center gap-2 p-6">
          <Avatar>
            <AvatarImage
              src="https://veganhive.com/f8523bec88396b62446c5ed9610169e7.svg"
              alt="Vegan Bee"
            />
            <AvatarFallback>VB</AvatarFallback>
          </Avatar>
          <Textarea placeholder="Write a comment..." {...register("body")} />
        </CardContent>
        <CardFooter className="flex flex-row-reverse">
          <Button type="submit" variant={"default"}>
            Comment
          </Button>
        </CardFooter>
      </form>
    </Card>
  );
}
