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
    console.log(`keydown:${event.code}`);
    controller[event.code] = true;
    showController();
});

document.addEventListener('keyup', (event) => {
    console.log(`keyup:${event.code}`);
    controller[event.code] = false;
    showController();
});
