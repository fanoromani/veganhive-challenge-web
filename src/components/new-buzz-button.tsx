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
import { useForm } from "react-hook-form";
import { useCallback, useState } from "react";
import { api } from "@/lib/axios";
import { useMutation } from "react-query";
import { toast } from "react-toastify";
import { queryClient } from "@/lib/queryClient";

interface NewBuzzFormSchema {
  body: string;
}

async function createBuzz(data: NewBuzzFormSchema) {
  const { body } = data;
  const response = await api.post(`/buzz`, {
    body: body,
  });

  return response.data;
}

export function NewBuzzButton() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<NewBuzzFormSchema>();

  const mutation = useMutation(createBuzz, {
    onSuccess: () => {
      toast.success("Nice buzz! 🐝");
      setIsDialogOpen(false);
      queryClient.invalidateQueries("buzzes");
    },
  });

  const handleCreateNewBuzz = useCallback(
    async (data: NewBuzzFormSchema) => {
      mutation.mutate(data);
    },
    [mutation]
  );

  return (
    <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
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
            {...register("body", { required: true })}
          />
          {errors.body && errors.body.type === "required" && (
            <p className="text-red-700">Required</p>
          )}

          <DialogFooter className="mt-2">
            <Button type="submit">Buzz</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
