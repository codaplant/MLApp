import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ScrollView, Text, View, Button } from 'react-native';
import { logout } from '../action/auth';
 
class Secured extends Component {
    userLogout(e) {
        this.props.onLogout();
        e.preventDefault();
    }
     
    render() {
        return (
            <ScrollView style={{padding: 20}}>
                <Text style={{fontSize: 27}}>
                    {`Welcome ${this.props.id}`}
                </Text>
                <View style={{margin: 20}}/>
                <Button onPress={(e) => this.userLogout(e)} title="Logout"/>
            </ScrollView>
        );
    }
}
 
 
const mapStateToProps = (state, ownProps) => {
    return {
        id: state.auth.id
    };
}
 
const mapDispatchToProps = (dispatch) => {
    return {
        onLogout: () => { dispatch(logout()); }
    }
}
 
export default connect(mapStateToProps, mapDispatchToProps)(Secured);