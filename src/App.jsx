import React from "react";
import {Route, Routes} from "react-router-dom";
import {Layout} from "./components"
import {MainStackScreen, NewsDetails} from "./pages";
import {NotFound} from "./pages";

function App() {
    return (
        <div className="w-full overflow-hidden">
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<MainStackScreen />} />
                    <Route path="/home" element={<MainStackScreen />} />
                    <Route path="/news_details" element={<NewsDetails />} />
                </Route>
                <Route path="/*" element={<NotFound />} />
            </Routes>
        </div>
    )
}

export default App
