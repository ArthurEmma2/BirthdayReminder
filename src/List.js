// import React from 'react';

// const List = ({people}) => {
//   return (
//     <>
//       {people.map((person) => {
//         const { id, name, age, image } = person
//         return (
//           <article key={id} className='person'>
//             <img src={image} alt={name} />
//             <div>
//               <h4>{name}</h4>
//               <p>{age} years</p>
//             </div>
//           </article>
//         )
//       })}
      
//       <h2>list component</h2>
//     </>
//   )

// }

// export default List;















































import React from "react";


const List = ({people}) => {
  return (
    <section>
      {people.map((person) => {
        const { id, name, age, image } = person
        return (
          <article className="person" key={id}>
            <img src={image} alt={name} />
            <div>
              <h3>
                {name}
              </h3>
              <p>
                {age} years
              </p>
            </div>
          </article>
        )
      })}
    </section>
  )
}




export default List



