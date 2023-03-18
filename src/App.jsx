import React from "react";
import {Route, Routes} from "react-router-dom";
import {Layout} from "./components"
import {MainStackScreen, NewsDetails} from "./pages";
import {NotFound} from "./pages";
import ScrollToTop from "./ScrollToTop";

function App() {
    return (
        <div className="w-full overflow-hidden">
            <ScrollToTop>
                <Routes>
                    <Route path="/" element={<Layout />}>
                        <Route index element={<MainStackScreen />} />
                        <Route path="/home" element={<MainStackScreen />} />
                        <Route path="/culture" element={<NewsDetails />} />
                        <Route path="/home/:newsId" element={<NewsDetails />} />
                        <Route path="/fond_news" element={<NewsDetails />} />
                        <Route path="/forum_news" element={<NewsDetails />} />
                        <Route path="/israel_news" element={<NewsDetails />} />
                        <Route path="/our_projects" element={<NewsDetails />} />
                        <Route path="/ukraine_news" element={<NewsDetails />} />
                        <Route path="/world_news" element={<NewsDetails />} />
                    </Route>
                    <Route path="/*" element={<NotFound />} />
                </Routes>
            </ScrollToTop>
        </div>
    )
}

export default App
