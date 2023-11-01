
import React from "react";
import Sidebar from "@/components/DashboardSidebar/Sidebar";
import Internships from "@/components/DashboardInternships/Internships";
import css from "@/app/dashboard/dashboard.module.css";

const Internshipspage = () => {
  return (
    <div className={css.dashboardContainer}>
      <Sidebar />
      <Internships />
    </div>
  );
};

export default Internshipspage;
