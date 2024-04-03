import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import dayjs from "dayjs";

import { Modal } from "../Modal";
import { ResponseAPI } from "../../types/ResponseAPI";
import { useRequestFindMany } from "../../hooks/useRequestFindMany";
import { Clients } from "./Clients";
import { Services } from "./Services";
import { Resume } from "./Resume";
import { useRequestCreate } from "../../hooks/useRequestCreate";

export interface Fields {
  user: {
    id: string;
    name: string;
    cellPhone: string;
  } | null;
  services: {
    id: string;
    name: string;
    price: number;
    averageTime: string;
  }[];
  date: string;
  time: string;
}

export interface Client {
  id: string;
  name: string;
  cellPhone: string;
}

export interface Service {
  id: string;
  name: string;
  averageTime: string;
}

const initialValues = {
  user: null,
  services: [],
  date: dayjs().format("YYYY-MM-DD"),
  time: dayjs().format("HH:mm"),
};

export function SchedulesNew() {
  const navigate = useNavigate();

  const [clientsPaginated, setClientsPaginated] = useState<{
    data: Client[];
    page: number;
  }>({
    data: [],
    page: 1,
  });

  const [servicesPaginated, setServicesPaginated] = useState<{
    data: Service[];
    page: number;
  }>({
    data: [],
    page: 1,
  });

  const { values, setFieldValue, handleChange, handleSubmit, resetForm } =
    useFormik<Fields>({
      initialValues,
      onSubmit: (values) => {
        const [hour, minute] = values.time.split(":");
        const scheduleAt = dayjs(values.date)
          .set("hour", Number(hour))
          .set("minute", Number(minute))
          .set("second", 0)
          .toISOString();

        const payload = {
          userId: values.user?.id,
          employeeId: localStorage.getItem("user"),
          services: values.services.map((service) => ({
            id: service.id,
            isPackage: false,
          })),
          scheduleAt,
          discount: 0,
          addition: 0,
        };
        executeCreateSchedule(payload);
      },
    });

  const { execute: executeCreateSchedule, response: responseCreateSchedule } =
    useRequestCreate({
      path: "/schedules",
    });

  const { execute: executeClients, response: clients } = useRequestFindMany<
    ResponseAPI<Client[]>
  >({
    path: "/users",
  });

  const { execute: executeServices, response: services } = useRequestFindMany<
    ResponseAPI<Service[]>
  >({
    path: "/services",
  });

  useEffect(() => {
    executeClients();
    executeServices();
  }, []);

  useEffect(() => {
    if (responseCreateSchedule) {
      navigate("/schedules");
      resetForm();
    }
  }, [responseCreateSchedule]);

  useEffect(() => {
    if (clients?.data) {
      setClientsPaginated((prevSate) => ({
        data: [...prevSate.data, ...clients.data],
        page: clients.currentPage,
      }));
    }
  }, [clients]);

  useEffect(() => {
    if (services?.data) {
      setServicesPaginated((prevSate) => ({
        data: [...prevSate.data, ...services.data],
        page: services.currentPage,
      }));
    }
  }, [services]);

  return (
    <Modal
      isOpen={window.location.pathname === "/schedules/new"}
      closeModal={() => navigate("/schedules")}
      title=""
      size="extraLarge"
    >
      <form
        onSubmit={handleSubmit}
        style={{
          display: "grid",
          gridTemplateColumns: "200px 200px 1fr",
        }}
      >
        <Clients
          clients={clients}
          clientsPaginated={clientsPaginated}
          executeClients={executeClients}
          setFieldValue={setFieldValue}
          values={values}
        />
        <Services
          services={services}
          servicesPaginated={servicesPaginated}
          executeServices={executeServices}
          setFieldValue={setFieldValue}
          values={values}
        />
        <Resume
          values={values}
          setFieldValue={setFieldValue}
          handleChange={handleChange}
        />
      </form>
    </Modal>
  );
}
