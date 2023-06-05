
const Confirm = {
    open (options) {
        options = Object.assign({}, {
            title: '',
            message: '',
            okText: 'OK',
            cancelText: 'Cancel',
            onOk: function () {},
            onCancel: function () {}
        }, options);
        
        const html = `
            <div class="confirm">
                <div class="confirm__window">
                    <div class="confirm__titlebar">
                        <span class="confirm__title">${options.title}</span>
                        <button class="confirm__close">&times;</button>
                    </div>
                    <div class="confirm__content">${options.message}</div>
                    <div class="confirm__buttons">
                        <button class="confirm__button confirm__button--ok confirm__button--fill">${options.okText}</button>
                        <button class="confirm__button confirm__button--cancel">${options.cancelText}</button>
                    </div>
                </div>
            </div>
        `;
// it's special kind of element that use simply contain HTML used for a template(.content)
        const template = document.createElement('template');
        template.innerHTML = html;

        // Elements
        const confirmEl = template.content.querySelector('.confirm');
        const btnClose = template.content.querySelector('.confirm__close');
        const btnOk = template.content.querySelector('.confirm__button--ok');
        const btnCancel = template.content.querySelector('.confirm__button--cancel');

        // when you click on the main background the close the confirm window
        confirmEl.addEventListener('click', e => {
            if (e.target === confirmEl) {
                options.onCancel();
                this._close(confirmEl);
            }
        });
        // when press btn ok
        btnOk.addEventListener('click', () => {
            options.onOk();
            this._close(confirmEl);
        });
        // when btn pres close the confirm windowin both cases
        [btnCancel, btnClose].forEach(el => {
            el.addEventListener('click', () => {
                options.onCancel();
                this._close(confirmEl);
            });
        });

        document.body.appendChild(template.content);
    },

    _close (confirmEl) {
        confirmEl.classList.add('confirm--close');
        // when opacity  finally reach zero after t2 second then fire this event
        confirmEl.addEventListener('animationend', () => {
            document.body.removeChild(confirmEl);
        });
    }
};
