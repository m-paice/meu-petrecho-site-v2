import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as yup from "yup";

import { Button } from "../components/Button";
import { Input } from "../components/Input";
import { useRequestCreate } from "../hooks/useRequestCreate";
import { maskTextCellPhone } from "../hooks/maskText";

const initialValues = {
  username: "",
  password: "",
};

const validationSchema = yup.object().shape({
  username: yup.string().required("Campo obrigatório"),
  password: yup.string().required("Campo obrigatório"),
});

export function Login() {
  const navigate = useNavigate();

  const {
    execute: executeAuthLogin,
    response: responseAuthLogin,
    loading,
  } = useRequestCreate<{
    token: string;
    user: { accountId: string; id: string };
  }>({
    path: "/auth",
  });

  const {
    handleSubmit,
    errors,
    touched,
    values,
    handleBlur,
    handleChange,
    setFieldValue,
  } = useFormik({
    initialValues,
    validationSchema,
    onSubmit(values) {
      const payload = {
        username: values.username.replace(/\D/g, ""),
        password: values.password,
      };
      executeAuthLogin(payload);
    },
  });

  useEffect(() => {
    if (responseAuthLogin) {
      localStorage.setItem("token", responseAuthLogin.token);
      localStorage.setItem("account", responseAuthLogin.user.accountId);
      localStorage.setItem("user", responseAuthLogin.user.id);
      navigate("/schedules");
    }
  }, [responseAuthLogin]);

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "auto 500px",
        maxWidth: 1400,
        margin: "auto",
      }}
    >
      <section
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <img width="200" src="/logo-meu-petrecho.png" alt="" />
          <img width="300" src="/meu-petrecho.png" alt="" />
        </div>
      </section>
      <section
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          padding: 20,
        }}
      >
        <div
          style={{
            maxWidth: 450,
          }}
        >
          <h4 style={{ fontSize: 30 }}>Bem-vindo ao Meu Petrecho</h4>
          <p
            style={{
              fontSize: 20,
              color: "#8e8e8e",
              marginBottom: 20,
            }}
          >
            Gerencie seus agendamentos de forma fácil e prática
          </p>
        </div>
        <div
          style={{
            width: "100%",
            maxWidth: 450,
          }}
        >
          <form
            onSubmit={handleSubmit}
            style={{
              width: "100%",
              display: "flex",
              flexDirection: "column",
              gap: 20,
            }}
          >
            <div>
              <Input
                name="username"
                value={values.username}
                onChange={(e) => {
                  setFieldValue("username", maskTextCellPhone(e.target.value));
                }}
                onBlur={handleBlur}
                label="Usuário"
                placeholder="Digite seu usuário"
              />
              <span
                style={{
                  color: "red",
                  fontSize: 12,
                }}
              >
                {errors.username && touched.username ? errors.username : null}
              </span>
            </div>
            <div>
              <Input
                name="password"
                type="password"
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
                label="Senha"
                placeholder="Digite sua senha"
              />
              <span
                style={{
                  color: "red",
                  fontSize: 12,
                }}
              >
                {errors.password && touched.password ? errors.password : null}
              </span>
            </div>

            <label
              style={{
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                gap: 10,
              }}
              htmlFor="remember"
            >
              <input type="checkbox" id="remember" name="remember" />
              Lembrar-me
            </label>
            <Button type="submit" disabled={loading}>
              {" "}
              Entrar{" "}
            </Button>
          </form>
        </div>
      </section>
    </div>
  );
}
