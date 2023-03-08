import React, { useState } from "react";
import { Formik, Form, Field } from "formik";

const initialValues = {
  address: "",
  skill: "",
};

const MyForm = () => {
  const [projectLinks, setProjectLinks] = useState([""]);

  const handleSubmit = (values) => {
    const combinedValues = { ...values, projectLinks };
    alert(JSON.stringify(combinedValues, null, 2));
    console.log(combinedValues);
    // Add logic to handle form submission here
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
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
      {({ values, handleChange }) => (
        <Form className="container w-full max-w-xl p-8 mx-auto  space-y-6 rounded-md shadow bg-gray-900 ng-untouched ng-pristine ng-valid text-gray-100">
          <div>
            <label htmlFor="address" className="block mb-1 ml-1">
              Address
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
            <Field
              name="skill"
              type="text"
              onChange={handleChange}
              value={values.skill}
              className="block w-full p-2 rounded focus:outline-none focus:ring focus:ring-opacity-25 focus:ring-violet-400 bg-gray-800"
            />
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
              Add More
            </button>
          </div>

          <button
            type="submit"
            className="w-full px-4 py-2 font-bold rounded shadow focus:outline-none focus:ring hover:ring focus:ring-opacity-50 bg-violet-400 focus:ring-violet-400 hover:ring-violet-400 text-gray-900"
          >
            Submit
          </button>
        </Form>
      )}
    </Formik>
  );
};
const GiveKudos = () => {
  return <MyForm />;
};

export default GiveKudos;
