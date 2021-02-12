import React from 'react';
import { View, ScrollView, Text } from 'react-native';
import TouchableText from '../touchableText/TouchableText';
import Item from './Item';
import Separator from './Separator';
import HomeTitle from '../HomeTitle';
import styles from './index.style';
import PropTypes from 'prop-types';


class ItemSlider extends React.Component {
    static propTypes = {
        data: PropTypes.array,
    }
    static defaultProps = {
        data: [{}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {} ]
    }

    constructor(props){super(props)}

    _renderItems = (data) => {
        return (
            <>
                <Separator />
                <Item />
            </>
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
                    {data.map(d=>this._renderItems(d))}
                </ScrollView>
            </View>
        )
    }
}

export default ItemSlider;