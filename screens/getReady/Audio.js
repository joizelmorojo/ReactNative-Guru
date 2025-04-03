import React from "react";
import WebView from "react-native-webview";

export default class Audio extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    setTimeout(() => {
      this.webview.injectJavaScript('document.getElementById("audio").play();');
    }, 500);
  }

  render() {
    return (
      <WebView
        ref={(ref) => (this.webview = ref)}
        originWhitelist={["*"]}
        mediaPlaybackRequiresUserAction={false}
        useWebKit={true}
        source={{
          html: `<audio id="audio"> 
                        <source 
             src="https://firebasestorage.googleapis.com/v0/b/find-and-auction-here.appspot.com/o/countdown-5-seconds.mp3?alt=media&token=911b1025-afe3-4740-b3f6-65b521d6ac57"
             type="audio/mp3" /> </audio>`,
        }}
      />
    );
  }
}
