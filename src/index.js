import './index.css';
import * as serviceWorker from './serviceWorker';
import {renderEntireTree} from "./render";
import state from "./state";

renderEntireTree(state);

serviceWorker.unregister();
