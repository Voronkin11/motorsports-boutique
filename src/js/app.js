import { offersData } from "./modules/offersData.js";
import { renderOffers } from "./modules/renderOffers.js";
import { customSelect } from "./modules/customSelect.js";
import { sortingSelect } from "./modules/sortingSelect.js";
import { accordionHelper } from "./modules/accordionHelper.js";
import bootstrap from "bootstrap";

renderOffers(offersData);
customSelect();
sortingSelect();
accordionHelper();