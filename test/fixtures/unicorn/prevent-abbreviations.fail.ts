/* eslint-disable id-length */

// `getDocs` is a function from an internal module, so the rule should fail
import { getDocs } from './some-internal-module.js';

const e = new Error('Message.');
