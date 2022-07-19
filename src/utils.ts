import formatDistanceToNow from "date-fns/formatDistanceToNow";

export const formatTime = (timeStr: string) => {
  const time = new Date(Number(timeStr)).toLocaleTimeString([], {
    timeStyle: "short",
  });
  return time;
};

export const formatDate = (date: string) => {
  const formattedToNow = formatDistanceToNow(new Date(date), {
    addSuffix: true,
  });

  return formattedToNow;
};
