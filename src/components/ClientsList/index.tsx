import { MagnifyingGlassIcon } from "@heroicons/react/20/solid";
import { useMemo, useState } from "react";
import { Client } from "../../pages/Clients";
import { useNavigate } from "react-router-dom";

interface Props {
  clients: Client[];
}

export function ClientsList({ clients }: Props) {
  const navigate = useNavigate();

  const [search, setSearch] = useState("");
  const [selected, setSelected] = useState("");
  const [isHovered, setIsHovered] = useState("");

  const clientsFiltered = useMemo(() => {
    return search.length > 0
      ? clients.filter((client) =>
          client.name.toLowerCase().includes(search.toLowerCase())
        )
      : [];
  }, [search, clients]);

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
      <div
        style={{
          overflowY: "auto",
          height: "calc(100vh - 255px)",
          marginTop: 20,
        }}
      >
        {search.length > 0 && clientsFiltered.length === 0 && (
          <p style={{ textAlign: "center" }}>Nenhum cliente encontrado</p>
        )}
        {(search.length > 0 ? clientsFiltered : clients).map(
          (client, index) => (
            <div
              key={index}
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
          )
        )}
      </div>
    </div>
  );
}
