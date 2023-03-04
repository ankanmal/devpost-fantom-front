import React from "react";
import { useSelector } from "react-redux";
import { Link, Outlet } from "react-router-dom";
import { userId } from "./slice/userDataSlice";

const Header = () => {
  const userIdState = useSelector(userId);
  //const fname = useSelector((state) => state.userData.firstName);
  //const lname = useSelector((state) => state.userData.lastName);
  return (
    <>
      {userIdState === null ? (
        <div className="text-center p-3 text-2xl bg-green-600 text-white shadow-xl font-bold">
          StackkUp
        </div>
      ) : (
        <div className="text-center p-3 text-2xl bg-green-600 text-white shadow-xl font-bold">
          <Link to={"/main"}> StackkUp</Link>
        </div>
      )}

      <Outlet />
    </>
  );
};

export default Header;
