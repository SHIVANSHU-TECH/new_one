
import React from "react";
import Sidebar from "@/components/user-sidebar/Sidebar";
import Internships from "@/components/user-internships/Internships";
import css from "@/app/user-dashboard/dashboard.module.css";

const Internshipspage = () => {
  return (
    <div className={css.dashboardContainer}>
      <Sidebar />
      <Internships />
    </div>
  );
};

export default Internshipspage;
