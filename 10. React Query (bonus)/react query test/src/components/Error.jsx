export const Error = ({ error }) => {
    return (
        <p className="no-articles"> {error.message || error}, Please try again... </p>
    );
}