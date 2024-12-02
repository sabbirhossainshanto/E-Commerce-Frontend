import { BaseQueryApi } from "@reduxjs/toolkit/query";
import { ReactNode } from "react";

export interface IChildren {
  children: ReactNode;
}

export interface IUser {
  _id: string;
  name: string;
  email: string;
  mobileNumber: string;
  role: "ADMIN" | "VENDOR" | "CUSTOMER";
  status: string;
  profilePhoto?: string;
  iat: number;
  exp: number;
}

export type TError = {
  data: {
    error: Record<string, unknown>;
    errorSource: {
      message: string;
      path: string;
    }[];
    message: string;
    stack: string;
    success: boolean;
  };
  statusCode: number;
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
