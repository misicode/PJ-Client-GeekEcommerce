export const convertText = (text: string) => {
  const lowercasedText = text.toLowerCase();
  return lowercasedText.charAt(0).toUpperCase() + lowercasedText.slice(1);
};
