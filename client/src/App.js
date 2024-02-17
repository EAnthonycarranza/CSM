import React from 'react';
import ApolloClient from './apolloClient';
import { ApolloProvider } from '@apollo/client';
import PersonalInformationList from './components/GetPersonalInformation';
import GetEducation from './components/GetEducation';
import GetEmployment from './components/GetEmployment';
import GetAgreementAcknowledgement from './components/GetAgreementAcknowledgement';
import GetMedicalInformation from './components/GetMedicalInformation';
import GetHistory from './components/GetHistory';

function App() {
  return (
    <ApolloProvider client={ApolloClient}>
      <div>
        <h1>CSM Test</h1>
        <PersonalInformationList />
        <GetEducation />
        <GetEmployment />
        <GetAgreementAcknowledgement />
        <GetMedicalInformation />
        <GetHistory />
      </div>
    </ApolloProvider>
  );
}

export default App;
