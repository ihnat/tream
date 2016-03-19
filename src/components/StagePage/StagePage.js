/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React, { Component, PropTypes } from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './StagePage.scss';
import Link from '../Link';
import CanditatFlow from '../CanditatFlow';

class StagePage extends Component {

  componentWillMount() {

  }

  render() {

    return (
      <div>
        <CanditatFlow title={this.props.title}/>
        <h3>{this.props.title}</h3>
      </div>
    );
  }

}

export default withStyles(StagePage, s);
