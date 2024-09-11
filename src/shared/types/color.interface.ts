export interface IColor {
  id: string;
  createdAt: string;
  name: string;
  value: string;
  storeId: string;
}

export interface IColorInput
  extends Omit<IColor, "id" | "createdAt" | "storeId"> {}
