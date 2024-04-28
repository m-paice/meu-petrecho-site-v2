import { useNavigate, useParams } from "react-router-dom";

import { Modal } from "../Modal";
import { Button } from "../Button";
import { useRequestFindOne } from "../../hooks/useRequestFindOne";
import { Client } from "../../pages/Clients";
import { useEffect } from "react";
import { Loading } from "../Loading";
import { Service } from "../../pages/Services";
import dayjs from "dayjs";
import { useRequestUpdate } from "../../hooks/useRequestUpdate";

interface Schedule {
  id: string;
  status: string;
  services: Service[];
  user: Client;
  scheduleAt: string;
}

const status: { [key: string]: { color: string; text: string } } = {
  finished: { color: "#13deb9", text: "Finalizado" },
  pending: { color: "#ffae1f", text: "Pendente" },
  canceled: { color: "#fa896b", text: "Cancelado" },
};

export function SchedulesDetails() {
  const navigate = useNavigate();
  const { id } = useParams();

  const {
    execute: executeFindOne,
    response: response,
    loading: loadingFindOne,
  } = useRequestFindOne<Schedule>({
    path: `/schedules/${id}`,
  });

  const {
    execute: executeChangeStatus,
    response: responseChangeStatus,
    loading: loadingChangeStatus,
  } = useRequestUpdate({
    path: `/schedules/${id}/status`,
  });

  useEffect(() => {
    if (id) executeFindOne();
  }, [id]);

  useEffect(() => {
    if (responseChangeStatus) {
      navigate("/schedules");
    }
  }, [responseChangeStatus]);

  return (
    <Modal
      isOpen={window.location.pathname === `/schedules/${id}`}
      closeModal={() => navigate("/schedules")}
      title=""
      size="extraLarge"
    >
      <Loading isLoading={loadingFindOne || loadingChangeStatus} />

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 10,
        }}
      >
        <div>
          <p>{"resumo".toUpperCase()}</p>
          <div
            style={{
              border: "1px solid #e0e0e0",
              borderRadius: 10,
              padding: 10,
              marginBottom: 10,
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <b>Agendamento</b>
              <span
                style={{
                  color: "#0077cc",
                  textDecoration: "underline",
                  cursor: "pointer",
                }}
                onClick={() => navigate(`/schedules/${id}/edit`)}
              >
                editar
              </span>
            </div>
            <p>{dayjs(response?.scheduleAt).format("DD/MMMM HH:mm")}</p>
          </div>
          <div
            style={{
              border: "1px solid #e0e0e0",
              borderRadius: 10,
              padding: 10,
              marginBottom: 10,
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <b>Cliente</b>
              <span
                style={{
                  color: "#0077cc",
                  textDecoration: "underline",
                  cursor: "pointer",
                }}
                onClick={() => navigate(`/schedules/${id}/edit`)}
              >
                editar
              </span>
            </div>
            <p>{response?.user.name}</p>
            <span
              style={{
                color: "#8e8e8e",
              }}
            >
              {response?.user.cellPhone}
            </span>
          </div>
          <div
            style={{
              border: "1px solid #e0e0e0",
              borderRadius: 10,
              padding: 10,
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <b>Serviços</b>
              <span
                style={{
                  color: "#0077cc",
                  textDecoration: "underline",
                  cursor: "pointer",
                }}
                onClick={() => navigate(`/schedules/${id}/edit`)}
              >
                editar
              </span>
            </div>

            {response?.services.map((service) => (
              <div
                key={service.id}
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <p>{service.name}</p>
                <span>
                  {service.price.toLocaleString("pt-BR", {
                    style: "currency",
                    currency: "BRL",
                  })}
                </span>
              </div>
            ))}
          </div>
        </div>
        <div>
          <p>{"Ações".toUpperCase()}</p>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              height: "90%",
            }}
          >
            <div
              style={{
                border: "1px solid #e0e0e0",
                borderRadius: 10,
                padding: 10,
                marginBottom: 10,
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <div>
                <b>Status: </b>
                <span
                  style={{
                    color: (status[response?.status || ""] || {}).color,
                  }}
                >
                  {(status[response?.status || ""] || {}).text}
                </span>
              </div>
            </div>

            <div
              style={{
                display: "flex",
                gap: 10,
              }}
            >
              <Button
                onClick={() => executeChangeStatus({ status: "canceled" })}
                variant="outiline"
                disabled={loadingChangeStatus}
              >
                {"cancelar".toUpperCase()}
              </Button>
              <Button
                onClick={() => executeChangeStatus({ status: "finished" })}
                disabled={loadingChangeStatus}
              >
                {"Confirmar".toUpperCase()}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
}
