/*
 *
 * LanguageProvider
 *
 * this component connects the redux state language locale to the
 * i18n component (loaded from `src/locales`)
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect, } from 'react-redux';

import i18n from '../../i18n';

export class LanguageProvider extends React.PureComponent {
    componentWillReceiveProps(nextProps) {
        i18n.locale = nextProps.locale;
    }

    render() {
        return React.Children.only(this.props.children);
    }
}

LanguageProvider.propTypes = {
    locale: PropTypes.string.isRequired,
    children: PropTypes.element.isRequired,
};

const mapStateToProps = ({ language, }) => ({
    locale: language.locale,
});

export default connect(mapStateToProps)(LanguageProvider);
