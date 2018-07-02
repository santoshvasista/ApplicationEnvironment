import React, { Component } from 'react'
import {connect} from 'react-redux';
import HomeSearchComponent from '../../components/HomeComponents/HomeSearchComponent';
import HomeSearchUpdateApplicationDispatch from '../../dispatch/HomeDispatch/HomeSearchDispatch/HomeSearchUpdateApplicationDispatch';
import HomeSearchUpdateEnvironmentDispatch from '../../dispatch/HomeDispatch/HomeSearchDispatch/HomeSearchUpdateEnvironmentDispatch';
import HomeClearAppEnvDbServerDispatch from '../../dispatch/HomeDispatch/HomeAddAppEnvDbServerDispatch/HomeClearAppEnvDbServerDispatch'
import HomeSaveTo from '../../dispatch/HomeDispatch/HomeAddAppEnvDbServerDispatch/HomeSaveTo';

const mapStateToProps = (state) => {
  return {
    store : state.ApplicationEnvironment,
    completestore : state,
    selectedApplication: state.ApplicationEnvironment.ApplicationId,
    selectedEnvironment: state.ApplicationEnvironment.EnvironmentId,
    saveData : state.SaveAppEnvDbServer
  }
}

const mapDispatchToProps = (dispatch) => ({
  UpdateApplication : value => { HomeSearchUpdateApplicationDispatch(value, dispatch)},
  UpdateEnvironment : value => { HomeSearchUpdateEnvironmentDispatch(value, dispatch)},
  ClearSaveTo : value =>{ HomeClearAppEnvDbServerDispatch(value, dispatch)},
  SaveTo : value => { HomeSaveTo(value, dispatch)}

})

const HomeSearchContainer = connect(mapStateToProps, mapDispatchToProps)(HomeSearchComponent)

export default HomeSearchContainer;