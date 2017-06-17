import React from 'react';
import { generateHeightMap } from '../../clients/assetsClient';
import withAsyncProp, { States as AsyncPropState } from '../hoc/withAsyncProp';
import { compose, mapProps } from 'recompose';

import SceneContainer from '../scene-container/SceneContainer';
import * as mountFunctionalities from '../scene-container/mount-functionalities';

import { FreeCamera, Vector3, Mesh, HemisphericLight } from 'babylonjs';

const setupCamera = mountFunctionalities.custom(({ scene, canvas }) => {
    const camera = new FreeCamera("free-camera", new Vector3(0, 5, -10), scene);
    camera.setTarget(Vector3.Zero());
    camera.attachControl(canvas, false);
})

const addSomeMeshes = mountFunctionalities.custom(({ scene }) => {
    const sphere = Mesh.CreateSphere("sphere1", 16, 2, scene);
    sphere.position.y = 1;

    const ground = Mesh.CreateGround('ground1', 6, 6, 2, scene);
})

const addSomeLights = mountFunctionalities.custom(({ scene }) => {
    const light = new HemisphericLight("light", new Vector3(0, 1, 0), scene);
})

const EnhancedSceneContainer = mountFunctionalities.with(
    mountFunctionalities.addResizeHandler(),
    setupCamera,
    addSomeMeshes,
    addSomeLights,
    mountFunctionalities.startRenderLoop()
)(SceneContainer);

const TestHeightMapViewer = ({
    id,
    heightMap
}) => {

    if (heightMap.state == AsyncPropState.Pending || heightMap.state == AsyncPropState.Progress){
        return (
            <div>
                <h3>Height map viewer</h3>
                <h4>Id: { id }</h4>
                <p>Loading height map...</p>
            </div>
        )
    }

    if (heightMap.state == AsyncPropState.Error){
        return (
            <div>
                <h3>Height map viewer</h3>
                <h4>Id: { id }</h4>
                <p>Error while loading height map: { new String(heightMap.error) }</p>
            </div>
        )
    }

    return (
        <div>
            <h3>Height map viewer</h3>
            <h4>Id: { id }</h4>
            <EnhancedSceneContainer style={ styles.scene } />
        </div>
    )
}

const styles = {
    scene: {
        border: '1px solid black',
        height: 500,
        width: 500
    }
}

export default compose(
    mapProps(props => ({
        id: props.match.params.id
    })),
    withAsyncProp('heightMap', async ({ id }) => await generateHeightMap({ id }))
)(TestHeightMapViewer);