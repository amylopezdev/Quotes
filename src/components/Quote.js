export const Quote = ({ quote, author, context }) => {
    return (
        <li className="quote-item">
            <p className="quote">{quote}</p>
            <h3 className="author">{author}</h3>
            <span className="context">{context}</span>
        </li>
    );
};