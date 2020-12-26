import { LightningElement } from "lwc";

export default class App extends LightningElement {
  title = "Check box group component";
  selectedValues;
  value = [''];

  get options() {
      return [
         { label: '0502020202', value: '05020202021' },
         { label: '0509090909', value: '05090909092' },
     ];  
   }
   hanldeSelectedValues(event) {
     this.selectedValues = event.detail
   }
}
