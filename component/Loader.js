import { Spinner, View } from 'native-base';
import React from 'react'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

function Loader(props) {
    return (
        props.loader ?
            <View style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: 'rgba(0, 0, 0, 0.5)',
            }}>
                <Spinner color="#0762a8" />
            </View>
            : null
    )
}

const mapStateToProps = ({ store }) => ({
    loader: store.loader
});

const mapDispatchToProps = (dispatch) =>
    bindActionCreators(
        {

        },
        dispatch
    );

export default connect(mapStateToProps, mapDispatchToProps)(Loader);
