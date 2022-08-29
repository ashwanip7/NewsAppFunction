import "./App.css";
import React, { useState } from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";

const App = () => {
   const apikey = process.env.REACT_APP_NEWS_API;
   const pageSize = 6;
   const [progress, setProgress] = useState(0);

   return (
      <Router>
         <div>
            <Navbar />
            <LoadingBar color="#f11946" height={3} waitingTime={300} loaderSpeed={500} progress={progress} />
            <Routes>
               <Route path="/" element={<News setProgress={setProgress} apikey={apikey} key="general" pageSize={pageSize} country="in" category="general" />}></Route>
               <Route path="/business" element={<News setProgress={setProgress} apikey={apikey} key="business" pageSize={pageSize} country="in" category="business" />}></Route>
               <Route path="/entertainment" element={<News setProgress={setProgress} apikey={apikey} key="entertainment" pageSize={pageSize} country="in" category="entertainment" />}></Route>
               <Route path="/health" element={<News setProgress={setProgress} apikey={apikey} key="health" pageSize={pageSize} country="in" category="health" />}></Route>
               <Route path="/science" element={<News setProgress={setProgress} apikey={apikey} key="science" pageSize={pageSize} country="in" category="science" />}></Route>
               <Route path="/sports" element={<News setProgress={setProgress} apikey={apikey} key="sports" pageSize={pageSize} country="in" category="sports" />}></Route>
               <Route path="/technology" element={<News setProgress={setProgress} apikey={apikey} key="technology" pageSize={pageSize} country="in" category="technology" />}></Route>
            </Routes>
         </div>
      </Router>
   );
};

export default App;
