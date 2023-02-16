import React, { useCallback } from "react";
import { Formik, Form, Field } from "formik";
import axios from "axios";
import * as Yup from "yup";
import styles from "@/styles/contact/Form.module.css";

const SignupSchema = Yup.object().shape({
  firstName: Yup.string().required("Required"),
  lastName: Yup.string().required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
});

interface NewsletterSignupFormProps {
  firstName: string;
  lastName: string;
  email: string;
}
const initialValues = { firstName: "", lastName: "", email: "" };

export const NewsLetterSignUpForm = () => {
  const [state, setState] = React.useState("idle");
  const [submitted, setSubmitted] = React.useState(false);

  const subscribe = useCallback(
    async ({ email, firstName, lastName }: NewsletterSignupFormProps) => {
      setState("Loading");
      console.log(email, state, firstName, lastName);

      try {
        // const response = await axios.post("/api/subscribe", { email });
        setSubmitted(true);
        setState("Success");
      } catch (e) {
        setState("Error");
      }
    },
    []
  );

  return !submitted ? (
    <div className={styles.formContainer}>
      <label className={styles.formTitle} htmlFor="email-input">
        Subscribe to the Mailing List
      </label>
      <Formik
        initialValues={initialValues}
        validationSchema={SignupSchema}
        onSubmit={(values, { resetForm }) => {
          subscribe(values);

          resetForm();
        }}
      >
        {({ errors, touched }) => {
          return (
            <Form className={styles.formWrapper}>
              <label className={styles.formLabel} htmlFor="name-input">
                Name
              </label>
              <Field
                className={styles.formField}
                name="firstName"
                autoCapitalize="off"
                autoCorrect="off"
              />
              {errors.firstName && touched.firstName ? (
                <div>{errors.firstName}</div>
              ) : null}
              <label className={styles.formLabel} htmlFor="lastname-input">
                Lastname
              </label>
              <Field
                className={styles.formField}
                name="lastName"
                autoCapitalize="off"
                autoCorrect="off"
              />
              {errors.lastName && touched.lastName ? (
                <div>{errors.lastName}</div>
              ) : null}
              <label className={styles.formLabel} htmlFor="email-input">
                E-mail address
              </label>
              <Field
                className={styles.formField}
                name="email"
                type="email"
                autoCapitalize="off"
                autoCorrect="off"
              />
              {errors.email && touched.email ? <div>{errors.email}</div> : null}
              <button
                className={styles.formSubmit}
                disabled={state === "Loading"}
                type="submit"
                name="subscribe"
              >
                Subscribe
              </button>
            </Form>
          );
        }}
      </Formik>
    </div>
  ) : (
    <div className={styles.formContainer}>
      <div className={styles.thanksContainer}>THANK YOU!</div>
    </div>
  );
};
