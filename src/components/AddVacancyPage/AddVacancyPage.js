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
import s from './AddVacancyPage.scss';
import Link from '../Link';

class AddVacancyPage extends Component {
    render() {
        return (
            <div className={s.wrapper}>
                <h2>Add Vacancy</h2>
                <form className={s.form}>
                    <div className={s.form_row}><label className={s.label}>Position:</label><div><input placeholder="Type a text here" type="text" className={s.input}/></div></div>
                    <div className={s.form_row}><label className={s.label}>Description:</label><div><textarea placeholder="Type a text here" className={s.textarea}/></div></div>
                    <div className={s.add_row}><Link to="/vacancy" className={s.button}>Add</Link></div>
                </form>
            </div>
        );
    }

}

export default withStyles(AddVacancyPage, s);
