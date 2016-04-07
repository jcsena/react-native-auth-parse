//@flow

import React, {View, Text, StyleSheet, TextInput, Component} from 'react-native';
import Button from '../common/button';
import Parse from 'parse/react-native';


type state = { username: string, password: string, passwordConfirmation: string , errorMessage:string};

class Signup extends Component {

    state: state = {
        username: '',
        password: '',
        passwordConfirmation: '',
        errorMessage: ''
    };

    render(){
        return (
            <View style={styles.container}>
                <Text>Signup App</Text>

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

                <Text style={styles.label}>Confirm Password:</Text>
                    <TextInput
                        value={this.state.passwordConfirmation}
                        onChangeText={(text) => this.setState({passwordConfirmation: text})}
                        secureTextEntry={true}
                        style={styles.input} />

                <Text style={styles.label}>{this.state.errorMessage}</Text>
                <Button text={'Sign Up'} onPress={this.onPress.bind(this)} />

            <Button text={'I have an account'} onPress={this.onSinginPress.bind(this)} />


            </View>
        )
    }

    onSinginPress(){
        this.props.navigator.pop();
    }

    onPress(){

        if(this.state.password !== this.state.passwordConfirmation){
            return this.setState({errorMessage: 'the password do not match'});
        }

        var user = new Parse.User();

        user.set('username', this.state.username);
        user.set('password', this.state.password);

        user.signUp(null)
        .then(
            (user) => {
                console.log(user);
                this.props.navigator.immediatelyResetRouteStack([{name: 'tweets'}]);
            },
            (error) => {
                    console.log(error)
                    this.setState({password: '', errorMessage: error.message});
                }
            );

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


export default Signup;
