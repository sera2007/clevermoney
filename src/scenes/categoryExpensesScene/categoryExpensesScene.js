import React, {Component} from 'react';
import {ScrollView, Text, TouchableOpacity, View } from 'react-native';

import styles from "../../themes/styles";
import style_module from "./styles";
import ExpenseItem from "../../components/expenseItem";
import Input from "../../components/input";
import Nav from "../../components/nav";
import {getCafes} from "../../actions/cafeActions";

class categoryExpanseScene extends Component {

	constructor(){
		super();
		this.state = {cafes:[]}
	}

	componentWillMount(){
		getCafes()
			.then(cafes =>{
				this.setState({cafes})
			}).catch(error =>{
				console.log(error);
		})
	}

	renderCafes(){
		return this.state.cafes.map(cafe => (
			<TouchableOpacity key={cafe.id}>
				<Text>{cafe.name}</Text>
				<Text>{cafe.description}</Text>
			</TouchableOpacity>
		))
	}

	render(){
		return (
			<View style = { styles.container }>
				<View style= { styles.topInner } >
					<Text style={ [styles.companyName, style_module.TopTitle] } >
						Категорії витрат
					</Text>
				</View>

				<ScrollView style= { styles.content } >
					{this.renderCafes()}
					<View style= { styles.expenseItemWrapper } >
						<ExpenseItem>Категорія 1</ExpenseItem>
						<ExpenseItem>Категорія 2</ExpenseItem>
						<ExpenseItem>Категорія 3</ExpenseItem>
						<ExpenseItem>Категорія 4</ExpenseItem>
					</View>
					<Text>Оновити</Text>
					<Input value="Категорія 1" />

				</ScrollView>
				<Nav/>
			</View>
		);
	}
}

export default categoryExpanseScene;