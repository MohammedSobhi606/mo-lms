import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { GithubIcon } from "lucide-react";

export default function Loginpage() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-xl"> Welcom Back ! </CardTitle>
        <CardDescription>Login With Github or Email Account </CardDescription>
      </CardHeader>
      <CardContent className="grid gap-8">
        <Button className="w-full" variant={"outline"}>
          {" "}
          <GithubIcon className="size-4" />
          Sign With Github
        </Button>
        <div className="relative  flex items-center ">
          <Separator />
          <span className="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 capitalize bg-card text-muted-foreground px-1">
            {" "}
            or continue with{" "}
          </span>
        </div>
        {/* form  */}
        <div className="grid gap-3">
          <div className="grid gap-3">
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" placeholder="x.yahoo@gmail.com" />
          </div>
          <Button className="capitalize">continue with email</Button>
        </div>
      </CardContent>
    </Card>
  );
}
