const Item = ({ name, isPacked }) => {
    //? solution 1

    // return (
    //     <li className="item">
    //         {name} {isPacked && '✔'}
    //     </li>
    // );

    //? solution 2
    return (
        <li className="item">
            {name} {isPacked ? '✔' : '❌'}
        </li>
    );
};

export const PackingList = () => {
    return (
        <div className="flex">
            <h2>Sally Ride's Packing List</h2>
            <ul>
                <Item isPacked={true} name="Space suit" />
                <Item isPacked={true} name="Helmet with a golden leaf" />
                <Item isPacked={false} name="Photo of Tam" />
            </ul>
        </div>
    );
};
