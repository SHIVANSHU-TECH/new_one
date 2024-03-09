"use client"; // Ensure this code only runs in the browser environment

import Sidebar from "@/components/DashboardSidebar/Sidebar";
import React, { useEffect, useState } from "react";
import css from "@/app/dashboard/dashboard.module.css";
import Recent from "@/components/DashboardRecent/Recent";
import Transactions from "@/components/DashboardTransactions/Transactions";

const Page = () => {
  const [password, setPassword] = useState('');
  const [showPrompt, setShowPrompt] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handlePasswordSubmit = () => {
    const correctPassword = "<password.>";
    console.log(correctPassword);
    
    // Compare passwords
    if (password === correctPassword) {
      setShowPrompt(false);
      setIsAuthenticated(true);
      localStorage.setItem('dashboardAuthenticated', 'true');
    } else {
      alert('Incorrect password');
    }
  };

  useEffect(() => {
    // Check localStorage only in the browser environment
    if (typeof window !== 'undefined') {
      const isAuthenticated = localStorage.getItem('dashboardAuthenticated');
      if (isAuthenticated) {
        setIsAuthenticated(true);
        setShowPrompt(false);
      }
    }
  }, []);

  return isAuthenticated ? (
    <div className={css.dashboardContainer}>
      <Sidebar />
      <div className={css.rightSideRecents}>
        <div className={css.recents}>
          <Recent heading="Events" data={8} />
          <Recent heading="Internships" data={10} />
        </div>
        <div className={css.recentTables}>
          <Transactions />
        </div>
      </div>
    </div>
  ) : (
    <div>
      {showPrompt && (
        <div>
          <h2>Please enter the dashboard password:</h2>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button onClick={handlePasswordSubmit}>Submit</button>
        </div>
      )}
    </div>
  );
};

export default Page;
