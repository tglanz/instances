import React from 'react';
import { Link } from 'react-router-dom';

export default () => (
    <div style={ styles.container }>
        <Link to='/' style={ styles.link }>Home</Link>
        <Link to='/test-heightmaps' style={ styles.link }>Test HeightMaps</Link>
    </div>
)

const styles = {
    container: {
        display: 'flex',
        flexDirection: 'row'
    },

    link: {
        marginLeft: '.4em',
        marginRight: '.4em'
    }
}