import React from "react";
import { Formik, Form, useField } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { registerUser } from "./slice/userDataSlice";

// const SignupForm = () => {

//   const wallet = useSelector((state) => state.userData.walletAdd);

//   const dispatch = useDispatch();

//   // Note that we have to initialize ALL of fields with values. These

//   // could come from props, but since we don’t want to prefill this form,

//   // we just use an empty string. If we don’t do this, React will yell

//   // at us.

//   const formik = useFormik({
//     initialValues: {
//       walletAddress: wallet,
//       firstName: "",

//       lastName: "",

//       githubLink: "",
//       linkedInLink: "",
//     },

//     onSubmit: (values) => {
//       alert(JSON.stringify(values, null, 2));
//       dispatch(registerUser(values));
//     },
//   });

//   return (
//     <form onSubmit={formik.handleSubmit} className="flex flex-col">
//       <label htmlFor="walletAdd">Wallet Addresses</label>

//       <input
//         id="walletAdd"
//         name="walletAdd"
//         type="text"
//         //onChange={formik.handleChange}
//         readOnly
//         value={formik.values.walletAddress}
//       />
//       <label htmlFor="firstName">First Name</label>

//       <input
//         id="firstName"
//         name="firstName"
//         type="text"
//         onChange={formik.handleChange}
//         value={formik.values.firstName}
//       />

//       <label htmlFor="lastName">Last Name</label>

//       <input
//         id="lastName"
//         name="lastName"
//         type="text"
//         onChange={formik.handleChange}
//         value={formik.values.lastName}
//       />

//       <label htmlFor="githubId">Github Url</label>

//       <input
//         id="githubLink"
//         name="githubLink"
//         type="text"
//         placeholder="https://github.com/ankanmal"
//         onChange={formik.handleChange}
//         value={formik.values.githubLink}
//       />
//       <label htmlFor="linkedinId">Linkedin Url</label>

//       <input
//         id="linkedInLink"
//         name="linkedInLink"
//         type="text"
//         onChange={formik.handleChange}
//         value={formik.values.linkedInLink}
//       />

//       <button type="submit">Submit</button>
//     </form>
//   );
// };

const MyTextInput = ({ label, ...props }) => {
  // useField() returns [formik.getFieldProps(), formik.getFieldMeta()]
  // which we can spread on <input> and alse replace ErrorMessage entirely.
  const [field, meta] = useField(props);
  return (
    <>
      <label htmlFor={props.id || props.name} className="block mb-1 ml-1">
        {label}
      </label>
      <input
        className="block w-full p-2 rounded focus:outline-none focus:ring focus:ring-opacity-25 focus:ring-violet-400 bg-gray-800"
        {...field}
        {...props}
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

  if (!values.firstName) {
    errors.firstName = "Required";
  }

  if (!values.lastName) {
    errors.lastName = "Required";
  }

  if (!values.githubLink) {
    errors.githubLink = "Required";
  } else if (
    !/^https:\/\/github\.com\/[a-z0-9_-]+\/?$/i.test(values.githubLink)
  ) {
    errors.githubLink = "Invalid Github url";
  }

  if (!values.linkedInLink) {
    errors.linkedInLink = "Required";
  } else if (
    !/^https:\/\/www\.linkedin\.com\/in\/[a-z0-9_-]+\/?$/i.test(
      values.linkedInLink
    )
  ) {
    errors.linkedInLink = "Invalid Linkedin url";
  }

  return errors;
};

const SignupForm = () => {
  const wallet = useSelector((state) => state.userData.walletAdd);

  const dispatch = useDispatch();
  return (
    <>
      <Formik
        initialValues={{
          walletAddress: wallet,
          firstName: "",

          lastName: "",

          githubLink: "",
          linkedInLink: "",
        }}
        validate={validate}
        onSubmit={(values) => {
          alert(JSON.stringify(values, null, 2));
          dispatch(registerUser(values));
        }}
      >
        <Form className="container w-full max-w-xl p-8 mx-auto  space-y-6 rounded-md shadow bg-gray-900 ng-untouched ng-pristine ng-valid text-gray-100">
          <MyTextInput
            label="First Name"
            name="firstName"
            type="text"
            placeholder="Jane"
          />
          <MyTextInput
            label="Last Name"
            name="lastName"
            type="text"
            placeholder="Doe"
          />
          <MyTextInput
            label="Github Url"
            name="githubLink"
            type="text"
            placeholder="https://github.com/jane-doe"
          />
          <MyTextInput
            label="Linkedin Url"
            name="linkedInLink"
            type="text"
            placeholder="https://www.linkedin.com/in/jane-doe/"
          />

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

const SignUpPage = () => {
  return (
    <div className="bg-[#282c34] h-screen pt-14 overscroll-none ">
      <SignupForm />
    </div>
  );
};

export default SignUpPage;
