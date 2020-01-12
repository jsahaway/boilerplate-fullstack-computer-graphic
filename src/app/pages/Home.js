import React from 'react';
import ThreeTest from '../components/ThreeTest';
import ThreeTestHook from '../components/ThreeTestHook';
// import OpenCvTest from '../components/OpenCvTest';
import { DataContext } from '../../app/components/DataContext';

export default () => {
  // const data = React.useContext(DataContext);
  // console.log('render context', data);
  // const keys = Object.keys(data);
  // const values = Object.values(data);
  if (typeof window != 'undefined') console.log(window.__INITIAL__DATA__);
  return (
    <div className='Home'>
      <div className='Home-header'>
        {/* ---{keys}--- */}
        {/* <ProviderData.Consumer>
            {value => console.log(value)}
          </ProviderData.Consumer> */}
      </div>
      <p className='Home-intro'>
        To get started, edit <code>src/App.js</code> or <code>src/Home.js</code>{' '}
        and save to reload.
      </p>
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
};
