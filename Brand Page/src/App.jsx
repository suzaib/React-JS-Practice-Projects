import './App.css';

//Importing our required components
import HeroSection from './components/hero';
import Navigation from './components/Navigation';
const App=()=>{
    return (
    <div>
        <Navigation></Navigation>
        <HeroSection></HeroSection>
    </div>
    );
};

export default App;
