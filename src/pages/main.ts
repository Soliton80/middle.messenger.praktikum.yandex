import SignIn from './signIn/signIn';
// import SignUp from './signUp/signUp';
// import UserProfile from './userProfile/userProfile';
// import ChatPage from './chats/chats';
// import Message from './message/message';

import renderDOM from '../utils/renderDOM';

window.addEventListener('DOMContentLoaded', () => {
  const page = new SignIn();

  renderDOM('main', page);
});
