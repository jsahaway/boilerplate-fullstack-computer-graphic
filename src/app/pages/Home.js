import React from 'react';
import ThreeTest from '../components/ThreeTest';
import ThreeTestHook from '../components/ThreeTestHook';
import OpenCvTest from '../components/OpenCvTest';

class Home extends React.Component {
  render() {
    return (
      <div className='Home'>
        <div className='Home-header'></div>
        <p className='Home-intro'>
          To get started, edit <code>src/App.js</code> or{' '}
          <code>src/Home.js</code> and save to reload.
        </p>
        <OpenCvTest />
        <ThreeTest />
        <ThreeTestHook />
        <a target='_self' href='/about'>
          About
        </a>
        <ul className='Home-resources'>
          <li>
            <a href='https://github.com/jaredpalmer/razzle'>Docs</a>
          </li>
          <li>
            <a href='https://github.com/jaredpalmer/razzle/issues'>Issues</a>
          </li>
          <li>
            <a href='https://palmer.chat'>Community Slack</a>
          </li>
        </ul>
      </div>
    );
  }
}

export default Home;
