import React from "react";
import userActions, { IUser } from "../../patterns/user-singleton";

function UserView() {
  const [userInformation, setUserInformation] = React.useState<
    IUser | undefined
  >(undefined);

  React.useEffect(() => {
    userActions.initializeUser({
      name: 'John Doe',
      id: '123',
      email: 'johndoe@gmail.com',
      token: '123456789'
    })
  }, []);

  React.useEffect(() => {
    setUserInformation(userActions.getUserInformation());
  }, [userInformation]);

  return (
    <div>
      <h1>User information</h1>
      {userInformation && (
        <>
          <span>Name: {userInformation.name}</span>
          <br />
          <span>Id: {userInformation.id}</span>
          <br />
          <span>Email: {userInformation.email}</span>
          <br />
          <span>Token: {userInformation.token}</span>
        </>
      )}
    </div>
  );
}

export default UserView;
