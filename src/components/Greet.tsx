

type GreetProps = {
    name: string,
    messageCount?: number,
    isLoggedIn: Boolean
}

const Greet = ({name, messageCount = 0, isLoggedIn}: GreetProps) => {
    return (
        <div>
            {
                isLoggedIn ?
                <h2>Welcome {name} , You have {messageCount} unread messages</h2>
                : 
                <h2>Welcome Guest</h2>
            }
        </div>
    )
}

export default Greet