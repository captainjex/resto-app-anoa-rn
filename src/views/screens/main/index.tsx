import React from 'react'
import { Image, Platform, StyleSheet, Text, View } from 'react-native'
import { MainScreenProps } from './props'

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'yeehaaaa'
})

export class MainScreen extends React.Component<MainScreenProps> {
  constructor(props: MainScreenProps) {
    super(props)
  }

  public render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Hello World!</Text>
        <Image
          source={require('../../../../assets/logo.png')}
          style={{ marginVertical: 20, width: 185, height: 185 }}
          resizeMethod="scale"
        />
        <Text style={styles.instructions}>To get started, edit:</Text>
        <Text style={styles.instructions}>
          ./src/views/sreens/main/index.tsx
        </Text>
        <Text style={styles.instructions}>{instructions}</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5
  }
})
