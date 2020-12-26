import { LightningElement, api } from "lwc";

/**
 * Show an item
 */
export default class Child extends LightningElement {
  @api
  label = "";
  @api
  options = [];
  @api 
  value = [""];

  @api
    handleChange(e) {
        this.value = e.detail.value;
        const selectedEvent = new CustomEvent("checkboxvalueupdate", {
            detail: this.value.join(',')
        });
        this.dispatchEvent(selectedEvent);
    }
}
