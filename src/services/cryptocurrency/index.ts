import axios from "axios";
import { API } from "../../constants/API";

export async function getCoinInfo(id: number): Promise<any> {
    try {
      const responce = await axios.get(`https://pro-api.coinmarketcap.com/v2/cryptocurrency/info?id=${id}`,
        {
            headers: {
                'X-CMC_PRO_API_KEY': API.API_Key,
            }
        }
      );
        const result = responce.data.data;
        // console.log(result)
      return result;
    } catch (error) {
      console.log(error);
        throw error;
    }
}

export async function getListingLatest(limit: number) {
    try {
      const responce = await axios.get(`https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?limit=${limit}`,
        {
            headers: {
                'X-CMC_PRO_API_KEY': API.API_Key,
            }
        }
      );
        const result = responce.data.data;
        // console.log(responce.status)
      return result;
    } catch (error) {
      console.log(error);
        throw error;
    }
}

export async function getQuoteLatest(id: number) {
    try {
      const responce = await axios.get(`https://pro-api.coinmarketcap.com/v2/cryptocurrency/quotes/latest?id=${id}`,
        {
            headers: {
                'X-CMC_PRO_API_KEY': API.API_Key,
            }
        }
      );
        const result = responce.data.data;
        // console.log(responce.status)
      return result;
    } catch (error) {
      console.log(error);
        throw error;
    }
}