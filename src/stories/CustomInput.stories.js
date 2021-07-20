import { action } from '@storybook/addon-actions';
import { withKnobs } from '@storybook/addon-knobs';
import CustomInputComp from '../components/CustomInput.vue';

export default {
  title: 'MyCustomInput',
  decorators: [withKnobs],
};

export const CustomInput = () => ({
  components: { CustomInputComp },
  template: '<CustomInput />',
  methods: {
    mirrorClick: action('button-clicked'),
    cancelInput: action('button-clicked'),
    linkClicked: action('button-clicked'),
  },
});

CustomInput.story = {
  name: 'CustomInput',
};
