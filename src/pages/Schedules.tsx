import { useState } from "react";
import dayjs from "dayjs";

import { Styles } from "../types/home";
import { useToggle } from "../hooks/useToggle";
import { Calendar } from "../components/Calendar";
import { Items } from "../components/Items";
import { Button } from "../components/Button";
import { SelectedDay } from "../components/SelectedDay";
import { Modal } from "../components/Modal";
import { NewSchedule } from "../components/NewSchedule";

export function Schedules() {
  const [currentDate, setCurrentDate] = useState(
    dayjs(new Date()).startOf("month")
  );
  const [selectedDate, setSelectedDate] = useState(dayjs(new Date()));

  const { isOpen, toggle } = useToggle();

  return (
    <div style={styles.container}>
      <section style={styles.leftSection}>
        <SelectedDay selectedDate={selectedDate} />
        <Items />
        <Button title="+ novo agendamento" size="large" onClick={toggle} />
      </section>
      <section style={styles.rightSection}>
        <Calendar
          selectedDate={selectedDate}
          currentDate={currentDate}
          setSelectedDate={setSelectedDate}
          setCurrentDate={setCurrentDate}
        />
      </section>

      <Modal title="Novo agendamento" isOpen={isOpen} closeModal={toggle}>
        <NewSchedule selectedDate={selectedDate} onConfirm={toggle} />
      </Modal>
    </div>
  );
}

const styles: Styles = {
  container: {
    display: "grid",
    gridTemplateColumns: "400px auto",
    margin: "40px",
  },
  leftSection: {
    backgroundColor: "#e6e6e6",
    padding: "20px",
    borderTopLeftRadius: "30px",
    borderBottomLeftRadius: "30px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },
  rightSection: {
    padding: "20px",
    borderTopRightRadius: "30px",
    borderBottomRightRadius: "30px",
    backgroundColor: "#f4f4f4",
  },
};
