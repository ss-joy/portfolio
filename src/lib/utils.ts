import { clsx, type ClassValue } from "clsx";
import { twMerge as tw } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return tw(clsx(inputs));
}

export default tw;

export function pickRandomString(array: string[]): string {
  // Generate a random index between 0 and array.length - 1
  const randomIndex = Math.floor(Math.random() * array.length);

  // Return the string at the random index
  return array[randomIndex];
}
