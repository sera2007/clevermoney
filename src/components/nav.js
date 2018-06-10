import {View, Text, TouchableOpacity} from "react-native";
import React from 'react';
import styles from "../themes/styles";
import {Actions} from "react-native-router-flux";
import Icon from "react-native-vector-icons/EvilIcons";


const Nav = (props)=>(
	<View style={styles.navBar}>
		<TouchableOpacity style={styles.tabItem} onPress={Actions.addExpensesScene}>
			<Icon name='check' size={35} color={props.active == 'check' ? '#4de1d3' : '#3c3c3c'}></Icon>
			<Text style={styles.tabTitle}>Витрати</Text>
		</TouchableOpacity>
		<TouchableOpacity style={styles.tabItem} onPress={Actions.categoryExpensesScene} >
			<Icon name='tag' size={35} color={props.active == 'tag' ? '#4de1d3' : '#3c3c3c'}></Icon>
			<Text style={styles.tabTitle}>Категорії витрат</Text>
		</TouchableOpacity>
		<TouchableOpacity style={styles.tabItem} onPress={Actions.homepageScene} >
			<Icon name='trophy' size={35} color={props.active == 'trophy' ? '#4de1d3' : '#2c3e50'}></Icon>
			<Text style={styles.tabTitle}>Бюджет</Text>
		</TouchableOpacity>
		<TouchableOpacity style={styles.tabItem} onPress={Actions.statisticExpensesScene} >
			<Icon name='chart' size={35} color={props.active == 'chart' ? '#4de1d3' : '#3c3c3c'}></Icon>
			<Text style={styles.tabTitle}>Статистика</Text>
		</TouchableOpacity>
		<TouchableOpacity style={styles.tabItem} onPress={Actions.profileScene} >
			<Icon name='user' size={35} color={props.active == 'user' ? '#4de1d3' : '#3c3c3c'}></Icon>
			<Text style={styles.tabTitle}>Профіль</Text>
		</TouchableOpacity>
	</View>
);

export default Nav;