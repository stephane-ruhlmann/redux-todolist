import React from 'react';

export default function List({elements = [], onRemove}) {
  return (
    <ul>
      {
        elements.map((el, index) => {
          function onClick() {
            onRemove(index);
          }
          return (
            <li key={index}>
              {el}
              <span onClick={onClick} style={{cursor:'pointer', color : 'red'}}> [x]</span>
            </li>
          );
        })
      }
    </ul>
  );
}