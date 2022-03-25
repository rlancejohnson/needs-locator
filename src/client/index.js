import Home from './modules/pages/home';

const app = CustomElements.define('pages-home', Home)
document.querySelector('#root').appendChild(app);