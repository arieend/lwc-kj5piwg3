import { LightningElement } from "lwc";

export default class App extends LightningElement {
  title = "Check box group component";
  selectedValues;
  value = [''];

  get options() {
      return [
         { label: 'Ross', value: 'option1' },
          { label: 'Rachel', value: 'option2' },
     ];  
   }
   hanldeSelectedValues(event) {
     this.selectedValues = event.detail
   }
}
