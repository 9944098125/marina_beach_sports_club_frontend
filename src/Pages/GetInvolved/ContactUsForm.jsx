import React from "react";
import { Formik, Form, Field } from "formik";

import "./styles.css";

function ContactUsForm() {
  const [formValues] = React.useState({
    name: "",
    email: "",
    phone: "",
    org: "",
    orgLink: "",
    content: "",
  });

  const validate = (values) => {
    let errors = {};
    if (!values.name) {
      errors.name = "Name is required";
    }
    if (!values.email) {
      errors.email = "Email is required";
    }
    if (!values.phone) {
      errors.phone = "Phone Number is required";
    }
    if (!values.content) {
      errors.content = "Please specify the reason you are contacting to us";
    }
    console.log(errors);
    return errors;
  };

  const submitContactForm = (values) => {
    console.log(values);
  };

  return (
    <React.Fragment>
      <div className="contactUs_form_container">
        <div className="contactUs_form">
          <Formik
            initialValues={formValues}
            validate={(values) => validate(values)}
            onSubmit={(values) => submitContactForm(values)}
          >
            {({ errors, touched }) => (
              <Form>
                <div className="contactUs_field_container">
                  <label htmlFor="name">Name*</label>
                  <Field
                    name="name"
                    type="text"
                    className={
                      errors.name && touched.name
                        ? "contact_field is-invalid"
                        : "contact_field"
                    }
                    placeholder="Please Enter Your Name"
                  />
                  {errors.name && touched.name && (
                    <div className="invalid-feedback">{errors.name}</div>
                  )}
                </div>

                <div className="contactUs_field_container">
                  <label htmlFor="email">Email*</label>
                  <Field
                    name="email"
                    type="text"
                    className={
                      errors.email && touched.email
                        ? "contact_field is-invalid"
                        : "contact_field"
                    }
                    placeholder="Please Enter Your Email"
                  />
                  {errors.email && touched.email && (
                    <div className="invalid-feedback">{errors.email}</div>
                  )}
                </div>

                <div className="contactUs_field_container">
                  <label htmlFor="phone">Phone Number*</label>
                  <Field
                    name="phone"
                    type="text"
                    className={
                      errors.phone && touched.phone
                        ? "contact_field is-invalid"
                        : "contact_field"
                    }
                    placeholder="Please Enter Your Phone Number"
                  />
                  {errors.phone && touched.phone && (
                    <div className="invalid-feedback">{errors.phone}</div>
                  )}
                </div>

                <div className="contactUs_field_container">
                  <label htmlFor="org">Organization Name(if any)</label>
                  <Field
                    name="org"
                    type="text"
                    className={
                      errors.org && touched.org
                        ? "contact_field is-invalid"
                        : "contact_field"
                    }
                    placeholder="Please Enter Your Organization Name"
                  />
                  {errors.org && touched.org && (
                    <div className="invalid-feedback">{errors.org}</div>
                  )}
                </div>

                <div className="contactUs_field_container">
                  <label htmlFor="orgLink">Website Link</label>
                  <Field
                    name="orgLink"
                    type="text"
                    className={
                      errors.orgLink && touched.orgLink
                        ? "contact_field is-invalid"
                        : "contact_field"
                    }
                    placeholder="Please Enter Your Website Link"
                  />
                  {errors.orgLink && touched.orgLink && (
                    <div className="invalid-feedback">{errors.orgLink}</div>
                  )}
                </div>

                <div className="contactUs_field_container">
                  <label htmlFor="content">How Can We Help You ?*</label>
                  <Field
                    as="textarea"
                    rows="6"
                    name="content"
                    type="text"
                    className={
                      errors.content && touched.content ? " is-invalid" : ""
                    }
                    placeholder="Please Enter Your Doubt"
                  />
                  {errors.content && touched.content && (
                    <div className="invalid-feedback">{errors.content}</div>
                  )}
                </div>
                <div className="contactUs_field_container">
                  <button type="submit" className="contactUs_btn">
                    Contact Us
                  </button>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </React.Fragment>
  );
}

export default ContactUsForm;
