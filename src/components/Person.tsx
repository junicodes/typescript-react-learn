

import { PersonProps } from './Person.types';


const Person = ({ name: {firstname, lastname} }: PersonProps) => {
    return (
        <div>
            {firstname} {lastname}
        </div>
    )
}

export default Person;