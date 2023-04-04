import { getShoppingCart } from "../utilities/fakedb";

const cartProductLoader = async() =>{

    const loadedProduct= await fetch('products.json')
    const products = await loadedProduct.json();
    // console.log(products)

    const storageCart = getShoppingCart()
    // console.log(storageCart)
    const addCart = []
    // console.log(storageCart)
    for(const id in storageCart){
        // console.log(id)
        const saveProduct = products.find(product =>product.id ===id)
        // console.log(saveProduct)
       if(saveProduct){
        const quantity = storageCart[id]
        // console.log('before',saveProduct)
        saveProduct.quantity = quantity
        // console.log('after',saveProduct)
        addCart.push(saveProduct)
       }
    }
    return addCart

}
export default cartProductLoader