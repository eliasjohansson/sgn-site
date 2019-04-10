import React from 'react';
import YouTube from './YouTube';
import Facebook from './Facebook';
import Instagram from './Instagram';

function Icon(props) {
  switch (props.symbol) {
    case 'youtube':
      return <YouTube {...props} />;
    case 'facebook':
      return <Facebook {...props} />;
    case 'instagram':
      return <Instagram {...props} />;
    default:
      return <span>Unknown icon: {props.symbol}</span>;
  }
}

export default Icon;
