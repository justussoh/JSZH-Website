import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const config = {
    api: '/api/contact/index.php',
    title: 'Contact Me',
    successMessage: 'Thank you for contacting me.',
    errorMessage: 'Sorry we have some problems.',
    fields:{
        name: '',
        email: '',
        subject: '',
        message: '',
    },
    fieldsConfig:  [
        { id: 1, label: 'First Name', fieldName: 'name', type: 'text',placeholder:'Your First Name', isRequired: true , klassName:'first-name-field'},
        { id: 2, label: 'Last Name', fieldName: 'subject', type: 'text', placeholder: 'Your Last Name', isRequired: true , klassName:'last-name-field'},
        { id: 3, label: 'Email', fieldName: 'email', type: 'email', placeholder: ' Your Email', isRequired: true , klassName:'email-field'},
        { id: 4, label: 'Message', fieldName: 'message', type: 'textarea',placeholder:'Write something.....', isRequired: true , klassName:'message-field'}
    ]
};

ReactDOM.render(<App config={config} />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
