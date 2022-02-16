


type PersonName = {
    name: {
        first: string,
        lastname: string
    }
}

const Person = ({ name: {first, lastname} }: PersonName) => {
    return (
        <div>
            {first} {lastname}
        </div>
    )
}

export default Person;