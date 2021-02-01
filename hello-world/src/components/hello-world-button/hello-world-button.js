import './hello-world-button.scss';

class HelloWorldButton {
    buttonCssClass = 'hello-world-button';

    render() {
        const buttonContainer = document.createElement('div');
        buttonContainer.classList.add('card');
        const body = document.querySelector('body');
        body.appendChild(buttonContainer);
        const button = document.createElement('button');
        const textCard = document.createElement('div');
        button.innerHTML = 'Hello world';
        button.onclick = function () {
            
            textCard.classList.add('card');
            body.appendChild(textCard);
            const p = document.createElement('p');
            
            p.innerHTML = 'Hello world';
            p.classList.add('hello-world-text');
            textCard.appendChild(p);
        }
        button.classList.add('hello-world-button');
        buttonContainer.appendChild(button);
    }
}

export default HelloWorldButton;
