import React from 'react';
import { View, ScrollView, Text } from 'react-native';
import TouchableText from '../touchableText/TouchableText';
import Item from './Item';
import HomeTitle from '../HomeTitle';
import styles from './index.style';
import PropTypes from 'prop-types';
var uuid = require('uuid');


class ItemSlider extends React.Component {
    static propTypes = {
        data: PropTypes.array,
    }
    static defaultProps = {
        data: [{}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}]
    }

    constructor(props) { super(props) }

    _renderItems = (data) => {
        return (
            <Item key={uuid.v4()} style={styles.item} />
        )
    }

    render() {
        const { data, style, title } = this.props;
        return (
            <View style={[styles.container, style]}>
                <View style={styles.header}>
                    <HomeTitle
                        style={styles.homeTitle}
                        text={title}
                    />
                    <TouchableText
                        textStyle={styles.moreText}
                    >
                        See ALL
                    </TouchableText>
                </View>
                <ScrollView
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    style={styles.scroll}
                >
                    {data.map(d => this._renderItems(d))}
                </ScrollView>
            </View>
        )
    }
}

export default ItemSlider;