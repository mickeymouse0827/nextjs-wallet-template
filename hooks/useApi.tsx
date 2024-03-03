import axios from 'axios'
import { Config } from '../config/config'

const API_URL = Config.API_URL;

export const fetchEthPrice = async () => {
  try {
    let res = await axios.get(API_URL + "/eth_price");
    return res.data.price;
  } catch (err) {
    console.log(err);
    return 0;
  }
}