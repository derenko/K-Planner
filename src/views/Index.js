import React, { useState, useContext } from "react";
import { Row, Col, Divider } from "antd";

import { Calendar } from "../components/calendar/calendar";
import { EditingModal } from "../components/editing-modal";
import { formatDate, isSameDay, getMonth } from "../utils/dates";
import { AddingModal } from "../components/adding-modal";
import { context, ACTION_TYPES } from "../context";
import { StatisticCards } from "../components/statistic";

const MODE = {
  NONE: "NONE",
  ADDING: "ADDING",
  EDITING: "EDITING",
};

export const Index = () => {
  const { dispatch, state } = useContext(context);
  const { dates } = state;

  const [mode, setMode] = useState(MODE.NONE);
  const [selectedDate, setSelectedDate] = useState({
    date: null,
    cash: 0,
  });

  const [selectedMonth, setSelectedMonth] = useState(getMonth() + 1);

  const onClickDay = (selectedDate) => {
    let dateToSet = {
      date: formatDate(selectedDate),
      cash: 0,
    };

    const dateToEdit = dates.find(({ date }) => isSameDay(date, selectedDate));

    if (dateToEdit) {
      dateToSet = { ...dateToEdit };
    }

    setSelectedDate(dateToSet);

    if (dateToEdit) {
      setMode(MODE.EDITING);
    } else {
      setMode(MODE.ADDING);
    }
  };

  const onCancel = () => {
    setMode(MODE.NONE);
  };

  const onSubmitEditing = (payload) => {
    dispatch({
      type: ACTION_TYPES.EDIT_DATE,
      payload,
    });

    onCancel();
  };

  const onSubmitAdding = (payload) => {
    dispatch({
      type: ACTION_TYPES.ADD_DATE,
      payload,
    });

    onCancel();
  };

  const onDelete = (payload) => {
    dispatch({
      type: ACTION_TYPES.DELETE_DATE,
      payload,
    });

    onCancel();
  };

  return (
    <>
      <Row gutter={2} justify={"center"}>
        <Col span={22}>
          <Calendar
            dates={dates}
            onClickDay={onClickDay}
            onChangeMonth={setSelectedMonth}
          />
        </Col>
        <Divider />
        <Col span={22}>
          <StatisticCards {...{ dates, selectedMonth }} />
        </Col>
      </Row>
      <Row>
        {mode === MODE.EDITING ? (
          <EditingModal
            onSubmit={onSubmitEditing}
            {...{ selectedDate, onCancel, onDelete }}
          />
        ) : null}
      </Row>
      <Row>
        {mode === MODE.ADDING ? (
          <AddingModal
            onSubmit={onSubmitAdding}
            {...{ selectedDate, onCancel }}
          />
        ) : null}
      </Row>
    </>
  );
};
