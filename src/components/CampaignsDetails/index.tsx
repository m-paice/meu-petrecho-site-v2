import { CSSProperties } from "react";

import { Header } from "./Header";
import { CampaignsItem } from "../CampaignsItem";

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
  return (
    <div style={styles.container}>
      <div style={styles.content}>
        <Header />
        <div>
          {campaign.clients.map((client, index) => (
            <CampaignsItem key={index} client={client} campaign={campaign} />
          ))}
        </div>
      </div>
    </div>
  );
}

const styles: { [key: string]: CSSProperties } = {
  container: {
    overflowY: "auto",
    height: "calc(100vh - 200px)",
    padding: 10,
  },
  content: {
    display: "flex",
    gap: 20,
    flexDirection: "column",
  },
};
