import { SignIn } from '../pages/signin/sign_in';
import { SignUp } from '../pages/signup/sign_up';
import { UserProfile } from '../pages/user_profile/user_profile';
import ChatPage from '../pages/chats/chats';


import { renderDOM } from '../utils/renderDOM';

window.addEventListener('DOMContentLoaded', () => {
  const page = new ChatPage();

  renderDOM('#app', page);
});
