import React from "react";
import Layout from "./Layout";
import "./SignUp.css";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object().shape({
  firstName: yup.string().required("First Name is required"),
  lastName: yup.string().required("Last Name is required"),
  email: yup.string().email().required("Email is required"),
  password: yup.string().min(4).max(15).required("Password is required"),
});

function SignUp() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const submitForm = (data) => {
    console.log(data);
  };
  return (
    <Layout>
      <div className="Form ol-8 mx-auto text-center mt-3 mb-3">
        <div className="title">Sign Up</div>
        <div
          className="inputs
        "
        >
          <form onSubmit={handleSubmit(submitForm)}>
            <input
              type="text"
              name="firstName"
              placeholder="First Name..."
              {...register("firstName")}
              //   ref={register}
            />
            <p> {errors?.firstName?.message} </p>
            <input
              type="text"
              name="lastName"
              placeholder="Last Name..."
              {...register("lastName")}
              //   ref={register}
            />
            <p> {errors?.lastName?.message} </p>
            <input
              type="text"
              name="email"
              placeholder="Email..."
              {...register("email")}
              //   ref={register}
            />
            <p> {errors?.email?.message} </p>

            <input
              type="password"
              name="password"
              placeholder="Password..."
              {...register("password")}
              //   ref={register}
            />
            <p> {errors?.password?.message} </p>

            <input type="submit" id="submit" />
          </form>
        </div>
      </div>
    </Layout>
  );
}

export default SignUp;
