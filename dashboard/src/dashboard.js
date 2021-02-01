import NavigationBar from './components/navigation-bar/navigation-bar.js';

const navigationItems = [
    {
        url: '/hello-world-page',
        title: 'Hello World Page'
    },
    {
        url: '/about-page',
        title: 'About Page'
    }
];

const navigationBar = new NavigationBar();
navigationBar.render(navigationItems);

const url = window.location.pathname; // return pagename as string

if (url === '/hello-world-page') {
    import('HelloWorldApp/HelloWorldPage').then(HelloWorldPageModule => {
        const HelloWorldPage = HelloWorldPageModule.default;
        const helloWorldPage = new HelloWorldPage();
        helloWorldPage.render();
    });
} else if (url === '/about-page') {
    import('AboutApp/AboutPage').then(AboutPageModule => {
        const AboutPage = AboutPageModule.default;
        const aboutPage = new AboutPage();
        aboutPage.render();
    });
}

console.log('dashboard');