function setdo(e, funobj) {
    let key = e.keyCode;
    switch (key) {
        case 39:
            funobj['39']();
            break;
        case 70:
            funobj['70']();
            break;
        case 69:
            funobj['69']();
            break;
            default:
    }
}

export { setdo };
