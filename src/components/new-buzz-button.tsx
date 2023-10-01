import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogTitle,
  DialogDescription,
  DialogHeader,
  DialogFooter,
} from "./ui/dialog";
import { Button } from "./ui/button";
import { Textarea } from "./ui/textarea";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { useCallback } from "react";
import { api } from "@/lib/axios";
import { Buzz } from "@/lib/types";

const newBuzzFormSchema = z.object({
  body: z.string(),
});

type NewBuzzFormInputs = z.infer<typeof newBuzzFormSchema>;

interface NewBuzzButtonProps {
  setBuzzesCallback: (data: Buzz) => void;
  username: string | undefined;
}

export function NewBuzzButton({
  setBuzzesCallback,
  username,
}: NewBuzzButtonProps) {
  const { register, handleSubmit } = useForm<NewBuzzFormInputs>();

  const handleCreateNewBuzz = useCallback(
    async (data: NewBuzzFormInputs) => {
      const { body } = data;
      const response = await api.post(`/buzz/${username}`, {
        body: body,
      });
      setBuzzesCallback(response.data);
    },
    [setBuzzesCallback, username]
  );

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant={"default"}>New Buzz</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Create New Post</DialogTitle>
          <DialogDescription>
            Tell the world what's on your mind!
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit(handleCreateNewBuzz)}>
          <Textarea
            placeholder="Whats happening in your hive?"
            {...register("body")}
          />

          <DialogFooter className="mt-2">
            <Button type="submit">Buzz</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
