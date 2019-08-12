import React from 'react';
import logo from '../../openmrs.logo';
// import { HomePage as ReactComponentsHomePage, Head } from '@openmrs/react-components';
// import homeImage from "../../assets/images/Malawi_hut.jpg";


const getEnvValues = () => {
  if (!process.env.REACT_APP_SERVER_ADDRESS || !process.env.REACT_APP_SERVER_CONTEXT_PATH) {
    throw new Error('Please define `REACT_APP_SERVER_ADDRESS` and `REACT_APP_SERVER_CONTEXT_PATH` in your .env file');
  }

  const serverAddress = process.env.REACT_APP_SERVER_ADDRESS
  const serverContextPath = process.env.REACT_APP_SERVER_CONTEXT_PATH;

  return { serverAddress, serverContextPath };
}

const { serverAddress, serverContextPath } = getEnvValues();

const ExampleIndex = (props) => {

  return (
 

    <div>
      <div className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>Welcome to OpenMRS React Components</h2>
      </div>

      {/* About OpenMRS */}
      <div>
        <h1>
          About OpenMRS
        </h1>

        <p>
          OpenMRS is a collaborative open-source project to develop software to support the delivery of health care in developing countries.
        </p>

        <p>
          OpenMRS is founded on the principles of openness and sharing of ideas, software and strategies for deployment and use.
        </p>

      
      </div>
      <hr/>
      {/* About OpenMRS React Components Repository*/}
      <div>
        <h1>
          About OpenMRS React Components Repository
        </h1>

        <p>
          OpenMRS is a collaborative open-source project to develop software to support the delivery of health care in developing countries. 
        </p>

        <p>
          OpenMRS is founded on the principles of openness and sharing of ideas, software and strategies for deployment and use.
        </p>

      </div>
      <hr/>

      <p className="App-intro">
          <b> Server Address: { serverAddress } </b><br/><br/>
          <b> Server Context Path: { serverContextPath } </b>
      </p>
      <hr/>

      <div>
        <h1>
          Example Repository
        </h1>

        <h2> 
          Index of Available Components
        </h2>
 
        <ul> 
          <li>
            <a
              href="/#/home"
              target="_blank"
            >Home Page</a>
          </li>
          <li>
            <a
              href="/#/login"
              target="_blank"
            >Login</a>
          </li>
          <li>
            <a
              href="/accordion"
              target="_blank"
            >Accordion</a>
          </li>

          <li>
            <a
              href="/#/tabbedComponent"
              target="_blank"
            >Tabs</a>
          </li>

          <li>
            <a
              href="/#/searchPatient"
              target="_blank"
            >Patient Search</a>
          </li>

          <li>
            <a
              href="/#/toolTip"
              target="_blank"
            >Tool Tip</a>
          </li>

          <li>
            <a
              href="/#/screening"
              target="_blank"
            >Task List</a>
          </li>

          {/* Loading */}
          <li>
            <a
              href="/#/loading"
              target="_blank"
            >Loading</a>
          </li>

          {/* Antd Widgets */}
          <li>
            <a
              href="/#/antd-widgets"
              target="_blank"
            >Antd Widgets</a>
          </li>
          
          {/* Errors */}
          <li>
            <a
              href="/#/errors"
              target="_blank"
            >Errors</a>
          </li>

          {/* Layout */}
          <li>
            <a
              href="/#/layout"
              target="_blank"
            >Layout</a>
          </li>

          {/* Header */}
          <li>
            <a
              href="/#/header"
              target="_blank"
            >Header</a>
          </li>

          {/* AutoComplete Component */}
          <li>
            <a
              href="/#/autocomplete"
              target="_blank"
            >Autocomplete</a>
          </li>

          {/* Widgets */}
          <li>
            <a
              href="/#/widgets"
              target="_blank"
            >Widgets</a>
          </li>

          {/* List */}
          <li>
            <a
              href="/#/list"
              target="_blank"
            >List</a>
          </li>

          {/* Form */}
          <li>
            <a
              href="/#/form"
              target="_blank"
            >Form</a>
          </li>

        </ul>
      </div>
    </div> 
  );

};

export default ExampleIndex;
