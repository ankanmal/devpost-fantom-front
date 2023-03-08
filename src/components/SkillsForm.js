import React from "react";
import { Formik, Form, useField } from "formik";
import Select from "react-select";
import makeAnimated from "react-select/animated";
import { SKILL } from "./constant/listSkills";
import { useDispatch, useSelector } from "react-redux";
import { token } from "./slice/userDataSlice";
import { sendSkills } from "./slice/userDataSlice";

const MyTextInput = ({ label, ...props }) => {
  // useField() returns [formik.getFieldProps(), formik.getFieldMeta()]
  // which we can spread on <input> and alse replace ErrorMessage entirely.
  const animated = makeAnimated();
  // eslint-disable-next-line
  const [fields, meta, helpers] = useField(props);
  return (
    <>
      <label
        htmlFor={props.id || props.name}
        className="block mb-1 ml-1 text-gray-100"
      >
        {label}
      </label>
      <Select
        options={SKILL}
        placeholder="Select Skills"
        isMulti
        components={animated}
        onChange={(value) => {
          const skills = value.map((skill) => skill.value.toLowerCase());
          helpers.setValue(skills);
        }}
        onBlur={() => helpers.setTouched(true)}
      />
      {meta.touched && meta.error ? (
        <div className=" text-sm text-red-500 m-0" style={{ marginTop: "0px" }}>
          {meta.error}
        </div>
      ) : null}
    </>
  );
};
const validate = (values) => {
  const errors = {};

  if (values.Skills.length === 0) {
    errors.Skills = "Required";
  }
  return errors;
};

const SkillsForm = () => {
  const tok = useSelector(token);
  const dispatch = useDispatch();
  return (
    <>
      <Formik
        initialValues={{
          Skills: [],
        }}
        validate={validate}
        onSubmit={(values) => {
          alert(JSON.stringify(values, null, 2));
          dispatch(sendSkills({ values, tok: tok }));
        }}
      >
        <Form className="space-y-6 ">
          <MyTextInput name="Skills" label="Add Skills" />

          <button
            type="submit"
            className="w-full px-4 py-2 font-bold rounded shadow focus:outline-none focus:ring hover:ring focus:ring-opacity-50 bg-violet-400 focus:ring-violet-400 hover:ring-violet-400 text-gray-900"
          >
            Submit
          </button>
        </Form>
      </Formik>
    </>
  );
};

export default SkillsForm;
