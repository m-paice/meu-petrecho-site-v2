import dayjs from "dayjs";
import { Button } from "../Button";
import { CSSProperties } from "react";

interface Props {
  currentDate: dayjs.Dayjs;
  selectedDate: dayjs.Dayjs;
  setSelectedDate: (date: dayjs.Dayjs) => void;
  setCurrentDate: (date: dayjs.Dayjs) => void;
}

interface Schedules {
  [key: string]: {
    id: number;
    status: "confirmed" | "canceled" | "pending";
  }[];
}

const daysOfWeek = [
  "DOMINGO",
  "SEGUNDA",
  "TERÇA",
  "QUARTA",
  "QUINTA",
  "SEXTA",
  "SÁBADO",
];

const schedules: Schedules = {
  "02-02-2024": [
    {
      id: 1,
      status: "confirmed",
    },

    {
      id: 3,
      status: "pending",
    },
  ],
  "05-02-2024": [
    {
      id: 1,
      status: "confirmed",
    },
    {
      id: 2,
      status: "canceled",
    },
    {
      id: 3,
      status: "pending",
    },
    {
      id: 4,
      status: "pending",
    },
    {
      id: 5,
      status: "confirmed",
    },
  ],
  "20-02-2024": [
    {
      id: 1,
      status: "confirmed",
    },
    {
      id: 2,
      status: "canceled",
    },
  ],
};

export function Calendar({
  selectedDate,
  currentDate,
  setSelectedDate,
  setCurrentDate,
}: Props) {
  const lines = dayjs(currentDate).startOf("month").day() === 6 ? 6 : 5;

  return (
    <div>
      <div style={styles.header}>
        <div style={styles.month}>
          <h4 style={styles.monthTitle}>{dayjs(currentDate).format("MMMM")}</h4>
          <p style={styles.year}>{dayjs(currentDate).format("YYYY")}</p>
        </div>
        <div style={styles.buttons}>
          <Button
            size="small"
            title="anterior"
            onClick={() =>
              setCurrentDate(
                dayjs(currentDate).subtract(1, "month").startOf("month")
              )
            }
          />
          <span
            style={{
              cursor: "pointer",
            }}
            onClick={() => {
              setCurrentDate(dayjs(new Date()).startOf("month"));
              setSelectedDate(dayjs(new Date()));
            }}
          >
            hoje
          </span>
          <Button
            size="small"
            title="próximo"
            onClick={() =>
              setCurrentDate(
                dayjs(currentDate).add(1, "month").startOf("month")
              )
            }
          />
        </div>
      </div>
      <div style={styles.dayOfWeek}>
        {daysOfWeek.map((day) => (
          <div key={day}>{day}</div>
        ))}
      </div>

      <div>
        {Array.from({
          length: lines,
        }).map((_, i) => {
          return (
            <div
              key={i}
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(7, 1fr)",
              }}
            >
              {Array.from({ length: 7 }).map((_, j) => {
                const currentDay = dayjs(currentDate)
                  .day(i * 7 + j)
                  .format("D");

                const schedulesConfirmed = (
                  schedules[
                    dayjs(currentDate)
                      .day(i * 7 + j)
                      .format("DD-MM-YYYY")
                  ] ?? []
                ).filter((schedule) => schedule.status === "confirmed");

                const schedulesCanceled = (
                  schedules[
                    dayjs(currentDate)
                      .day(i * 7 + j)
                      .format("DD-MM-YYYY")
                  ] ?? []
                ).filter((schedule) => schedule.status === "canceled");

                const schedulesPending = (
                  schedules[
                    dayjs(currentDate)
                      .day(i * 7 + j)
                      .format("DD-MM-YYYY")
                  ] ?? []
                ).filter((schedule) => schedule.status === "pending");

                return (
                  <div
                    key={`${i}-${j}`}
                    onClick={() =>
                      setSelectedDate(dayjs(currentDate).day(i * 7 + j))
                    }
                    style={{
                      ...styles.day,
                      borderColor:
                        selectedDate.format("YYYY-MM-DD") ===
                        dayjs(currentDate)
                          .day(i * 7 + j)
                          .format("YYYY-MM-DD")
                          ? "red"
                          : "#ccc",
                      color:
                        dayjs(currentDate).format("YYYY") ===
                          dayjs(new Date()).format("YYYY") &&
                        dayjs(currentDate).format("MMMM") ===
                          dayjs(new Date()).format("MMMM") &&
                        dayjs(currentDate)
                          .day(i * 7 + j)
                          .format("D") === dayjs(new Date()).format("D") &&
                        i === 0
                          ? "red"
                          : selectedDate.format("YYYY-MM-DD") ===
                            dayjs(currentDate)
                              .day(i * 7 + j)
                              .format("YYYY-MM-DD")
                          ? "red"
                          : "gray",
                    }}
                  >
                    <span>
                      {i === 0 && Number(currentDay) > 7
                        ? null
                        : i + 1 === lines && Number(currentDay) <= 8
                        ? null
                        : currentDay}
                    </span>

                    <div
                      style={{
                        display: "flex",
                        gap: "5px",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center",
                        padding: "0 5px",
                      }}
                    >
                      {schedulesConfirmed.length > 0 && (
                        <div style={{ ...styles.badge, ...styles.confirmed }}>
                          {schedulesConfirmed.length} item
                        </div>
                      )}
                      {schedulesCanceled.length > 0 && (
                        <div style={{ ...styles.badge, ...styles.canceled }}>
                          {schedulesCanceled.length} item
                        </div>
                      )}
                      {schedulesPending.length > 0 && (
                        <div style={{ ...styles.badge, ...styles.pending }}>
                          {schedulesPending.length} item
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>
    </div>
  );
}

const styles: { [key: string]: CSSProperties } = {
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "20px",
  },
  month: {
    display: "flex",
    gap: "10px",
    alignItems: "center",
  },
  monthTitle: {
    fontSize: "40px",
    fontWeight: "bold",
  },
  year: {
    fontSize: "40px",
    fontWeight: "300",
  },
  buttons: {
    display: "flex",
    gap: "10px",
    alignItems: "center",
  },
  dayOfWeek: {
    display: "grid",
    gridTemplateColumns: "repeat(7, 1fr)",
    gap: "10px",
  },
  day: {
    border: "1px solid #ccc",
    height: "100px",
    cursor: "pointer",
    fontSize: "20px",
    transition: "0.3s",
  },
  badge: {
    width: "100%",
    borderLeft: "5px solid",
    color: "#fff",
    display: "flex",
    fontSize: 12,
    fontWeight: "bold",
    borderTopLeftRadius: 2,
    borderBottomLeftRadius: 2,
    paddingLeft: 5,
  },

  confirmed: {
    backgroundColor: "rgba(19, 222, 185, 0.3)",
    color: "#13deb9",
    borderColor: "#13deb9",
  },
  canceled: {
    backgroundColor: "rgba(250, 137, 107, 0.3)",
    color: "#fa896b",
    borderColor: "#fa896b",
  },
  pending: {
    backgroundColor: "rgba(255, 174, 31, 0.3)",
    color: "#ffae1f",
    borderColor: "#ffae1f",
  },
};
