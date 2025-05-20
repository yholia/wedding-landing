import './App.css'
import Schedule from './components/Schedule'
import Locations from './components/Locations'
import DressCode from './components/DressCode'
import Countdown from './components/Countdown'
import TelegramGroup from './components/TelegramGroup'
import Gallery from './components/Gallery'
import Hero from './components/Hero'
import Invitation from './components/Invitation'
import Photo from "./components/common/Photo.tsx";
import sample_1 from './assets/unnamed.png';
import Wrapper from "./components/common/Wrapper.tsx";

function App() {
    return (
        <div className="wedding-app">
            <Hero/>
            <Invitation/>
            <Wrapper
                initial={{opacity: 0, y: 50}}
                whileInView={{opacity: 1, y: 0}}
                transition={{duration: 2}}>
                <Photo src={sample_1} alt={''}/>
            </Wrapper>
            <Schedule/>
            <Locations/>
            <DressCode/>
            <Gallery/>
            <Countdown/>
            <TelegramGroup/>
        </div>
    )
}

export default App
