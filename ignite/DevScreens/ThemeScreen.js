import React from 'react'
import { View, ScrollView, Text, Image, TouchableOpacity } from 'react-native'
import { Colors, Fonts, Images } from './DevTheme'
import R from 'ramda'

// Styles
import styles from './Styles/ThemeScreenStyles'

// Colors
const colors = R.keys(Colors)
// Font Types
const types = R.keys(Fonts.type)
// Font Styles
const fontStyles = R.keys(Fonts.style)

export default class ThemeScreen extends React.Component {
  renderColor (color: string) {
    return (
      <View style={styles.colorContainer} key={`${color}Container`}>
        <View style={styles.backgroundContainer} key={`${color}BackgroundContainer`}>
          <Image style={styles.backerImage} source={Images.tileBg} key={`${color}BackgroundImage`} />
          <View style={[styles.colorSquare, { backgroundColor: Colors[color] }]} key={`${color}Square`} />
        </View>
        <Text style={styles.colorName} key={`${color}Text`}>{color}</Text>
      </View>
    )
  }

  renderColors () {
    return colors.map((color) => this.renderColor(color))
  }

  renderFont (font: string) {
    return (
      <Text style={[styles.fontRow, { fontFamily: Fonts.type[font] }]} key={font}>{
        `${font}: ${Fonts.type[font]}`
      }
      </Text>
    )
  }

  renderFonts () {
    return types.map((font) => this.renderFont(font))
  }

  renderStyle (fontStyle: string) {
    return (<Text style={[styles.fontRow, { ...Fonts.style[fontStyle] }]} key={fontStyle}>{`This is ${fontStyle} style`}</Text>)
  }

  renderStyles () {
    return fontStyles.map((fontStyle) => this.renderStyle(fontStyle))
  }

  render () {
    return (
      <View style={styles.mainContainer}>
        <Image source={Images.background} style={styles.backgroundImage} resizeMode='stretch' />
        <TouchableOpacity
          onPress={() => this.props.navigation.goBack()} style={{
            position: 'absolute',
            paddingTop: 30,
            paddingHorizontal: 5,
            zIndex: 10
          }}
        >
          <Image source={Images.backButton} />
        </TouchableOpacity>
        <ScrollView style={styles.container}>
          <View style={{ alignItems: 'center', paddingTop: 60 }}>
            <Image source={Images.theme} style={styles.logo} />
            <Text style={styles.titleText}>Themes</Text>
          </View>
          <View style={styles.section} key='colors-header'>
            <Text style={styles.sectionText} key='colors'>List of Theme specific settings.  Auto-generated from Themes folder.</Text>
          </View>
          <View style={styles.sectionHeaderContainer}>
            <Text style={styles.sectionHeader}>Colors</Text>
          </View>
          <View style={styles.colorsContainer}>
            {this.renderColors()}
          </View>

          <View style={styles.sectionHeaderContainer}>
            <Text style={styles.sectionHeader}>Fonts</Text>
          </View>
          {this.renderFonts()}

          <View style={styles.sectionHeaderContainer}>
            <Text style={styles.sectionHeader}>Styles</Text>
          </View>
          {this.renderStyles()}

        </ScrollView>
      </View>
    )
  }
}
