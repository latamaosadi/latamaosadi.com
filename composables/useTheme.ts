export const useTheme = () =>
  useState("theme", () => {
    return "dark";
    // return new Date().getHours() > 18 ? "dark" : "light";
  });

export const useIsDark = () => {
  const theme = useTheme();
  return computed(() => theme.value === "dark");
};
