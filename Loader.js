import { Spinner, View } from 'native-base';
import React from 'react'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { loaderStyles } from './LoaderStyles';

function Loader(props) {
  const styles = loaderStyles()
    return (
        props.loader ?
            <View style={styles.loaderOverlay}>
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
