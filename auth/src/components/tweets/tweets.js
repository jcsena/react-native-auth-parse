import React, {View, Text, Component, StyleSheet} from 'react-native';
import Parse from 'parse/react-native';


type state = {user: Object};

class Tweets extends Component {

    state: state = {
        user:null
    };

    componentWillMount(){
        Parse.User.currentAsync()
        .then((user) => { this.setState({user: user}); })
    }
    render(){
        if (!this.state.user) {
            return  (<Text>Loading...</Text>);
        }

        var username = this.state.user.get('username');

        return (
            <View style={styles.container}>
                <Text>Welcome back, {username}!</Text>
            </View>
        );
    }
}


var styles = StyleSheet.create({
    container: {
        flex:1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});

export default Tweets;
