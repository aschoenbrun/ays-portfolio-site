import React, { useState, useEffect, useRef, useContext } from "react";
import { useForm, FormContext, useFormContext } from "react-hook-form";
import * as yup from "yup";
import axios from "axios";
import styled from "styled-components/macro";
import Button from "../Button/Button";
import {
  FormStyles,
  FieldStyles,
  FieldRow,
  LabelWrapper,
  Label,
  Req,
  Err,
} from "./FormStyles";

export const FormButtonArray = styled.div``;

export const globalFieldList = {
  firstName: {
    name: "firstName",
    label: "First Name",
  },
  lastName: {
    name: "lastName",
    label: "Last Name",
  },
  email: {
    name: "email",
    label: "Email",
  },
  phone: {
    name: "phone",
    label: "Phone",
  },
  message: {
    name: "message",
    label: "Message",
  },
};

console.log(Label);

const ResetContext = React.createContext();

const FieldType = styled.input``;

const Input = ({
  fieldName,
  fieldType = "input",
  inputType = "text",
  rows,
  cols,
  req,
  value = [],
}) => {
  const focusClassRef = useRef("");

  const [focusState, setFocusState] = useState(false);
  const [text, setText] = useState(value);

  const resetState = useContext(ResetContext);

  useEffect(() => {
    resetState && setText("");
  }, [resetState]);

  const handleChange = (e) => {
    const value =
      fieldType === "textarea"
        ? e.target.value.split("%0D%0A")
        : e.target.value;
    setText(value);
    console.log(value);
  };

  useEffect(() => {
    focusState
      ? focusClassRef.current.classList.add("focused")
      : focusClassRef.current.classList.remove("focused");
  }, [focusState]);

  const { register, errors } = useFormContext();

  const gflName = globalFieldList[fieldName];

  return (
    <FieldStyles
      className={errors[fieldName] && "error"}
      onFocus={() => setFocusState(true)}
      onBlur={() => setFocusState(false)}
      ref={focusClassRef}
    >
      <LabelWrapper>
        <Label htmlFor={gflName.name}>{gflName.label}</Label>
        {req && <Req>*</Req>}
        {errors[fieldName] && <Err>{`  - ${errors[fieldName].message}`}</Err>}
      </LabelWrapper>
      <FieldType
        name={gflName.name}
        ref={register}
        as={fieldType}
        rows={rows}
        cols={cols}
        inputType={inputType}
        onChange={(e) => handleChange(e)}
        defaultValue={text}
      />
    </FieldStyles>
  );
};

const Form = ({ children, schema }) => {
  const methods = useForm({
    validationSchema: schema,
  });

  const [formAPISendState, setFormAPISendState] = useState("notSent");

  const [resetState, setResetState] = useState(false);

  const onSubmit = async (data) => {
    setFormAPISendState("sending");
    await axios
      .post("/.netlify/functions/sendGrid", {
        data,
        globalFieldList,
      })
      .then((res) => {
        // console.log(res)
        // console.log(res.data)
        setFormAPISendState("sent");
        setResetState(false);
      })
      .catch((error) => {
        console.log(`App error: ${error}`);
        console.log(`App error body: ${error.response.body}`);
      });
  };

  const { formState, reset } = methods;
  const { isSubmitting } = formState;

  return (
    <FormContext {...methods}>
      <ResetContext.Provider value={resetState}>
        <FormStyles onSubmit={methods.handleSubmit(onSubmit)}>
          {children}
          <FormButtonArray>
            {!isSubmitting && formAPISendState === "notSent" && (
              <Button
                type="button"
                value="Submit"
                text="Submit"
                target="_self"
              />
            )}
            {/* {formAPISendState !== "notSent" && (
              <FormSubSpinner formAPISendState={formAPISendState} />
            )} */}
            {/* {formAPISendState === "sent" &&
              {
                <Button
                type="reset"
                resetMethod={() => {
                  reset({ message: "" });
                  setResetState(true);
                }}
                setFormAPISendState={setFormAPISendState}
              />
              }} */}
          </FormButtonArray>
        </FormStyles>
      </ResetContext.Provider>
    </FormContext>
  );
};

const ContactForm = () => {
  const schema = yup.object().shape({
    firstName: yup.string().required("Required"),
    lastName: yup.string().required("Required"),
    email: yup
      .string()
      .email("Valid email address required")
      .required("Required"),
    message: yup.string().required("Required"),
  });

  return (
    <Form schema={schema}>
      <FieldRow cols="2">
        <Input fieldName="firstName" req />
        <Input fieldName="lastName" req />
      </FieldRow>
      <FieldRow cols="2">
        <Input fieldName="email" req />
        <Input fieldName="phone" />
      </FieldRow>
      <Input fieldType="textarea" fieldName="message" rows="5" req />
    </Form>
  );
};

export default ContactForm;
