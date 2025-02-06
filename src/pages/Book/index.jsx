import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import books from "../../data/books";

const Book = () => {
    const { bookSlug } = useParams();
    const [currentBook, setCurrentBook] = useState(undefined);

    useEffect(() => {
        console.log("useEffect déclenché pour bookSlug :", bookSlug);
        const foundBook = books.find((book) => book.slug === bookSlug);
        setCurrentBook(foundBook);
    }, [bookSlug]);

    if (!currentBook) {
        return <p>❌ Ce livre n'existe pas.</p>
    }

    return (
        <div>
            <h1>{currentBook.title}</h1>
            <h2>📖 Auteur : {currentBook.author}</h2>
            <p>{currentBook.description}</p>
        </div>
    );
};

export default Book;