import React, { Component } from 'react'
import { View, ListView, Text, TouchableOpacity, Clipboard, Button, ScrollView, Alert } from 'react-native'
import { connect } from 'react-redux'
import RoundedButton from '../Components/RoundedButton'

// For empty lists
// import AlertMessage from '../Components/AlertMessage'

// Styles
import styles from './Styles/TrailsScreenStyle'

class TrailsScreen extends Component {
  constructor (props) {
    super(props)
    const dataObjects = require('../Fixtures/trails.json')
    const rowHasChanged = (r1, r2) => r1 !== r2
    const sectionHeaderHasChanged = (s1, s2) => s1 !== s2
    const ds = new ListView.DataSource({ rowHasChanged, sectionHeaderHasChanged })
    this.state = {
      dataSource: ds.cloneWithRowsAndSections(dataObjects)
    }
  }

  static navigationOptions = {
    title: 'All Trails'
  };

  noRowData () {
    return this.state.dataSource.getRowCount() === 0
  }

  render () {
    const { navigate } = this.props.navigation
    return (
      <View style={styles.container}>
        <ScrollView style={styles.container}>
          <ListView
            style={styles.section}
            contentContainerStyle={styles.listContent}
            dataSource={this.state.dataSource}
            onLayout={this.onLayout}
            renderRow={(rowData) => <TouchableOpacity style={styles.row} onPress={() => navigate('TrailScreen', { name: rowData.name, description: rowData.description, maplink: rowData.maplink })}>
              <Text style={styles.boldLabel}>{rowData.name}</Text>
              <Text style={styles.label}>{rowData.id}</Text>
            </TouchableOpacity>}
            enableEmptySections
          />
        </ScrollView>
      </View>
    )
  }
}

const mapStateToProps = (state) => {
  return {
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TrailsScreen)
