
import React, { Component } from 'react'
import { Button,
  StyleSheet,
  Text,
  ScrollView,
  SectionList,
  View,
  } from 'react-native';
import {sectionListData} from './sectionListData';
import UserAvatar from 'react-native-user-avatar'

class SectionHeader extends Component {
  render() {
    return (
      <View style = {{
        flex: 1, backgroundColor: '#4caf50', marginTop: 0,
      }}>

        <Text style = {{
          fontSize: 16, fontWeight: 'bold', color: 'white', margin: 20,
        }}>{this.props.section.title}
        </Text>
      </View>
    )
  }
}

export default class HomeScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, backgroundColor: '#4caf50', paddingTop: 40}}>
        <View style={styles.avatarWrap}>
          <UserAvatar size="100" name="Avishay Bar" src="https://media.licdn.com/dms/image/C5603AQH4544m6hSMzg/profile-displayphoto-shrink_200_200/0?e=1532563200&v=beta&t=m7WzXJqelGfOxoZHxOctB35b8V4098XHLpPal6KNGxI" style={styles.avatar}/>
        </View>
      <SectionList
          renderItem = {({item, index}) => {
            return (<SectionListItem item = {item} index = {index}>
            </SectionListItem>);
          }}
          renderSectionHeader = {({section}) => {
            return(<SectionHeader section={section} />);
          }}
          sections = {sectionListData}
          keyExtractor = {(item, index) => item.name}
        >
        </SectionList>
      </View>
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
  avatarWrap: {
    backgroundColor: '#4caf50',
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatar: {
    marginTop: 20,
  }
});
