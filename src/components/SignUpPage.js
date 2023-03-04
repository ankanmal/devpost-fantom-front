import React from "react";
import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { registerUser } from "./slice/userDataSlice";

const SignupForm = () => {
  const wallet = useSelector((state) => state.userData.walletAdd);

  const dispatch = useDispatch();

  // Note that we have to initialize ALL of fields with values. These

  // could come from props, but since we don’t want to prefill this form,

  // we just use an empty string. If we don’t do this, React will yell

  // at us.

  const formik = useFormik({
    initialValues: {
      walletAddress: wallet,
      firstName: "",

      lastName: "",

      githubLink: "",
      linkedInLink: "",
    },

    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
      dispatch(registerUser(values));
    },
  });

  return (
    <form onSubmit={formik.handleSubmit} className="flex flex-col">
      <label htmlFor="walletAdd">Wallet Addresses</label>

      <input
        id="walletAdd"
        name="walletAdd"
        type="text"
        //onChange={formik.handleChange}
        readOnly
        value={formik.values.walletAddress}
      />
      <label htmlFor="firstName">First Name</label>

      <input
        id="firstName"
        name="firstName"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.firstName}
      />

      <label htmlFor="lastName">Last Name</label>

      <input
        id="lastName"
        name="lastName"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.lastName}
      />

      <label htmlFor="githubId">Github Url</label>

      <input
        id="githubLink"
        name="githubLink"
        type="text"
        placeholder="https://github.com/ankanmal"
        onChange={formik.handleChange}
        value={formik.values.githubLink}
      />
      <label htmlFor="linkedinId">Linkedin Url</label>

      <input
        id="linkedInLink"
        name="linkedInLink"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.linkedInLink}
      />

      <button type="submit">Submit</button>
    </form>
  );
};
const SignUpPage = () => {
  return <SignupForm />;
};

export default SignUpPage;
