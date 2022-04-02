import { LightningElement } from "lwc";

export default class Header extends LightningElement {
    navItems = [
        { id: 'home', label: 'Home', route: '/' },
        { id: 'ourStory', label: 'Our Story', route: '/our-story' },
        { id: 'contactUs', label: 'Contact Us', route: '/contact-us' }
    ]
}