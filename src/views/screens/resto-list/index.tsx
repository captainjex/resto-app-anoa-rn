import React from 'react'
import { View } from 'react-native'
import { Http } from '../../../services/Http'
import RestaurantList from '../../components/RestaurantList'
import { AppStyle } from '../../styles'
import { RestoListScreenProps } from './props'
import { RestoListScreenState } from './state'

@AppStyle.withThemeClass()
export class RestoListScreen extends React.Component<
  RestoListScreenProps,
  RestoListScreenState
> {
  constructor(props: RestoListScreenProps) {
    super(props)
    this.state = {
      restaurants: []
    }
  }

  async componentDidMount() {
    const restaurants = await Http.getRestaurants()
    this.setState({
      restaurants
    })
  }

  public render() {
    const { theme } = this.props as Required<RestoListScreenProps>
    const { restaurants } = this.state

    return (
      <View style={theme.styles.screenContainer}>
        <RestaurantList items={restaurants} />
      </View>
    )
  }
}
