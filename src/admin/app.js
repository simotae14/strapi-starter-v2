import Favicon from './extensions/favicon.ico';
import LogoImg from './extensions/it-crowd-moss.jpeg';
import MainImg from './extensions/it-crowd-main.jpeg';

export default {
  config: {
    locales: [
      'fr',
      'es',
      'it',
      'uk',
    ],
    head: {
      favicon: Favicon,
    },
    auth: {
      logo: LogoImg,
    },
    menu: {
      logo: MainImg,
    }
  },
  bootstrap(app) {
    console.log(app);
  },
};
