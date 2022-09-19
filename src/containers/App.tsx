import React from "react";

import InternetAvailability from "../components/InternetAvailability";
import ProductView from "../views/products";
import UserView from "../views/user";

function App() {
  return (
    <div>
      <InternetAvailability />
      <UserView />
      <ProductView />
    </div>
  );
}

export default App;
