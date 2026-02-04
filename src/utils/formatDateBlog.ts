export const formatDateBlog = (isoDate?: string) => {
  if (!isoDate) return "";

  const date = new Date(isoDate);

  return new Intl.DateTimeFormat("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  }).format(date);
};
