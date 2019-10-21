import React from 'react';
import Clock from 'react-live-clock';

const LiveClock = () => {
  return  <Clock format={'h:mm:ssa'} ticking={true} />
}

export default LiveClock;
