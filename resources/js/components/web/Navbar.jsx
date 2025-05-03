import React, { useState } from "react";

const Navbar = () => {
    const [activeTab, setActiveTab] = useState(0);

    const handleTabClick = (index) => {
        setActiveTab(index);
    };

    return (
        <nav className="navigation-bar">
            <div
                className={`nav-item ${activeTab === 0 ? "active" : ""}`}
                onClick={() => handleTabClick(0)}
            >
                <i className="bi bi-house-door"></i>
            </div>
            <div
                className={`nav-item ${activeTab === 1 ? "active" : ""}`}
                onClick={() => handleTabClick(1)}
            >
                <i className="bi bi-award"></i>
            </div>

            <div
                className={`nav-item ${activeTab === 2 ? "active" : ""} middle`}
                onClick={() => handleTabClick(2)}
            >
                <i className="bi bi-github"></i>
            </div>
            <div
                className={`nav-item ${activeTab === 3 ? "active" : ""}`}
                onClick={() => handleTabClick(3)}
            >
                <i className="bi bi-instagram"></i>
            </div>
            <div
                className={`nav-item ${activeTab === 4 ? "active" : ""}`}
                onClick={() => handleTabClick(4)}
            >
                <i className="bi bi-linkedin"></i>
            </div>
            <div
                className="active-indicator"
                style={{ transform: `translateX(calc(100% * ${activeTab}))` }}
            />
        </nav>
    );
};

export default Navbar;
