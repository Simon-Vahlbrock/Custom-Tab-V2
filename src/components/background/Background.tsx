import React, {FC, useMemo} from "react";
import './background.scss';
import {getBackgroundImage} from "../../utils/background";
import Search from "../search/Search";

const Background: FC = () => {
    return useMemo(() => (
        <div className='background' style={{backgroundImage: getBackgroundImage()}}>
            <Search/>
        </div>
    ), []);
}

Background.displayName = 'Background';

export default Background;