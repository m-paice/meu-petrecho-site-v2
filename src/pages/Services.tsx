import { ServicesList } from "../components/ServicesList";
import { ServicesDetails } from "../components/ServicesDetails";
import { ServicesNew } from "../components/ServicesNew";
import { ServicesFilter } from "../components/ServicesFilter";

const services = [
  {
    id: "1",
    name: "Corte Social",
  },
  {
    id: "2",
    name: "Barba",
  },
  {
    id: "3",
    name: "Corte degrade",
  },
  {
    id: "4",
    name: "Pigmentação",
  },
  {
    id: "5",
    name: "Corte infantil",
  },
];

export function Services() {
  return (
    <div>
      <div style={styles.container}>
        <h4
          style={{
            fontSize: 24,
            fontWeight: "400",
          }}
        >
          Serviços
        </h4>
      </div>
      <div style={styles.grid}>
        <div style={styles.wrapperActions}>
          <ServicesNew />
          <ServicesFilter />
        </div>
        <ServicesList services={services} />
        <ServicesDetails />
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
    gridTemplateColumns: "200px 300px 1fr",
    gridTemplateRows: "calc(100vh - 200px)",
  },
  wrapperActions: {
    borderRight: "1px solid #e6e6e6",
    paddingRight: 10,
  },
};
