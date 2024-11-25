export const getSignWithAmount = (num) => {
  const number = Math.abs(num).toLocaleString();

  if (num === 0) {
    return `$${number}`;
  }

  return num < 0 ? `-$${number}` : `+$${number}`;
};
