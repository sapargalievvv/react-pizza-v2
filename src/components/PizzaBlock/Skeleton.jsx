import React from 'react';
import ContentLoader from 'react-content-loader';

const Skeleton = () => (
  <ContentLoader
    className="pizza-block"
    speed={2}
    width={310}
    height={500}
    viewBox="-40 20 300 500"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb">
    <circle cx="130" cy="136" r="130" />
    <rect x="0" y="279" rx="10" ry="10" width="260" height="23" />
    <rect x="0" y="326" rx="10" ry="10" width="260" height="88" />
    <rect x="0" y="436" rx="10" ry="10" width="95" height="30" />
    <rect x="110" y="427" rx="22" ry="24" width="152" height="45" />
  </ContentLoader>
);

export default Skeleton;
