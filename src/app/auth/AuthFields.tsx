"use client";

import { IAuthForm } from "@/shared/types/auth.interface";
import { UseFormReturn } from "react-hook-form";

interface Props {
  form: UseFormReturn<IAuthForm, any, undefined>;
  isPending: boolean;
  isReg?: boolean;
}

export function AuthFields({ form, isPending, isReg = false }: Props) {
  return <>AuthFields</>;
}
