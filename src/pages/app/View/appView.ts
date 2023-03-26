import { headerHtml } from "../../../templates/header";
import { mainHtml } from "../../../templates/main";
class appView {
  app: HTMLElement | null;
  constructor() {
    this.app = document.querySelector("#app") as HTMLElement;
  }
  renderUI() {
    if (this.app) {
      this.app.innerHTML = "";
      this.app.insertAdjacentHTML("afterbegin", headerHtml);
      this.app.insertAdjacentHTML("beforeend", mainHtml);
    }
  }
}
export default appView;
