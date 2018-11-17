//SurveyNew is the parent of SurveyForm and SurveyFormReview
import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import SurveyForm from './SurveyForm';
import SurveyFormReview from './SurveyFormReview';

class SurveyNew extends Component {
    state = { showFormReview: false };

    renderContent() {
        if (this.state.showFormReview === true){
            return <SurveyFormReview 
                onCancel={() => this.setState({ showFormReview: false })}
            />;
        }
        return (
            <SurveyForm 
                onSurveySubmit={() => this.setState({ showFormReview: true })} 
            />
        );
    }

    render() {
        return (
            <div>
                {this.renderContent()}
            </div>
        );
    }
}

//using reduxForm helper here means if user navigates away from SurveyNew, form will be cleared
export default reduxForm({
    form: 'surveyForm'
})(SurveyNew);