import React, {FC, useMemo} from "react";
import './app.scss'
import Background from "./background/Background";
import Bookmarks from "./bookmarks/Bookmarks";
import Search from "./search/Search";

const App: FC = () => {
    return useMemo(() => (
        <div className='app'>
            <Bookmarks/>
            <Background/>
        </div>
    ), [])
}

App.displayName = 'App';

export default App;