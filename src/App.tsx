import React from 'react';
import {FlipCard} from './components/FlipCard';

function App() {
    return (
        <div className="grid grid-cols-none grid-flow-row gap-4 sm:grid-cols-1  md:grid-cols-2 lg:grid-cols-4  p-4">
            <FlipCard
                frontTitle={"Questions? Go ahead, give us a call."}
                backTitle={"Lorum Ipsum ..."}
                backDescription={"Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. "}/>

            <FlipCard
                frontTitle={"Hello this is a test title"}
                backTitle={"Hello This is a test back title"}
                backgroundImage={"https://zeministanbul.ist/tr/wp-content/uploads/revslider/splash-creative-light-01-animated/Slider-CL01-Background.png"}
                backgroundColor={"#da545d"}
                backDescription={"Hello this is a description"}/>
            <FlipCard
                frontTitle={"Hello this is a test title"}
                backTitle={"Hello This is a test back title"}
                backgroundImage={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRv61P68RiQNMlX9nUwT6eXTTRIyRjywWAReg&usqp=CAU"}
                backgroundColor={"#1d3350"}
                backDescription={"Hello this is a description"}/>
            <FlipCard
                frontTitle={"Hello this is a test title"}
                backTitle={"Hello This is a test back title"}
                backDescription={"Hello this is a description"}/>
        </div>

    );
}

// @ts-ignore
export default App;