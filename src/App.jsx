import './App.css';
import { Outlet } from 'react-router-dom';
import NavBar     from './components/NavBar';
import Footer     from './components/Footer';

function App() {

  return (
    <>
      <main className='font-sans flex flex-col items-center min-h-screen w-screen gap-12'>
        {/* NavBar */}
        <NavBar />
        <Outlet />
      </main>
      <Footer />
    </>
  );
  
}

export default App
