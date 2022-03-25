import { LightningElement, api } from "lwc";

export default class NavItem extends LightningElement {
    @api label = ''
    @api route = ''
}