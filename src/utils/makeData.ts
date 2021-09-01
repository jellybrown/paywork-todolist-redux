import { Itodo } from "./../types";

// 아이디 랜덤 생성 함수 (1 ~ 100,000)
const randomId = (): string => {
  const id = Math.floor(Math.random() * 100000 + 1);
  return `${id}`;
};

// 날짜 생성 함수 (KST)
export const updateDate = (): string => {
  const KR_TIME_ZONE = 9 * 60 * 60 * 1000;
  const date = new Date(Date.now() + KR_TIME_ZONE);
  return `${date}`;
};

// todo data 생성 함수
export const generateData = (content: string): Itodo => {
  return {
    id: randomId(),
    content,
    isCheck: false,
    createdAt: updateDate(),
    updatedAt: updateDate(),
  };
};
