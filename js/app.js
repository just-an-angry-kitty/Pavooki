// Galery pictures moving

document.addEventListener('mousemove', e =>{
    Object.assign(document.documentElement, {
        style: `
        --move-x: ${(e.clientX - window.innerWidth / 2) * 0.01}px;
        --move-y: ${(e.clientY - window.innerHeight / 2) * 0.01}px;
        `
    })
});

// galery pictures pop up

$(document.getElementsByClassName('gallery-item__link')).magnificPopup({
    type: 'image',
    gallery: {
        enabled : true
    },
    removalDelay: 300,
    mainClass: 'mfp-fade',
});
