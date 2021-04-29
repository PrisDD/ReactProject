import React from 'react';
import { Route } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Dialogs from './components/Dialogs/Dialogs';
import Header from './components/Header/Header';
import Music from './components/Music/Music';
import News from './components/News/News';
import Settings from './components/Settings/Settings';
import Nav from './components/Nav/Nav';
import ProfilePage from './components/ProfilePage/ProfilePage';

const App = (props) => {
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header />
                <Nav />
                <div className='app-wrapper-content'>
                    {/* не получится добавить props  */}
                    {/* <Route path='/dialogs' component={Dialogs} />
                    <Route path='/profile' component={ProfilePage} /> */}

                    {/* получится добавить props
                    анонимную ф-ю можно вынесты выше App  обьявив через let
                    */}
                    <Route path='/dialogs' 
                        render={() => <Dialogs state={props.state.dialogsPage} />} />
                    <Route path='/profile' 
                        render={() => <ProfilePage state={props.state.profilePage}/>} />
                    <Route path='/news' render={() => <News />} />
                    <Route path='/music' render={() => <Music />} />
                    <Route path='/settings' render={() => <Settings />} />
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;