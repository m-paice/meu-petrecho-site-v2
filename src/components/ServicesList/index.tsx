import { MagnifyingGlassIcon } from "@heroicons/react/20/solid";
import { useMemo, useState } from "react";

interface Props {
  services: {
    id: string;
    name: string;
    price: number;
    time: number;
  }[];
}

export function ServicesList({ services }: Props) {
  const [search, setSearch] = useState("");

  const servicesFiltered = useMemo(() => {
    return search.length > 0
      ? services.filter((service) =>
          service.name.toLowerCase().includes(search.toLowerCase())
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
          height: 445,
          marginTop: 20,
        }}
      >
        {(search.length > 0 ? servicesFiltered : services).map(
          (service, index) => (
            <div
              key={index}
              style={{
                margin: "10px 0",
                display: "flex",
                gap: 10,
              }}
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
                <p>
                  R${" "}
                  {service.price.toLocaleString("pt-BR", {
                    minimumFractionDigits: 2,
                  })}{" "}
                  - {service.time} minutos
                </p>
              </div>
            </div>
          )
        )}
      </div>
    </div>
  );
}
