import React from 'react';
import './App.css';
import LeftContent from './Component/LeftContent';
import RightContent from './Component/RightContent';

class App extends React.Component {
    render() {
        return(
            <div className="background">
                <RightContent />
                <LeftContent />
            </div>
        );
    }
}

export default App;