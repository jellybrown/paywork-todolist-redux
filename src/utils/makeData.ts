import { Itodo } from "./../types";

const randomId = (): string => {
  const id = Math.floor(Math.random() * 100000 + 1);
  return `${id}`;
};

export const updateDate = (): string => {
  const KR_TIME_ZONE = 9 * 60 * 60 * 1000;
  const today = new Date(Date.now() + KR_TIME_ZONE);
  const dateString = today.toISOString();

  return dateString;
};

export const generateData = (content: string): Itodo => {
  return {
    id: randomId(),
    content,
    isCheck: false,
    createdAt: updateDate(),
    updatedAt: updateDate(),
  };
};
