
import { data,dom} from "./data.js";
import createMenuItem from './components/menuItem.js'; 
import createMenuButton from "./components/menuButton.js";


//show item by default
  
data.buttons.forEach((btnData) => {
    const btnDom = createMenuButton(btnData);
    dom.btnContainer.append(btnDom);
    
     });
      // show the item by default
    
    data.menu.forEach((itemData) => {
        const itemDom = createMenuItem(itemData);
        dom.sectionCenter.append(itemDom)
    });
  
  