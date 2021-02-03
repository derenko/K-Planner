import { Divider, Input, Modal, Typography } from "antd";
import { CalendarOutlined, DollarCircleOutlined } from "@ant-design/icons";
import React, { useState } from "react";

const { Title } = Typography;

export const AddingModal = ({ onCancel, onSubmit, selectedDate }) => {
  const [cash, setCash] = useState(selectedDate.cash);
  const [date] = useState(selectedDate.date);

  return (
    <>
      <Modal
        title="Додавання"
        visible={true}
        onOk={() => {
          onSubmit({
            date,
            cash,
          });
        }}
        onCancel={onCancel}
        okText="Підтвердити"
        cancelText="Відмінити"
      >
        <Title level={3} style={{ textAlign: "center" }}>
          <CalendarOutlined />
          <span style={{ paddingLeft: "10px" }}>{date}</span>
        </Title>
        <Divider />
        <Input
          size="large"
          value={cash}
          onChange={(e) => setCash(e.target.value)}
          placeholder="Каса за день"
          prefix={<DollarCircleOutlined />}
        />
      </Modal>
    </>
  );
};
