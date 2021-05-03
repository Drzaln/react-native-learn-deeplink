import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'
import { Text } from 'react-native'
import One from './screens/One'
import Three from './screens/Three'
import Two from './screens/Two'

const Stack = createStackNavigator()

const config = {
	screens: {
		One: {
			path: 'one'
		},
		Two: {
			path: 'two'
		},
		Three: {
			path: 'three'
		}
	}
}

const linking = {
	// run using npx uri-scheme open https://testing.com/screens name
	// or npx uri-scheme open testing://screens name
	prefixes: [ 'https://testing.com', 'testing://' ],
	config
}

const App = () => {
	return (
		<NavigationContainer fallback={<Text>Loading...</Text>} linking={linking}>
			<MyStack />
		</NavigationContainer>
	)
}

export default App

const MyStack = () => {
	return (
		<Stack.Navigator>
			<Stack.Screen name='One' component={One} />
			<Stack.Screen name='Two' component={Two} />
			<Stack.Screen name='Three' component={Three} />
		</Stack.Navigator>
	)
}
