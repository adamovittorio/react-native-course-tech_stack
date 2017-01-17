import React, { Component } from 'react';
import {
  Text,
  TouchableWithoutFeedback,
  View,
  LayoutAnimation,
  UIManager
} from 'react-native';
import { connect } from 'react-redux';

import * as actions from '../actions';
import { CardSection } from './common';

// for android
UIManager.setLayoutAnimationEnabledExperimental &&
UIManager.setLayoutAnimationEnabledExperimental(true);

class ListItem extends Component {

  componentWillUpdate() {
    LayoutAnimation.spring();
  }
  renderDescription() {
    const { expanded, library } = this.props;
    const { descriptionStyle } = styles;

    if (expanded) {
      return (
        <CardSection>
          <Text style={descriptionStyle}>{library.description}</Text>
        </CardSection>
      );
    }
  }

  render() {
    const { title, id } = this.props.library;
    const { titleStyle } = styles;

    return (
      <TouchableWithoutFeedback onPress={() => this.props.selectLibrary(id)}>
        <View>
          <CardSection>
            <Text style={titleStyle}>
              {title}
            </Text>
          </CardSection>
          {this.renderDescription()}
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

const styles = {
  titleStyle: {
    fontSize: 18,
    paddingLeft: 15
  },
  descriptionStyle: {
    paddingLeft: 15,
    flex: 1
  }
};

const mapDispatchToProps = (state, ownProps) => {
  const expanded = state.selectedLibraryId === ownProps.library.id;
  return ({ expanded });
};

export default connect(
  mapDispatchToProps,
  actions
)(ListItem);
