import React from 'react';
import { View, Image, TouchableOpacity } from 'react-native';
import { Icon, Button, Layout, Popover, Text, Card } from '@ui-kitten/components';
import PropTypes from 'prop-types';
import styles from './MapTypePopover.style';

const LayerIcon = (props) => (
    <Icon {...props} name='layers' />
);

const MapTile = ({ style, title, image, selected, onPress }) => {
    return (
        <View style={[styles.cardContainer, style]}>
            <TouchableOpacity activeOpacity={0.9} onPress={() => onPress()}>
                <View>
                    <Image
                        style={[styles.cardImage, selected ? styles.cardImageSelected : {}]}
                        source={{ "uri": image }}
                    />
                    <Text style={[styles.cardText, selected ? styles.cardTextSelected : {}]}>
                        {title}
                    </Text>
                </View>
            </TouchableOpacity>
        </View>
    )
}

class MapSections extends React.Component {
    static propTypes = {
        data: PropTypes.array,
        multiSelect: PropTypes.bool
    }
    static defaultProps = {
        data: [],
        multiSelect: false,

    }
    state = {
        data: []
    }

    constructor(props) {
        super(props)
    }

    componentDidMount() {
        let state = {};
        this.props.data.map(d => {
            state[d.key] = null
        })
        this.setState({ ...state, data: this.props.data })
    }

    _isSelected = (data) => {
        const { multiSelect } = this.props;
        if (multiSelect) {
            return this.state[data.key]
        } else {
            return this.state[data.key] == data.value
        }
    }

    _onItemPress = (data) => {
        const { multiSelect } = this.props;
        const selectedKey = {}
        let nextValue;

        if (multiSelect) {
            nextValue = this.state[data.key] ? false : true
        } else {
            nextValue = data.value
        }

        selectedKey[data.key] = nextValue
        this.setState(selectedKey, () => {

        })
    }

    _renderItems = (data) => {
        return (
            <MapTile
                image={data.image}
                title={data.title}
                selected={this._isSelected(data)}
                onPress={() => this._onItemPress(data)}
            />
        )
    }

    getConfig = () => {
        const { data } = this.state;
        let result = {};
        data.map(d => result[d.key] =  this.state[d.key])
        return result
    }

    render() {
        const { style, title } = this.props;
        const { data } = this.state;

        return (
            <View style={[styles.cardSection, style]}>
                <Text style={styles.cardTitle}>{title}</Text>
                <View style={styles.cardRow}>
                    {data.map(d => this._renderItems(d))}
                </View>
            </View>
        )
    }
}

const MapTypePopover = ({ style }) => {

    const [visible, setVisible] = React.useState(false);

    const renderToggleButton = () => (
        <Button
            onPress={() => setVisible(true)}
            style={[styles.button, style]}
            status='danger'
            accessoryLeft={LayerIcon}
        />
    );

    return (
        <Popover
            style={styles.backdrop}
            visible={visible}
            anchor={renderToggleButton}
            onBackdropPress={() => setVisible(false)}>
            <Layout style={styles.content}>
                <MapSections
                    title="Map Type"
                    data={[
                        {
                            image: "https://placeimg.com/100/101/any",
                            title: "Standard",
                            key: "mapType",
                            value: "standard"
                        },
                        {
                            image: "https://placeimg.com/100/102/any",
                            title: "Satellite",
                            key: "mapType",
                            value: "satellite"
                        },
                        {
                            image: "https://placeimg.com/100/103/any",
                            title: "Hybrid",
                            key: "mapType",
                            value: "hybrid"
                        }
                    ]}
                    multiSelect={false}
                />
                <MapSections
                    title="Map Details"
                    style={{ marginTop: 15 }}
                    data={[
                        {
                            image: "https://placeimg.com/100/104/any",
                            title: "Standard",
                            key: "showsTraffic",
                            value: false
                        },
                        {
                            image: "https://placeimg.com/100/105/any",
                            title: "Building",
                            key: "showsBuildings",
                            value: false
                        },
                        {
                            image: "https://placeimg.com/100/106/any",
                            title: "Point of Interest",
                            key: "showsPointsOfInterest",
                            value: false
                        }
                    ]}
                    multiSelect
                />
            </Layout>
        </Popover>
    );
};


export default MapTypePopover;
