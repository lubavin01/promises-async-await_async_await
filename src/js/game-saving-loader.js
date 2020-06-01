import read from './reader';
import json from './parser';

export default class GameSavingLoader {
  static async load() {
    try {
      const buffer = await read();
      const dataPromise = json(buffer);
      return dataPromise;
    } catch (e) { return new Error(e); }
  }
}
