import React from "react";
import { StyleSheet, Text, View, ActivityIndicator } from "react-native";
import { WebView } from "react-native-webview"; //expo install react-native-webview

export default class App extends React.Component {
  render() {
    const renderLoading = () => {
      <ActivityIndicator
        style={{ flex: 1 }}
        animating
        color="grey"
        size="large"
      />;
    };
    return (
      <WebView
        startInLoadingState={true}
        renderLoading={renderLoading}
        source={{ uri: "https://www.simundia.com" }}
        style={styles.container}
      ></WebView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20
  }
});
