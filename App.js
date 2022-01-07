import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View, Image, SafeAreaView } from 'react-native'

export default function App() {
	const handlePress = () => console.log('helllllloooo')
	return (
		<SafeAreaView style={styles.container}>
			<Text numberOfLines={1} onPress={handlePress}>
				Welcome Asiisii!!
			</Text>
			{/* <Image style={styles.tinyLogo} source={require('@expo/snack-static/react-native-logo.png')} /> */}
			<Image
				blurRadius={4}
				source={{
					width: 200,
					height: 300,
					uri: 'https://picsum.photos/200/300',
				}}
			/>
			<StatusBar style='auto' />
		</SafeAreaView>
	)
}

const styles = StyleSheet.create({
	tinyLogo: {
		width: 50,
		height: 50,
	},
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
})
