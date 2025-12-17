import Home from './pages/Home';
import { GlobalStyles } from './app.styled';
import Footer from './components/Footer/Footer';

const App: React.FC = () => {

  return (
    <>
      <GlobalStyles />
      <Home />
      <Footer />
    </>
  );
};

export default App;
