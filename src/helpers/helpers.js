import { format } from "date-fns";

export const formatDate = (day: number, month: number, year: number) => {
  return format(new Date(year, month - 1, day), "yyyy-MM-dd");
};

export const actualDate = () => {
  const date = new Date();
  return `${date.getMonth() + 1}/${date.getFullYear()}`;
};

export const monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
