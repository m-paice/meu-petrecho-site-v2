import { Avatar } from "../Avatar";
import { Header } from "./Header";

export function ServicesDetails() {
  return (
    <div>
      <Header />
      <section
        style={{
          padding: 10,
        }}
      >
        <div
          style={{
            display: "flex",
            gap: 10,
          }}
        >
          <Avatar />
          <div>
            <h4>Tecnologias</h4>
            <p>51 clientes</p>
          </div>
        </div>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
          }}
        >
          <div>
            <p>Preço:</p>
            <p>R$ 1.200,00</p>
          </div>
        </div>
      </section>
    </div>
  );
}
