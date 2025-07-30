import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

// 👇 Only start MSW in development | we can consume mock api into actual UI too after this uncommenting
// if (import.meta.env.DEV) { 
//   const { worker } = await import('./mocks/browser.ts');
//   await worker.start();
// }

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
