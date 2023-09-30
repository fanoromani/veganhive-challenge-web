import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { api } from "@/lib/axios";
import { User } from "@/lib/types";
import { Label } from "@radix-ui/react-label";
import { useCallback, useState } from "react";
import { useForm } from "react-hook-form";
import { NavLink } from "react-router-dom";
import z from "zod";

const loginFormSchema = z.object({
  username: z.string(),
  password: z.string(),
});
type LoginFormInputs = z.infer<typeof loginFormSchema>;

export function LoginPage() {
  const [user, setUser] = useState<User | null>(null);
  const { register, handleSubmit } = useForm<LoginFormInputs>();

  const handleLogin = useCallback(
    async (data: LoginFormInputs) => {
      const { username, password } = data;
      const response = await api.post(`/`, {
        username: username,
        password: password,
      });
      setUser(response.data);
    },
    [setUser]
  );

  return (
    <div className="h-screen flex justify-center items-center bg-gradient-to-b from-orange-100 to-yellow-100">
      <Card>
        <CardHeader>
          <CardTitle>Login</CardTitle>
        </CardHeader>
        <form onSubmit={handleSubmit(handleLogin)}>
          <CardContent>
            <Label>Username</Label>
            <Input type="text" {...register("username")} />
            <Label>Password</Label>
            <Input type="password" {...register("password")} />
          </CardContent>
          <CardFooter>
            {user ? (
              <NavLink to="/home">
                <Button className="flex-1">{user.username}</Button>
              </NavLink>
            ) : (
              <Button className="flex-1" variant={"default"}>
                Login
              </Button>
            )}
          </CardFooter>
        </form>
      </Card>
    </div>
  );
}
