export interface ICategory {
  id: string;
  createdAt: string;
  title: string;
  description: string;
  storeId: string;
}

export interface ICategoryInput
  extends Omit<ICategory, "id" | "createdAt" | "storeId"> {}
