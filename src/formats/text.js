import React from 'react';

export const PinkEM = ({children}) => (
    <em style={{color: '#e91e63'}}>{children}</em>
);

export const MonoText = ({children}) => (
    <span style={{fontFamily: 'monospace', fontSize: 'smaller', fontWeight: 'lighter'}}>{children}</span>
);

