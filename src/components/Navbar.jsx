import { Link } from "react-router-dom";
import books from "../data/books";

const Navbar = () => {
    return (
        <nav>
            <ul>
                {books.map((book) =>(
                    <li key={book.slug}>
                        <Link to={`/book/${book.slug}`}>{book.title}</Link>
                    </li>
                ))}
                <li><Link to="/">Accueil</Link></li>
                <li><Link to="/about">À propos</Link></li>
                <li><Link to="/documentation">Documentation</Link></li>
            </ul>
        </nav>
    );
};

export default Navbar;