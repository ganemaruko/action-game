const controller = {};

const showController = () => {
    const elem = document.getElementById("debug-controller");
    let controllerStr = "";
    Object.keys(controller).forEach(key => {
        controllerStr += `${key}:${controller[key]} \n`;

    });
    elem.innerText = controllerStr
}

document.addEventListener('keydown', (event) => {
    console.log(`keydown:${event.key}`);
    controller[event.key] = true;
    showController();
});

document.addEventListener('keyup', (event) => {
    console.log(`keyup:${event.key}`);
    controller[event.key] = false;
    showController();
});
