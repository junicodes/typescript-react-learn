

import { Name } from "./Person.types";

type PersonListProps = {
    names: Name[]
}

const PersonList = ({names}: PersonListProps ) => {
    return (
        <div>
         {
             names.map(name => (
                <h2 key={name.firstname}>
                    {name.firstname} {name.lastname}
                </h2>
             ))
         }
        </div>
    )
}

export default PersonList;