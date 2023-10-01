import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Card, CardContent, CardFooter } from "./ui/card";
import { Button } from "./ui/button";
import { Textarea } from "./ui/textarea";
import { useForm } from "react-hook-form";
import { api } from "@/lib/axios";
import { useCallback } from "react";
import { useMutation } from "react-query";
import { toast } from "react-toastify";
import { queryClient } from "@/lib/queryClient";

interface WriteCommentCardProps {
  buzzId: string | undefined;
}
interface CommentBuzz {
  body: string;
  buzzId: string;
}
async function commentBuzz({ body, buzzId }: CommentBuzz) {
  const response = await api.post(`/comment/${buzzId}`, {
    body: body,
  });
  return response.data;
}

interface NewCommentFormSchema {
  body: string;
}

export function WriteCommentCard({ buzzId }: WriteCommentCardProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<NewCommentFormSchema>();

  const mutation = useMutation(commentBuzz, {
    onSuccess: () => {
      toast.success("Great comment! 🐝");
      queryClient.invalidateQueries(`comments-${buzzId}`);
    },
  });

  const handleCreateNewComment = useCallback(
    async (data: NewCommentFormSchema) => {
      mutation.mutate({ body: data.body, buzzId: buzzId as string });
    },
    [mutation, buzzId]
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
          <Textarea
            placeholder="Write a comment..."
            {...register("body", { required: true })}
          />
          {errors.body && errors.body.type === "required" && (
            <p className="text-red-700">Required</p>
          )}
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
