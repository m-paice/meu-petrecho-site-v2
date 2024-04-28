import { TrashIcon } from "@heroicons/react/20/solid";
import dayjs from "dayjs";

import { Fields } from ".";
import { Button } from "../Button";

interface Props {
  values: Fields;
  setFieldValue: (field: string, value: unknown) => void;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export function Resume({ values, setFieldValue, handleChange }: Props) {
  return (
    <div
      style={{
        paddingInline: 10,
      }}
    >
      <h4>{"resumo".toUpperCase()}</h4>
      <div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            padding: "10px",
            borderRadius: 10,
            border: "1px solid #e6e6e6",
          }}
        >
          <p>
            {dayjs(values.date).format("DD")}{" "}
            {dayjs(values.date).format("MMMM")}, <br />{" "}
            {dayjs(values.date).format("dddd")}
          </p>
          <div
            style={{
              display: "flex",
              gap: 10,
              alignItems: "center",
            }}
          >
            <input
              style={{
                border: "none",
                outline: "none",
                fontSize: 18,
              }}
              value={values.date}
              onChange={handleChange}
              type="date"
              name="date"
              id="date"
            />
            <input
              style={{
                border: "none",
                outline: "none",
                fontSize: 18,
              }}
              value={values.time}
              onChange={handleChange}
              type="time"
              name="time"
              id="time"
            />
          </div>
        </div>

        <div
          style={{
            marginBlock: 10,
            border: "1px solid #e6e6e6",
            borderRadius: 10,
            padding: 10,
          }}
        >
          <h4>cliente</h4>
          <p>{values.user?.name}</p>
          <span
            style={{
              color: "black",
              fontSize: 12,
            }}
          >
            {values.user?.cellPhone.replace(
              /(\d{2})(\d{5})(\d{4})/,
              "($1) $2-$3"
            )}
          </span>
        </div>

        <div
          style={{
            marginBlock: 10,
            border: "1px solid #e6e6e6",
            borderRadius: 10,
            padding: 10,
            height: 150,
            overflowY: "auto",
          }}
        >
          <h4>serviços</h4>
          <div>
            {values.services.map((service) => (
              <div
                key={service.id}
                style={{
                  display: "grid",
                  gridTemplateColumns: "100px 1fr 1fr 80px",
                }}
              >
                <p>#{service.id.slice(0, 4)}</p>
                <p>{service.name}</p>
                <p>
                  {service.price.toLocaleString("pt-br", {
                    style: "currency",
                    currency: "BRL",
                  })}
                </p>
                <TrashIcon
                  width={20}
                  color="red"
                  cursor="pointer"
                  onClick={() =>
                    setFieldValue(
                      "services",
                      values.services.filter((item) => item.id !== service.id)
                    )
                  }
                />
              </div>
            ))}
          </div>
        </div>

        <div>
          <h4>Total</h4>
          <p>
            {values.services
              .reduce((acc, cur) => acc + cur.price, 0)
              .toLocaleString("pt-br", {
                style: "currency",
                currency: "BRL",
              })}
          </p>
        </div>
        <Button type="submit">{"agendar".toUpperCase()}</Button>
      </div>
    </div>
  );
}
