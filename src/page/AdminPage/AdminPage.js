import React, { useState } from 'react';
import './AdminPage.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBook, faUsers, faSync, faChartBar, faCog, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';

const AdminPage = () => {
    const [content, setContent] = useState('Dashboard');

    const renderContent = () => {
        switch (content) {
            case 'Manage Books':
                return (
                    <div>
                        <h1>Manage Books</h1>
                        <div className="card">
                            <h3>Book List</h3>
                            <p>Manage all the books in the library here.</p>
                        </div>
                    </div>
                );
            case 'Manage Users':
                return (
                    <div>
                        <h1>Manage Users</h1>
                        <div className="card">
                            <h3>User List</h3>
                            <p>Manage all the users of the library here.</p>
                        </div>
                    </div>
                );
            case 'Manage Borrow/Return':
                return (
                    <div>
                        <h1>Manage Borrow/Return</h1>
                        <div className="card">
                            <h3>Borrowed Books</h3>
                            <p>Manage all borrowing and returning activities here.</p>
                        </div>
                    </div>
                );
            case 'Reports':
                return (
                    <div>
                        <h1>Reports</h1>
                        <div className="card">
                            <h3>Library Reports</h3>
                            <p>View various reports about library activities here.</p>
                        </div>
                    </div>
                );
            case 'Settings':
                return (
                    <div>
                        <h1>Settings</h1>
                        <div className="card">
                            <h3>Library Settings</h3>
                            <p>Configure library settings here.</p>
                        </div>
                    </div>
                );
            case 'Logout':
                return (
                    <div>
                        <h1>Logout</h1>
                        <div className="card">
                            <h3>Goodbye!</h3>
                            <p>You have successfully logged out.</p>
                        </div>
                    </div>
                );
            default:
                return (
                    <div>
                        <h1>Dashboard</h1>
                        <div className="card">
                            <h3>Total Books</h3>
                            <p>1,500</p>
                        </div>
                        <div className="card">
                            <h3>Active Users</h3>
                            <p>350</p>
                        </div>
                        <div className="card">
                            <h3>Books Borrowed Today</h3>
                            <p>45</p>
                        </div>
                    </div>
                );
        }
    };

    return (
        <div className="admin-page">
            <div className="sidebar">
                <h2>Library Admin</h2>
                <ul>
                    <li onClick={() => setContent('Manage Books')}><FontAwesomeIcon icon={faBook} /> Manage Books</li>
                    <li onClick={() => setContent('Manage Users')}><FontAwesomeIcon icon={faUsers} /> Manage Users</li>
                    <li onClick={() => setContent('Manage Borrow/Return')}><FontAwesomeIcon icon={faSync} /> Manage Borrow/Return</li>
                    <li onClick={() => setContent('Reports')}><FontAwesomeIcon icon={faChartBar} /> Reports</li>
                    <li onClick={() => setContent('Settings')}><FontAwesomeIcon icon={faCog} /> Settings</li>
                    <li onClick={() => setContent('Logout')}><FontAwesomeIcon icon={faSignOutAlt} /> Logout</li>
                </ul>
            </div>
            <div className="content">
                {renderContent()}
            </div>
        </div>
    );
};

export default AdminPage;