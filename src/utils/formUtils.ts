export function isValidDate(date: string) {
  const createdDate = new Date(date);
  const currentDate = Date.parse(String(new Date()));
  if (currentDate > Date.parse(String(createdDate))) {
    return true;
  }
  return false;
}
