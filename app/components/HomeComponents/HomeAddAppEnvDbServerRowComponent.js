import React from 'react'
import MenuItem from 'material-ui/MenuItem';
import SelectField from 'material-ui/SelectField';
import Select from '../ReusableComponents/FormControls/Select';
import Button from '../ReusableComponents/FormControls/Button';
import TextAutoComplete from '../ReusableComponents/FormControls/TextAutoComplete';
import TextBox from '../ReusableComponents/FormControls/TextBox';
import TextBoxValidator from '../ReusableComponents/FormControls/TextBoxValidator';
import TextValidator from 'react-material-ui-form-validator';

const customContentStyle = {
  marginTop: '-15%',
  width: '90%',
  maxWidth: 'none',
};


class HomeAddAppEnvDbServerRowComponent extends React.Component {
    constructor(props) {
        super(props);
        this.handleUpdateApplication = this.handleUpdateApplication.bind(this);
        this.handleUpdateEnvironment = this.handleUpdateEnvironment.bind(this);
        this.handleUpdateDatabase = this.handleUpdateDatabase.bind(this);
        this.handleUpdateServer = this.handleUpdateServer.bind(this);
    }
    
    
    handleUpdateApplication(value) {
        this.props.AddUpdateApplication(value);
    }
    handleUpdateEnvironment(value){
        this.props.AddUpdateEnvironment(value);
    } 
    handleUpdateDatabase(event, value){
        this.props.AddUpdateDatabase(value);
    } 
    handleUpdateServer(event, value){
        this.props.AddUpdateServer(value);
    } 

    render() {
        
        return(
            <div style={{ marginTop: '3%', marginLeft: '2%' }}>
                <div style={{ width: '23%', float: 'left'}} >
                    <TextAutoComplete floatingLabelText='Application'
                        hintText='Enter Application'
                        dataSource={this.props.ListOfApplications}
                        handleUpdateInput = {this.handleUpdateApplication}
                    />
                </div>
                <div style={{ width: '23%', float: 'left'}} >                
                    <TextAutoComplete floatingLabelText='Environment'
                        hintText='Enter Environment'
                        dataSource={this.props.ListOfEnvironments}
                        handleUpdateInput = {this.handleUpdateEnvironment}
                        style={{width: "25%"}}
                    />
                </div>
                <div style={{ width: '23%', float: 'left'}} >
                    <TextBox floatingLabelText='Database' 
                            onChange={this.handleUpdateDatabase} />
                </div>
                <div style={{ width: '23%', float: 'left'}} >
                    <TextBox floatingLabelText='Server' 
                            onChange={this.handleUpdateServer}/>
                        {/* <TextValidator
                            floatingLabelText={"Server"}
                            onChange = {this.handleUpdateServe}
                            validators={['required']}
                            errorMessages={['Field is required']}
                        /> */}
                </div>
            </div>
        )
    }
    
}
export default HomeAddAppEnvDbServerRowComponent;
