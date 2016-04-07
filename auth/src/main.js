//@flow

import React, {Component, StyleSheet, Navigator} from 'react-native';
import Signin from './components/auth/signin';
import Signup from './components/auth/signup';
import Tweets from './components/tweets/tweets';
import Parse from 'parse/react-native';

var ROUTES = {
    'signin' : Signin,
    'signup' : Signup,
    'tweets' : Tweets
};

class Main extends Component {
    componentWillMount(){
        Parse.initialize("epHqnJOxMHEKGloGBgZCpn6SIKHdxX5q97a5iVMj", "uZXxWDuXj9msgTzSQAtPKYmWnBWooKGPsU5k7Bp4");
    }

    renderScene(route:Object, navigator:Object){
        var Component = ROUTES[route.name];
        return <Component route={route} navigator={navigator} />;
    }

    render(){
        return (
            <Navigator sceneStyle={styles.container} initialRoute={{name: 'signin' }} renderScene={this.renderScene}

            />
        )
    }
}

var styles = StyleSheet.create({
    container: {
        flex: 1
    }
});

export default Main;
