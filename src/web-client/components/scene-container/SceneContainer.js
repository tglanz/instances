import React from 'react';

import { Engine, Scene } from 'babylonjs';

class SceneContainer extends React.Component {

    static propTypes = {
        onMounted: React.PropTypes.func.isRequired
    }

    static defaultProps = {
        style: {
            border: '1px solid black',
            width: '100%',
            height: '100%'
        }
    }

    constructor(props){
        super(props);

        this.canvas = null;
    }

    componentDidMount(){
        const canvas = this.canvas;
        const onMounted = this.props.onMounted;

        const engine = new Engine(canvas, true);
        const scene = new Scene(engine);

        onMounted({
            engine, scene, canvas
        })
    }

    render(){

        const { style } = this.props;

        return (
            <canvas ref={ canvas => this.canvas = canvas } style={{ ...style }} />
        )
    }
}

export default SceneContainer;