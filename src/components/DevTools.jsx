import React from 'react';
import {createDevTools} from 'redux-devtools';
import SliderMonitor from 'redux-slider-monitor';
import LogMonitor from 'redux-devtools-log-monitor';
import DockMonitor from 'redux-devtools-dock-monitor';

export default createDevTools(
    <DockMonitor
        toggleVisibilityKey="ctrl-h"
        changePositionKey="ctrl-q"
        changeMonitorKey="ctrl-m"
        defaultIsVisible={false}
    >
        <LogMonitor/>
        <SliderMonitor keyboardEnabled/>
    </DockMonitor>
);
