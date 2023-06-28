import React from "react";
import { useAuth } from "../contexts/auth";

import SignRoutes from "./SignRoutes";
import UnsignedRoutes from "./UnsignedRoutes";

const Routes = () => {
  const context = useAuth();
  return context.signed ? <SignRoutes /> : <UnsignedRoutes />;
};

export default Routes;
