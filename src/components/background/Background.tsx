import React, {FC, useMemo} from "react";
import './background.scss';
import {getBackgroundImage} from "../../utils/background";

const Background: FC = () => {
    return useMemo(() => (
        <div className='background' style={{backgroundImage: getBackgroundImage()}}></div>
    ), []);
}

Background.displayName = 'Background';

export default Background;