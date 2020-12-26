import { LightningElement, api } from "lwc";

/**
 * Show an item
 */
export default class Child extends LightningElement {
  @api
  options = [];
  @api
  label = "";
  @api 
  value;
  
  inputValue;

  @api
    handleInputChange(event) {
        if(this.value.indexOf(this.inputValue)  > -1)  {
            this.value.remove(this.inputValue);
        }
        let item = event.target.value;
        if(this.value.indexOf(item) === -1) {
           this.inputValue = item
           this.value.push(this.inputValue);
        }
        this.raiseCheckBoxValueUpdate();
    }
    handleChange(e) {
        this.value = e.detail.value;
        this.raiseCheckBoxValueUpdate();
    }
    raiseCheckBoxValueUpdate() {
        const selectedEvent = new CustomEvent("checkboxvalueupdate", {
            detail: this.value.join(',')
        });
        this.dispatchEvent(selectedEvent);

    }
}
