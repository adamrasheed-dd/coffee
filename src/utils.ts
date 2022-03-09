import differenceInHours from "date-fns/differenceInHours";

export const getBrewedMessage = (
  brewedTime: string | null,
  isLoggedIn: boolean = false
) => {
  if (!brewedTime) {
    return "💔 There is no coffee. Please brew a pot and mark as brewed";
  }

  const isOlderThanFourHours =
    differenceInHours(Number(brewedTime), new Date()) >= 4;

  if (isOlderThanFourHours) {
    return "The coffee is pretty old. Please make a fresh batch.";
  }

  return "☕️ Coffee has been brewed!";
};

export const formatTime = (timeStr: string) => {
  const time = new Date(Number(timeStr)).toLocaleTimeString([], {
    timeStyle: "short",
  });
  return time;
};
