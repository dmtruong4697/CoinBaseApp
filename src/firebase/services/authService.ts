import { NavigationProp } from "@react-navigation/native";
import { UserType } from "../../redux/actions/auth.action";
import { firebaseConfig } from "../config";
import auth from '@react-native-firebase/auth';
import firebase from '@react-native-firebase/app';

export async function signIn(
    navigation: NavigationProp<any, any>,
    email: string,
    password: string,
): Promise<any> {
    try {

        await auth().signInWithEmailAndPassword(email, password);
        const idTokenResult = await firebase.auth().currentUser!.getIdTokenResult();
        // console.log('User JWT: ', idTokenResult.token);
        navigation.navigate('HomeNavigator');
        
    }
    
    catch (error) {
      console.log(error);
        throw error;
    }
}

export async function signOut(
  navigation: NavigationProp<any, any>,
): Promise<any> {
  try {

      await auth()
      .signOut()
      .then(() => {
        navigation.navigate('SignIn');
      });
      
  }
  catch (error) {
    console.log(error);
      throw error;
  }
}