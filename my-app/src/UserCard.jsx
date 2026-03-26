// import { UserInfo } from "./Userinfo";

// export const UserCard = (props) => {
//     return (
//         <div>
//             <h2> User details</h2>
//             <UserInfo {...props} />
//         </div>
//     );
// };

import { UserInfo } from "./Userinfo";

export const UserCard = (id, ...rest) => {
    return (
        <div>
            <h2> User {id} details</h2>
            <UserInfo {...rest} />
        </div>
    );
};