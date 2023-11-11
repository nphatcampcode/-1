import React, {Component} from "react";
import { View, Text } from "react-native-web";
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import Ionic from 'react-native-vector-icons/Ionicons';

const Tab = createMaterialBottomTabNavigator();
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import {fetchUser} from '../redux/actions/index'
import FeedScreen from './main/Feed'
import ProfileScreen from './main/Profile'
import AddScreen from './main/Add'
import ReelsScreen from './main/Reels'

export class Main extends Component {
    componentDidMount() {
        this.props.fetchUser();
    }
    render() {
        
        
        return (
            <Tab.Navigator barStyle={{ backgroundColor: 'black', height:80}} activeColor="#e91e63">
                <Tab.Screen name="Feed" component={FeedScreen} 
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <Ionic name="home-outline" color={color = 'white'} size={27} />
                    ),
                }}
                />
                 <Tab.Screen name="Profile" component={ProfileScreen} 
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <Ionic name="person-outline" color={color= 'white'} size={27} />
                    ),
                }}
                />
                 <Tab.Screen name="Add" component={AddScreen} 
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <Ionic name="add-outline" color={color= 'white'} size={27} />
                    ),
                }}
                />
                <Tab.Screen name="Reels" component={ReelsScreen} 
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <Ionic name="play-outline" color={color= 'white'} size={27} />
                    ),
                }}
                />
               
          </Tab.Navigator>

            
        )
    }
}

const mapStateToProps = (store) => ({
    currentUser: store.userState.currentUser
})
const mapDispatchProps = (dispatch) => bindActionCreators({fetchUser}, dispatch);


export default connect(mapStateToProps, mapDispatchProps)(Main);