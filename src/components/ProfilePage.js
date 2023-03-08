import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  firstName,
  getSkillsOfUser,
  lastName,
  skills,
  token,
  walladd,
} from "./slice/userDataSlice";
import { useNavigate } from "react-router-dom";

import SkillsForm from "./SkillsForm";

const ProfilePage = () => {
  const fname = useSelector(firstName);
  const lname = useSelector(lastName);
  const wallet = useSelector(walladd);
  const skill = useSelector(skills);
  const tok = useSelector(token);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getSkillsOfUser(tok));
  }, [tok, dispatch]);
  const navigate = useNavigate();
  const goToKudos = () => {
    navigate("/givekudos");
  };
  const goToSearch = () => {
    navigate("/search");
  };

  return (
    <div className="bg-[#282c34] h-[92.4vh] pt-14">
      <div className="flex justify-center m-5 gap-5">
        <button
          className=" px-4 py-2 font-bold rounded shadow focus:outline-none focus:ring hover:ring focus:ring-opacity-50 bg-violet-400 focus:ring-violet-400 hover:ring-violet-400 text-gray-900"
          onClick={() => goToKudos()}
        >
          Give Kudos
        </button>
        <button
          className=" px-4 py-2 font-bold rounded shadow focus:outline-none focus:ring hover:ring focus:ring-opacity-50 bg-violet-400 focus:ring-violet-400 hover:ring-violet-400 text-gray-900"
          onClick={() => goToSearch()}
        >
          Search
        </button>
      </div>
      <div className="container w-full max-w-xl p-8 mx-auto  space-y-6 rounded-md shadow bg-gray-900 ng-untouched ng-pristine ng-valid ">
        <h1 className="block mb-1 ml-1 text-gray-100 text-center text-2xl">
          {fname} {lname}
        </h1>
        <h2 className="block mb-1 ml-1 text-gray-100">
          Wallet Address:{" "}
          <span className="bg-gray-200 rounded-lg py-1 px-2  ml-[-32px] mt-5 sm:m-1 text-black">
            {wallet}
          </span>{" "}
        </h2>
        <h2 className="block mb-1 ml-1 text-gray-100">Skills</h2>
        <div className="flex flex-wrap">
          {skill === null ? (
            <div className="bg-gray-200 rounded-lg py-1 px-2 m-1">
              Fetching Skills
            </div>
          ) : skill.length === 0 ? (
            <div className="bg-gray-200 rounded-lg py-1 px-2 m-1">
              Add skills to your profile
            </div>
          ) : (
            skill.map((skil, index) => (
              <div key={index} className="bg-gray-200 rounded-lg py-1 px-2 m-1">
                {skil.skill}
              </div>
            ))
          )}
        </div>

        <SkillsForm />
      </div>
    </div>
  );
};

export default ProfilePage;
