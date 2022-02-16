

type StatusProps = {
    status: string
}
const Status = ( {status}:StatusProps) => {

    let message;

    if(status === 'loading') {
        message = 'Loading...';
    }else if (status === 'success') {
        message = 'Data fetched succesfully';
    }else if (status === 'error') {
        message = 'Error fecthing data';
    }

    return (
        <div>
            <h2> Status : {message}</h2>
        </div>
    )
}

export default Status;