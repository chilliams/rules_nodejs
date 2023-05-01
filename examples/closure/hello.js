import client from 'react-dom/client';
import jsx from 'react/jsx-runtime';

// Clear the existing HTML content
document.body.innerHTML = '<div id="app"></div>';

// Render your React component instead
const root = client.createRoot(document.getElementById('app'));
root.render(jsx.jsx('h1', { children: 'Hello world' }));
