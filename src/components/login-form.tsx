import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { api } from "@/lib/axios";
import { Label } from "@radix-ui/react-label";
import { Dispatch, SetStateAction, useCallback } from "react";
import { useForm } from "react-hook-form";
import { DialogFooter } from "./ui/dialog";
import { useMutation } from "react-query";
import { toast } from "react-toastify";
import { useUserStore } from "@/lib/userStore";

interface LoginFormSchema {
  username: string;
  password: string;
  confirmPassword: string;
}

async function loginUser(data: LoginFormSchema) {
  const { username, password } = data;
  const response = await api.post("/login", {
    username: username,
    password: password,
  });

  return response.data;
}

interface LoginFormProps {
  setFormType: Dispatch<SetStateAction<"register" | "login">>;
  setDialogOpen: Dispatch<SetStateAction<boolean>>;
}

export function LoginForm({ setFormType, setDialogOpen }: LoginFormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormSchema>();

  const setIsLoggedIn = useUserStore((state) => state.setIsLoggedIn);

  const mutation = useMutation(loginUser, {
    onSuccess: (data) => {
      localStorage.setItem("User-Token", data.token);
      setIsLoggedIn(true);
      setDialogOpen(false);
      toast.success("You logged in successfully");
    },
  });

  const handleLogin = useCallback(
    async (data: LoginFormSchema) => {
      mutation.mutate(data);
    },
    [mutation]
  );

  return (
    <form onSubmit={handleSubmit(handleLogin)}>
      <Label>Username</Label>
      <Input type="text" {...register("username", { required: true })} />
      {errors.username && errors.username.type === "required" && (
        <p className="text-red-700">Required</p>
      )}
      <Label>Password</Label>
      <Input type="password" {...register("password", { required: true })} />
      {errors.password && errors.password.type === "required" && (
        <p className="text-red-700">Required</p>
      )}

      <DialogFooter className="mt-2">
        <Button
          type="button"
          variant="ghost"
          onClick={() => setFormType("register")}
        >
          Don't have an account? Click to register.
        </Button>
        <Button type="submit">Login</Button>
      </DialogFooter>
    </form>
  );
}
