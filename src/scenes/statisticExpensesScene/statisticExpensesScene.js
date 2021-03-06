import {View, Text, ScrollView, TouchableOpacity} from 'react-native';
import React, { Component } from 'react';
import { Bar } from 'react-native-pathjs-charts';
import Icon from 'react-native-vector-icons/dist/EvilIcons';
import SelectInput from 'react-native-select-input-ios';

import styles from "../../themes/styles";
import style_module from "./styles";
import Nav from "../../components/nav";

class App extends Component{
	constructor(props) {
		super(props);

		this.state = {
			valueSmall0: 0,
			valueSmall1: 1,
			valueLarge:  2,
		};
	}
	onSubmitEditingSmall0(value) {
		this.setState({
			valueSmall0: value
		});
	}

	getPickerOptions() {
		return [
			{ value: 0, label: 'Daily'      },
			{ value: 1, label: 'Monthly'     },
			{ value: 2, label: 'Quarterly'     },
			{ value: 3, label: 'Yearly' }
		];
	}
	render() {
		let state = this.state;
		let data = [
			[{
				"v": 49,
				"name": "Monday"
			}, {
				"v": 12,
				"name": "Tuesday"
			}
				, {
				"v": 22,
				"name": "Wednesday"
			}
				, {
				"v": 100,
				"name": "Thursday"
			}
				, {
				"v": 12,
				"name": "Friday"
			}
				, {
				"v": 1,
				"name": "Saturday"
			}
				, {
				"v": 120,
				"name": "Sunday"
			}]

		]

		let options = {
			width: 300,
			height: 200,
			margin: {
				top: 20,
				left: 45,
				bottom: 70,
				right: 45
			},
			color: '#2980B9',
			gutter: 20,
			animate: {
				type: 'oneByOne',
				duration: 200,
				fillTransition: 3
			},
			axisX: {
				showAxis: true,
				showLines: true,
				showLabels: true,
				showTicks: true,
				zeroAxis: false,
				orient: 'bottom',
				label: {
					fontFamily: 'Arial',
					fontSize: 8,
					fontWeight: true,
					fill: '#fff',
					rotate: 45
				}
			},
			axisY: {
				showAxis: true,
				showLines: true,
				showLabels: true,
				showTicks: true,
				zeroAxis: false,
				orient: 'left',
				label: {
					fontFamily: 'Arial',
					fontSize: 8,
					fontWeight: true,
					fill: '#fff'
				}
			}
		}

		return (
			<View style = { [styles.container] }>
				<View style={[style_module.containerBackground, style_module.selectWrapper]}>
					<SelectInput
						value={state.valueSmall0}
						options={this.getPickerOptions()}
						onCancelEditing={() => console.log('onCancel')}
						onSubmitEditing={this.onSubmitEditingSmall0.bind(this)}
						style={[style_module.selectInput, style_module.selectInputSmall]}
					/>
					<Icon name='chevron-down' size={25} color="#3c3c3c"></Icon>
				</View>

				<View style= { [styles.content, style_module.containerBackground] } >
					<View style={[styles.container, style_module.containerBackground]}>
						<Bar data={data} options={options} accessorKey='v'/>
					</View>
					<Text style={ [styles.bigTitle, style_module.bigTitle] }> Квітень, 1 </Text>
					<View
						style={{
							borderBottomColor: '#abe5e1',
							borderBottomWidth: 1,
							marginTop: 25,
							marginBottom: 25,
							marginLeft: 45,
							marginRight: 45,
						}}
					/>

				</View>
				<Nav/>
			</View>
		);
	}
}

export default App;