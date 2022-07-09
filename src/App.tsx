import React, {FC, useMemo} from "react";
import './app.scss'

const App:FC = () => {
    return useMemo(() => (
        <div className='app'>My React App</div>
    ), [])
}

App.displayName = 'App';

export default App;