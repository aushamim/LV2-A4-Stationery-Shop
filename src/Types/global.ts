import { BaseQueryApi } from "@reduxjs/toolkit/query";

export type TError = {
  data: {
    message: string;
    stack: string;
    success: boolean;
  };
  status: number;
};

export type TMeta = {
  limit: number;
  page: number;
  total: number;
  totalPage: number;
};

export type TResponse<T> = {
  data?: T;
  error?: TError;
  meta?: TMeta;
  success: boolean;
  message: string;
};

export type TResponseRedux<T> = TResponse<T> & BaseQueryApi;

export type TQueryParam = {
  name: string;
  value: boolean | React.Key;
};

export type TResponseUser = {
  userId: string;
  role: string;
  iat: number;
  exp: number;
};

export interface OrderInterface {
  transaction: Transaction;
  _id: string;
  user: User;
  products: Product[];
  totalPrice: number;
  status: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
}

export interface Transaction {
  id: string;
  transactionStatus: string;
  method: string;
  date_time: string;
}

export interface User {
  _id: string;
  name: string;
  email: string;
  password: string;
  phone: string;
  role: string;
  address: string;
  inactive: boolean;
  createdAt: string;
  updatedAt: string;
  __v: number;
}

export interface Product {
  product: Product2;
  quantity: number;
  _id: string;
}

export interface Product2 {
  _id: string;
  name: string;
  brand: string;
  description: string;
  category: string;
  price: number;
  quantity: number;
  imgUrl: string;
  inStock: boolean;
  createdAt: string;
  updatedAt: string;
  __v: number;
}
