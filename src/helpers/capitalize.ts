function capitalize(str: string) {
  if (!str) {
    return "";
  }

  return str
    .split(" ") // In case there is a more than word string
    .map((s) => s[0].toUpperCase() + s.substring(1)) // Capitalize each word
    .join(" "); // Join every word to make a single string again
}

export default capitalize;
