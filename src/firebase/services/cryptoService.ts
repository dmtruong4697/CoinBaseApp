import { NavigationProp } from "@react-navigation/native";
import database from '@react-native-firebase/database';
import { ToastAndroid } from "react-native";

export type CryptoType = {
    id: string,
    logo: string,
    name: string,
    symbol: string,
    description?: string,
    price: number,
}

export type PortfolioType = {
    uid: string,
    id: string,
    crypto: CryptoType,
    quantity: number,
    price: number,
    total: number,
}

export type OrderType = {
    id: string,
    crypto: CryptoType,
    createAt: string,
    quantity: number,
    price: number,
    cardId: string,
    uid: string,
    total: number,
    unit: string,
}

export async function buyCrypto(
    order: OrderType,
    navigation: NavigationProp<any, any>,
  ): Promise<any> {
    try {
        let obj: any;
        await database()
        .ref(`/portfolio/${order.uid}`)
        .once('value', snapshot => {
        //   console.log('Users Credit card data: ', snapshot.val());
          obj = snapshot.val();
        });

        const array: PortfolioType[] = [];
        if(obj != null) {
        const result = Object.keys(obj).map((key) => {
            [key, obj[key]];
            array.push({
                uid: order.uid,
                id: key,
                crypto: obj[key].crypto,
                quantity: obj[key].quantity,
                total: obj[key].total,
                price: obj[key].price,
            })
        });
        }

        const item = array.find(item => item.crypto == order.crypto);
        if(item) {
            item.quantity += order.quantity;
            item.price = order.price;
            item.total = item.quantity*order.price;

            await database()
            .ref(`/portfolio/${order.uid}/${item.id}`)
            .update({
                quantity: item.quantity + order.quantity,
                price: order.price,
                total: (item.quantity + order.quantity)*order.price,
            })
        } else {
            await database()
            .ref(`/portfolio/${order.uid}/${Math.random().toString(16).slice(2)}`)
            .set({
                crypto: order.crypto,
                price: order.price,
                quantity: order.quantity,
                total: order.total,
            })
        
            
        await database()
        .ref(`/credit-card/${order.uid}/${order.cardId}`)
        .once('value', async(snapshot) => {
            await database()
            .ref(`/credit-card/${order.uid}/${order.cardId}`)
            .update({
                total: snapshot.val().total - order.total,
            })
        });

        await database()
        .ref(`/order/${order.uid}/${order.id}`)
        .set(order)

        ToastAndroid.showWithGravity(
            'Buy Crypto success!',
            ToastAndroid.SHORT,
            ToastAndroid.CENTER,
          );
        
        navigation.navigate('OrderPreview', {order: order})
    }}
    catch (error) {
      console.log(error);
        throw error;
    }
  }