import React from "react";
import {Route, Routes} from "react-router-dom";
import {Layout} from "./components"
import {
    Contacts,
    Culture,
    FondNews,
    ForumNews,
    IsraelNews,
    MainStackScreen,
    NewsDetails,
    OurProjects,
    UkraineNews,
    WorldNews,
    NotFound
} from "./pages";
import ScrollToTop from "./ScrollToTop";

function App() {
    return (
        <div className="w-full overflow-hidden">
            <ScrollToTop>
                <Routes>
                    <Route path="/" element={<Layout />}>
                        <Route index element={<MainStackScreen />} />
                        <Route path="/home" element={<MainStackScreen />} />
                        <Route path="/home/:newsId" element={<NewsDetails />} />
                        <Route path="/culture" element={<Culture />} />
                        <Route path="/fond_news" element={<FondNews />} />
                        <Route path="/forum_news" element={<ForumNews />} />
                        <Route path="/israel_news" element={<IsraelNews />} />
                        <Route path="/our_projects" element={<OurProjects />} />
                        <Route path="/ukraine_news" element={<UkraineNews />} />
                        <Route path="/world_news" element={<WorldNews />} />
                        <Route path="/contacts" element={<Contacts />} />
                    </Route>
                    <Route path="/*" element={<NotFound />} />
                </Routes>
            </ScrollToTop>
        </div>
    )
}

export default App
