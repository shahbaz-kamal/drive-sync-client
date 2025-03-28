import React, { createContext, useEffect, useState } from "react";
import useAxiosPublic from "../Hooks/useAxiosPublic";
import Swal from "sweetalert2";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const axiosPublic = useAxiosPublic();
  const [user, setUser] = useState(null);

  useEffect(() => {
    axiosPublic
      .get("auth/user")
      .then((res) => setUser(res.data))
      .catch((error) => {
        console.log(error.message);
      });
  }, []);

  //   logout function
  const logout = async () => {
    try {
      await axiosPublic.get("auth/logout");
      setUser(null); // Clear user from context
      Swal.fire({
        text: "Logout Successful",
        icon: "success",
      });
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };
  const authInfo = { user, logout };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
