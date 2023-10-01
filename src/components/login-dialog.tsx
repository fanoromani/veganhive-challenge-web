import { Dispatch, SetStateAction, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "./ui/dialog";
import { LoginForm } from "./login-form";
import { RegisterForm } from "./register-form";

interface LoginDialogProps {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}

export function LoginDialog({ isOpen, setIsOpen }: LoginDialogProps) {
  const [formType, setFormType] = useState<"register" | "login">("login");

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Welcome 🐝</DialogTitle>
          <DialogDescription>
            Please login to create, comment and like buzzes
          </DialogDescription>
        </DialogHeader>
        {formType === "login" ? (
          <LoginForm setFormType={setFormType} setDialogOpen={setIsOpen} />
        ) : (
          <RegisterForm setFormType={setFormType} setDialogOpen={setIsOpen} />
        )}
      </DialogContent>
    </Dialog>
  );
}
