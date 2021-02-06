import React from 'react';
import './css/descriptions.css';

function Descriptions() {
  return(
    <div className = 'container-fluid Descriptions'>
      <div className = 'row'>
        <div className = 'col'>
          <h5 className = 'title-text'>Real Cats</h5>
          <p className = 'sub-text'>
            Cats, cats, cats!! We have many lovable, cuddly cats, "purr-fect" for any family.</p>
        </div>
        <div className = 'col'>
          <h5 className = 'title-text'>Real Dogs</h5>
          <p className = 'sub-text'>
            Dogs are man's best friend. From big to small, we have all kinds of dogs. </p>
        </div>
        <div className = 'col'>
          <h5 className = 'title-text'>Real Friends</h5>
          <p className = 'sub-text'>
            Who says cats and dogs can't get along? Here at Furbook, we believe they usually can.</p>
         </div>
      </div>
    </div>
  );
}


export default Descriptions;