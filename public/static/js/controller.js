const controller = {};

document.addEventListener('keydown', (event) => {
    console.log(`keydown:${event.key}`);
    controller[event.key] = true;
});

document.addEventListener('keyup', (event) => {
    console.log(`keyup:${event.key}`);
    controller[event.key] = false;
});