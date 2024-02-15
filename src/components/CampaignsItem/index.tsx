interface Props {
  client: {
    name: string;
    phone: string;
    service: string;
    scheduleAt: string;
  };
  campaign: {
    id: string;
    status: string;
  };
}

export function CampaignsItem({ client, campaign }: Props) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        gap: 10,
        marginTop: 10,
        padding: 10,
        border: "1px solid #e6e6e6",
        boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
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
          <p>{client.phone.replace(/(\d{2})(\d{5})(\d{4})/, "($1) $2-$3")}</p>
        </div>
        <div>
          <h4>serviço</h4>
          <p>{client.service}</p>
          <p>{client.scheduleAt.split("T")[0]}</p>
        </div>
      </div>
      <h4>{campaign.status}</h4>
    </div>
  );
}
