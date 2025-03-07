export default function TruncatedText(text: string, maxWords: number) {
  if (text.split(" ").length > 3) {
    return text.split(" ").slice(0, maxWords).join(" ") + "...";
  } else {
    return text.split(" ").slice(0, maxWords).join(" ");
  }
}
