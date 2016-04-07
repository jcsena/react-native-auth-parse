//@flow
import React, {TouchableHighlight, Text, Component, StyleSheet}  from 'react-native';

class Button extends Component {

    static propTypes = {
        text: React.PropTypes.string.isRequired,
        onPress: React.PropTypes.func.isRequired
    };

    render(){
        return(
            <TouchableHighlight  style={styles.button} underlayColor={'gray'} onPress={this.props.onPress}>
                <Text style={styles.text}>{this.props.text}</Text>
            </TouchableHighlight>
        )
    }
}

var styles = StyleSheet.create({
    button: {
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth : 1,
        borderRadius : 5,
        padding: 5,
        borderColor: 'black',
        marginTop: 10
    },
    text: {
        flex: 1,
        alignSelf: 'center',
        fontSize: 20
    }
})


export default Button;
