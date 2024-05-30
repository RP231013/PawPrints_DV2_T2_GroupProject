import React from 'react';
import { Route, Routes, Link } from 'react-router-dom';
import Welcome from './Welcome';
import Approvals from './Approvals';
import './AdminHome.css'; // Import the CSS file

const AdminHome = () => {
    return (
        <div className="admin-container">
            <div className="sidebar">
                <ul>
                    <li><Link to="home">Welcome</Link></li>
                    <li><Link to="approvals">Approvals</Link></li>
                </ul>
            </div>
            <div className="content">
                <Routes>
                    <Route path="home" element={<Welcome />} />
                    <Route path="approvals" element={<Approvals />} />
                </Routes>
            </div>
        </div>
    );
};

export default AdminHome;