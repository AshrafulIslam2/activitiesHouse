function AddtoDb(time) {
  let shoppingCart = {};
  //get the shopping cart from local storage
  const storedCart = localStorage.getItem("Break");
  if (storedCart) {
    shoppingCart = JSON.parse(storedCart);
  }
  let br = "BreakTime";
  shoppingCart[br] = time;
  localStorage.setItem("WaitingTime", JSON.stringify(shoppingCart));
}
const getDataFromCart = () => {
  let shoppingCart = {};
  const storedCart = localStorage.getItem("WaitingTime");
  if (storedCart) {
    shoppingCart = JSON.parse(storedCart);
    return shoppingCart;
  }
};
export { AddtoDb, getDataFromCart };
