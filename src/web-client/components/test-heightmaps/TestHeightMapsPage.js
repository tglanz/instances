import React from 'react';
import withAsyncProp, { States as AsyncPropState } from '../hoc/withAsyncProp';
import { Link } from 'react-router-dom';

import { getAvailableHeightMaps } from '../../clients/assetsClient';

class TestHeightMapsPage extends React.Component {
    render(){
        const { availableHeightMapIds } = this.props;

        if (availableHeightMapIds.state == AsyncPropState.Pending || availableHeightMapIds.state == AsyncPropState.Progress){
            return (
                <p>Loading height maps...</p>
            )
        }

        if (availableHeightMapIds.state == AsyncPropState.Error){
            return (
                <p>An error has ocurred while loading height maps: ${availableHeightMapIds.error.message}</p>
            )
        }

        return (            
            <div>

                <p>Acquired height maps, it tooks: { availableHeightMapIds.processTimeMs / 1000 } Seconds</p>

                { availableHeightMapIds.result.map(id => (
                    <Link to={ `/test-heightmaps/${id}` } key={ id }>{ id }</Link>
                ))}
            
            </div>
        )
    }
}

const enhance = withAsyncProp('availableHeightMapIds', getAvailableHeightMaps);

export default enhance(TestHeightMapsPage);