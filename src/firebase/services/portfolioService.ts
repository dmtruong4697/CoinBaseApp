import { NavigationProp } from "@react-navigation/native";
import database from '@react-native-firebase/database';
import { ToastAndroid } from "react-native";
import { CreditCardType } from "./creditService";
import { CryptoType, PortfolioType } from "./cryptoService";

export async function getPortfolio(
    uid: string,
  ): Promise<any> {
    try {
        let obj: any;
        await database()
        .ref(`/portfolio/${uid}`)
        .once('value', snapshot => {
        //   console.log('Users Credit card data: ', snapshot.val());
          obj = snapshot.val();
        });

        let total = 0;
        const array: PortfolioType[] = [];
        if(obj != null) {
        const result = Object.keys(obj).map((key) => {
            [key, obj[key]];
            total += obj[key].quantity*obj[key].price;
            array.push({
                uid: uid,
                id: key,
                crypto: obj[key].crypto,
                quantity: obj[key].quantity,
                total: obj[key].total,
                price: obj[key].price,
            })
        });
        }

        return {
            total: total,
            data: array,
        }
    }
    catch (error) {
      console.log(error);
        throw error;
    }
  }

export async function getPortfolioByCrypto(
  uid: string,
  crypto: CryptoType,
): Promise<any> {
  try {
      let obj: any;
      await database()
      .ref(`/portfolio/${uid}`)
      .once('value', snapshot => {
      //   console.log('Users Credit card data: ', snapshot.val());
        obj = snapshot.val();
      });

      let total = 0;
      const array: PortfolioType[] = [];
      if(obj != null) {
      const result = Object.keys(obj).map((key) => {
          [key, obj[key]];
          total += obj[key].quantity*obj[key].price;
          array.push({
              uid: uid,
              id: key,
              crypto: obj[key].crypto,
              quantity: obj[key].quantity,
              total: obj[key].total,
              price: obj[key].price,
          })
      });
      }

      const item = array.find(item => item.crypto.name == crypto.name);

      return item;
  }
  catch (error) {
    console.log(error);
      throw error;
  }
}