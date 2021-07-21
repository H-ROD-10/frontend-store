import React, { useContext, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { BtnAction } from "../components/buttons/Btn";
import { Form, Input, Label } from "../components/form";
import { useFormValidation } from "../hooks/useFormValidation";
import { loginValidation } from "../rules/login.validation";
import { Error } from "@material-ui/icons";
import { useMutation } from "react-query";
import { AlertContext } from "../context/alerts/contextAlert";
import axios from "../helpers/Axios";

const Register = () => {
  const INITIAL_STATE = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  };
  const router = useRouter();

  const { alert, showAlert } = useContext(AlertContext);

  const { errors, data, handleChange, handleSubmit, handleBlur } =
    useFormValidation(INITIAL_STATE, loginValidation, submitLogin);

  const { firstName, lastName, email, password } = data;

  const mutation = useMutation(
    async (firstName, lastName, email, password) =>
      await axios.post("/api/v1/new-user", firstName, lastName, email, password)
  );

  if (mutation.isError) return <p>{mutation.error.message.errorMessage}</p>;
  useEffect(() => {
    if (mutation.data?.isAuth === true) {
      router.push("/");
    }
  }, [mutation.data?.isAuth]);

  function submitLogin() {
    mutation.mutate({ firstName, lastName, email, password });
  }

  return (
    <>
      {alert && <Error>{alert?.message}</Error>}
      <div className="w-full m-0 flex flex-col items-center justify-center">
        <h1 className="text-center text-2xl font-bold text-blue-500">
          Registro
        </h1>
        <Form onSubmit={handleSubmit}>
          <div>
            <Label htmlFor="firstName">Nombre</Label>
            <Input
              type="text"
              name="firstName"
              value={firstName}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.firstName && (
              <p className="text-red-800 text-xs mt-1">{errors.firstName}</p>
            )}
          </div>
          <div>
            <Label htmlFor="lastName">Apellido</Label>
            <Input
              type="text"
              name="lastName"
              value={lastName}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.lastName && (
              <p className="text-red-800 text-xs mt-1">{errors.lastName}</p>
            )}
          </div>
          <div>
            <Label htmlFor="email">Email</Label>
            <Input
              type="email"
              name="email"
              value={email}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.email && (
              <p className="text-red-800 text-xs mt-1">{errors.email}</p>
            )}
          </div>
          <div className="mt-3">
            <Label htmlFor="password">Password</Label>
            <Input
              type="password"
              name="password"
              value={password}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.password && (
              <p className="text-red-800 text-xs mt-1">{errors.password}</p>
            )}
          </div>
          <BtnAction>
            {mutation.isLoading ? "Cargando..." : "Guardar"}
          </BtnAction>
        </Form>
        <p className="mt-4">
          ¿tienes cuenta?{" "}
          <Link href="/Login">
            <a className="text-red-500 font-bold">Ingresa aquí</a>
          </Link>
        </p>
      </div>
    </>
  );
};
export default Register;
