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
        /*
         activeStartDate month value is from 0 to 11
         we use values from 1 to 12
         so we need to add 1 to get month 
        */
        onChangeMonth(getMonth(activeStartDate) + 1);
      }}
    />
  );
};
