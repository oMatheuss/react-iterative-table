<h1>REACT-ITERATIVE-TABLE</h1>

<p>A simple react component to easily print data arrays to screen</p>

<h3>Example of use:</h3>

``` typescript react
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Table, Col } from 'react-iterative-table';

const arr = [
  { id: 1, name: 'Zahrah Morin', color: 'Salmon pink' },
  { id: 2, name: 'Sania Russell', color: 'Quartz grey' },
  { id: 3, name: 'Yaqub Vaughan', color: 'Light blue' },
  { id: 4, name: 'Alasdair Andrew', color: 'May green' },
  { id: 5, name: 'Alexander Cervantes', color: 'Signal blue' },
  { id: 6, name: 'Leandro Clarkson', color: 'Cobalt blue' },
]

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <Table it={arr.length} >
      <Col func={i => arr[i].id} >ID</Col>
      <Col func={i => arr[i].name} >Name</Col>
      <Col func={i => arr[i].color} >Color</Col>
    </Table>
  </React.StrictMode>
);

```

<p>This piece of code shoud output the result below</p>

<table><thead><tr><th>ID</th><th>Name</th><th>Color</th></tr></thead><tbody><tr><td>1</td><td>Zahrah Morin</td><td>Salmon pink</td></tr><tr><td>2</td><td>Sania Russell</td><td>Quartz grey</td></tr><tr><td>3</td><td>Yaqub Vaughan</td><td>Light blue</td></tr><tr><td>4</td><td>Alasdair Andrew</td><td>May green</td></tr><tr><td>5</td><td>Alexander Cervantes</td><td>Signal blue</td></tr><tr><td>6</td><td>Leandro Clarkson</td><td>Cobalt blue</td></tr></tbody></table>
