import {StyleSheet, Dimensions} from "react-native";
var {height, width} = Dimensions.get('window');
const module_style = StyleSheet.create({
	containerHome:{
		paddingTop:13,
		paddingBottom: 13,
		flex: 1,
		flexDirection: 'row',
		flexWrap: 'wrap', 
		height: height,
		//backgroundColor: 'red',
		justifyContent: 'center',
		alignItems: 'center'
	},
	loginImage:{
		width: 114,
		height: 114,
		shadowOpacity: 1.0,
		borderRadius: 57
	},
	loginImageWrap:{
		borderWidth: 10,
		borderColor: 'rgba(255, 255, 255, 0.2)',
		shadowOffset:{ width: 10, height: 10, },
		shadowColor: 'black',
		borderRadius: 67
	},
	loginForm:{
		paddingTop:23, 
	},
	inputForm:{
		//height: 60
	}
});

export default module_style