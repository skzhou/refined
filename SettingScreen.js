
import React, { Component } from 'react'
import { Button,
  StyleSheet,
  Text,
  ScrollView,
  SectionList,
  View,
  } from 'react-native';
import {sectionListData0} from './sectionListData0';
import UserAvatar from 'react-native-user-avatar'

class SectionHeader extends Component {
  render() {
    return (
      <View style = {{
        flex: 1, backgroundColor: '#4caf50',
      }}>

        <Text style = {{
          fontSize: 16, fontWeight: 'bold', color: 'white', margin: 20,
        }}>{this.props.section.title}
        </Text>
      </View>
    )
  }
}

export default class SettingScreen extends React.Component {
  render() {
    return (
      <ScrollView style={{ backgroundColor: '#4caf50'}} >
      <View style={{ flex: 1, backgroundColor: '#4caf50', marginTop: 0, padding: 0}}>
      <SectionList style={{ flex: 1, backgroundColor: '#4caf50', marginTop: 0, padding: 0}}
          renderItem = {({item, index}) => {
            return (<SectionListItem item = {item} index = {index}>
            </SectionListItem>);
          }}
          renderSectionHeader = {({section}) => {
            return(<SectionHeader section={section} />);
          }}
          sections = {sectionListData0}
          keyExtractor = {(item, index) => item.name}
        >
        </SectionList>
      </View>
      </ScrollView>
    );
  }
}


class SectionListItem extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, flexDirection: 'column', backgroundColor: '#c8e6c9'}}>
        <Text style = {{
          fontSize: 16, fontWeight: 'bold', color: '#194d33', margin:6, marginLeft: 20, marginRight: 10,
        }}>{this.props.item.name}
        </Text>
        <Text style = {{
          fontSize: 16, color: '#194d33', marginLeft: 20, marginRight: 10,
        }}>{this.props.item.description}
        </Text>
        <View style={{ height:1, margin:6, marginLeft:20, marginRight: 10, backgroundColor: 'rgb(77,120,140)' }}>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#4caf50',
  },

});
