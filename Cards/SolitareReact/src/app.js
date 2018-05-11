import React from 'react';
import ReactDOM from 'react-dom';
import validator from 'validator';
import Default from './components/Default'

console.log(ReactDOM);
console.log(validator);
console.log('yes');
console.log('no');
//           /^^^^^\
//  \^o o^/  \ 0 0 /
//   \ - /    \ _ /
//             \_/
ReactDOM.render(<Default />, document.getElementById('app'));
