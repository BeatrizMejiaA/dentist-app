import React from 'react';
import {
  CDBSidebar,
  CDBSidebarContent,
  CDBSidebarFooter,
  CDBSidebarHeader,
  CDBSidebarMenu,
  CDBSidebarMenuItem,
} from 'cdbreact';
import { NavLink, Outlet } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div style={{ display: 'flex', height: '100vh', overflow: 'scroll initial' }}>
      <CDBSidebar textColor="#F8F9F9" backgroundColor="#17202A" >
        <CDBSidebarHeader prefix={<i className="fa fa-list fa-large"></i>}>
          <a href="/" className="text-decoration-none" style={{ color: 'inherit' }}>
            E-dent
          </a>
        </CDBSidebarHeader>

        <CDBSidebarContent className="sidebar-content">
          <CDBSidebarMenu>
            <NavLink ClassName="active" to="/" >
              <CDBSidebarMenuItem icon="home">Pagina de inicio</CDBSidebarMenuItem>
            </NavLink>
            <NavLink to="/patient" ClassName="active">
              <CDBSidebarMenuItem icon="user">Crear Paciente</CDBSidebarMenuItem>
            </NavLink>
            <NavLink to="/schedule" ClassName="active">
              <CDBSidebarMenuItem icon="pen">Registro de cita</CDBSidebarMenuItem>
            </NavLink>
            <NavLink to="/calendar" ClassName="active">
              <CDBSidebarMenuItem icon="sticky-note">Reporte de citas</CDBSidebarMenuItem>
            </NavLink>

            <NavLink to="/clientReport" ClassName="active">
              <CDBSidebarMenuItem icon="sticky-note">Reporte de clientes</CDBSidebarMenuItem>
            </NavLink>
          </CDBSidebarMenu>
        </CDBSidebarContent>

        <CDBSidebarFooter style={{ textAlign: 'center' }}>
          <div style={{padding: '20px 5px',}}>
            Dr .F. Loarca
          </div>
        </CDBSidebarFooter>
      </CDBSidebar>
      <section>
            <Outlet/>
      </section>
    </div>
  );
};

export default Sidebar;