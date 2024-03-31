import { useParams } from "react-router-dom";
import { useRequestFindOne } from "../../hooks/useRequestFindOne";
import { Avatar } from "../Avatar";
import { Header } from "./Header";
import { useEffect } from "react";
import { Client } from "../../pages/Clients";
import { Loading } from "../Loading";

export function ClientsDetails() {
  const { id } = useParams<{ id: string }>();

  const {
    execute: executeFindOne,
    response: response,
    loading: loadingFindOne,
  } = useRequestFindOne<Client>({
    path: `/users/${id}`,
  });

  useEffect(() => {
    if (id) executeFindOne();
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
        <p>Selecione um cliente para ter mais informações</p>
      </div>
    );

  return (
    <div>
      <Loading isLoading={loadingFindOne} />
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
            <p>
              {response.cellPhone.replace(
                /(\d{2})(\d{5})(\d{4})/,
                "($1) $2-$3"
              )}
            </p>
          </div>
        </div>

        <div
          style={{
            marginTop: 20,
          }}
        >
          <h4>Informações do cliente</h4>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
            }}
          >
            <div>
              <p>Mês de aniversário:</p>
              <p>{response.birthDate}</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
