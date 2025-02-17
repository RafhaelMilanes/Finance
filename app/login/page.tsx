import Image from "next/image";
import { Button } from "../_components/ui/button";
import { LogInIcon } from "lucide-react";
import { SignInButton } from "@clerk/nextjs";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

const LoginPage = async () => {
  const { userId } = await auth();

  if (userId) {
    redirect("/");
  }

  return (
    <div className="grid h-full grid-cols-2">
      {/* ESQUERDA */}
      <div className="mx-auto flex max-w-[550px] flex-col items-start justify-center p-8">
        <Image
          src="/logo.png"
          alt="Fiance AI"
          width={173}
          height={39}
          className="mb-8"
        />
        <h1 className="mb-3 text-4xl font-bold">Bem-vindo</h1>
        <p className="mb-8 text-base text-muted-foreground">
          A Finance é uma plataforma de gestão financeira que monitora suas
          movimentações e oferece insights personalizados, facilitando o
          controle do seu orçamento.
        </p>

        <SignInButton>
          <Button variant="outline" className="w-[550px]">
            <LogInIcon className="mr-2" />
            Fazer login ou criar conta
          </Button>
        </SignInButton>
      </div>
      {/* DIREITA */}
      <div className="relative h-full w-full">
        <Image
          src="/bgLogin.png"
          alt="Faça login"
          fill
          className="object-cover"
        />
      </div>
    </div>
  );
};
export default LoginPage;
