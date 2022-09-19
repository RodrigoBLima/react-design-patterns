export interface IUser {
  name?: string;
  id?: string;
  email?: string;
  token?: string;
}

let loggedInUserStore: IUser | undefined = undefined;

const userActions = {
  initializeUser: (user: IUser) => {
    loggedInUserStore = user;
  },
  getUserInformation: () => {
    return loggedInUserStore;
  }
};

export default userActions;