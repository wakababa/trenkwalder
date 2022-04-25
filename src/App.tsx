import React from 'react';
import { FlipCard } from './components/FlipCard';

function App() {
    return (
     <div>
      <FlipCard
          frontTitle={"Hello this is a test title"}
          backTitle={"Hello This is a test back title"}
          backDescription={"Hello this is a description"}/>
      <FlipCard
          frontTitle={"Questions? Go ahead, give us a call."}
          backTitle={"Lorum Ipsum ..."}
          backDescription={"Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. "}/>
     </div>

  );
}
// @ts-ignore
export default App;