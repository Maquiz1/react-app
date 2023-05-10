// PASSING PROPS 1
import { Profile } from './Profile.js';

export default function App() {
  return (
    <Profile />
  );
}



// const baseUrl = 'https://i.imgur.com/';
// const person = {
//   name: 'Gregorio Y. Zara',
//   imageId: '7vQD0fP',
//   imageSize: 's',
//   theme: {
//     backgroundColor: 'black',
//     color: 'pink'
//   }
// };

// export default function TodoList() {
//   return (
//     <div style={person.theme}>
//       <h1>{person.name}'s Todos</h1>
//       <img
//         className="avatar"
//         src={baseUrl + person.imageId + person.imageSize + '.jpg'}
//         alt={person.name}
//       />
//       <ul>
//         <li>Improve the videophone</li>
//         <li>Prepare aeronautics lectures</li>
//         <li>Work on the alcohol-fuelled engine</li>
//       </ul>
//     </div>
//   );
// }





// const person = {
//   name: 'Gregorio Y. Zara',
//   image : "https://i.imgur.com/7vQD0fPs.jpg",
//   theme: {
//     backgroundColor: 'black',
//     color: 'pink'
//   }
// };

// export default function TodoList() {
//   return (
//     <div style={person.theme}>
//       <h1>{person.name}'s Todos</h1>
//       <img
//         className="avatar"
//         src={person.image}
//         alt="Gregorio Y. Zara"
//       />
//       <ul>
//         <li>Improve the videophone</li>
//         <li>Prepare aeronautics lectures</li>
//         <li>Work on the alcohol-fuelled engine</li>
//       </ul>
//     </div>
//   );
// }




// const person = {
//   name: 'Gregorio Y. Zara',
//   theme: {
//     backgroundColor: 'black',
//     color: 'pink'
//   }
// };

// export default function TodoList() {
//   return (
//     <div style={person.theme}>
//       <h1>{person.name}'s Todos</h1>
//       <img
//         className="avatar"
//         src="https://i.imgur.com/7vQD0fPs.jpg"
//         alt="Gregorio Y. Zara"
//       />
//       <ul>
//         <li>Improve the videophone</li>
//         <li>Prepare aeronautics lectures</li>
//         <li>Work on the alcohol-fuelled engine</li>
//       </ul>
//     </div>
//   );
// }




// // // PASSING OBJECTS
// export default function TodoList() {
//   return (
//     <ul style={{
//       backgroundColor: 'black',
//       color: 'pink'
//     }}>
//       <li>Improve the videophone</li>
//       <li>Prepare aeronautics lectures</li>
//       <li>Work on the alcohol-fuelled engine</li>
//     </ul>
//   );
// }


// const today = new Date();

// function formatDate(date) {
//   return new Intl.DateTimeFormat(
//     'en-US',
//     { weekday: 'long' }
//   ).format(date);
// }

// export default function TodoList() {
//   return (
//     <h1>To Do List for {formatDate(today)}</h1>
//   );
// }


// // PASSING BRACKETS
// export default function TodoList() {
//   const name = 'Gregorio Y. Zara';
//   return (
//     <h1>{name}'s To Do List</h1>
//   );
// }

// // passing string
// export default function Avatar() {
//   const avatar = 'https://i.imgur.com/7vQD0fPs.jpg';
//   const description = 'Gregorio Y. Zara';
//   return (
//     <img
//       className="avatar"
//       src={avatar}
//       alt={description}
//     />
//   );
// }


// export default function Bio() {
//   return (
//     <>
//       <div className="intro">
//         <h1>Welcome to my website!</h1>
//       </div>
//       <p className="summary">
//         You can find my thoughts here.
//         <br />
//         <br />
//         <b>
//           And <i>pictures</i>
//         </b>
//         of scientists!
//       </p>
//     </>

//   );
// }


// // import Gallery from './Gallery.js';
// export default function App() {
//   return (
//     <Gallery />
//   );
// }
