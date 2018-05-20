
import React, { Component } from 'react'
import {
  StyleSheet,
  Text,
  ScrollView,
  FlatList,
  View,
  Image,
  Alert,
  Linking,
  } from 'react-native';

import { Button } from 'react-native-elements';
import {loanListData} from './loanListData';
import Swipeout from 'react-native-swipeout'
import LottieView from 'lottie-react-native';



export default class LoanScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      deletedRowKey: null
    };
  }
  refreshFlatList = (deletedKey) => {
    this.setState((prevState) => {
      return {
        deletedRowKey: deletedKey,
      };
    });
  }
  render() {
    return (
      <View style = {{flex:1, paddingTop:42, backgroundColor: '#8cc78f'}}>
        <FlatList
          data = {loanListData}
          renderItem={({item, index}) => {
            return (
              <FlatListItem item={item} index={index} parentFlatList={this}>
              </FlatListItem>);
          }}
        >
        </FlatList>
      </View>
    );
  }
}


class FlatListItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeRowKey: null
    };
  }
  render() {
    const swipeSettings = {
      autoClose: true,
      onClose: (secId, rowId, direction) => {
        if (this.state.activeRowKey != null) {
          this.setState({activeRowKey: null});
        }
      },
      onOpen: (secId, rowId, direction) => {
        this.setState({activeRowKey: this.props.item.key});
      },
      right: [
        {
          onPress: () => {
            const deletingRow = this.state.activeRowKey;
            Alert.alert(
              'Alert',
              'Delete this quote? ',
              [
                {text: 'No', onPress: ()=>console.log('Cancel'), style: 'cancel',},
                {text: 'Yes', onPress: ()=>{
                  loanListData.splice(this.props.index, 1);
                  this.props.parentFlatList.refreshFlatList(deletingRow);
                }},
              ],
              {cancelable: true}
            );
          },
          text: 'Delete', type: 'delete'
        }
      ],
      rowId: this.props.index,
      sectionId: 1,
    };

    return (
      <Swipeout {...swipeSettings}>
      <View style={{
        flex: 1,
        flexDirection: 'column',
      }}>
        <View style={{
          flex:1,
          flexDirection:'row',
          backgroundColor:'#8cc78f'
        }}>
          <Image
            source = {{uri: this.props.item.imageUrl}}
            style = {{width: 100, borderRadius: 20, height: 100, margin: 5}}
          >
          </Image>
          <View style={{
            flex: 1,
            flexDirection: 'column',
            height:100
          }}>
            <Text style={styles.flatListItem}>{this.props.item.name}</Text>
              <Button
                icon={{name: 'favorite', buttonStyle: styles.someButtonStyle }}
                title={this.props.item.description}
                rounded="true"
                backgroundColor="#4fa853"
                onPress = {()=>{
                  this.setState({activeRowKey: this.props.item.key});
                  const deletingRow = this.state.activeRowKey;

                  Alert.alert(
                    'Alert',
                    'Get your mortgage Refined by '+ this.props.item.name + '?',
                    [
                      {text: 'Yes', onPress: ()=>{
                        loanListData.splice(this.props.index, 1);
                        this.props.parentFlatList.refreshFlatList(deletingRow);
                      }},
                      {text: 'Learn More', onPress: ()=>{Linking.openURL(`https://www.bankofamerica.com/mortgage/home-mortgage/`);},},

                      {text: 'No', onPress: ()=>console.log('Cancel'), style: 'cancel',},

                    ],
                    {cancelable: true}
                  );
                }}
              />
          </View>
        </View>
        <View style={{
          height:1,
          backgroundColor: '#C8E6C9',
        }}>
        </View>
      </View>
      </Swipeout>
    )
  }
}

const styles = StyleSheet.create({
  flatListItem: {
    color: 'white',
    padding: 10,
    fontSize: 20,
  },

});
