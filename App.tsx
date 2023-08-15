import { WebView } from 'react-native-webview';

function App () {

 let uri = `https://www.google.com/search?q=Search+For+Something+1`;
 let scr = (Event) => {
  console.log(Event);

 };

 /* as test for console -> appears, but scroll event does not! */
 console.log('We Are App();');

 /* it works before first clicking inside of it??? WTF */
 return [
  <WebView key={1337} style={{flex: 1, flexGrow: 1}} useWebView2={true} source={{uri}} onScroll={scr} />,
  <WebView style={{flex: 1, flexGrow: 1, height: 8000}} useWebView2={true} source={{uri}} onScroll={scr} />
 ];

 /* Does not work! */
 return (<WebView
  style={{flex: 1, flexGrow: 1, height: 8000, margin: 30}}
  useWebView2={true}
  source={{ uri: 'https://reactnative.dev' }}
  onScroll={syntheticEvent => {
   const { contentOffset } = syntheticEvent.nativeEvent
   console.table(contentOffset)
  }}
 />);

 /*
  Scroll Event copied from https://github.com/react-native-webview/react-native-webview/blob/master/docs/Reference.md#scrollenabled
  does not work!
  btw the sample has a typo : <Webview instead of <WebView */
 return (<WebView
  source={{ uri: 'https://reactnative.dev' }}
  onScroll={syntheticEvent => {
   const { contentOffset } = syntheticEvent.nativeEvent
   console.table(contentOffset)
  }}
 />);

 /* Scroll Event does not work? */
 return (<WebView source={{uri}} onScroll={scr} />);
 /* Scrolling Works, but event does not getting triggered? */
 return (<WebView source={{uri}} useWebView2={false} onScroll={scr} />);
 /* 1: doesn't work with mouse-wheel -> only by mouse-wheel-click / drag, and dragging the scrollbar with the cursor */
 return (<WebView source={{uri}} scrollEnabled={true} nestedScrollEnabled={true} useWebView2={true} onScroll={scr} />);
}

export default App;
/*
type SectionProps = PropsWithChildren<{
  title: string;
}>;

function Section({children, title}: SectionProps): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
}

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <Header />
        <View
          style={{
            backgroundColor: isDarkMode ? Colors.black : Colors.white,
          }}>
          <Section title="Step One">
            Edit <Text style={styles.highlight}>App.tsx</Text> to change this
            screen and then come back to see your edits.
          </Section>
          <Section title="See Your Changes">
            <ReloadInstructions />
          </Section>
          <Section title="Debug">
            <DebugInstructions />
          </Section>
          <Section title="Learn More">
            Read the docs to discover what to do next:
          </Section>
          <LearnMoreLinks />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
*/