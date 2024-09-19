//create the context
//provide the state to context
//wrap context in root component
//consume the context using useContext

import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const ShoppingCartContext = createContext(null);

function ShoppingCartProvider({ children }) {
    const [loading, setLoading] = useState(true);
    const [listOfProducts, setListOfProducts] = useState([]);
    const [productDetails, setProductDetails] = useState(null);
    const [cartItems, setCartItems] = useState([]);
    const navigate = useNavigate();

    async function fetchListOfProducts() {
        const apiResponse = await fetch("https://dummyjson.com/products");
        const result = await apiResponse.json();

        if (result && result?.products) {
            setListOfProducts(result?.products);
            setLoading(false);
        }
    }

    function handleAddToCart(getProductDetails) {
        console.log(getProductDetails);

        let cpyExistingCartItems = [...cartItems];
        const findIndexOfCurrentItem = cpyExistingCartItems.findIndex(
            (cartItem) => cartItem.id === getProductDetails.id
        );

        console.log(findIndexOfCurrentItem);

        if (findIndexOfCurrentItem === -1) {
            cpyExistingCartItems.push({
                ...getProductDetails,
                quantity: 1,
                totalPrice: getProductDetails?.price,
            });
        } else {
            console.log("its coming here");
            cpyExistingCartItems[findIndexOfCurrentItem] = {
                ...cpyExistingCartItems[findIndexOfCurrentItem],
                quantity: cpyExistingCartItems[findIndexOfCurrentItem].quantity + 1,
                totalPrice:
                    (cpyExistingCartItems[findIndexOfCurrentItem].quantity + 1) *
                    cpyExistingCartItems[findIndexOfCurrentItem].price,
            };
        }

        console.log(cpyExistingCartItems, "cpyExistingCartItems");
        setCartItems(cpyExistingCartItems);
        localStorage.setItem("cartItems", JSON.stringify(cpyExistingCartItems));
        navigate("/cart");
    }

    function handleRemoveFromCart(getProductDetails, isFullyRemoveFromCart) {
        let cpyExistingCartItems = [...cartItems];
        const findIndexOfCurrentCartItem = cpyExistingCartItems.findIndex(
            (item) => item.id === getProductDetails.id
        );

        if (isFullyRemoveFromCart) {
            cpyExistingCartItems.splice(findIndexOfCurrentCartItem, 1);
        } else {
            cpyExistingCartItems[findIndexOfCurrentCartItem] = {
                ...cpyExistingCartItems[findIndexOfCurrentCartItem],
                quantity: cpyExistingCartItems[findIndexOfCurrentCartItem].quantity - 1,
                totalPrice:
                    (cpyExistingCartItems[findIndexOfCurrentCartItem].quantity - 1) *
                    cpyExistingCartItems[findIndexOfCurrentCartItem].price,
            };
        }

        localStorage.setItem("cartItems", JSON.stringify(cpyExistingCartItems));
        setCartItems(cpyExistingCartItems);
    }

    useEffect(() => {
        fetchListOfProducts();
        setCartItems(JSON.parse(localStorage.getItem("cartItems") || []));
    }, []);

    console.log(cartItems);

    return (
        <ShoppingCartContext.Provider
            value={{
                listOfProducts,
                loading,
                setLoading,
                productDetails,
                setProductDetails,
                handleAddToCart,
                cartItems,
                handleRemoveFromCart,
            }}
        >
            {children}
        </ShoppingCartContext.Provider>
    );
}

export default ShoppingCartProvider;

// --------------------------------------------------------------------------
// chatGPT

// import { createContext, useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";

// export const ShoppingCartContext = createContext(null);

// function ShoppingCartProvider({ children }) {
//     const [loading, setLoading] = useState(true);
//     const [listOfProducts, setListOfProducts] = useState([]);
//     const [productDetails, setProductDetails] = useState(null);
//     const [cartItems, setCartItems] = useState([]);
//     const navigate = useNavigate();

//     async function fetchListOfProducts() {
//         try {
//             const apiResponse = await fetch("https://dummyjson.com/products");
//             if (!apiResponse.ok) {
//                 throw new Error("Network response was not ok");
//             }
//             const result = await apiResponse.json();

//             if (result && result.products) {
//                 setListOfProducts(result.products);
//             }
//         } catch (error) {
//             console.error("Failed to fetch products:", error);
//         } finally {
//             setLoading(false);
//         }
//     }

//     function handleAddToCart(getProductDetails) {
//         console.log(getProductDetails);

//         let updatedCartItems = [...cartItems];
//         const itemIndex = updatedCartItems.findIndex(
//             (cartItem) => cartItem.id === getProductDetails.id
//         );

//         if (itemIndex === -1) {
//             updatedCartItems.push({
//                 ...getProductDetails,
//                 quantity: 1,
//                 totalPrice: getProductDetails.price,
//             });
//         } else {
//             updatedCartItems[itemIndex] = {
//                 ...updatedCartItems[itemIndex],
//                 quantity: updatedCartItems[itemIndex].quantity + 1,
//                 totalPrice:
//                     (updatedCartItems[itemIndex].quantity + 1) *
//                     updatedCartItems[itemIndex].price,
//             };
//         }

//         setCartItems(updatedCartItems);
//         localStorage.setItem("cartItems", JSON.stringify(updatedCartItems));
//         navigate("/cart");
//     }

//     function handleRemoveFromCart(getProductDetails, isFullyRemoveFromCart) {
//         let updatedCartItems = [...cartItems];
//         const itemIndex = updatedCartItems.findIndex(
//             (item) => item.id === getProductDetails.id
//         );

//         if (itemIndex !== -1) {
//             if (isFullyRemoveFromCart) {
//                 updatedCartItems.splice(itemIndex, 1);
//             } else {
//                 const updatedItem = updatedCartItems[itemIndex];
//                 if (updatedItem.quantity > 1) {
//                     updatedCartItems[itemIndex] = {
//                         ...updatedItem,
//                         quantity: updatedItem.quantity - 1,
//                         totalPrice:
//                             (updatedItem.quantity - 1) * updatedItem.price,
//                     };
//                 } else {
//                     updatedCartItems.splice(itemIndex, 1);
//                 }
//             }
//             setCartItems(updatedCartItems);
//             localStorage.setItem("cartItems", JSON.stringify(updatedCartItems));
//         }
//     }

//     useEffect(() => {
//         fetchListOfProducts();
//         const savedCartItems = JSON.parse(localStorage.getItem("cartItems") || "[]");
//         setCartItems(savedCartItems);
//     }, []);

//     return (
//         <ShoppingCartContext.Provider
//             value={{
//                 listOfProducts,
//                 loading,
//                 setLoading,
//                 productDetails,
//                 setProductDetails,
//                 handleAddToCart,
//                 cartItems,
//                 handleRemoveFromCart,
//             }}
//         >
//             {children}
//         </ShoppingCartContext.Provider>
//     );
// }

// export default ShoppingCartProvider;




