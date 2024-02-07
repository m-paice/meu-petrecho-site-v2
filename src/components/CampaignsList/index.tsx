import { MagnifyingGlassIcon } from "@heroicons/react/20/solid";
import { useMemo, useState } from "react";

interface Props {
  campaigns: {
    name: string;
    clients: {
      name: string;
      phone: string;
      service: string;
      scheduleAt: string;
    }[];
    status: string;
  }[];
}

export function CampaignsList({ campaigns }: Props) {
  const [search, setSearch] = useState("");

  const campaignsFiltered = useMemo(() => {
    return search.length > 0
      ? campaigns.filter((campaign) =>
          campaign.name.toLowerCase().includes(search.toLowerCase())
        )
      : [];
  }, [search, campaigns]);

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
        {search.length > 0 && campaignsFiltered.length === 0 && (
          <p style={{ textAlign: "center" }}>Nenhum cliente encontrado</p>
        )}
        {(search.length > 0 ? campaignsFiltered : campaigns).map(
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
                <p>{service.status}</p>
              </div>
            </div>
          )
        )}
      </div>
    </div>
  );
}
