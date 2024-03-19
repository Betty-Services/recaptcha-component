import { variable, option } from '@betty-blocks/component-sdk';
import { advanced } from '../../advanced';

export const categories = [
  {
    label: 'Advanced Options',
    expanded: false,
    members: ['dataComponentAttribute'],
  },
];

export const recaptchaOptions = {
  sitekey: variable('Site Key', {
    value: ['1234567890'],
  }),

  actionVariableId: option('ACTION_JS_VARIABLE', {
    label: 'Action input variable',
    value: '',
  }),

  ...advanced('Recaptcha'),
};
