import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { getCashByMonths } from "../../utils/statistic";
import { Card, Empty } from "antd";

export const SalaryChart = ({ dates }) => {
  const data = getCashByMonths(dates);

  if (!dates.length) {
    return (
      <Empty
        image={Empty.PRESENTED_IMAGE_SIMPLE}
        description={<span>Немає даних</span>}
      />
    );
  }

  return (
    <>
      <Card>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart
            data={data}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <Tooltip />
            <Legend />
            <Bar dataKey="cash" fill="#8884d8" name="Зарплата" />
          </BarChart>
        </ResponsiveContainer>
      </Card>
    </>
  );
};
