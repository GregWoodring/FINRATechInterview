/**
 * This file will hold the Main content that lives in the main body of the site
 * 
 */
import React from 'react';

import Product from './product';

import { connect } from 'react-redux';
class Home extends React.Component {

    /**
     * Renders the default app in the window, we have assigned this to an element called root.
     * 
     * @returns JSX
     * @memberof Home
    */
    render() {
        return (
            <section id="home">
                <div className="content">
                    <p>ELC Coding Test...</p>
                </div>
                <div className='product-list'>
                    {
                        this.props.itemArray.length > 1 ? 
                            this.props.itemArray.map(item => <Product product={item} />) 
                            :
                            null
                    }
                </div>
            </section>
        );
    }


}

// Export out the React Component
// Export out the React Component
function mapStateToProps(state){
    return {
        itemArray: state.search.itemArray,
        pendingSearch: state.search.pendingSearch
    }
}

export default connect(mapStateToProps, {})(Home);