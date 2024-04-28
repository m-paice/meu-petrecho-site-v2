import { useEffect, useState } from "react";
import dayjs from "dayjs";

import { Styles } from "../types/home";
import { ResponseAPI } from "../types/ResponseAPI";
import { Calendar } from "../components/Calendar";
import { Items } from "../components/Items";
import { Button } from "../components/Button";
import { SelectedDay } from "../components/SelectedDay";
import { Loading } from "../components/Loading";
import { useRequestFindMany } from "../hooks/useRequestFindMany";
import { SchedulesForm } from "../components/SchedulesForm";
import { useNavigate } from "react-router-dom";
import { SchedulesDetails } from "../components/SchedulesDetails";

interface Schedules {
  id: string;
  status: "finished" | "canceled" | "pending";
  scheduleAt: string;
  services: {
    id: string;
    name: string;
  }[];
  user: {
    id: string;
    name: string;
  };
}

export function Schedules() {
  const navigate = useNavigate();

  const [currentDate, setCurrentDate] = useState(
    dayjs(new Date()).startOf("month")
  );
  const [selectedDate, setSelectedDate] = useState(dayjs(new Date()));

  const {
    execute: execFindManySchedules,
    response: responseSchedules,
    loading: loadingSchedules,
  } = useRequestFindMany<ResponseAPI<Schedules[]>>({
    path: `/schedules`,
    defaultQuery: {
      where: {
        scheduleAt: {
          $between: [
            currentDate.startOf("month").toISOString(),
            currentDate.endOf("month").toISOString(),
          ],
        },
      },
    },
  });

  useEffect(() => {
    if (window.location.pathname === "/schedules") execFindManySchedules();
  }, [currentDate, window.location.pathname]);

  const schedules = (responseSchedules?.data || []).reduce<{
    [key: string]: Schedules[];
  }>((acc, cur) => {
    const date = dayjs(cur.scheduleAt).format("DD-MM-YYYY");
    if (!acc[date]) {
      acc[date] = [];
    }
    acc[date].push(cur);
    return acc;
  }, {});

  const schedulesSelectedDate = schedules?.[
    selectedDate.format("DD-MM-YYYY")
  ]?.map((item) => ({
    ...item,
    scheduleAt: dayjs(item.scheduleAt).format("HH:mm"),
    services: (item.services || []).map((service) => service.name).join(", "),
    user: item.user.name,
    status: item.status,
  }));

  return (
    <div style={styles.container}>
      <Loading isLoading={loadingSchedules} />
      <section style={styles.leftSection}>
        <div>
          <SelectedDay selectedDate={selectedDate} />
          <Items schedules={schedulesSelectedDate || []} />
        </div>
        <Button size="large" onClick={() => navigate("/schedules/new")}>
          {"novo agendamento".toUpperCase()}
        </Button>
      </section>
      <section style={styles.rightSection}>
        <Calendar
          schedules={loadingSchedules ? {} : schedules || {}}
          selectedDate={selectedDate}
          currentDate={currentDate}
          setSelectedDate={setSelectedDate}
          setCurrentDate={setCurrentDate}
        />
      </section>
      <SchedulesForm />

      <SchedulesDetails />
    </div>
  );
}

const styles: Styles = {
  container: {
    display: "grid",
    gridTemplateColumns: "350px auto",
  },
  leftSection: {
    backgroundColor: "#e6e6e6",
    padding: "20px",
    borderTopLeftRadius: "20px",
    borderBottomLeftRadius: "20px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },
  rightSection: {
    padding: "15px",
    borderTopRightRadius: "20px",
    borderBottomRightRadius: "20px",
    backgroundColor: "#f4f4f4",
  },
};
