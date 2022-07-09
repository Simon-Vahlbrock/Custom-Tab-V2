import React, {FC, useMemo} from "react";
import './bookmarks.scss';
import {BOOKMARKS} from "../../constants/BOOKMARKS";
import Bookmark from "./bookmark/Bookmark";

const Bookmarks: FC = () => {

    return useMemo(() => (
        <div className='bookmarks'>
            {BOOKMARKS.map(({books, folderName}) => (
                <Bookmark books={books} folderName={folderName}/>
            ))}
        </div>
    ), []);
}

Bookmarks.displayName = 'Bookmarks';

export default Bookmarks;