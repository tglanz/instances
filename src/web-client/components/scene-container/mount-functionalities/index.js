export { default as with } from './withMountFunctionalities';

/*
    mount functionality functions should have the followig signature in order to be composable:
    (MountInfo x, Void v) => a -> (x -> v)

    where MountInfo is the object passed to onMount in scene-container/SceneContainer
*/

export const custom = customLogic => mountInfo => customLogic(mountInfo);

export const startRenderLoop = () => ({ engine, scene }) => engine.runRenderLoop(() => {
    scene.render();
})

export const addResizeHandler = () => ({ canvas, engine }) => {
    canvas.addEventListener('resize', () => {
        console.log("Resize detected, resizing");
        engine.resize();
    })
}