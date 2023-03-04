import React from "react";
import { useNavigate } from "react-router-dom";
import Stats from "./Stats";

const Main = () => {
  const navigate = useNavigate();
  const goToKudos = () => {
    navigate("/givekudos");
  };
  const goToSearch = () => {
    navigate("/search");
  };
  return (
    <div>
      <div className="flex justify-center mt-5">
        <button className="m-5 bg-blue-400" onClick={() => goToKudos()}>
          Give Kudos
        </button>
        <button className="m-5 bg-blue-400" onClick={() => goToSearch()}>
          Search
        </button>
      </div>
      <Stats />
    </div>
  );
};

export default Main;
