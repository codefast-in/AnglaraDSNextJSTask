import axios from "axios";
import {addProducts, addToCart,removeFromCart} from "./reducer";
import toast from "react-hot-toast";

export const asyncAddProducts: any = () => async (dispatch: any) => {
  try {
    const {data} = await axios.get("https://fakestoreapi.com/products");
    dispatch(addProducts(data));
  } catch (error) {
    console.log(error);
  }
};

export const asyncAddToCart: any = (data: any) => async (dispatch: any) => {
  dispatch(addToCart(data));
  toast.success(`${data.title} is added to cart`)
};

export const asyncRemoveFromCart: any = (data: any) => async (dispatch: any) => {
  dispatch(removeFromCart(data));
  toast.success(`${data.title} is removed from cart`)
};
