import { CSSProperties } from "react";
import dayjs from "dayjs";

import { Button } from "../Button";
import { Input } from "../Input";
import { Switch } from "../Switch";

interface Props {
  onConfirm: () => void;
  selectedDate: dayjs.Dayjs;
}

const dayOfWeek: { [key: number]: string } = {
  0: "domingo",
  1: "segunda-feira",
  2: "terça-feira",
  3: "quarta-feira",
  4: "quinta-feira",
  5: "sexta-feira",
  6: "sábado",
};

export function NewSchedule({ onConfirm, selectedDate }: Props) {
  return (
    <div style={styles.container}>
      <div style={styles.schedule}>
        <h4 style={{ fontSize: 25 }}>
          {selectedDate.format("D")} {selectedDate.format("MMMM")}, <br />
          {dayOfWeek[selectedDate.day()]}
        </h4>

        <input
          type="time"
          style={{
            fontSize: 24,
            backgroundColor: "transparent",
            outline: "none",
          }}
        />
      </div>

      <div style={styles.inputs}>
        <Input label="Cliente" placeholder="Nome do cliente" id="client" />
        <Input label="Serviço" placeholder="Nome do serviço" id="service" />
        <Input
          label="Funcionário"
          placeholder="Nome do funcionário"
          id="employee"
        />
      </div>

      <div>
        <div style={styles.services}>
          <div>Serviços</div>
          <div>Valor</div>
          <div style={{ textAlign: "center" }}>Pacote</div>
        </div>

        <div>
          {Array.from({ length: 5 }).map((_, index) => (
            <div key={index} style={styles.services}>
              <span style={styles.service}>Nome do serviço muito grande</span>
              <span style={styles.service}>R$ 10,00</span>
              <span style={{ ...styles.service, textAlign: "center" }}>
                <Switch />
              </span>
            </div>
          ))}
        </div>
      </div>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div
          style={{
            display: "flex",
            gap: "30px",
            width: "50%",
          }}
        >
          <Input
            label="Desconto"
            placeholder="Valor do desconto"
            id="discount"
          />
          <Input
            label="Adicional"
            placeholder="Valor do adicional"
            id="addition"
          />
        </div>
        <div style={styles.total}>
          <p>valor total</p>
          <h1 style={styles.totalValue}>R$ 30,00</h1>
        </div>
      </div>

      <Button title="Criar agendamento" onClick={onConfirm} />
    </div>
  );
}

const styles: { [key: string]: CSSProperties } = {
  container: {
    display: "flex",
    flexDirection: "column",
    gap: "20px",
  },
  schedule: {
    backgroundColor: "#D9D9D9",
    padding: "10px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    borderRadius: 10,
  },
  inputs: {
    display: "flex",
    justifyContent: "space-between",
    gap: "30px",
  },
  services: {
    display: "grid",
    gridTemplateColumns: "250px 80px 80px",
    gap: "10px",
  },
  service: {
    fontSize: 14,
    color: "gray",
    // borderBottom: "1px solid #D9D9D9",
    marginBottom: 10,
  },
  total: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-end",
    gap: 10,
  },
  totalValue: {
    color: "#e34954",
  },
};
