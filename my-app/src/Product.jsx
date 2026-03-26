export const Product = (props) => {
    return (
        <div>
            <h3>{props.title}</h3>
            <p>price : ${props.price}</p>
            <p>IN stock : {props.instock ? "yes" : "no"}</p>
            <p>category : {props.category.join(", ")}</p>
        </div>
    );
};
