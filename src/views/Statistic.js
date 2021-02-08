import { Col, Divider, Row } from "antd";
import React, { useContext } from "react";
import { context } from "../context";
import { SalaryChart } from "../components/charts/salary-chart";
import { WorkingDaysChart } from "../components/charts/working-days-chart";
import { Typography } from "antd";

const { Title } = Typography;

export const Statistic = () => {
  const { state } = useContext(context);
  const { dates } = state;

  return (
    <Row gutter={2} justify={"center"}>
      <Col span={22}>
        <Title level={3} className="text-center">
          Зарплата по місяцях
        </Title>
        <SalaryChart dates={dates} />
        <Divider />
      </Col>
      <Col span={22}>
        <Title level={3} className="text-center">
          Робочі дні по місяцях
        </Title>
        <WorkingDaysChart dates={dates} />
      </Col>
    </Row>
  );
};
