import React from 'react';
import YouTube from './YouTube';
import Facebook from './Facebook';
import Instagram from './Instagram';
import Arrow from './Arrow';
import Globe from './Globe';

function Icon(props) {
  switch (props.symbol) {
    case 'youtube':
      return <YouTube {...props} />;
    case 'facebook':
      return <Facebook {...props} />;
    case 'instagram':
      return <Instagram {...props} />;
    case 'arrow':
      return <Arrow {...props} />;
    case 'globe':
      return <Globe {...props} />;
    default:
      return <span>Unknown icon: {props.symbol}</span>;
  }
}

export default Icon;
