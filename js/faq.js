const accordions = document.querySelectorAll('.tab__item');

for(item of accordions) {
    item.addEventListener('click', function() {
        if(this.classList.contains('tab__item__active')){
            this.classList.remove('tab__item__active');
        } else {
            for(el of accordions) {
                el.classList.remove('tab__item__active');
            }
            this.classList.add('tab__item__active');
        }
    })
};