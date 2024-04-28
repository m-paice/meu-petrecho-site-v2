import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useFormik } from "formik";
import * as yup from "yup";

import { Button } from "../Button";
import { Modal } from "../Modal";
import { Input } from "../Input";
import { useRequestCreate } from "../../hooks/useRequestCreate";
import { Loading } from "../Loading";
import { useRequestFindOne } from "../../hooks/useRequestFindOne";
import { Service } from "../../pages/Services";
import { useRequestUpdate } from "../../hooks/useRequestUpdate";

const initialValues = {
  name: "",
  price: "",
  averageTime: "",
};

const validationSchema = yup.object({
  name: yup.string().required("Nome é obrigatório"),
  price: yup.string().required("Preço é obrigatório"),
});

export function ServicesForm() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const {
    execute: executeUpdateService,
    response: responseUpdateService,
    loading: loadingUpdateService,
  } = useRequestUpdate({
    path: `/services/${id}`,
  });

  const {
    execute: executeCreateService,
    response: responseCreatedService,
    loading,
  } = useRequestCreate({
    path: "/services",
  });

  const {
    execute: executeFindOne,
    response: responseFindOne,
    loading: loadingFindOne,
  } = useRequestFindOne<Service>({
    path: `/services/${id}`,
  });

  const {
    values,
    errors,
    touched,
    handleChange,
    handleBlur,
    handleSubmit,
    resetForm,
    setFieldValue,
  } = useFormik({
    initialValues,
    validationSchema,
    onSubmit(values) {
      if (id) {
        executeUpdateService(values);
        return;
      }
      executeCreateService(values);
    },
  });

  useEffect(() => {
    if (id && window.location.pathname === `/services/${id}/edit`)
      executeFindOne();
  }, [id, window.location.pathname]);

  useEffect(() => {
    if (responseFindOne) {
      setFieldValue("name", responseFindOne.name);
      setFieldValue("price", responseFindOne.price);
      setFieldValue("averageTime", responseFindOne.averageTime);
    }
  }, [responseFindOne]);

  useEffect(() => {
    if (responseCreatedService || responseUpdateService) {
      resetForm();
      navigate("/services");
    }
  }, [responseCreatedService, responseUpdateService]);

  return (
    <div>
      <Button onClick={() => navigate("/services/new")}>
        {"Novo serviço".toUpperCase()}
      </Button>

      <Modal
        title="Novo serviço"
        isOpen={
          window.location.pathname === "/services/new" ||
          window.location.pathname === `/services/${id}/edit`
        }
        closeModal={() => {
          if (id) {
            navigate(`/services/${id}`);
          } else {
            navigate("/services");
          }

          resetForm();
        }}
        size="medium"
      >
        <Loading
          isLoading={loading || loadingFindOne || loadingUpdateService}
        />
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
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
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              ></div>
              <div>
                <Input
                  name="name"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.name}
                  label="Nome"
                  placeholder="Digite o nome da serviço"
                />
                <span
                  style={{
                    color: "red",
                    fontSize: 12,
                  }}
                >
                  {errors.name && touched.name && errors.name}
                </span>
              </div>
              <div>
                <Input
                  name="price"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.price}
                  label="Preço"
                  placeholder="Digite o preço do serviço"
                />
                <span
                  style={{
                    color: "red",
                    fontSize: 12,
                  }}
                >
                  {errors.price && touched.price && errors.price}
                </span>
              </div>
              <Input
                name="averageTime"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.averageTime}
                label="Tempo de atendimento"
                placeholder="Digite o tempo de atendimento do serviço"
              />

              <Button type="submit"> {"Salvar".toUpperCase()} </Button>
            </form>
          </div>
        </div>
      </Modal>
    </div>
  );
}
