let _canvas;

const acquireCanvas = () => {
    _canvas = document.getElementById('app-canvas');
    return _canvas;
}

export default () => _canvas || acquireCanvas();