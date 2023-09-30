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

export function NewBuzzButton() {
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
        <form>
          <Textarea placeholder="Whats happening in your hive?" />

          <DialogFooter className="mt-2">
            <Button type="submit">Buzz</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
