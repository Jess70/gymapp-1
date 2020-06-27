/**
 * @author Yatanvesh Bhardwaj <yatan.vesh@gmail.com>
 */
import React, {Component} from 'react';
import {View, TouchableOpacity, StyleSheet, FlatList, Image, StatusBar} from 'react-native'
import {connect} from "react-redux";

import TrainerThumb from '../../components/Trainer/TrainerThumb';
import colors, {appTheme} from "../../constants/colors";
import RouteNames from "../../navigation/RouteNames";
import * as actionCreators from '../../store/actions';
import {userTypes} from "../../constants/appConstants";
import UserThumb from "../../components/Trainer/UserThumb";
import {spacing} from "../../constants/dimension";
// import {rootURL} from "../../constants/appConstants";
// import {initialiseSocket} from "../../utils/utils";

const defaultDP = 'https://media.istockphoto.com/photos/middle-aged-gym-coach-picture-id475467038';

class UserListing extends Component {
  async componentDidMount() {
    const {updateTrainers, authToken} = this.props;
    updateTrainers();
    // global.socket = await initialiseSocket(authToken);
    // console.log(global.socket)
  }

  openTrainer = (trainerId) => {
    const {navigation} = this.props;
    navigation.navigate(RouteNames.Profile, {
      userId: trainerId
    });
  }

  renderUserThumb = (user, index) => {
    const {userType} = user;
    let {name, totalSlots = 0, usedSlots = 0, experience = 0, rating, displayPictureUrl} = user;
    if (!displayPictureUrl) displayPictureUrl = defaultDP;

    return <TouchableOpacity
      activeOpacity={0.7}
      style={styles.userContainer}
      onPress={() => this.openTrainer(user._id)}
    >
      {
        userType === userTypes.USER && (
          <UserThumb
            name={name ||'User'}
            dpUrl={displayPictureUrl}
            location={'Bangalore'}
          />
        )
      }
      {
        userType === userTypes.TRAINER && (
          <TrainerThumb
            name={name || 'Trainer'}
            slots={{
              remaining: totalSlots - usedSlots,
              used: usedSlots
            }}
            dpUrl={displayPictureUrl}
            experience={experience}
            rating={rating}
          />
        )
      }
    </TouchableOpacity>
  }

  renderHorizontalSeparatorView = () => <View style={styles.itemSeparatorHorizontal}/>

  render() {
    let users = this.props.trainers;

    return (<>
        <StatusBar backgroundColor={appTheme.background}/>
        <View style={styles.listContainer}>
          <FlatList

            showsVerticalScrollIndicator={false}
            style={styles.container}
            data={users}
            renderItem={({item, index}) => this.renderUserThumb(item, index)}
            keyExtractor={(item, index) => item._id}
            ItemSeparatorComponent={this.renderHorizontalSeparatorView}
          />
        </View>
      </>
    );
  }
}

const styles = StyleSheet.create({
  container: {

    width:'100%',
    paddingLeft:spacing.large_lg,
    paddingRight:spacing.large_lg,
    paddingTop:spacing.large_lg,
  },


  listContainer: {
    // flex: 1,
    justifyContent: 'center',
    alignItems: "center",
    backgroundColor: appTheme.darkBackground,
    width: '100%',
    borderRadius: 20,
    borderColor: 'transparent',
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    // marginTop: spacing.large_lg,
    // paddingLeft: spacing.large,
    // paddingRight: spacing.large
  },
  itemSeparatorHorizontal: {
    height: 1,
    marginTop:spacing.medium,
    marginBottom:spacing.medium,
    backgroundColor:appTheme.grey,
  },
  userContainer: {
    width: '100%'
  }
});

const mapStateToProps = (state) => ({
  trainers: state.app.trainers,
  authToken: state.user.authToken,
});

const mapDispatchToProps = (dispatch) => ({
  updateTrainers: () => dispatch(actionCreators.updateTrainers()),
});

export default connect(mapStateToProps, mapDispatchToProps)(UserListing);