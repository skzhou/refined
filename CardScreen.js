import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView
} from 'react-native';

import { Button } from 'react-native-elements'

import {
  Card,
  CardTitle,
  CardImage,
  CardContent,
  CardAction,
  Linking,
} from 'react-native-card-view';

export default class CardScreen extends Component {

  render () {
    return (
      <ScrollView style={styles.background}>
        <View style={styles.container}>

        <Card styles={{ card: { backgroundColor: '#c8e6c9',  marginBottom: 25 }}} >
            <CardImage>
              <Image
                style={{width: 365, marginTop: 0, marginBottom: 20,}}
                source={require('./resources/house4.jpg')}
              />
            </CardImage>
            <CardTitle>
              <Text style={styles.title}>San Francisco, CA</Text>
            </CardTitle>
            <CardContent>
              <Text>1104 Fulton St, CA 94117</Text>
            </CardContent>
            <CardContent>
            <Button
              icon={{name: 'visibility', buttonStyle: styles.someButtonStyle }}
              title="from $3,200,000.00"
              rounded="true"
              backgroundColor="#4caf50"
              onPress= {()=>{Linking.openURL(`https://www.bankofamerica.com/mortgage/home-mortgage/`);}}
            />
            </CardContent>
          </Card>

          <Card styles={{ card: { backgroundColor: '#c8e6c9',  marginBottom: 25 }}} >
                      <CardImage>
                        <Image
                        style={{width: 365, marginTop: 0, marginBottom: 20,}}
                          source={require('./resources/house1.jpg')}
                        />
                      </CardImage>
                      <CardTitle>
                        <Text style={styles.title}>Palo Alto, CA</Text>
                      </CardTitle>
                      <CardContent>
                        <Text>900 Arastradero Rd, 94304</Text>
                      </CardContent>
                      <CardContent>
                      <Button
                        icon={{name: 'visibility', buttonStyle: styles.someButtonStyle }}
                        title="from $1,500,000.00"
                        rounded="true"
                        backgroundColor="#4caf50"
                      />
                      </CardContent>
                    </Card>

          <Card styles={{ card: { backgroundColor: '#c8e6c9',  marginBottom: 25 }}} >
            <CardImage>
              <Image
                style={{width: 365, marginTop: 0, marginBottom: 20,}}
                source={require('./resources/house3.png')}
              />
            </CardImage>
            <CardTitle>
              <Text style={styles.title}>New York City, NY</Text>
            </CardTitle>
            <CardContent>
              <Text>767 5th Ave, 10153</Text>
            </CardContent>
            <CardContent>
            <Button
              icon={{name: 'visibility', buttonStyle: styles.someButtonStyle }}
              title="from $2,800,000.00"
              rounded="true"
              backgroundColor="#4caf50"
            />
            </CardContent>
          </Card>

          <Card styles={{ card: { backgroundColor: '#c8e6c9',  marginBottom: 25 }}} >
            <CardImage>
              <Image
                style={{width: 365, marginTop: 0, marginBottom: 20,}}
                source={require('./resources/house2.jpg')}
              />
            </CardImage>
            <CardTitle>
              <Text style={styles.title}>Austin, TX</Text>
            </CardTitle>
            <CardContent>
              <Text>3841 River Pl Blvd, 78730</Text>
            </CardContent>
            <CardContent>
            <Button
              icon={{name: 'visibility', buttonStyle: styles.someButtonStyle }}
              title="from $2,200,000.00"
              rounded="true"
              backgroundColor="#4caf50"
            />
            </CardContent>
          </Card>

        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  background: {
    backgroundColor: '#4caf50',
  },
  container: {
    flex: 1,
    marginTop: 40,
    marginBottom: 60,
  },
  title: {
    fontSize: 24,
    // backgroundColor: 'transparent'
  },
  cardTitle: {
    marginBottom: -40,
    // backgroundColor: 'transparent'
  },
  text: {
    fontSize: 18,

    // backgroundColor: 'transparent'
  },
  button: {
    marginRight: 10
  },
});
