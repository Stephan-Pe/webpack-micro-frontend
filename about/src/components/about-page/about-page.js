import Heading from '../heading/heading.js';
import AboutImage from '../about-image/about-image.js';

class AboutPage {
    render() {
        const heading = new Heading();
        heading.render('about');
        const aboutImage = new AboutImage();
        aboutImage.render();
    }
}

export default AboutPage;