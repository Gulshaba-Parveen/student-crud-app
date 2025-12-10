import React from "react";
import { Routes, Route } from "react-router-dom";

import Login from "../pages/Login";
import Landing from "../pages/Landing";
import CreateStudent from "../pages/CreateStudent";
import StudentList from "../pages/StudentList";
import ViewStudent from "../pages/ViewStudent";

const AllRoute = () => {
    return (
        <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/landing" element={<Landing />} />
            <Route path="/create-student" element={<CreateStudent />} />
            <Route path="/student-list" element={<StudentList />} />
            <Route path="/view-student/:id" element={<ViewStudent />} />
        </Routes>
    );
};

export default AllRoute;
