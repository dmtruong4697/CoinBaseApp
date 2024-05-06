import { FirebaseAuthTypes } from "@react-native-firebase/auth";

export const loginRequest = (email: string, password: string, deviceToken: string) => ({
    type: "LOGIN_REQUEST",
    payload: { email, password, deviceToken },
  });
  
export type UserType = {
    uid: string | undefined;
    userEmail: string | null | undefined,
    phoneNumber: string | null | undefined,
    photoURL: string | null | undefined,
    displayName: string | null | undefined,
    token: FirebaseAuthTypes.IdTokenResult,
    deviceToken: string | undefined,
}

export const loginSuccess = (currentUser: UserType) => ({
    type: "LOGIN_SUCCESS",
    payload: currentUser,
});

export const loginFailure = (errorMessage: string) => ({
    type: "LOGIN_FAILURE",
    payload: errorMessage,
});

export const signOut = (errorMessage: string) => ({
    type: "SIGN_OUT",
    payload: errorMessage,
});
