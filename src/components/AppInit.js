import React, { Component } from 'react';
import { connect } from 'react-redux';
import firebase from 'firebase';
import { alreadyLogin, notLoginYet } from '../actions';
import Main from './Main';

class AppInit extends Component {
    componentWillMount() {
        const config = {
            apiKey: 'AIzaSyDmF7T_pp8iFmdx9Gfxv5EgCyRpAuVMxQQ',
            authDomain: 'managerpractice-7299b.firebaseapp.com',
            databaseURL: 'https://managerpractice-7299b.firebaseio.com',
            projectId: 'managerpractice-7299b',
            storageBucket: '',
            messagingSenderId: '682326429158'
        };
        firebase.initializeApp(config);

        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                this.props.alreadyLogin(user);
            } else {
                this.props.notLoginYet();
            }
        });
    }

    render() {
        return (
            <Main />
        );
    }
}

export default connect(null, { alreadyLogin, notLoginYet })(AppInit);
