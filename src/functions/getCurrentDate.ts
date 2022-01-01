import { DateString } from "../Interface/Todo";

const getCurrentDate = (): DateString => {
  const date = new Date();
    
  const CurrentDate = {
    date: date.toDateString(),
    time: date.toLocaleTimeString(),
  };

  return CurrentDate;
};

export default getCurrentDate;