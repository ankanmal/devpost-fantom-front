import React, { useState, useEffect } from "react";
import { Formik, Form, Field } from "formik";
import { ethers } from "ethers";
import { abi } from "./web3/abi";
import Select from "react-select";
import { SKILL } from "./constant/listSkills";

const initialValues = {
  address: "",
  skill: "",
};

const MyForm = () => {
  const [projectLinks, setProjectLinks] = useState([""]);
  // eslint-disable-next-line
  const [provider, setProvider] = useState();
  // eslint-disable-next-line
  const [signer, setSigner] = useState();
  const [contract, setContract] = useState();
  const [account, setAccount] = useState("");

  let updateEther = () => {
    let temp = new ethers.providers.Web3Provider(window.ethereum);
    console.log(window.ethereum);
    setProvider(temp);
    let signer = temp.getSigner();
    setSigner(signer);
    let KudosContract = new ethers.Contract(
      "0xd9145CCE52D386f254917e481eB44e9943F39138",
      abi,
      signer
    );
    setContract(KudosContract);
  };
  useEffect(() => {
    connect();
    // eslint-disable-next-line
  }, []);

  let connect = async () => {
    if (window.ethereum) {
      let [accounts, dd] = await window.ethereum.request({
        method: "eth_requestAccounts",
      });
      setAccount(accounts);
      console.log(account, dd);
      updateEther();
    }
  };

  let plinks = [];
  const handleSubmit = async (values) => {
    plinks = projectLinks.filter((link) => link.trim() !== "");
    //const combinedValues = { ...values, plinks };
    //alert(JSON.stringify(combinedValues, null, 2));
    // console.log(combinedValues);
    // // Add logic to handle form submission here

    if (!ethers.utils.isAddress(values.address)) {
      alert("Invalid Receiver Wallet Address");
      return;
    }

    if (!values.skill) {
      alert("Skill is required");
      return;
    }

    if (plinks.length === 0) {
      alert("Project link is required");
      return;
    }

    let address = values.address;
    let skill = ethers.utils.formatBytes32String(values.skill);

    let projectLink = projectLinks; // Replace with the project link(s)
    // eslint-disable-next-line
    let kudos = contract
      .giveKudos(address, skill, projectLink, { gasLimit: 300000 })
      .on("transactionHash", (hash) => {
        console.log(`Transaction hash: ${hash}`);
      })
      .on("error", (error) => {
        console.log(`Error: ${error}`);
      })
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const addProjectLink = () => {
    setProjectLinks([...projectLinks, ""]);
  };

  const handleChangeProjectLink = (event, index) => {
    const { value } = event.target;
    setProjectLinks((prevLinks) => {
      const newLinks = [...prevLinks];
      newLinks[index] = value;
      return newLinks;
    });
  };
  return (
    <div>
      {/* <button onClick={connect}>connect wallet</button> */}
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        {({ values, handleChange }) => (
          <Form className="container w-full max-w-xl p-8 mx-auto  space-y-6 rounded-md shadow bg-gray-900 ng-untouched ng-pristine ng-valid text-gray-100">
            <div>
              <label htmlFor="address" className="block mb-1 ml-1">
                Receiver Wallet Address
              </label>
              <Field
                name="address"
                type="text"
                onChange={handleChange}
                value={values.address}
                className="block w-full p-2 rounded focus:outline-none focus:ring focus:ring-opacity-25 focus:ring-violet-400 bg-gray-800"
              />
            </div>

            <div>
              <label htmlFor="skill" className="block mb-1 ml-1">
                Skill
              </label>
              <Field name="skill">
                {({ field, form }) => (
                  <Select
                    options={SKILL}
                    placeholder="Select Skill"
                    onChange={(selectedOption) =>
                      form.setFieldValue(
                        field.name,
                        selectedOption.value.toLowerCase()
                      )
                    }
                    onBlur={() => form.setFieldTouched(field.name, true)}
                    value={SKILL.find(
                      (option) => option.value.toLowerCase() === field.value
                    )}
                    className="text-black"
                  />
                )}
              </Field>
            </div>

            <div>
              <label htmlFor="projectLinks">Project Links</label>
              {projectLinks.map((link, index) => (
                <div key={index}>
                  <Field
                    name={`projectLinks[${index}]`}
                    type="text"
                    value={link}
                    onChange={(event) => handleChangeProjectLink(event, index)}
                    className="block w-full p-2 rounded focus:outline-none focus:ring focus:ring-opacity-25 focus:ring-violet-400 bg-gray-800 mb-2"
                  />
                </div>
              ))}
              <button type="button" onClick={addProjectLink}>
                Add More Project Links
              </button>
            </div>

            <button
              type="submit"
              className="w-full px-4 py-2 font-bold rounded shadow focus:outline-none focus:ring hover:ring focus:ring-opacity-50 bg-violet-400 focus:ring-violet-400 hover:ring-violet-400 text-gray-900"
            >
              Give Kudos
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
const GiveKudos = () => {
  return (
    <div className="bg-[#282c34] h-[92.4vh] pt-14">
      {" "}
      <MyForm />
    </div>
  );
};

export default GiveKudos;
