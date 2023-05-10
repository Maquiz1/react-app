// PASSING PROPS 1
import { getImageUrl } from './utils.js';

export function Avatar({ person, size }) {
    return (
        <img
            className="avatar"
            src={getImageUrl(person)}
            alt={person.name}
            width={size}
            height={size}
        />
    );
}




// import Profile from './Profile.js';

// export default function Gallery() {
//     return (
//         <section>
//             <h1>Amazing scientists</h1>
//             <Profile />
//             <Profile />
//             <Profile />
//         </section>
//     );
// }
