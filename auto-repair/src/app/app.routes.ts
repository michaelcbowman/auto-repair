import { Routes } from '@angular/router';
import { HomePage } from './features/home/home-page';
import { AboutPage } from './features/about/about-page';
import { ContactPage } from './features/contact/contact-page';
import { PricingPage } from './features/pricing/pricing-page';
import { MerchPage } from './features/merch/merch-page';

export const routes: Routes = [
    {
        path: '',
        component: HomePage,
        title: 'Home'
    },
    {
        path: 'pricing',
        component: PricingPage,
        title: 'Pricing'
    },
    {
        path: 'about',
        component: AboutPage,
        title: 'About'
    },
    {
        path: 'contact',
        component: ContactPage,
        title: 'Contact'
    },
    {
        path: 'merch',
        component: MerchPage,
        title: 'Merch'
    }
];
