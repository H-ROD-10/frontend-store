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

const Login = () => {
  const INITIAL_STATE = {
    email: "",
    password: "",
  };
  const router = useRouter();

  const { alert, showAlert } = useContext(AlertContext);

  const { errors, data, handleChange, handleSubmit, handleBlur } =
    useFormValidation(INITIAL_STATE, loginValidation, submitLogin);

  const { email, password } = data;

  const mutation = useMutation(
    async (email, password) =>
      await axios.post("/api/v1/login", email, password)
  );

  if (mutation.isError) return <p>{mutation.error.message.errorMessage}</p>;

  useEffect(() => {
    if (mutation.data?.isAuth === true) {
      router.push("/");
    }
  }, [mutation.data?.isAuth]);

  function submitLogin() {
    mutation.mutate({ email, password });
  }

  return (
    <>
      {alert && <Error>{alert?.message}</Error>}
      <div className="w-full m-0 flex flex-col items-center justify-center">
        <h1 className="text-center text-2xl font-bold text-blue-500">
          Iniciar Sesión
        </h1>
        <Form onSubmit={handleSubmit}>
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
          <BtnAction>{mutation.isLoading ? "Cargando..." : "Entar"}</BtnAction>
        </Form>
        <p className="mt-4">
          ¿No tienes cuenta?{" "}
          <Link href="/Register">
            <a className="text-red-500 font-bold">Ingresa aquí</a>
          </Link>
        </p>
      </div>
    </>
  );
};
export default Login;
