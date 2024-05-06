import { NavigationProp } from "@react-navigation/native";
import database from '@react-native-firebase/database';

export type CryptoType = {
    id: string,
    logo: string,
    name: string,
    symbol: string,
    description?: string,
}

export type PortfolioType = {
    uid: string,
    id: string,
    crypto: CryptoType,
    quantity: number,
    price: number,
    total: number,
}

export async function buyCrypto(
    crypto: CryptoType,
    quantity: number,
    price: number,
    cardId: string,
    uid: string,
    navigation: NavigationProp<any, any>,
  ): Promise<any> {
    try {
        let obj: any;
        await database()
        .ref(`/portfolio/${uid}`)
        .once('value', snapshot => {
        //   console.log('Users Credit card data: ', snapshot.val());
          obj = snapshot.val();
        });

        const array: PortfolioType[] = [];
        const result = Object.keys(obj).map((key) => {
            [key, obj[key]];
            array.push({
                uid: uid,
                id: key,
                crypto: obj[key].crypto,
                quantity: obj[key].quantity,
                total: obj[key].total,
                price: obj[key].price,
            })
        });

        const item = array.find(item => item.crypto == crypto);
        if(item) {
            item.quantity += quantity;
            item.price = price;
            item.total = item.quantity*price;

            await database()
            .ref(`/portfolio/${uid}/${item.id}`)
            .update({
                quantity: item.quantity + quantity,
                price: price,
                total: (item.quantity + quantity)*price,
            })
        } else {
            await database()
            .ref(`/portfolio/${uid}/${Math.random().toString(16).slice(2)}`)
            .set({
                crypto: crypto,
                price: price,
                quantity: quantity,
                total: price*quantity,
            })
        
            
        await database()
        .ref(`/credit-card/${uid}/${cardId}`)
        .once('value', async(snapshot) => {
            await database()
            .ref(`/credit-card/${uid}/${cardId}`)
            .update({
                total: snapshot.val().total - price*quantity,
            })
        });
    }}
    catch (error) {
      console.log(error);
        throw error;
    }
  }