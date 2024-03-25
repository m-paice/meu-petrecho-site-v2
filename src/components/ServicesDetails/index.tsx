import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { useRequestFindOne } from "../../hooks/useRequestFindOne";
import { Service } from "../../pages/Services";
import { Avatar } from "../Avatar";
import { Header } from "./Header";
import { Loading } from "../Loading";
import { DeleteModal } from "./DeleteModal";

export function ServicesDetails() {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();

  const { execute, response, loading } = useRequestFindOne<Service>({
    path: `/services/${id}`,
  });

  useEffect(() => {
    if (id) execute();
  }, [id]);

  if (!id || !response)
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "calc(100vh - 255px)",
        }}
      >
        <p>Selecione um serviço para ter mais informações</p>
      </div>
    );

  return (
    <div>
      <Loading isLoading={loading} />
      <Header />
      <section
        style={{
          padding: 10,
        }}
      >
        <div
          style={{
            display: "flex",
            gap: 10,
          }}
        >
          <Avatar />
          <div>
            <h4>{response.name}</h4>
          </div>
        </div>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
          }}
        >
          <div>
            <p>Preço:</p>
            <p>
              {response.price.toLocaleString("pt-BR", {
                style: "currency",
                currency: "BRL",
              })}
            </p>
          </div>
        </div>
      </section>

      <DeleteModal
        open={window.location.pathname === `/services/${id}/delete`}
        handleClose={() => navigate(`/services/${id}`)}
      />
    </div>
  );
}
