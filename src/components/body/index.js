import React, {Component} from "react";
import ProductData from "../../ProductData";
import classes from "./body.module.css";

export class Body extends Component {
    state = {
        selectedColor: 0,
        selectedFeature: 1,
        currentTime: '00:00',
        selectedFeatureText: '74',
    }

    updateImage = ( selectedImage ) => {
        this.setState( {selectedColor: selectedImage} );
    }

    updateSelectedFeatureText = ( selectedFeature ) => {
        if (1===selectedFeature) {
            this.setState({selectedFeatureText: '74', selectedFeature: 1});
        } else {
            this.setState(() => {
                let today = new Date();
                let time = today.getHours() + ':' + today.getMinutes();
                return { selectedFeatureText: time, selectedFeature: 0 };
            });
        }
    }

    getColorVariety = () => {
        return ProductData.colorOptions.map(
            ( item, index ) => {
                if ( index === this.state.selectedColor ) {
                    return ( <img key={index} className={`${classes.colorVariety} ${classes.selectedColor}`} src={item.imageUrl} alt={item.styleName} onClick={() => this.updateImage(index)} /> );
                }

                return( <img key={index} className={classes.colorVariety} src={item.imageUrl} alt={item.styleName} onClick={() => this.updateImage(index)} /> );
            }
        );
    }

    getFeatures = () => {
        return ProductData.featureList.map(
            (item, index) => {
                if ( index === this.state.selectedFeature ) {
                    return ( <div key={index} className={`${classes.feature} ${classes.selectedFeature}`} onClick={() => this.updateSelectedFeatureText(index)}>{item}</div> );
                }

                return (
                    <div key={index} className={classes.feature} onClick={() => this.updateSelectedFeatureText(index)}>{item}</div>
                );
            }
        );
    }

    render() {
        return (
            <section className={classes.section}>
                <div className={classes.displaySection}>
                    <img className={classes.selectedImage} src={ProductData.colorOptions[this.state.selectedColor].imageUrl} alt={ProductData.colorOptions[this.state.selectedColor].styleName}/>
                    <div className={classes.selectedFeatureText}>
                        {this.state.selectedFeatureText}
                    </div>
                </div>
                <div>
                    <h1>{ProductData.title}</h1>
                    <p>{ProductData.description}</p>

                    <h3>Select Color</h3>
                    <div>{ this.getColorVariety() }</div>

                    <h3>Features</h3>
                    <div>
                        { this.getFeatures() }
                    </div>

                    <button className={classes.buyButton}>Buy Now</button>
                </div>
            </section>
        );
    }
}
