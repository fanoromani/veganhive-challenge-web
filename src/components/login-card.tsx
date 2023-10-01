import { useState } from "react";
import { LoginDialog } from "./login-dialog";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Label } from "./ui/label";
import { Button } from "./ui/button";

interface LoginCard {}
export function LoginCard() {
  const [dialogOpen, setDialogOpen] = useState(false);

  return (
    <>
      <Card className="w-full bg-gradient-to-b from-orange-300 to-yellow-200 border-none rounded-none md:rounded-xl drop-shadow-xl">
        <CardHeader>
          <CardTitle className="flex items-center gap-4 text-3xl">
            Welcome! 🐝
          </CardTitle>
          <Label>Please login to create, comment and like buzzes</Label>
        </CardHeader>

        <CardContent>
          <Button className="w-full" onClick={() => setDialogOpen(true)}>
            Login
          </Button>
        </CardContent>
      </Card>

      <LoginDialog isOpen={dialogOpen} setIsOpen={setDialogOpen} />
    </>
  );
}
