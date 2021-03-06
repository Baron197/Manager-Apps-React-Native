import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View } from 'react-native';
import { Header } from 'react-native-elements';
import { employeeCreate, clearEmployeeForm } from '../actions';
import { Card, CardSection, Button } from './common';
import EmployeeForm from './EmployeeForm';

class EmployeeCreate extends Component {

    static navigationOptions = {
        drawerLabel: 'Add New Employee'
    };

    componentWillMount() {
        this.props.clearEmployeeForm();
    }

    onButtonPress = () => {
        const { name, phone, shift } = this.props;

        this.props.employeeCreate(name, phone, shift || 'Sunday');
    }

    render() {
        return (
            <View>
                <Header
                    placement="left"
                    leftComponent={{ 
                        icon: 'menu', 
                        color: '#fff', 
                        onPress: () => this.props.navigation.toggleDrawer() 
                    }}
                    centerComponent={{ text: 'Add Employee', style: { color: '#fff' } }}
                    rightComponent={{ 
                        icon: 'home', 
                        color: '#fff', 
                        onPress: () => this.props.navigation.navigate('EmployeeList')
                    }}
                />
                <Card>
                    <EmployeeForm {...this.props} />
                    
                    <CardSection>
                        <Button onPress={this.onButtonPress}>
                            Save
                        </Button>
                    </CardSection>
                </Card>
            </View>
        );
    }
}

const mapStateToProps = (state) => {
    const { name, phone, shift } = state.employeeForm;

    return { name, phone, shift };
};

export default connect(mapStateToProps, { employeeCreate, clearEmployeeForm })(EmployeeCreate);
