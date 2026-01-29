import React from 'react';
import { Studio } from 'sanity';
import config from '../../../sanity.config';

// Ensure the Studio is only rendered on the client side (though this is a SPA)
// and takes over the full viewport.
const SanityStudioPage: React.FC = () => {
  return (
    <div style={{ height: '100vh', width: '100vw', overflow: 'hidden', position: 'fixed', top: 0, left: 0, zIndex: 9999 }}>
      <Studio config={config} />
    </div>
  );
};

export default SanityStudioPage;
