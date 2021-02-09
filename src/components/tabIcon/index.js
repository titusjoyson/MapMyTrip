import React from 'react';
import { Icon } from '@ui-kitten/components';


const TabIcon = (props) => {
    return (
        <Icon
            name={!props.focused ? `${props.iconName}-outline` : `${props.iconName}`}
            fill={props.color}
            style={{ height: props.size, width: props.size }}
        />
    )
};

export default TabIcon;