import React from 'react';
import {
  FaHome,
  FaUserFriends,
  FaCheckSquare,
  FaFileAlt,
  FaEnvelope,
  FaCog,
  FaSignOutAlt,
} from 'react-icons/fa';

const Sidebar = () => (
  <aside className="w-60 h-screen bg-white shadow-md p-4 fixed left-0 top-0 flex flex-col justify-between">
    <div>
      <h2 className="text-xl font-bold mb-6">solus</h2>
      <nav className="flex flex-col gap-5 text-sm text-gray-600">
        <div className="flex items-center gap-2">
          <FaHome /> <span>Home</span>
        </div>
        <div className="flex items-center gap-2">
          <FaUserFriends /> <span>Clients & Leads</span>
        </div>
        <div className="flex items-center gap-2">
          <FaCheckSquare /> <span>Smart Actions</span>
        </div>
        <div className="flex items-center gap-2">
          <FaFileAlt /> <span>Business Info</span>
        </div>
        <div className="flex items-center gap-2">
          <FaEnvelope /> <span>Mail & Proposals</span>
        </div>
      </nav>
    </div>

    <div className="flex flex-col gap-4 text-sm text-gray-600 mt-6">
      <div className="flex items-center gap-2">
        <FaCog /> <span>Settings</span>
      </div>
      <div className="flex items-center gap-2">
        <FaSignOutAlt /> <span>Log out</span>
      </div>
    </div>
  </aside>
);

export default Sidebar;
