// import React, { useState } from 'react';
// import './App.css';

// function App() {
//   const [number, setNumber] = useState(0);

//   function deyis() {
//     setNumber(Math.random());
//   }

//   return (
//     <div className="App">
//       <button onClick={deyis}>Ededi deyis</button>
//       <p>{number}</p>
//     </div>
//   );
// }

// export default App;
import { Routes, Route, NavLink } from 'react-router-dom';
import Haqqinda from './Haqqinda';
import Isler from './Isler';
import Elaqe from './Elaqe';
import Main from './Main';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className='menu'>
      <NavLink to="/kursreact1/">
          Esas Sehife
      </NavLink>
      <NavLink to="/kursreact1/Haqqında">
          Haqqinda
      </NavLink>
      <NavLink to="/kursreact1/İş nümunələri">
      Isler
      </NavLink>
      <NavLink to="/kursreact1/Əlaqə məlumatları">
          Elaqe
      </NavLink>
      </div>
    <Routes>
      <Route path="/kursreact1/" element={<Main />}></Route>
      <Route path="/kursreact1/Haqqında" element={<Haqqinda />}></Route>
      <Route path="/kursreact1/İş nümunələri" element={<Isler />}></Route>
      <Route path="/kursreact1/Əlaqə məlumatları" element={<Elaqe />}></Route>
    </Routes>
    </div>
  );
}

export default App;
