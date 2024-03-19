import { prefab, Icon } from '@betty-blocks/component-sdk';

import { Recaptcha } from './structures/Recaptcha';

const attributes = {
  category: 'CONTENT',
  icon: Icon.TitleIcon,
  keywords: [''],
};

export default prefab('Recaptcha', attributes, undefined, [Recaptcha({})]);
