import sprite from './sprite';
import header from './header';
import main from './main';
import footer from './footer';

// TODO: set default date value
// TODO: add selectbox to todo form?

function layout() {
  return `
    ${sprite}
    ${header}
    ${main}
    ${footer}
  `;
}

export default layout();
