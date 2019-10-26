import React from 'react';

export const Editor = (props: {}) => {
  console.log(props);
  return (
    <div contentEditable>
      <p>click 2 edit</p>
    </div>
  )
}