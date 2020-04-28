import { EventEmitter } from 'events';

const emitter = new EventEmitter();

emitter.on('error', async (): Promise<void> => Promise.resolve());
