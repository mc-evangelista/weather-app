import React, {Component} from 'react';

//check index.html for google.maps thirdy party
class GoogleMap extends Component {
    componentDidMount(){
        //embeded google map (third party library)
        new google.maps.Map(this.refs.map, {
            zoom: 12,
            center: {
                lat: this.props.lat,
                lng: this.props.lon
            }
        })
    }

    render(){
        //this.refs.map
        return <div ref="map" />
    }

}

export default GoogleMap;

//had diff implementation on app review