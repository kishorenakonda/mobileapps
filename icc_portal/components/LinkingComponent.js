import {Component} from 'react';
import {Linking} from 'react-native';

export class LinkingComponent extends Component {
  componentWillMount() {
    // Linking.openURL('https://reactnativecode.com');
    Linking.openURL('https://ipcloud.tatacommunications.com/catalyst?redirect=mobile').catch(
      err => console.error('An Error Occured', err),
    );
  }

  render() {
    return <View></View>;
  }
}
