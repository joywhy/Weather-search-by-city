import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
    <App />
  // </React.StrictMode>
  // create-react-app으로 프로젝트를 생성하는 경우 index.js에서 React.StrictMode로 App 컴포넘트를 감싸서 렌더링 해주는데 이 경우 개발 단계시 오류를 잡기 위해 두번 렌더링 
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
