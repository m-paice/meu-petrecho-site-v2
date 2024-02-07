import { Avatar } from "../Avatar";
import { Header } from "./Header";

export function ServicesDetails() {
  return (
    <div>
      <Header />
      <div
        style={{
          padding: "10px",
          display: "flex",
          gap: 10,
        }}
      >
        <Avatar />
        <div>
          <h4>Corte</h4>
          <p>R$ 30</p>
          <p>30 minutos</p>
        </div>
      </div>
    </div>
  );
}
