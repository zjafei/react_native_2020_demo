import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  WhiteSpace,
  WingBlank,
  Button,
  SearchBar,
} from '@ant-design/react-native';

import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import { Colors } from 'react-native/Libraries/NewAppScreen';

@connect(({ globalModel }) => ({
  globalModel,
}))
class Page extends Component {
  render() {
    const {
      globalModel: { testText },
      dispatch,
    } = this.props;
    return (
      <>
        <StatusBar barStyle="dark-content" />
        <SafeAreaView>
          <ScrollView
            contentInsetAdjustmentBehavior="automatic"
            style={styles.scrollView}>
            {global.HermesInternal == null ? null : (
              <View style={styles.engine}>
                <Text style={styles.footer}>Engine: Hermes</Text>
              </View>
            )}

            <SearchBar defaultValue="初始值" placeholder="搜索" />
            <WingBlank>
              <Text>{testText}</Text>
              <WhiteSpace />
              <Button
                onPress={() => {
                  dispatch({
                    type: 'globalModel/save',
                    payload: {
                      testText: 'dispatch test is ok!',
                    },
                  });
                }}
                type="primary">
                on press for test dispatch
              </Button>
            </WingBlank>
          </ScrollView>
        </SafeAreaView>
      </>
    );
  }
}

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default Page;
