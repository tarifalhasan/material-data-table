import { useState } from 'react';
import { Sidebar, Menu, MenuItem, useProSidebar } from 'react-pro-sidebar';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import PeopleOutlinedIcon from '@mui/icons-material/PeopleOutlined';
import ContactsOutlinedIcon from '@mui/icons-material/ContactsOutlined';
import ReceiptOutlinedIcon from '@mui/icons-material/ReceiptOutlined';
import CalendarTodayOutlinedIcon from '@mui/icons-material/CalendarTodayOutlined';
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';

function SIdebar() {
  const { collapseSidebar } = useProSidebar();
  const [sidebarCollapsed, setSidebarCollapsed] = useState<boolean>(false);

  const handleSidebarCollapse = () => {
    collapseSidebar();
    setSidebarCollapsed(!sidebarCollapsed);
  };

  return (
    <div
      className=""
      id="sidebar"
      style={{ height: '100vh', display: 'flex', maxWidth: '72px' }}
    >
      <Sidebar style={{ height: '100vh' }}>
        <Menu>
          <MenuItem icon={<HomeOutlinedIcon />}></MenuItem>
          <MenuItem icon={<PeopleOutlinedIcon />}></MenuItem>
          <MenuItem icon={<ContactsOutlinedIcon />}></MenuItem>
          <MenuItem icon={<ReceiptOutlinedIcon />}></MenuItem>
          <MenuItem icon={<HelpOutlineOutlinedIcon />}></MenuItem>
          <MenuItem icon={<CalendarTodayOutlinedIcon />}></MenuItem>
        </Menu>
      </Sidebar>
    </div>
  );
}

export default SIdebar;
