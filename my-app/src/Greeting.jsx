export const Greeting = ({name = "guest", message= "Hello!"}) => {
    return (
        <div>
            {message}, {name} 
        </div>
    )
}