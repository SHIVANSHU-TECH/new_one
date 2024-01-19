
import React from "react";
import Sidebar from "@/components/user-sidebar/Sidebar";
import Events from "@/components/user-events/events";
import css from "@/app/user-dashboard/dashboard.module.css";

const EventsPage = () => {
  return (
    <div className={css.dashboardContainer}>
      <Sidebar />
      <Events />
    </div>
  );
};

export default EventsPage;

