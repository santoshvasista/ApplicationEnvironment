import React from 'react'
import MenuItem from 'material-ui/MenuItem';
import SelectField from 'material-ui/SelectField';
import Select from '../ReusableComponents/FormControls/Select';
import Button from '../ReusableComponents/FormControls/Button';
import ModalDialog from '../ReusableComponents/FormControls/ModalDialog';
import HomeAddAppEnvDbServerContainer from '../../containers/HomeContainers/HomeAddAppEnvDbServerContainer';
//import MdModal from '../ReusableComponents/FormControls/MdModal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import AddCircle from 'material-ui/svg-icons/content/add-circle';
import FloatingButton from "../ReusableComponents/FormControls/FloatingButton";

const customContentStyle = {
  marginTop: '-5%',
  marginLeft: '5%',
  width: '75%',
  maxWidth: 'none',
  //height: "100%"
};


class HomeSearchComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {openDialog : false};
        this.handleChangeApplication = this.handleChangeApplication.bind(this);
        this.handleChangeEnvironment = this.handleChangeEnvironment.bind(this);
        this.handleAddClick = this.handleAddClick.bind(this);
        this.handleCloseDialog = this.handleCloseDialog.bind(this);
        this.handleSubmitDialog = this.handleSubmitDialog.bind(this);
        this.validate = this.validate.bind(this);
    }
    
    /* Dropdown change event for Application - Update store with selected value*/
    handleChangeApplication(event, index, value) {
        this.props.UpdateApplication(value);
    };
    /* Dropdown change event for Environment - Update store with selected value*/
    handleChangeEnvironment(event, index, value){
        this.props.UpdateEnvironment(value);
    } 
    /* Click event for Add button - Set openDialog to true so that Dialog box will open*/
    handleAddClick() {
        this.setState({openDialog : true});
        this.props.ClearSaveTo();
    }

    /* callback from  ModalDialog - Set openDialog to false so that Dialog box will close*/
    handleCloseDialog() {
        this.setState({openDialog: false});
        this.props.ClearSaveTo();
    }

    /* callback from  ModalDialog - Update store and set openDialog to false so that Dialog box will close*/
    handleSubmitDialog() {
        let dto = this.props.saveData.map( (value) => {
                return {
                    EnvName: value.EnvName,
                    AppName: value.AppName,                   
                    ServerName:value.ServerName,
                    DatabaseServerName:value.DatabaseServerName,
                    UrlName: value.UrlName
                }
        });
        this.props.SaveTo(dto);
        this.setState({openDialog: false});
    }

    validate() {
        console.log(this.props.completestore);
    }

    render() {
        return(
            <div className="card card-body" style={{marginLeft: '20%' }}>
                <div style={{ marginTop: '0%', marginBottom: "5%"}}>
                    {/* <Button label="Add" onClick={this.handleAddClick} icon={<AddCircle />}/> */}
                    <FloatingButton onClick={this.handleAddClick}/>
                    {/* <Button label="Validate" onClick={this.validate}/> */}
                </div>
                <div className="">
                    <Select floatingLabelText='Application'
                        options={this.props.store.ListOfApplications}
                        value={this.props.selectedApplication}
                        onChange={this.handleChangeApplication}
                    />
                    <Select floatingLabelText='Environment'
                        options={this.props.store.ListOfEnvironments}
                        value={this.props.selectedEnvironment}
                        onChange={this.handleChangeEnvironment}
                    />
                </div>
                
                <ModalDialog open={this.state.openDialog} 
                    handleCloseDialog={this.handleCloseDialog}
                    handleSubmitDialog={this.handleSubmitDialog}
                    title="Add Details"
                    contentStyle={customContentStyle}>
                        <HomeAddAppEnvDbServerContainer />
                </ModalDialog>            
            </div>
        )
    }
    
}
export default HomeSearchComponent;
