import { SignInButton } from "@clerk/nextjs";
import { auth } from "@clerk/nextjs/server";
import { LogInIcon } from "lucide-react";
import Image from "next/image";
import { redirect } from "next/navigation";

import { Button } from "../_components/ui/button";

export default async function LoginPage() {
  const { userId } = await auth();

  if (userId) {
    redirect("/");
  }

  return (
    <div className="grid h-full grid-cols-2">
      <div className="mx-auto flex max-w-[570px] flex-1 flex-col justify-center px-8">
        <Image
          src="/logo.svg"
          width={173}
          height={39}
          alt="Logo finance AI"
          className="mb-8"
        />
        <h1 className="mb-3 text-4xl font-bold">Bem vindo</h1>
        <p className="mb-8 text-muted-foreground">
          A Finance AI é uma plataforma de gestão financeira que utiliza IA para
          monitorar suas movimentações, e oferecer insights personalizados,
          facilitando o controle do seu orçamento.
        </p>

        <SignInButton>
          <Button variant="outline">
            <LogInIcon />
            Fazer login ou criar conta
          </Button>
        </SignInButton>
      </div>

      <div className="relative h-full w-full">
        <Image
          src="/login.png"
          alt="Faça o login"
          className="object-cover"
          fill
        />
      </div>
    </div>
  );
}
