export const Error = ({ error }) => {
    return (
        <p className="no-articles"> {error}: Couldn't fetch the data </p>
    );
}