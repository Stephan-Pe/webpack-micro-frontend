import About from './ich.png';
import './about-image.scss';

class AboutImage {
    render() {
        const img = document.createElement('img');
        img.src = About;
        img.alt = 'about';
        img.classList.add('about-image');

        const imageContainer = document.createElement('div');
        imageContainer.classList.add('spacer');
        
        const bodyDomElement = document.querySelector('body');
        bodyDomElement.appendChild(imageContainer);
        imageContainer.appendChild(img);
    }
}

export default AboutImage;
