import { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { MagnifyingGlassIcon } from "@heroicons/react/20/solid";

import { Service } from "../../pages/Services";

interface Props {
  services: Service[];
}

export function ServicesList({ services }: Props) {
  const navigate = useNavigate();

  const [search, setSearch] = useState("");
  const [selected, setSelected] = useState("");
  const [isHovered, setIsHovered] = useState("");

  const servicesFiltered = useMemo(() => {
    return search.length > 0
      ? services.filter((client) =>
          client.name.toLowerCase().includes(search.toLowerCase())
        )
      : [];
  }, [search, services]);

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
        {search.length > 0 && servicesFiltered.length === 0 && (
          <p style={{ textAlign: "center" }}>Nenhum cliente encontrado</p>
        )}
        {(search.length > 0 ? servicesFiltered : services).map(
          (service, index) => (
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
                  isHovered === service.id || selected === service.id
                    ? "#e34954"
                    : "",
                backgroundColor:
                  isHovered === service.id ? "rgba(250, 137, 107, 0.1)" : "",
              }}
              onClick={() => {
                setSelected(service.id);
                navigate(`/services/${service.id}`);
              }}
              onMouseEnter={() => setIsHovered(service.id)}
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
                <h4>{service.name}</h4>
              </div>
            </div>
          )
        )}
      </div>
    </div>
  );
}
