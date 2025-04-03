import React, { Component } from 'react';
import { Drawer } from 'native-base';
import SideBar from './DrawerSideMenu';
export default class Drawerr extends Component {
    closeDrawer = () => {
        this.drawer._root.close()
    };
    openDrawer = () => {
        console.warn(":av")
        this.drawer._root.open()
    };

    componentDidMount() {
        this.openDrawer()
    }

    render() {
        return (
            <Drawer ref={(ref) => { this.drawer = ref; }} content={<SideBar navigator={this.navigator} />} onClose={() => this.closeDrawer()} >
                {this.props.children}
            </Drawer>
        );
    }
}