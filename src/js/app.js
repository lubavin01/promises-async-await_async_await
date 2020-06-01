import GameSavingLoader from './game-saving-loader';

(async () => {
  try {
    const data = await GameSavingLoader.load();
    console.log(data);
  } catch (e) {
    console.error('error', e);
  }
})();
