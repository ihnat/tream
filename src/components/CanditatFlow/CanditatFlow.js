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
import s from './CanditatFlow.scss';
import Link from '../Link';

class CanditatFlow extends Component {

  componentWillMount() {

  }

  render() {
    const stages = [
      {type: 'sources', count: 3},
      {type: 'applied', count: 12},
      {type: 'phone screen', count: 4},
      {type: 'interview', count: 1},
      {type: 'offer', count: 1},
      {type: 'hired', count: 0}
    ].map(v => {
        var classNames = s.stage + (this.props.title.toLowerCase() == v.type ? " " + s.active : '');
        return <Link to={v.type.replace(/\s/g, '_')} className={classNames}><span className={s.stageCount}>{v.count}</span> <span>{v.type.toUpperCase()}</span></Link>
    });

    return (
      <div>
        <h3>Head of Account Management</h3>
        <div className={s.flow}>{stages}</div>
      </div>
    );
  }

}

export default withStyles(CanditatFlow, s);