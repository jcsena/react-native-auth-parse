//@flow

import React, {View, Text, StyleSheet, TextInput, Component} from 'react-native';
import Button from '../common/button';
import Parse from 'parse/react-native';


type state = { username: string, password: string, errorMessage:string};

class Signin extends Component {

    state: state = {
        username: '',
        password: '',
        errorMessage: ''
    };

    render(){
        return (
            <View style={styles.container}>
                <Text>Signin App</Text>

                <Text style={styles.label}>Username:</Text>
                <TextInput
                    value={this.state.username}
                    onChangeText={(text) => this.setState({username: text})}
                    style={styles.input}/>

                <Text style={styles.label}>Password:</Text>
                <TextInput
                    value={this.state.password}
                    onChangeText={(text) => this.setState({password: text})}
                    secureTextEntry={true}
                    style={styles.input} />

                <Text style={styles.label}>{this.state.errorMessage}</Text>
                <Button text={'Sign In'} onPress={this.onPress.bind(this)} />
                <Button text={'I need an account..'} onPress={this.onSignUpPress.bind(this)} />

            </View>
        )
    }

    onSignUpPress(){
        this.props.navigator.push({name: 'signup'});
    }

    onPress(){
        Parse.User.logIn(this.state.username, this.state.password)
        .then(
            (user) => {
                console.log(user);
                this.props.navigator.immediatelyResetRouteStack([{name: 'tweets'}]);
            },
            (error) => {
                console.log(error)
                this.setState({password: '', errorMessage: error.message});
            }
        )
    }

}


var styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    input: {
        height: 40,
        padding: 5,
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius:5,
        margin: 5,
        width: 200,
        alignSelf: 'center'
    },
    label: {
        fontSize: 18
    }
});


export default Signin;
