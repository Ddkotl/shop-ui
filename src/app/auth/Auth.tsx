"use client";

import { useState } from "react";
import { useAuthForm } from "./useAuthForm";
import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Form } from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { AuthFields } from "./AuthFields";

export function Auth() {
  const [isReg, setIsReg] = useState(false);
  const { onSubmit, form, isPending } = useAuthForm(isReg);

  return (
    <div className="flex  border justify-between  m-5">
      <div className="">
        <Image
          src="/images/auth.svg"
          alt="Shop auth"
          width={100}
          height={100}
        />
      </div>
      <div className="">
        <Card className="w-[350px]">
          <CardHeader>
            <CardTitle>
              {isReg ? "Создать аккаунт" : "Войти в аккаунт"}
            </CardTitle>
            <CardDescription>Войдите или зарегестрируйтесь</CardDescription>
          </CardHeader>
          <CardContent>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)}>
                <div className="grid w-full items-center gap-4">
                  <AuthFields form={form} isPending={isPending} isReg={isReg} />
                  <Button disabled={isPending}>Продолжить</Button>
                </div>
              </form>
            </Form>
          </CardContent>
          <CardFooter>
            {isReg ? "Уже есть аккаунт?" : "Еще нет аккаунта?"}
            <button onClick={() => setIsReg(!isReg)}>
              {isReg ? "Войти" : "Создать"}{" "}
            </button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}
