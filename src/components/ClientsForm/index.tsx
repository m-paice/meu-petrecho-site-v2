import { useNavigate, useParams } from "react-router-dom";
import { Button } from "../Button";
import { Modal } from "../Modal";
import { Input } from "../Input";
import { useFormik } from "formik";
import { useRequestCreate } from "../../hooks/useRequestCreate";
import { useRequestUpdate } from "../../hooks/useRequestUpdate";
import { useRequestFindOne } from "../../hooks/useRequestFindOne";
import { useEffect } from "react";
import { Loading } from "../Loading";

const initialValues = {
  name: "",
  cellPhone: "",
  birthDate: "",
};

export function ClientsForm() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const {
    execute: executeCreate,
    response: responseCreate,
    loading: loadingCreate,
  } = useRequestCreate({
    path: "/users",
  });

  const {
    execute: executeUpdate,
    response: responseUpdate,
    loading: loadingUpdate,
  } = useRequestUpdate({
    path: `/users/${id}`,
  });

  const {
    execute: executeFindOne,
    response: responseFindOne,
    loading: loadingFindOne,
  } = useRequestFindOne<{
    name: string;
    cellPhone: string;
    birthDate: string;
  }>({
    path: `/users/${id}`,
  });

  const {
    handleSubmit,
    handleChange,
    handleBlur,
    resetForm,
    setFieldValue,
    values,
  } = useFormik({
    initialValues,
    onSubmit: (values) => {
      if (id) {
        executeUpdate(values);
      } else {
        executeCreate(values);
      }
    },
  });

  useEffect(() => {
    if (id && window.location.pathname === `/clients/${id}/edit`) {
      executeFindOne();
    }
  }, [id, window.location.pathname]);

  useEffect(() => {
    if (responseFindOne) {
      setFieldValue("name", responseFindOne.name);
      setFieldValue("cellPhone", responseFindOne.cellPhone);
      setFieldValue("birthDate", responseFindOne.birthDate);
    }
  }, [responseFindOne]);

  useEffect(() => {
    if (responseCreate || responseUpdate) {
      navigate("/clients");
      resetForm();
    }
  }, [responseCreate, responseUpdate]);

  return (
    <div>
      <Button onClick={() => navigate("/clients/new")}>
        {"Novo Cliente".toUpperCase()}
      </Button>

      <Modal
        title={id ? "Editar Cliente" : "Novo Cliente"}
        isOpen={
          window.location.pathname === "/clients/new" ||
          window.location.pathname === `/clients/${id}/edit`
        }
        closeModal={() => {
          if (id) {
            navigate(`/clients/${id}`);
          } else {
            navigate("/clients");
          }

          resetForm();
        }}
        size="medium"
      >
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Loading
            isLoading={loadingCreate || loadingUpdate || loadingFindOne}
          />
          <div
            style={{
              width: "100%",
              maxWidth: 700,
            }}
          >
            <form
              onSubmit={handleSubmit}
              style={{
                display: "flex",
                flexDirection: "column",
                gap: 16,
                marginTop: 40,
              }}
            >
              <Input
                value={values.name}
                onChange={handleChange}
                onBlur={handleBlur}
                label="Nome"
                placeholder="Digite o nome do cliente"
                name="name"
              />
              <Input
                value={values.cellPhone}
                onChange={handleChange}
                onBlur={handleBlur}
                label="Telefone"
                placeholder="Digite o telefone do cliente"
                name="cellPhone"
              />
              <Input
                value={values.birthDate}
                onChange={handleChange}
                onBlur={handleBlur}
                label="Mês de aniversário"
                placeholder="Digite o mês de aniversário do cliente"
                name="birthDate"
              />

              <Button type="submit"> Salvar </Button>
            </form>
          </div>
        </div>
      </Modal>
    </div>
  );
}
