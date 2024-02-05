import { CSSProperties } from "react";

interface Props {
  headers: { title: string; key: string }[];
  data: unknown[];
}

export function Table({ headers, data }: Props) {
  return (
    <div>
      <table style={styles.table}>
        <thead>
          <tr>
            {headers.map((header) => (
              <th style={styles.th} key={header.key}>
                {header.title}
              </th>
            ))}
            <th style={styles.lastTh}>Ações</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.id}>
              {headers.map((header) => (
                <td style={styles.td} key={header.key}>
                  {item[header.key]}
                </td>
              ))}

              <td style={styles.actions}>
                <button
                  style={{
                    ...styles.button,
                    ...styles.edit,
                  }}
                >
                  Editar
                </button>
                <button
                  style={{
                    ...styles.button,
                    ...styles.delete,
                  }}
                >
                  Excluir
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: 20,
          gap: 20,
        }}
      >
        <button
          style={{
            ...styles.button,
            ...styles.edit,
          }}
        >
          {" "}
          Anterior{" "}
        </button>
        <button
          style={{
            ...styles.button,
            ...styles.edit,
          }}
        >
          {" "}
          Próximo{" "}
        </button>
      </div>
    </div>
  );
}

const styles: { [key: string]: CSSProperties } = {
  table: {
    width: "100%",
    border: "1px solid #e6e6e6",
  },
  th: {
    textAlign: "left",
    padding: "10px",
    borderBottom: "1px solid #e6e6e6",
  },
  lastTh: {
    width: "150px",
    textAlign: "center",
    padding: "10px",
    borderBottom: "1px solid #e6e6e6",
  },
  td: {
    padding: "10px",
    borderBottom: "1px solid #e6e6e6",
  },
  actions: {
    width: "150px",
    textAlign: "center",
    padding: "10px",
    borderBottom: "1px solid #e6e6e6",
    display: "flex",
    justifyContent: "space-around",
  },
  button: {
    padding: "5px 10px",
    color: "#fff",
    border: "none",
    cursor: "pointer",
    borderRadius: 3,
  },
  edit: {
    background: "#007bff",
  },
  delete: {
    background: "#dc3545",
  },
};
