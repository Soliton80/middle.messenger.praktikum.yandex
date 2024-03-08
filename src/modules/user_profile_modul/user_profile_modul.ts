import Block from '../../utils/Block'
// import FormChangePassword from '../../modules/formChangePassword'
// import ProfileForm from '../../modules/profileForm'
import ProfileAvatar from '../../components/profileAvatar/profile_avatar'
import Title from '../../components/title/title';
import Field from '../../components/field/field';
import user_profile_modul from './user_profile_modul.pug';

type Props = {
  nickname: string
  title: string
}

export default class Profile extends Block {
  constructor(props?: Props) {
    super(props);
  }

  protected initChildren(): void {

    console.log('this.props', this.props)
    this.children.profileAvatar = new ProfileAvatar({ avatar: 'src/assets/avatar.svg' });
    this.children.title = new Title({ title: "Vanya"});
    this.children.fields = [
      {
        label: 'email',
        classlabel: 'profile-input-text',
        classInput: 'profile-input-text right-aligned-placeholder',
        autocomplete: 'email',
        placeholder: "kirill@sukharev.ru"
      },
      {
        label: 'login',
        classlabel: 'profile-input-text',
        classInput: 'profile-input-text right-aligned-placeholder',
        autocomplete: 'username',
        placeholder: "username"
      },
      {
        label: 'first_name',
        classlabel: 'profile-input-text',
        classInput: 'profile-input-text right-aligned-placeholder',
        autocomplete: 'name',
        placeholder: "Vanya"
      },
      {
        label: 'second_name',
        classlabel: 'profile-input-text',
        classInput: 'profile-input-text right-aligned-placeholder',
        autocomplete: 'family-name',
        placeholder: "Ivanov"
      },
      {
        label: 'nickname',
        classlabel: 'profile-input-text',
        classInput: 'profile-input-text right-aligned-placeholder',
        autocomplete: 'username',
        placeholder: "Vanya"
      },
      {
        label: 'phone',
        classlabel: 'profile-input-text',
        classInput: 'profile-input-text right-aligned-placeholder',
        autocomplete: 'tel',
        placeholder: "+7 (777) 777 77 77"
      },
    ].map(field => new Field({
      label: field.label,
      autocomplete: field.autocomplete,
      placeholder: field.placeholder,
      classLabel: field.classlabel,
      classInput: field.classInput,
      classDiv: 'form-group',
}))
  }

  render() {
    return this.compile(user_profile_modul, { ...this.props })
  }
}
