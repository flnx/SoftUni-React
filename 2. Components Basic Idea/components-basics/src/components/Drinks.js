function Drink({ name }) {
    let type, years, dose;

    if (name === 'tea') {
        type = 'leaf';
        dose = '15-70 mg/cup';
        years = '4,000+ years';
    } else {
        type = 'bean';
        dose = '80-185 mg/cup';
        years = '1,000+ years';
    }

    return (
        <section>
            <h1>{name}</h1>
                <dl className="drinks">
                    <dt>Part of plant</dt>
                    <dd>{type}</dd>
                    <dt>Caffeine content</dt>
                    <dd>{dose}</dd>
                    <dt>Age</dt>
                    <dd>{years}</dd>
                </dl>
        </section>
    );
}

export function DrinkList() {
    return (
        <div className="flex">
            <Drink name="tea" />
            <Drink name="coffee" />
        </div>
    );
}
