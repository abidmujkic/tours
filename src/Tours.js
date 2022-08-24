import React from 'react';
import Tour from './Tour';
const Tours = ({tours, removeTour}) => {
  return <section>
    <div className="title"></div>
    <h2>
      Ours tours
    </h2>
    <div className="underline"></div>
    <div>
      {tours.map((tour)=> {
      return <Tour key={tour.id} {...tour} removeTour={removeTour}></Tour>
      }
      )}
    </div>
  </section>
    ;
};

export default Tours;