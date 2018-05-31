import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';


const AnyReactComponent = ({ text }) => <div>{text}</div>;

const map = (props) => {
    return(
        <div  style={{ height: '300px', width: '300px', margin: '0 auto'}}>
            <p>{props.latitude}</p>
            <p>{props.longitude}</p>
        </div>
    )

}
// class map extends Component {
//     static defaultProps = {
//         center: {
//             lat: 53.24,
//             lng: 6.53
//         },
//         zoom: 12
//     };
//
//     render() {
//         return (
//             // Important! Always set the container height explicitly
//                 <div  style={{ height: '300px', width: '300px', margin: '0 auto'}}>
//                     <GoogleMapReact
//                         bootstrapURLKeys={{ key: 'AIzaSyAjm2v6jfYxeNsvyJQs56nd7pUvALXqpP8' }}
//                         defaultCenter={this.props.center}
//                         defaultZoom={this.props.zoom}
//                     >
//                         <AnyReactComponent
//                             lat={59.955413}
//                             lng={30.337844}
//                             text={'Kreyser Avrora'}
//                         />
//                     </GoogleMapReact>
//                 </div>
//         );
//     }
// }



export default map;