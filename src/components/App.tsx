import React, {FC, useMemo} from "react";
import './app.scss'
import {getBackgroundImage} from "../utils/background";
import Search from "./search/Search";

const App:FC = () => {
    return useMemo(() => (
        <div className='app' style={{backgroundImage: getBackgroundImage()}}>
            <Search/>
        </div>
    ), [])
}

App.displayName = 'App';

export default App;