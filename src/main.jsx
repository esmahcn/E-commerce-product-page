import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './App.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import 'leaflet/dist/leaflet.css';
import { SECRETS } from './config/secrets.js';
import { ClerkProvider } from '@clerk/clerk-react';
createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <StrictMode>
    <ClerkProvider publishableKey={SECRETS.CLERK_PUBLISHABLE_KEY}>
      <App />
    </ClerkProvider>
  </StrictMode>,
  </BrowserRouter>
)
