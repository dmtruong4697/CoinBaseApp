export const loginRequest = (email: string, password: string, deviceToken: string) => ({
    type: "LOGIN_REQUEST",
    payload: { email, password, deviceToken },
  });
  
export type UserType = {
    uid: string;
    userEmail: string | null,
    phoneNumber: string | null,
    photoURL: string | null,
    displayName: string | null,
    token: string,
    refreshToken: string,
    expirationTime: number,
    deviceToken: string,
}

export const loginSuccess = (currentUser: UserType) => ({
    type: "LOGIN_SUCCESS",
    payload: currentUser,
});

export const loginFailure = (errorMessage: string) => ({
    type: "LOGIN_FAILURE",
    payload: errorMessage,
});
