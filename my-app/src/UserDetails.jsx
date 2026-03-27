//conditional rendering

export const UserDetails = ({ name, isOnline, hideOffline, isPremium, isNewUser }) => {
    if (hideOffline && !isOnline) {
        return null; // Don't render anything if the user is offline and hideOffline is true
    }

//     if (isOnline) {
//         return (
//             <div>
//                 <h3>{name}</h3>
//                 <span style={{ color: "green" }}>Online</span>
//                 <p>available for chat</p>
//                 <button> send message</button>
//             </div>
//         )
//     }
//     return (
//         <div>
//             <h3>{name}</h3>
//             <span style={{ color: "red" }}>Offline</span>
//             <p>not available for chat</p>
//             <small> Check back later</small>
//         </div>
//     )
// };


    return (
        <div>
            <h3>{name}</h3>
            {isPremium && <span>⭐ Premium</span>}
            {isNewUser && <span>🆕 New User</span>}
            <span>{isOnline ? "Online" : "Offline"}</span>
            <p>{isOnline ? "available for chat" : "not available for chat"}</p>
            {isOnline ? <button> send message</button> : <small> Check back later</small>}
        </div>
    );
};