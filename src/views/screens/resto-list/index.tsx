import React from 'react'
import { ScrollView, View, ActivityIndicator } from 'react-native'
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
      restaurants: [],
      isLoading: false
    }
  }

  async componentDidMount() {
    this.setState({ isLoading: true })
    const restaurants = await Http.getRestaurants()
    this.setState({
      restaurants,
      isLoading: false
    })
  }

  public render() {
    const { theme } = this.props as Required<RestoListScreenProps>
    const { restaurants, isLoading } = this.state

    return (
      <ScrollView>
        <View style={theme.styles.screenContainer}>
          {isLoading &&
            <ActivityIndicator size="large" style={{ justifyContent: 'center', height: 80 }} />
          }
          {!isLoading &&
            <RestaurantList items={restaurants} />
          }
        </View>
      </ScrollView>
    )
  }
}
