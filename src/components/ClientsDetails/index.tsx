import { Avatar } from "../Avatar";
import { Header } from "./Header";

export function ClientsDetails() {
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
            <h4>Notebook</h4>
            <p>(11) 99999-9999</p>
          </div>
        </div>

        <div
          style={{
            marginTop: 20,
          }}
        >
          <h4>Informações do cliente</h4>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
            }}
          >
            <div>
              <p>Mês de aniversário:</p>
              <p>Janeiro</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
