import { Button, Divider, Input, Modal, Popconfirm } from "antd";
import { DollarCircleOutlined } from "@ant-design/icons";
import React, { useState } from "react";

export const EditingModal = ({
  onCancel,
  onSubmit,
  selectedDate,
  onDelete,
}) => {
  const [date] = useState(selectedDate.date);
  const [cash, setCash] = useState(selectedDate.cash);

  return (
    <>
      <Modal
        title="Редагування"
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
        <Input
          size="large"
          value={cash}
          onChange={(e) => setCash(e.target.value)}
          placeholder="Каса за день"
          prefix={<DollarCircleOutlined />}
        />
        <Divider />
        <Popconfirm
          title="Ви впевнені що хочете видалати дату?"
          onConfirm={() => onDelete({ date })}
          okText="Так"
          cancelText="Ні"
        >
          <Button type="danger" block>
            Видалити дату
          </Button>
        </Popconfirm>
      </Modal>
    </>
  );
};
