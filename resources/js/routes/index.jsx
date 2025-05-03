import React from "react";
import { Routes, Route } from "react-router-dom";


import Hero from "../components/web/Hero";

function Index() {
    return (
        <div>
            <Routes>
                <Route path="/" element={
                     <> <Hero />
                    
                    
                 </>
                    } />
            </Routes>
        </div>
    );
}

export default Index;