import { Itodo } from "types";

export interface CreateResponse {
  status: number;
  msg: string;
  content: string;
}

export interface ReadResponse {
  status: number;
  count: number;
  todoList: Itodo[];
}

interface UpdateBaseResponse {
  status: number;
  msg: string;
  id: string;
}

export interface UpdateContentResponse extends UpdateBaseResponse {
  content: string;
}

export interface UpdateCheckResponse extends UpdateBaseResponse {
  isCheck: boolean;
}

export interface DeleteResponse {
  status: number;
  msg: string;
  id: string;
}

export type CreateObj = {
  url: string;
  content: string;
};

export type PatchContentObj = {
  url: string;
  content: string;
  id: string;
};

export type PatchCheckObj = {
  url: string;
  isCheck: boolean;
  id: string;
};

export type RemoveObj = {
  url: string;
  id: string;
};
