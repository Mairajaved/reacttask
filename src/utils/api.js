import axios from "axios";
import dotenv from "dotenv";
dotenv.config();

const params = {
  headers: {
    // eslint-disable-next-line no-undef
    Authorization: "bearer " + process.env.REACT_APP_STRIPE_DEV_APP_KEY,
  },
};

export const fetchDataFromApi = async (url) => {
  try {
    const { data } = await axios.get(
      process.env.REACT_APP_STRIPE_APP_DEV_URL + url,
      params
    );
    return data;
  } catch (err) {
    console.log(err);
    return err;
  }
};

export const makePaymentRequest = axios.create({
  baseURL: process.env.REACT_APP_STRIPE_APP_DEV_URL,
  headers: {
    Authorization: "bearer " + process.env.REACT_APP_STRIPE_DEV_APP_KEY,
  },
});
