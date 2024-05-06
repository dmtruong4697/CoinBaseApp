import { NavigationProp } from "@react-navigation/native";
import { UserType, loginSuccess, signOut } from "../../redux/actions/auth.action";
import { firebaseConfig } from "../config";
import auth from '@react-native-firebase/auth';
import firebase from '@react-native-firebase/app';
import { DispatchProp, useDispatch, useSelector } from "react-redux";
import { Dispatch, UnknownAction } from "redux";
import database from '@react-native-firebase/database';

export async function signIn(
    navigation: NavigationProp<any, any>,
    email: string,
    password: string,
): Promise<any> {
    try {
        const db = database();

        await auth().signInWithEmailAndPassword(email, password);
        const idTokenResult = await firebase.auth().currentUser!.getIdTokenResult();
        const currentUser = await firebase.auth().currentUser;
        const user: UserType = {
          uid: currentUser?.uid,
          deviceToken: '',
          displayName: currentUser?.displayName,
          userEmail: currentUser?.email,
          token: idTokenResult,
          phoneNumber: currentUser?.phoneNumber,
          photoURL: currentUser?.photoURL,
        }

        database()
          .ref(`/active-user/${user.uid}`)
          .set(user);
        // console.log('User JWT: ', idTokenResult.token);
        navigation.navigate('HomeNavigator');

        return user;
        
    }
    
    catch (error) {
      console.log(error);
        throw error;
    }
}

export async function signout(
  uid: string,
  dispatch: Dispatch,
  navigation: NavigationProp<any, any>,
): Promise<any> {
  try {
      await auth()
      .signOut()
      .then(async() => {
        await database().ref(`/active-user/${uid}`).remove();
        dispatch(signOut('ok'));
        navigation.navigate('SignIn');
      });
      
  }
  catch (error) {
    console.log(error);
      throw error;
  }
}