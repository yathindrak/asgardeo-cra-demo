/**
 * Copyright (c) 2022, WSO2 Inc. (http://www.wso2.com) All Rights Reserved.
 *
 * WSO2 Inc. licenses this file to you under the Apache License,
 * Version 2.0 (the "License"); you may not use this file except
 * in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied. See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

 import { AuthProvider, Storage, useAuthContext } from "@asgardeo/auth-react";
 import React, { FunctionComponent, ReactElement } from "react";
 import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
 import { ErrorBoundary } from "./error-boundary";
 import { HomePage, NotFoundPage } from "./pages";
 import { LandingPage } from "./pages/landing";
 import { LoggedOutPage } from "./pages/LoggedOut";
 import "./app.css";
//  import { ReactNotifications } from "react-notifications-component";
 
 const AppContent: FunctionComponent = (): ReactElement => {
     const { error } = useAuthContext();
     
     return (
         <>
             {/* <ReactNotifications /> */}
             <ErrorBoundary error={error}>
                 <Router>
                     <Routes>
                         <Route path="/" element={<LandingPage />} />
                         <Route path="/signin" element={<HomePage />} />
                         <Route path="/login" element={<LoggedOutPage />} />
                         <Route path="*" element={<NotFoundPage />} />
                     </Routes>
                 </Router>
             </ErrorBoundary>
         </>
     )
 };
 
 const App = () => (
  <AuthProvider
    config={ {
        signInRedirectURL: "https://localhost:3000/signin",
        signOutRedirectURL: "https://localhost:3000/login",
        clientID: "<client_id>",
        baseUrl: "https://api.asgardeo.io/t/<tenant>",
        scope: [ "openid","profile" ],
        storage: "webWorker" as Storage.WebWorker
    } }
  >
         <AppContent />
     </AuthProvider>
 );
 
 export default App;