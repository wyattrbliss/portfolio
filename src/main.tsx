import { createRoot } from 'react-dom/client'
import './index.css';
import  { App } from './App.tsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout.tsx';
import { NbaApp } from './components/NbaApp.tsx';
import { NflApp } from './components/NflApp.tsx';
import { NoPage } from './components/NoPage.tsx';

export default function Main() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<App />} />
          <Route path='NBA' element={<NbaApp />} />
          <Route path='NFL' element={<NflApp />} />
          <Route path='*' element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = createRoot(document.getElementById('root')!);
root.render(<Main />);


