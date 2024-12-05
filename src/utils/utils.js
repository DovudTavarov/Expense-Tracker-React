const localStorageTransactions = JSON.parse(
  localStorage.getItem("transactions")
);

let initialTransactions = localStorageTransactions || [];

const updateLocalStorage = (transactions) => {
  localStorage.setItem("transactions", JSON.stringify(transactions));
};

export { initialTransactions, updateLocalStorage };
