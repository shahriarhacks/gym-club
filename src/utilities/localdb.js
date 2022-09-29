// use local storage to manage cart data
const addToDb = id => {
    let listCart = {};

    //get the list cart from local storage
    const storedCart = localStorage.getItem('list-cart');
    if (storedCart) {
        listCart = JSON.parse(storedCart);
    }

    // add quantity
    const quantity = listCart[id];
    if (quantity) {
        const newQuantity = quantity + 1;
        listCart[id] = newQuantity;
    }
    else {
        listCart[id] = 1;
    }
    localStorage.setItem('list-cart', JSON.stringify(listCart));
}

const getListCart = () => {
    let listCart = {};

    //get the list cart from local storage
    const storedCart = localStorage.getItem('list-cart');
    if (storedCart) {
        listCart = JSON.parse(storedCart);
    }
    return listCart;
}




export {
    addToDb,
    getListCart
}