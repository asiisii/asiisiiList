import { StatusBar } from 'expo-status-bar'
import {
	StyleSheet,
	Text,
	View,
	TouchableOpacity,
	Image,
	SafeAreaView,
	Alert, // its an api
	Button,
	Platform, // we can use this to check if the platform is andriod or IOS
} from 'react-native'

export default function App() {
	const handlePress = () => console.log('helllllloooo')
	return (
		// can give multiple style
		<SafeAreaView style={[containerStyle, styles.container]}>
			<TouchableOpacity>
				<Image
					// blurRadius={4}
					source={{
						width: 200,
						height: 300,
						uri: 'https://picsum.photos/200/300',
					}}
				/>
			</TouchableOpacity>
			<Text numberOfLines={1} onPress={handlePress}>
				Welcome Asiisii!!
			</Text>
			<Button title='First Btn' onPress={() => alert('Clicked')} />
			<Button
				title='Second Btn'
				onPress={() =>
					Alert.alert('My Title', 'My message', [
						{ text: 'Yes', onPress: () => console.log('Yes') },
						{ text: 'No', onPress: () => console.log('No') },
					])
				}
			/>
			<Button
				title='Third Btn'
				onPress={() =>
					Alert.prompt('My TItle', 'My message', text => console.log(text))
				}
			/>
			{/* <Image style={styles.tinyLogo} source={require('@expo/snack-static/react-native-logo.png')} /> */}
			<StatusBar style='auto' />
		</SafeAreaView>
	)
}

const containerStyle = { backgroundColor: 'orange' }
const styles = StyleSheet.create({
	// using StyleSheet we will know if we spell the property wrong
	tinyLogo: {
		width: 50,
		height: 50,
	},
	container: {
		flex: 1,
		// backgroundColor: '#fff',
		alignItems: 'center',
		// justifyContent: 'center',
		paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0, //use this to assign a value
	},
})
