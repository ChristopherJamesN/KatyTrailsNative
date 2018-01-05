import React, { Component } from 'react'
import { ScrollView, Text, Image, View } from 'react-native'
import DevscreensButton from '../../ignite/DevScreens/DevscreensButton.js'
import API from '../Services/Api'

import { Images } from '../Themes'

import styles from './Styles/LaunchScreenStyles'

/*
constructor (props) {
  super(props)
  const dataObjects = []
  const rowHasChanged = (r1, r2) => r1 !== r2
  const sectionHeaderHasChanged = (s1, s2) => s1 !== s2
  this.ds = new ListView.DataSource({rowHasChanged, sectionHeaderHasChanged})

  this.state = {
    dataSource: this.ds.cloneWithRowsAndSections(dataObjects)
  }
  this.getData()
}

getData = async () => {
  const api = API.create()
  const trails = await api.getTrails()
  this.setState({
    dataSource: this.ds.cloneWithRowsAndSections(trails.data)
  })
}
*/

export default class LaunchScreen extends Component {
  render () {
    return (
      <View style={styles.mainContainer}>
        <Image source={Images.background} style={styles.backgroundImage} resizeMode='stretch' />
        <ScrollView style={styles.container}>
          <View style={styles.centered}>
            <Image source={Images.launch} style={styles.logo} />
          </View>

          <View style={styles.section} >
            <Image source={Images.ready} />
            <Text style={styles.sectionText}>
              This probably isn't what your app is going to look like. Unless your designer handed you this screen and, in that case, congrats! You're ready to ship. For everyone else, this is where you'll see a live preview of your fully functioning app using Ignite.
            </Text>
          </View>

          <DevscreensButton />
        </ScrollView>
      </View>
    )
  }
}
