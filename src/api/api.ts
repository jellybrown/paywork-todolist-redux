import fakeData from "./data.json";
import {
  RemoveObj,
  PatchCheckObj,
  PatchContentObj,
  CreateObj,
  DeleteResponse,
  UpdateCheckResponse,
  UpdateContentResponse,
  CreateResponse,
  ReadResponse,
} from "./types";

export const BASE_URL = "http://dummy-server.io/";

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
const patchContent = (obj: PatchContentObj): Promise<UpdateContentResponse> => {
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
const patchCheck = (obj: PatchCheckObj): Promise<UpdateCheckResponse> => {
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
const remove = (obj: RemoveObj): Promise<DeleteResponse> => {
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
