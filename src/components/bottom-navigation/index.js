import { CalendarOutlined, LineChartOutlined } from "@ant-design/icons";
import React from "react";
import { NavLink } from "react-router-dom";
import "./bottom-navigation.scss";

export const BottomNavigation = () => {
  const iconStyle = { fontSize: "25px" };

  return (
    <nav className="bottom-navigation">
      <NavLink to="/" className="link" activeClassName="link-active" exact>
        <span className="label">Календар</span>
        <CalendarOutlined style={iconStyle} />
      </NavLink>
      <NavLink to="/statistic" className="link" activeClassName="link-active">
        <span className="label">Статистика</span>
        <LineChartOutlined style={iconStyle} />
      </NavLink>
    </nav>
  );
};
