export const getStoredBook = () => {
  const storedBook = localStorage.getItem("readList");
  if (storedBook) {
    const storedBookData = JSON.parse(storedBook);
    return storedBookData;
  } else {
    return [];
  }
};
export const addToStoreDB = (id) => {
  const storedBookData = getStoredBook();
  if (storedBookData.includes(id)) {
    alert("This Book is Already Added");
  } else {
    storedBookData.push(id);
    const data = JSON.stringify(storedBookData);
    localStorage.setItem("readList", data);
  }
};
