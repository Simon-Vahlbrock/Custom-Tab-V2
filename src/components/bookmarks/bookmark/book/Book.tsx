import React, {FC, useMemo} from "react";
import './book.scss';
import {Book as IBook} from "../../../../types/bookmarks";

const Book: FC<IBook> = ({name, link}) => {
    return useMemo(() => (
        <div className='book'>{name}</div>
    ), [name]);
}

Book.displayName = 'Book';

export default Book;