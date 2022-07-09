import React, {FC, useCallback, useMemo, useState} from "react";
import './bookmark.scss';
import {Book as IBook, Bookmark as IBookmark} from "../../../types/bookmarks";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faFolderClosed, faFolderOpen} from "@fortawesome/free-solid-svg-icons";
import Book from './book/Book'

interface BookmarkProps {
    books: IBook[];
    folderName: IBookmark["folderName"]
}

const Bookmark: FC<BookmarkProps> = ({folderName, books}) => {
    const [isOpen, setIsOpen] = useState(false);

    const handleMouseOver = useCallback(() => {
        setIsOpen(true)
    }, []);

    const handleMouseLeave = useCallback(() => {
        setIsOpen(false);
    }, []);

    return useMemo(() => (
        <div className='bookmark' onMouseOver={handleMouseOver} onMouseLeave={handleMouseLeave}>
            <div className='bookmark__folder-name'>
                <FontAwesomeIcon
                    icon={isOpen ? faFolderOpen : faFolderClosed}
                />
                <div>{folderName}</div>
            </div>
            <div className='bookmark__books'>
                {isOpen && books.map(({name, link}) => (<Book name={name} link={link}/>))}
            </div>
        </div>
    ), [books, folderName, handleMouseLeave, handleMouseOver, isOpen]);
}

Bookmark.displayName = 'Bookmark';

export default Bookmark;