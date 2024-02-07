import { CampaignsList } from "../components/CampaignsList";
import { CampaignsDetails } from "../components/CampaignsDetails";
import { CampaignsNew } from "../components/CampaignsNew";
import { CampaignsFilter } from "../components/CampaignsFilter";

const campaigns = [
  {
    name: "Campanha 1",
    clients: [
      {
        name: "João",
        phone: "11999999999",
        service: "Corte",
        scheduleAt: "2021-10-10T10:00:00",
      },

      {
        name: "Maria",
        phone: "11999999999",
        service: "Corte",
        scheduleAt: "2021-10-10T10:00:00",
      },
      {
        name: "Maria",
        phone: "11999999999",
        service: "Corte",
        scheduleAt: "2021-10-10T10:00:00",
      },
      {
        name: "Maria",
        phone: "11999999999",
        service: "Corte",
        scheduleAt: "2021-10-10T10:00:00",
      },
      {
        name: "Maria",
        phone: "11999999999",
        service: "Corte",
        scheduleAt: "2021-10-10T10:00:00",
      },
      {
        name: "Maria",
        phone: "11999999999",
        service: "Corte",
        scheduleAt: "2021-10-10T10:00:00",
      },
      {
        name: "Maria",
        phone: "11999999999",
        service: "Corte",
        scheduleAt: "2021-10-10T10:00:00",
      },
      {
        name: "Maria",
        phone: "11999999999",
        service: "Corte",
        scheduleAt: "2021-10-10T10:00:00",
      },
      {
        name: "Maria",
        phone: "11999999999",
        service: "Corte",
        scheduleAt: "2021-10-10T10:00:00",
      },
    ],
    status: "Em andamento",
  },
  {
    name: "Campanha 2",
    clients: [
      {
        name: "João",
        phone: "11999999999",
        service: "Corte",
        scheduleAt: "2021-10-10T10:00:00",
      },

      {
        name: "Maria",
        phone: "11999999999",
        service: "Corte",
        scheduleAt: "2021-10-10T10:00:00",
      },
    ],
    status: "Inativo",
  },
  {
    name: "Campanha 3",
    clients: [
      {
        name: "João",
        phone: "11999999999",
        service: "Corte",
        scheduleAt: "2021-10-10T10:00:00",
      },

      {
        name: "Maria",
        phone: "11999999999",
        service: "Corte",
        scheduleAt: "2021-10-10T10:00:00",
      },
    ],
    status: "Ativo",
  },
];

export function Campaigns() {
  return (
    <div>
      <div style={styles.container}>
        <h4
          style={{
            fontSize: 24,
            fontWeight: "400",
          }}
        >
          Campanhas
        </h4>
      </div>

      <div>
        <h4>graficos</h4>
      </div>
      <div style={styles.grid}>
        <div style={styles.wrapperActions}>
          <CampaignsNew />
          <CampaignsFilter />
        </div>
        <CampaignsList campaigns={campaigns} />
        <CampaignsDetails campaign={campaigns[0]} />
      </div>
    </div>
  );
}

const styles = {
  container: {
    backgroundColor: "#ebf3fe",
    padding: "10px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    borderRadius: 10,
    marginBottom: 20,
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "200px 400px 1fr",
    gridTemplateRows: "calc(100vh - 200px)",
  },
  wrapperActions: {
    borderRight: "1px solid #e6e6e6",

    paddingRight: 10,
  },
};
