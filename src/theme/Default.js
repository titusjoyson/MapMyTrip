import React from 'react';
import { Text } from '@ui-kitten/components';


let oldRender = Text.render;
Text.render = function (...args) {
    let origin = oldRender.call(this, ...args);
    return React.cloneElement(origin, {
        style: [{ fontFamily: 'Arial' }, origin.props.style]
    });
};