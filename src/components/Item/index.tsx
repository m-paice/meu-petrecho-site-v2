interface Props {
  text: string;
  color: string;
}

export function Item({ text, color }: Props) {
  return (
    <div className="item" style={styles.item}>
      <div>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <b>8:00 AM</b>
          <span
            style={{
              backgroundColor: color,
              ...styles.status,
            }}
          >
            {text}
          </span>
        </div>
        <p>Matheus Paice</p>
        <p>Corte degrade, barba</p>
      </div>
    </div>
  );
}

const styles = {
  item: {
    marginBottom: "10px",
    borderBottom: "1px solid #000",
    cursor: "pointer",
    marginRight: 10,
  },
  status: {
    color: "#fff",
    padding: "3px",
    borderRadius: "3px",
  },
};
