import './App.css'
import Schedule from './components/Schedule'
import Locations from './components/Locations'
import DressCode from './components/DressCode'
import Countdown from './components/Countdown'
import TelegramGroup from './components/TelegramGroup'
import Gallery from './components/Gallery'
import Hero from './components/Hero'
import Invitation from './components/Invitation'
import Photo from "./components/Photo.tsx";
import sample_1 from './assets/sample_1.jpg';

function App() {
    return (
        <div className="wedding-app">
            {/* Hero Section */}
            <section className="hero-section">
                <Hero/>
            </section>
            <section >
                <Photo src={sample_1} alt={''}/>
            </section>

            {/* Invitation Section */}
            <section className="invitation-section">
                <Invitation/>
            </section>

            {/* Schedule Section */}
            <section className="schedule-section">
                <Schedule/>
            </section>

            {/* Locations Section */}
            <section className="locations-section">
                <Locations/>
            </section>

            {/* Dress Code Section */}
            <section className="dresscode-section">
                <DressCode/>
            </section>

            {/* Gallery Section */}
            <section className="gallery-section">
                <Gallery/>
            </section>

            {/* Countdown Section */}
            <section className="countdown-section">
                <Countdown/>
            </section>

            {/* Telegram Group Section */}
            <section className="telegram-section">
                <TelegramGroup/>
            </section>
        </div>
    )
}

export default App
