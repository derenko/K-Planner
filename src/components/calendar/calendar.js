import React from "react";
import ReactCalendar from "react-calendar";
import { isSameDay, getMonth } from "../../utils/dates";
import "react-calendar/dist/Calendar.css";
import "./calendar.scss";
import { LeftCircleOutlined, RightCircleOutlined } from "@ant-design/icons";

export const Calendar = ({ dates, onClickDay, onChangeMonth }) => {
  const tileClassNameRenderer = ({ date }) => {
    const ACTIVE_CLASS_NAME = "react-calendar__tile--active";

    const isActive = dates.some((day) => {
      return isSameDay(date, day.date);
    });

    return isActive ? ACTIVE_CLASS_NAME : null;
  };

  const tileContentRendered = ({ date }) => {
    const [filteredDate] = dates.filter((day) => {
      return isSameDay(date, day.date);
    });

    if (filteredDate) {
      return <div className="date-total">{filteredDate.cash}</div>;
    } else {
      return null;
    }
  };

  return (
    <ReactCalendar
      showNavigation={true}
      showNeighboringMonth={false}
      tileClassName={tileClassNameRenderer}
      tileContent={tileContentRendered}
      prevLabel={<LeftCircleOutlined />}
      nextLabel={<RightCircleOutlined />}
      onClickDay={onClickDay}
      onActiveStartDateChange={({ activeStartDate }) => {
        onChangeMonth(getMonth(activeStartDate));
      }}
    />
  );
};
