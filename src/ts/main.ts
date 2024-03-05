import { SignIn } from '../pages/signin/sign_in';
import { SignUp } from '../pages/signup/sign_up';
import { Profile } from '../pages/user_profile/user_profile';


import { renderDOM } from '../utils/renderDOM';

window.addEventListener('DOMContentLoaded', () => {
  const page = new Profile({ nickName: 'Fedor' });

  renderDOM('#app', page);
});


