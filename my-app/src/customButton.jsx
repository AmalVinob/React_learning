// export const CustomButton = () =>{
//     const handleClick = () => {
//         alert("Button Clicked!");
//     }
//     return <button onClick={handleClick}>like</button>
// }

// export const CustomButton = () =>{
//     const handleClick = () => {
//         alert("Button Clicked!");
//     }
//     return <button onClick={handleClick}>like</button>
// }

export const CustomButton = ({text}) => {
    const name = "codevolution";
    const handleClick = () => {
        console.log(`hey ${name}, button clicked! ${text}`);
    }
    return <button onClick={handleClick}>{text}</button>
}