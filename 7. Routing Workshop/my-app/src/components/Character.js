export default function Character({ person }) {
    return (
        <div>
            <p className="person__name">Name: {person?.name}</p>
            <p className="person__info">Height: {person?.height}</p>
            <p className="person__info">Birth Year: {person?.birth_year}</p>
            <p className="person__info">Eyes: {person?.eye_color}</p>
        </div>
    );
}