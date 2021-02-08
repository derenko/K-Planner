import React from "react";
import { Statistic, Card } from "antd";
import {
  CalendarOutlined,
  DollarCircleOutlined,
  ClockCircleOutlined,
} from "@ant-design/icons";

import {
  getTotalCash,
  getTotalWorkingDays,
  getTotalWorkingHours,
} from "../../utils/statistic";

export const StatisticCards = ({ dates }) => {
  const totalCash = getTotalCash(dates);
  const totalWorkingDays = getTotalWorkingDays(dates);
  const totalWorkingHours = getTotalWorkingHours(dates);

  const valueStyle = { color: "#6675A9" };

  return (
    <div>
      <Card>
        <Statistic
          title="Зарплата"
          value={totalCash}
          valueStyle={valueStyle}
          prefix={<DollarCircleOutlined />}
          suffix="грн"
        />
      </Card>
      <Card>
        <Statistic
          title="Робочих днів"
          value={totalWorkingDays}
          valueStyle={valueStyle}
          prefix={<CalendarOutlined />}
        />
      </Card>
      <Card>
        <Statistic
          title="Кількість годин"
          value={totalWorkingHours}
          valueStyle={valueStyle}
          prefix={<ClockCircleOutlined />}
        />
      </Card>
    </div>
  );
};
