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

interface RegisterFormSchema {
  username: string;
  password: string;
  confirmPassword: string;
}

async function registerUser(data: RegisterFormSchema) {
  const { username, password } = data;
  const response = await api.post("/register", {
    username: username,
    password: password,
  });

  return response.data;
}

interface RegisterFormProps {
  setFormType: Dispatch<SetStateAction<"register" | "login">>;
  setDialogOpen: Dispatch<SetStateAction<boolean>>;
}

export function RegisterForm({
  setFormType,
  setDialogOpen,
}: RegisterFormProps) {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<RegisterFormSchema>();

  const setIsLoggedIn = useUserStore((state) => state.setIsLoggedIn);

  const mutation = useMutation(registerUser, {
    onSuccess: (data) => {
      localStorage.setItem("User-Token", data.token);
      setIsLoggedIn(true);
      setDialogOpen(false);
      toast.success("You logged in successfully");
    },
  });

  const handleRegister = useCallback(
    async (data: RegisterFormSchema) => {
      mutation.mutate(data);
    },
    [mutation]
  );

  return (
    <form onSubmit={handleSubmit(handleRegister)}>
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
      <Label>Confirm password</Label>
      <Input
        type="password"
        {...register("confirmPassword", {
          required: true,
          validate: (value) =>
            value === watch("password") || "Passwords do not match",
        })}
      />
      {errors.confirmPassword && errors.confirmPassword.type === "required" && (
        <p className="text-red-700">Required</p>
      )}
      {errors.confirmPassword && errors.confirmPassword.type === "validate" && (
        <p className="text-red-700">Passwords don't match</p>
      )}

      <DialogFooter className="mt-2">
        <Button
          type="button"
          variant="ghost"
          onClick={() => setFormType("login")}
        >
          Already have an account?
        </Button>
        <Button type="submit">Register</Button>
      </DialogFooter>
    </form>
  );
}
