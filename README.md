This is a learning project completing on the yandex mf course.

Lint to pull_request sprint_1:

The project implies a working version of web-messenger frontend working with api.

You can see the prototype on [figma](https://www.figma.com/file/8ILHuuVJqjuGU62jaCz49D/mf_messenger?type=design&node-id=0%3A1&mode=design&t=XvZ0MCTizXdJF4js-1)

commands:


`npm run dev` - development launch

`npm run start` - launching a project via bundle build in vite

vite automatically launches postcss at build

used postcss services: 'autoprefixer'  'PostCSS Preset Env' 'cssnano'

used @vituum/vite-plugin-pug

The project has CI github configured: build dockercontainer with expressjs - deploy to dockerhub - deploy to private vps - notification of successful deployment by telegramm.

Examples of Accessible Pages

messenger.sukharev.ru
messenger.sukharev.ru/404
messenger.sukharev.ru/500
messenger.sukharev.ru/chats
messenger.sukharev.ru/message
messenger.sukharev.ru/signup
messenger.sukharev.ru/user_profile
