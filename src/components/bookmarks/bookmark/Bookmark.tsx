import React, {FC, useMemo, useState} from "react";
import './bookmark.scss';
import {Book, Bookmark as IBookmark} from "../../../types/bookmarks";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faFolderClosed, faFolderOpen} from "@fortawesome/free-solid-svg-icons";

interface BookmarkProps {
    books: Book[];
    folderName: IBookmark["folderName"]
}

const Bookmark: FC<BookmarkProps> = ({folderName, books}) => {
    const [isOpen, setIsOpen] = useState(false);

    return useMemo(() => (
        <div className='bookmark'>
            <div className='bookmark__folder-name'>
                <FontAwesomeIcon
                    icon={isOpen ? faFolderOpen : faFolderClosed}
                />
                <div>{folderName}</div>
            </div>
        </div>
    ), [folderName, isOpen]);
}

Bookmark.displayName = 'Bookmark';

export default Bookmark;