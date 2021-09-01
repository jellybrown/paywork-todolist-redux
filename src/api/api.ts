import { Itodo } from "../types";
import fakeData from "./data.json";

export const BASE_URL = "http://dummy-server.io/";

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

export type ContentObj = {
  url: string;
  content: string;
  id: string;
};
export type CheckObj = {
  url: string;
  isCheck: boolean;
  id: string;
};
export type IdObj = {
  url: string;
  id: string;
};

// GET /todo
const get = (url: string): Promise<ReadResponse> => {
  return new Promise((resolve, reject) => {
    if (url)
      return resolve({
        status: 200,
        count: fakeData.count,
        todoList: fakeData.todoList,
      });
    else return reject(new Error("url이 있는지 확인해주세요."));
  });
};

// POST /todo
const post = (obj: CreateObj): Promise<CreateResponse> => {
  return new Promise((resolve, reject) => {
    if (obj.url && obj.content)
      return resolve({
        status: 200,
        msg: "포스트가 생성되었습니다.",
        content: obj.content,
      });
    else return reject(new Error("url, content가 있는지 확인해주세요."));
  });
};

// PATCH /todo/:id
const patchContent = (obj: ContentObj): Promise<UpdateContentResponse> => {
  return new Promise((resolve, reject) => {
    if (obj.url && obj.content)
      return resolve({
        status: 200,
        msg: "포스트가 수정되었습니다.",
        content: obj.content,
        id: obj.id,
      });
    else return reject(new Error("url, content가 있는지 확인해주세요."));
  });
};

// PATCH /todo/:id
const patchCheck = (obj: CheckObj): Promise<UpdateCheckResponse> => {
  return new Promise((resolve, reject) => {
    if (obj.url) {
      let msg: string;
      if (obj.isCheck === true) msg = "체크가 완료되었습니다.";
      else msg = "체크가 해제되었습니다.";

      return resolve({ status: 200, msg, isCheck: obj.isCheck, id: obj.id });
    } else return reject(new Error("url, isCheck가 있는지 확인해주세요."));
  });
};

// DELETE /todo/:id
const remove = (obj: IdObj): Promise<DeleteResponse> => {
  return new Promise((resolve, reject) => {
    if (obj.url)
      return resolve({
        status: 200,
        msg: "포스트가 삭제되었습니다.",
        id: obj.id,
      });
    else return reject(new Error("url이 있는지 확인해주세요."));
  });
};

export const api = {
  get,
  post,
  patchCheck,
  patchContent,
  remove,
};
