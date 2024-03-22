import SignIn from './pages/signIn/signIn';
import SignUp from './pages/signUp/signUp';
import UserProfile from './pages/userProfile/userProfile';
import ChatPage from './pages/chats/chats';
import Message from './pages/message/message';
import error404 from './pages/404/404';
import error500 from './pages/500/500';
import renderDOM from './utils/renderDOM';

interface PagesClasses {
  [key: string]: any;
  SignIn: typeof SignIn;
  SignUp: typeof SignUp;
  UserProfile: typeof UserProfile;
  ChatPage: typeof ChatPage;
  Message: typeof Message;
  404: typeof error404;
  500: typeof error500;
}

const pagesClasses: PagesClasses = {
  SignIn,
  SignUp,
  UserProfile,
  ChatPage,
  Message,
  404: error404,
  500: error500,
};

document.addEventListener(
  'DOMContentLoaded',
  () => renderDOM('main', new SignIn()),
);

document.addEventListener('click', (e) => {
  const targetElement = e.target as Element;
  const page = targetElement.getAttribute('page');
  if (page) {
    const PageClass = pagesClasses[page];
    if (PageClass) {
      renderDOM('main', new PageClass());
    }
  }
  e.preventDefault();
  e.stopImmediatePropagation();
});
