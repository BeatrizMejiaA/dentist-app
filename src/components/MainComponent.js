import React from 'react';
import Sidebar from './SidebarComponent';
import {Home} from './HomeComponent';
import {Patient} from './CreatePatient';
import Schedule from './ScheduleApointment';
import Calendar from './ScheduleReport';
import Login from './LoginComponent';
import { Routes, Route, Navigate} from 'react-router-dom';

const Main = () => {
        return(
            <div>
                <Routes>
                    <Route path = "/" element = {<Sidebar/>} >
                        <Route index element={<Home />} />
                        <Route path ="patient" element={<Patient />} />
                        <Route path ="schedule" element={<Schedule />} />
                        <Route path = "calendar" element = {<Calendar/>} />
                        <Route path = "*" element = {<Navigate replace to = "/" />} />
                    </Route>    
                </Routes>
            </div>
        );
}

export default Main;
 