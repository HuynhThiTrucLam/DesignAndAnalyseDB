import { Order } from "./Order";

export type ShippingAddress = {
  id: string;
  name: string;
  phone: string;
  address: string;
  email: string;
};

export type Customer = {
  username: string;
  password: string;
  id: string;
  phone?: string;
  email?: string;
  address?: ShippingAddress[];
};
