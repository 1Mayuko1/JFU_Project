import React from "react";
import {Route, Routes} from "react-router-dom";
import {Layout} from "./components"
import {MainStackScreen} from "./pages";
import {NotFound} from "./pages";

function App() {
    return (
        <div className="w-full overflow-hidden">
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<MainStackScreen />} />
                    <Route path="/home" element={<MainStackScreen />} />
                    <Route path="/*" element={<NotFound />} />
                </Route>
            </Routes>
        </div>
    )
}

export default App
