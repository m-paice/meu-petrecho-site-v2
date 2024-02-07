import { useNavigate } from "react-router-dom";
import { PencilIcon, TrashIcon } from "@heroicons/react/20/solid";

interface Props {
  campaign: {
    name: string;
    clients: {
      name: string;
      phone: string;
      service: string;
      scheduleAt: string;
    }[];
    status: string;
  };
}

export function CampaignsDetails({ campaign }: Props) {
  const navigate = useNavigate();
  return (
    <div
      style={{
        borderLeft: "1px solid #e6e6e6",
        overflowY: "auto",
        height: "calc(100vh - 200px)",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "10px",
        }}
      >
        <h4>Detalhes</h4>
        <div
          style={{
            display: "flex",
            gap: 20,
          }}
        >
          <PencilIcon
            width={20}
            color="gray"
            style={{ cursor: "pointer" }}
            onClick={() => navigate("/campaigns/1/edit")}
          />
          <TrashIcon width={20} color="gray" style={{ cursor: "pointer" }} />
        </div>
      </div>
      <div
        style={{
          padding: "10px",
          display: "flex",
          gap: 20,
          flexDirection: "column",
        }}
      >
        <div
          style={{
            display: "flex",
            gap: 10,
          }}
        >
          <div
            style={{
              width: 80,
              height: 80,
              backgroundColor: "#e6e6e6",
              borderRadius: 80,
            }}
          />
          <div>
            <h4>Campanha 001</h4>
            <p>Em andamento</p>
          </div>
        </div>

        <div>
          {campaign.clients.map((client, index) => (
            <div
              key={index}
              style={{
                display: "flex",
                justifyContent: "space-between",
                gap: 10,
                marginTop: 10,
                padding: 10,
                border: "1px solid #e6e6e6",
                borderRadius: 5,
              }}
            >
              <div
                style={{
                  display: "flex",
                  gap: 30,
                }}
              >
                <div>
                  <h4>cliente</h4>
                  <p>{client.name}</p>
                  <p>
                    {client.phone.replace(
                      /(\d{2})(\d{5})(\d{4})/,
                      "($1) $2-$3"
                    )}
                  </p>
                </div>
                <div>
                  <h4>serviço</h4>
                  <p>{client.service}</p>
                  <p>{client.scheduleAt.split("T")[0]}</p>
                </div>
              </div>
              <h4>{campaign.status}</h4>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
