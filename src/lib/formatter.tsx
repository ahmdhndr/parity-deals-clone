const compactNumberFormat = new Intl.NumberFormat(undefined, {
  notation: "compact",
});

export const formatCompactNumber = (number: number) => {
  return compactNumberFormat.format(number);
};
