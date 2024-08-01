export const increaseCount = (amount) => {
  return {
    type: "INCREASE",
    payload: amount,
  };
};

export const decreaseCount = (amount) => {
  return {
    type: "DECREASE",
    payload: amount,
  };
};
