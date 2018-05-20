// @flow
'use strict';

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  ScrollView,
  TouchableWithoutFeedback,
  View,
} from 'react-native';

import AreaSpline from './js/charts/AreaSpline';
import Pie from './js/charts/Pie';
import Theme from './js/theme';
import data from './resources/data';
import data0 from './resources/data0';
import data00 from './resources/data00';

type State = {
  activeIndex: number,
  spendingsPerYear: any
}

export default class ChartScreen extends Component {

  state: State;

  constructor(props) {
    super(props);
    this.state = {
      activeIndex: 0,
      spendingsPerYear: data.spendingsPerYear,
    };
    this._onPieItemSelected = this._onPieItemSelected.bind(this);
    this._shuffle = this._shuffle.bind(this);
    this.saved = data0.spendingsPerYear;
    this.pred = data00.spendingsPerYear;
  }

  _onPieItemSelected(newIndex){
    this.setState({...this.state, activeIndex: newIndex, spendingsPerYear: this._shuffle(data.spendingsPerYear)});
  }

  _shuffle(a) {

      for (let i = a.length; i; i--) {
          let j = Math.floor(Math.random() * i);
          [a[i - 1], a[j]] = [a[j], a[i - 1]];
      }
      return a;
  }

  render() {
    const height = 200;
    const width = 500;

    return (
      <ScrollView style={{ flex: 1, backgroundColor: '#4caf50',}}>
        <View style={styles.container} >
          <Text style={styles.chart_title}>Money Saved since You're <Text style={styles.nested}>Refined</Text> </Text>
          <AreaSpline
              width={width}
              height={height}
              data={this.saved}
              color= '#388e3c'
              />

            <Text style={styles.chart_title}>Your <Text style={styles.nested}>Refined</Text> Rates Predictions</Text>
          <AreaSpline
              width={width}
              height={height}
              data={this.pred}
              color='#009688' />

          <Text style={styles.chart_title}>Key Contributing Factors</Text>
          <Pie
            pieWidth={150}
            pieHeight={150}
            onItemSelected={this._onPieItemSelected}
            colors={Theme.colors}
            width={width}
            height={height}
            data={data.spendingsLastMonth} />

          <Text style={styles.chart_title}>Contribution from <Text style={styles.nested}>{data.spendingsLastMonth[this.state.activeIndex].name}</Text></Text>
          <AreaSpline
            width={width}
            height={height}
            data={this.state.spendingsPerYear}
            color={Theme.colors[this.state.activeIndex]} />

        </View>
      </ScrollView>
    );
  }
}

const styles = {
  container: {
    backgroundColor:'#c8e6c9',
    marginTop: 21,
  },
  nested: {
    color:'#f06292',
    fontWeight:'bold',
  },
  chart_title : {
    paddingTop: 25,
    textAlign: 'center',
    paddingBottom: 20,
    paddingLeft: 5,
    fontSize: 20,
    backgroundColor:'#6cca70',
    color: 'white',
    fontWeight:'bold',
  }
}
