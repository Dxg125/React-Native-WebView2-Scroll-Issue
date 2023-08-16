import { WebView } from 'react-native-webview';

function App () {

 let uri = `https://www.google.com/search?q=Search+For+Something+1+2`;
 let scr = (Event) => {
  console.log(`Listening for`, Event);
 };

 /* as test for console -> appears, but scroll event does not! */
 console.log('We Are App();');

 /* that has been the moment where i needed more Röstiiii */
 /* it works before first clicking inside of it??? WTF */

 return (<WebView source={{uri}} useWebView2={true} scrollEnabled={false} nestedScrollEnabled={false} />);

 /* After Click -> Does not work! */
 return (<WebView
  style={{flex: 1, flexGrow: 1, height: 8000, margin: 30}}
  useWebView2={true}
  source={{ uri: 'https://reactnative.dev' }}
  onScroll={syntheticEvent => {
   const { contentOffset } = syntheticEvent.nativeEvent
   console.table(contentOffset)
  }}
 />);

 /* Scroll Event does not work? :( */
 return (<WebView source={{uri}} onScroll={scr} />);
 /* Scrolling Works and event does not getting triggered? but its not WebView2 */
 return (<WebView source={{uri}} useWebView2={false} onScroll={scr} />);
 /* 1: doesn't work with mouse-wheel -> only by mouse-wheel-click / drag, and dragging the scrollbar with the cursor */
 return (<WebView source={{uri}} scrollEnabled={true} nestedScrollEnabled={true} useWebView2={true} onScroll={scr} />);
}

export default App;