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
import s from './ApplicantItem.scss';
import Link from '../Link';

class ApplicantItem extends Component {
    render() {
        var applicant = this.props.applicant;

        return (
            <li className={s.item}>
                <Link to="/applicant">
                    <img src={applicant.img} className={s.img} width="50" />
                    <span className={s.name}>{applicant.name}</span>
                    <span className={s.position}>{applicant.position}</span>
                </Link>
            </li>
        );
    }

}

export default withStyles(ApplicantItem, s);
