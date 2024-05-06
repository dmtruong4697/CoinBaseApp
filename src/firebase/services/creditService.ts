import { NavigationProp } from "@react-navigation/native";
import database from '@react-native-firebase/database';
import { ToastAndroid } from "react-native";

export type CreditCardType = {
    id: string,
    cardNumber: string,
    nameOnCard: string,
    unit: string,
    limit: number,
    total: number,
    cvc: string,
    expiration: string,
    postalCode: string,
}

export async function getAllCreditCard(
    uid: string,
    navigation: NavigationProp<any, any>,
  ): Promise<any> {
    try {
        let obj: any;
        await database()
        .ref(`/credit-card/${uid}`)
        .once('value', snapshot => {
        //   console.log('Users Credit card data: ', snapshot.val());
          obj = snapshot.val();
        });

        const array: CreditCardType[] = [];
        const result = Object.keys(obj).map((key) => {
            [key, obj[key]];
            array.push({
                id: key,
                cardNumber: obj[key].cardNumber,
                cvc: obj[key].cvc,
                expiration: obj[key].expiration,
                limit: obj[key].limit,
                nameOnCard: obj[key].nameOnCard,
                postalCode: obj[key].postalCode,
                total: obj[key].total,
                unit: obj[key].unit,
            })
        });
        // console.log(array);
        return array;
    }
    catch (error) {
      console.log(error);
        throw error;
    }
  }

export async function addCreditCard(
    uid: string,
    creditCard: CreditCardType,
    navigation: NavigationProp<any, any>,
): Promise<any> {
try {
    let message = '';
    await database()
    .ref(`/credit-card/${uid}/${creditCard.id}`)
    .set(creditCard)
    .then(() => {
        message = 'Add card success!';
        navigation.goBack();
    });

    ToastAndroid.showWithGravity(
        'Add card success!',
        ToastAndroid.SHORT,
        ToastAndroid.CENTER,
      );

    return message;
}
catch (error) {
    console.log(error);
    throw error;
}
}