export const loginRequest = (email: string, password: string, deviceId: string) => ({
    type: "LOGIN_REQUEST",
    payload: { email, password, deviceId },
  });
  
export type UserType = {
    email: string,
    password: string,
    deviceId: string,
    token: string,
}

export const loginSuccess = (currentUser: UserType) => ({
    type: "LOGIN_SUCCESS",
    payload: currentUser,
});

export const loginFailure = (errorMessage: string) => ({
    type: "LOGIN_FAILURE",
    payload: errorMessage,
});
