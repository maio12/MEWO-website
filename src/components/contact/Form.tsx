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

const STATES = {
  SUCCESS: "success",
  IDLE: "idle",
  LOADING: "loading",
  ERROR: "error",
};
interface NewsletterSignupFormProps {
  firstName: string;
  lastName: string;
  email: string;
}
const initialValues = { firstName: "", lastName: "", email: "" };

export const NewsLetterSignUpForm = () => {
  const [state, setState] = React.useState(STATES.IDLE);
  const [submitted, setSubmitted] = React.useState(false);

  const subscribe = useCallback(
    async ({ email, firstName, lastName }: NewsletterSignupFormProps) => {
      setState(STATES.LOADING);
      console.log(email, state, firstName, lastName);

      try {
        setSubmitted(true);

        await axios.post("/api/subscribe", {
          email,
          firstName,
          lastName,
        });

        setState(STATES.SUCCESS);
      } catch (e) {
        setState(STATES.ERROR);
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
                <div className={styles.formError}>{errors.firstName}</div>
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
                <div className={styles.formError}>{errors.lastName}</div>
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
              {errors.email && touched.email ? (
                <div className={styles.formError}>{errors.email}</div>
              ) : null}
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
  ) : submitted && state === STATES.LOADING ? (
    <div className={styles.formContainer}>
      <div className={styles.errorContainer}>
        <h3>HOLD ON...</h3>
      </div>
    </div>
  ) : submitted && state === STATES.SUCCESS ? (
    <div className={styles.formContainer}>
      <div className={styles.thanksContainer}>
        <h3>THANK YOU!</h3>
      </div>
    </div>
  ) : submitted && state === STATES.ERROR ? (
    <div className={styles.formContainer}>
      <div className={styles.errorContainer}>
        <h3>YOU ARE ALREADY SIGNED UP!</h3>
      </div>
    </div>
  ) : null;
};
