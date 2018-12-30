import React from 'react'
import {
  ActivityIndicator,
  Button,
  ScrollView,
  TextInput,
  View
} from 'react-native'
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
      isLoading: false,
      query: ''
    }
  }

  async loadData() {
    this.setState({ isLoading: true })
    const restaurants = await Http.getRestaurants(this.state.query)
    this.setState({
      restaurants,
      isLoading: false
    })
  }

  componentDidMount() {
    this.loadData()
  }

  public render() {
    const { theme } = this.props as Required<RestoListScreenProps>
    const { restaurants, isLoading } = this.state

    return (
      <ScrollView>
        <View style={theme.styles.screenContainer}>
          <View
            style={{ elevation: 2, borderRadius: 4, margin: 12, padding: 10 }}
          >
            <TextInput
              style={{ height: 48, padding: 6, backgroundColor: '#fee9c0', marginBottom: 4 }}
              placeholder="Cari Resto..."
              onChangeText={query => this.setState({ query })}
            />
            <Button
              color="#fcb119"
              title="cari"
              onPress={() => this.loadData()}
            />
          </View>
          {isLoading && (
            <ActivityIndicator
              size="large"
              style={{ justifyContent: 'center', height: 80 }}
            />
          )}
          {!isLoading && <RestaurantList items={restaurants} />}
        </View>
      </ScrollView>
    )
  }
}
