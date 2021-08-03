import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import {
  requireNativeComponent,
  ViewProps,
  ViewPropTypes,
  Dimensions,
  Platform
} from 'react-native';

const { height, width } = Dimensions.get('window');

export interface PDFViewCtrlProps extends ViewProps { // needed to add style to props
  document: string;
  style?: object;
}

export class PDFViewCtrl extends PureComponent<PDFViewCtrlProps, any> {

  render() {
    return (
      <RCTPDFViewCtrl
        style={{ flex:1 }}
        {...this.props}
      />
    )
  }
}

var iface = {
  name: 'PDFViewCtrl',
  propTypes: {
    document: PropTypes.string,
    ...ViewPropTypes, // include the default view properties
  },
};

const name = Platform.OS === 'ios' ? 'RNTPTPDFViewCtrl' : 'RCTPDFViewCtrl';

// @ts-ignore
const RCTPDFViewCtrl = requireNativeComponent(name, PDFViewCtrl, iface); // https://github.com/facebook/react-native/issues/28351