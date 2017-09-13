import React from 'react';
import Header from './Header.jsx';
import Content from './Content.jsx';
import StateComponent from './StateComponent.jsx';
import PropertyComponents from './PropertyComponents.jsx';
import DefaultPropertyComponent from './DefaultPropertyComponent.jsx';
import ReCaptcha from './ReCaptcha.jsx';

class App extends React.Component {
    render() {
        var i = 1;
        var myStyle = {
            fontSize: 100,
            color: '#FF0000' 
        }
        return (
            <div>
            {/*<h1>This is a header</h1>
            <h2>This is a smaller header</h2>
            <p data-myattribute="somevalue">This is a paragraph</p>
            <p style = {myStyle}>{1+1}</p>
            <h3>{i == 1 ? 'True' : 'False'}</h3> */}
            <Header/>     
            <Content/>    
            <StateComponent/> 
            <PropertyComponents headerprop = "Header from property" contentprop="Content from property"/>
            <DefaultPropertyComponent />
            <ReCaptcha />
            
            </div>
        );
    }
}

export default App;