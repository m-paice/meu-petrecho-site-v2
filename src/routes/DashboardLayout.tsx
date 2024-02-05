import { Outlet } from "react-router-dom";
import { Sidebar } from "../components/Sidebar";
import { Header } from "../components/Header";

export function DashboardLayout() {
  return (
    <div style={styles.container}>
      <Header />
      <Sidebar />
      <main style={styles.main}>
        <Outlet />
      </main>
    </div>
  );
}

const styles = {
  container: {
    display: "grid",
    gridTemplateAreas: `
            "sidebar header"
            "sidebar main"
        `,
    gridTemplateColumns: "250px auto",
    gridtemplateRows: "250px auto",
  },
  main: {
    gridArea: "main",
    height: "calc(100vh - 250px)",
    padding: 20,
  },
};
