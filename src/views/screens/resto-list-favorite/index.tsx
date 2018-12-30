import React from 'react'
import { Text, View } from 'react-native'
import { AppStyle } from '../../styles'
import { RestoListFavoriteScreenProps } from './props'

@AppStyle.withThemeClass()
export class RestoListFavoriteScreen extends React.Component<
  RestoListFavoriteScreenProps
> {
  constructor(props: RestoListFavoriteScreenProps) {
    super(props)
  }

  public render() {
    const { theme } = this.props as Required<RestoListFavoriteScreenProps>
    return <View style={theme.styles.screenContainer}>
        <Text>RestoListFavoriteScreen</Text>
      </View>
  }
}
