import React from 'react';

export const States = {
    Pending: 'pending',
    Progress: 'progress',
    Error: 'error',
    Success: 'success'
}

export default (propsFamily, promiseProvider) => WrappedComponent => class WithAsyncPropWrapper extends React.Component {

    constructor(props){

        super(props);

        this.state = {
            [propsFamily]: {
                state: States.Pending
            }
        }
    }

    componentWillMount(){
        const self = this;
        const props = self.props;

        self.setState({
            [propsFamily]: {
                state: States.Progress
            }
        })

        const startTime = new Date().getTime();

        promiseProvider(props)
            .then(result => self.setState({
                [propsFamily]: {
                    state: States.Success,
                    result,
                    processTimeMs: new Date().getTime() - startTime
                }
            }))
            .catch(error => self.setState({
                [propsFamily]: {
                    state: States.Error,
                    error,
                    processTimeMs: new Date().getTime() - startTime
                }
            }))
    }

    render(){

        const propsToPass = {
            ...this.props,
            [propsFamily]: this.state[propsFamily]
        }

        return <WrappedComponent {...propsToPass} />
    }
}
