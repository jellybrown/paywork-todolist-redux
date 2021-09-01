import { useState, useEffect } from "react";

type Timer = NodeJS.Timeout | null;

const useTimer = () => {
  const [time, setTime] = useState<string | null>(null);
  let timerInfo: Timer = null;

  const getCurrentTime = (): string => {
    const date = new Date();
    const dateString = date.toLocaleTimeString("ko-KR");

    return dateString;
  };

  useEffect(() => {
    // eslint-disable-next-line react-hooks/exhaustive-deps
    timerInfo = setTimeout(() => setTime(getCurrentTime), 1000);

    return () => {
      if (!timerInfo) return;
      clearTimeout(timerInfo);
    };
  });
  return [time];
};

export default useTimer;
