import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
const SETTINGS = React.lazy(() => import("pages/SETTINGS"));
const SUBJECTS = React.lazy(() => import("pages/SUBJECTS"));
const ACCOUNTADDEXPENSES = React.lazy(() => import("pages/ACCOUNTADDEXPENSES"));
const ACCOUNTEXPENSES = React.lazy(() => import("pages/ACCOUNTEXPENSES"));
const ACCOUNTSTUDENTFEES = React.lazy(() => import("pages/ACCOUNTSTUDENTFEES"));
const ACCOUNTFEESGROUP = React.lazy(() => import("pages/ACCOUNTFEESGROUP"));
const TEACHERSTEACHERDETAILS = React.lazy(
  () => import("pages/TEACHERSTEACHERDETAILS"),
);
const TEACHERSADDTEACHER = React.lazy(() => import("pages/TEACHERSADDTEACHER"));
const TEACHERSALLTEACHER = React.lazy(() => import("pages/TEACHERSALLTEACHER"));
const STUDENTSSTUDENTPROMOTION = React.lazy(
  () => import("pages/STUDENTSSTUDENTPROMOTION"),
);
const STUDENTSADDSTUDENTOne = React.lazy(
  () => import("pages/STUDENTSADDSTUDENTOne"),
);
const STUDENTDETAILS = React.lazy(() => import("pages/STUDENTDETAILS"));
const STUDENTSALLSTUDENTS = React.lazy(
  () => import("pages/STUDENTSALLSTUDENTS"),
);
const DASHBOARD = React.lazy(() => import("pages/DASHBOARD"));
const LOGIN = React.lazy(() => import("pages/LOGIN"));
const ProjectRoutes = () => {
  return (
    <React.Suspense fallback={<>Loading...</>}>
      <Router>
        <Routes>
          <Route path="/" element={<LOGIN />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/dashboard" element={<DASHBOARD />} />
          <Route
            path="/studentsallstudents"
            element={<STUDENTSALLSTUDENTS />}
          />
          <Route path="/studentdetails" element={<STUDENTDETAILS />} />
          <Route
            path="/studentsaddstudentone"
            element={<STUDENTSADDSTUDENTOne />}
          />
          <Route
            path="/studentsstudentpromotion"
            element={<STUDENTSSTUDENTPROMOTION />}
          />
          <Route path="/teachersallteacher" element={<TEACHERSALLTEACHER />} />
          <Route path="/teachersaddteacher" element={<TEACHERSADDTEACHER />} />
          <Route
            path="/teachersteacherdetails"
            element={<TEACHERSTEACHERDETAILS />}
          />
          <Route path="/accountfeesgroup" element={<ACCOUNTFEESGROUP />} />
          <Route path="/accountstudentfees" element={<ACCOUNTSTUDENTFEES />} />
          <Route path="/accountexpenses" element={<ACCOUNTEXPENSES />} />
          <Route path="/accountaddexpenses" element={<ACCOUNTADDEXPENSES />} />
          <Route path="/subjects" element={<SUBJECTS />} />
          <Route path="/settings" element={<SETTINGS />} />
          <Route path="/dhiwise-dashboard" element={<Home />} />
        </Routes>
      </Router>
    </React.Suspense>
  );
};
export default ProjectRoutes;
