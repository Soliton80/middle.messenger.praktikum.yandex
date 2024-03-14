import Block from '../../utils/Block';
import ProfileAvatar from '../../components/profileAvatar/profileAvatar';
import Title from '../../components/title/title';
import Field from '../../components/field/field';
import userProfileModul from './userProfileModul.pug';

type Props = {
  nickname: string
  title: string
}

export default class Profile extends Block {
  // eslint-disable-next-line no-useless-constructor
  constructor(props?: Props) {
    super(props);
  }

  protected initChildren(): void {
    console.log('this.props', this.props);
    this.children.profileAvatar = new ProfileAvatar({
      avatar: '/assets/avatar.svg',
    });
    this.children.title = new Title({ title: 'Vanya' });
    this.children.fields = [
      {
        label: 'email',
        classlabel: 'profile-input-text',
        classInput: 'profile-input-text right-aligned-placeholder',
        autocomplete: 'email',
        placeholder: 'kirill@sukharev.ru',
      },
      {
        label: 'login',
        classlabel: 'profile-input-text',
        classInput: 'profile-input-text right-aligned-placeholder',
        autocomplete: 'username',
        placeholder: 'username',
      },
      {
        label: 'first_name',
        classlabel: 'profile-input-text',
        classInput: 'profile-input-text right-aligned-placeholder',
        autocomplete: 'name',
        placeholder: 'Vanya',
      },
      {
        label: 'second_name',
        classlabel: 'profile-input-text',
        classInput: 'profile-input-text right-aligned-placeholder',
        autocomplete: 'family-name',
        placeholder: 'Ivanov',
      },
      {
        label: 'nickname',
        classlabel: 'profile-input-text',
        classInput: 'profile-input-text right-aligned-placeholder',
        autocomplete: 'username',
        placeholder: 'Vanya',
      },
      {
        label: 'phone',
        classlabel: 'profile-input-text',
        classInput: 'profile-input-text right-aligned-placeholder',
        autocomplete: 'tel',
        placeholder: '+7 (777) 777 77 77',
      },
    ].map((field) => new Field({
      label: field.label,
      autocomplete: field.autocomplete,
      placeholder: field.placeholder,
      classLabel: field.classlabel,
      classInput: field.classInput,
      classDiv: 'form-group',
    }));
  }

  render() {
    return this.compile(userProfileModul, { ...this.props });
  }
}
