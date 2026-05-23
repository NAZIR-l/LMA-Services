import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '../pages/HomePage.vue';
import ProjectenPage from '../pages/ProjectenPage.vue';
import DienstenPage from '../pages/DienstenPage.vue';
import OverOnsPage from '../pages/OverOnsPage.vue';
import WerkenBijPage from '../pages/WerkenBijPage.vue';
import OfferteAanvragenPage from '../pages/OfferteAanvragenPage.vue';
import ContactPage from '../pages/ContactPage.vue';
import FaqPage from '../pages/FaqPage.vue';
const routes = [
    { path: '/', name: 'Home', component: HomePage },
    { path: '/projecten', name: 'Projecten', component: ProjectenPage },
    { path: '/diensten', name: 'Diensten', component: DienstenPage },
    { path: '/over-ons', name: 'OverOns', component: OverOnsPage },
    { path: '/werken-bij', name: 'WerkenBij', component: WerkenBijPage },
    { path: '/offerte-aanvragen', name: 'OfferteAanvragen', component: OfferteAanvragenPage },
    { path: '/contact', name: 'Contact', component: ContactPage },
    { path: '/faq', name: 'FAQ', component: FaqPage },
];
const router = createRouter({
    history: createWebHistory(),
    routes,
    scrollBehavior() {
        return { top: 0 };
    },
});
export default router;
//# sourceMappingURL=index.js.map