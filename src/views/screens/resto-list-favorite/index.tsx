import React from 'react'
import { Text, View } from 'react-native'
import { RestoListFavoriteScreenProps } from './props'

export class RestoListFavoriteScreen extends React.Component<
  RestoListFavoriteScreenProps
> {
  constructor(props: RestoListFavoriteScreenProps) {
    super(props)
  }

  public render() {
    return (
      <View>
        <Text>RestoListFavoriteScreen</Text>
      </View>
    )
  }
}
