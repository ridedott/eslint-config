// `getDocs` is a function from an external module, so the rule should pass
import { getDocs } from 'firebase/firestore';

const error = new Error('Message.');

const i18n = 'en';
const i18nConfiguration = 'en';
