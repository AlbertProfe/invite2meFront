export function setItem(key: string, value: unknown) {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch (error) {
    console.error(error);
  }
}

export function getItem(key: string) {
  try {
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) : undefined;
  } catch (error) {
    console.error(error);
  }
}

export function removeItem(key: string) {
  try {
    localStorage.removeItem(key);
  } catch (error) {
    console.error(error);
  }
}
