import { useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { MagnifyingGlassIcon } from "@heroicons/react/20/solid";
import { useNavigate } from "react-router-dom";
import { Client } from "../../pages/Clients";

interface Props {
  clients: {
    data: Client[];
    page: number;
    lastPage: number;
  };
  executeClients({ page }: { page: number }): void;
}

export function ClientsList({ clients, executeClients }: Props) {
  const navigate = useNavigate();

  const [search, setSearch] = useState("");
  const [selected, setSelected] = useState("");
  const [isHovered, setIsHovered] = useState("");

  return (
    <div
      style={{
        borderRight: "1px solid #e6e6e6",
        paddingLeft: 10,
        paddingRight: 10,
      }}
    >
      <div
        style={{
          display: "flex",
          gap: 10,
          alignItems: "center",
          padding: "10px",
          borderRadius: 10,
          border: "1px solid #e6e6e6",
        }}
      >
        <MagnifyingGlassIcon width={20} color="gray" />
        <input
          type="text"
          placeholder="Pesquisa"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          style={{
            border: "none",
            outline: "none",
            width: "100%",
          }}
        />
      </div>

      <InfiniteScroll
        dataLength={clients.data.length}
        next={() => {
          if (clients.page < (clients?.lastPage || 0)) {
            executeClients({
              page: clients.page + 1,
            });
          }
        }}
        hasMore={clients.page < (clients?.lastPage || 0)}
        loader={<h4>Carregando...</h4>}
        height={335}
        style={{
          overflowY: "auto",
          height: "calc(100vh - 255px)",
          marginTop: 20,
        }}
      >
        {clients.data.map((client) => (
          <div
            key={client.id}
            style={{
              margin: "10px 0",
              display: "flex",
              gap: 10,
              padding: "10px 5px",
              borderRadius: 5,
              cursor: "pointer",
              transition: "color 0.3s, background-color 0.3s ease",
              color:
                isHovered === client.id || selected === client.id
                  ? "#e34954"
                  : "",
              backgroundColor:
                isHovered === client.id ? "rgba(250, 137, 107, 0.1)" : "",
            }}
            onClick={() => {
              setSelected(client.id);
              navigate(`/clients/${client.id}`);
            }}
            onMouseEnter={() => setIsHovered(client.id)}
            onMouseLeave={() => setIsHovered("")}
          >
            <div
              style={{
                minWidth: 50,
                width: 50,
                height: 50,
                backgroundColor: "#e6e6e6",
                borderRadius: 50,
              }}
            />
            <div>
              <h4>{client.name}</h4>
              <p>
                {client.cellPhone.replace(
                  /(\d{2})(\d{5})(\d{4})/,
                  "($1) $2-$3"
                )}
              </p>
            </div>
          </div>
        ))}
      </InfiniteScroll>
    </div>
  );
}
