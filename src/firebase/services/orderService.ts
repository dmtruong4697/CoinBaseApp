import { CryptoType, OrderType, PortfolioType } from "./cryptoService";
import database from '@react-native-firebase/database';

export async function getOrderByCrypto(
    uid: string,
    crypto: CryptoType,
  ): Promise<any> {
    try {
        let obj: any;
        await database()
        .ref(`/order/${uid}`)
        .once('value', snapshot => {
        //   console.log('Users Credit card data: ', snapshot.val());
          obj = snapshot.val();
        });
  
        let total = 0;
        const array: OrderType[] = [];
        if(obj != null) {
        const result = Object.keys(obj).map((key) => {
            [key, obj[key]];
            total += obj[key].quantity*obj[key].price;
            array.push({
                id: key,
                crypto: obj[key].crypto,
                createAt: obj[key].createAt,
                quantity: obj[key].quantity,
                total: obj[key].total,
                price: obj[key].price,
                cardId: obj[key].cardId,
                uid: obj[key].uid,
                unit: obj[key].unit,
            })
        });
        }
  
        const items: OrderType[] = [];
        array.map((item) => {
            if(item.crypto.name == crypto.name) {
                items.push(item);
            }
        })
  
        return items;
    }
    catch (error) {
      console.log(error);
        throw error;
    }
  }

export async function getOrderById(
    uid: string,
    id: string,
): Promise<any> {
try {
    let obj: any;
    await database()
    .ref(`/order/${uid}/${id}`)
    .once('value', snapshot => {
    //   console.log('Users Credit card data: ', snapshot.val());
        obj = snapshot.val();
    });

    return obj;
}
catch (error) {
    console.log(error);
    throw error;
}
}