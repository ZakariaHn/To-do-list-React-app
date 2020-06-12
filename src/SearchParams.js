// import React, { useState } from "react";
// import { ANIMALS } from "@frontendmasters/pet";
// const SearchParams = () => {
//   const [location, setLocation] = useState("Seatle, WA");
//   const [animal, setAnimal] = useState("Dog");
//   const [breed, setBreed] = useState("");
//   const [breeds, setBreeds] = useState([]);

//   return (
//     <div className="search-params">
//       <h2>{location}</h2>
//       <form>
//         <lable htmlFor="location">
//           Location
//           <input
//             id="location"
//             value={location}
//             placeholder="location"
//             onChange={(e) => setLocation(e.target.value)}
//           />
//         </lable>
//         <label htmlFor="Animal">
//           Animal
//           <select
//             id="animal"
//             value={animal}
//             onChange={(e) => setAnimal(e.target.value)}
//             onBlur={(e) => setAnimal(e.target.value)}
//           >
//             <option>All</option>
//             {ANIMALS.map((animal) => (
//               <option key={animal} value={animal}>
//                 {animal}
//               </option>
//             ))}
//           </select>
//         </label>
//         <lable htmlFor="breed">
//           breed
//           <select
//             id="breed"
//             value={breed}
//             onChange={(e) => setBreed(e.target.value)}
//             onBlur={(e) => setBreed(e.target.value)}
//             disabled={breeds.length === 0}
//           >
//             <option>All</option>
//             {breeds.map((breedString) => (
//               <option key={breedString} value={breedString}>
//                 {breedString}
//               </option>
//             ))}
//           </select>
//         </lable>
//         <button>Submit</button>
//       </form>
//     </div>
//   );
// };

// export default SearchParams;
