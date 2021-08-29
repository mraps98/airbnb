import React, { FC, useState, Fragment } from 'react';
import ReactMapGL, { Marker, Popup } from 'react-map-gl';
import {
    ILocationSearchResult,
    IMapboxViewport,
    TMapboxCenter,
} from '../../interfaces';
import { getCenter } from 'geolib';
import { GeolibInputCoordinates } from 'geolib/es/types';

interface IMapProps {
    locationSearchResults: ILocationSearchResult[];
    coordinates: () => GeolibInputCoordinates[];
}

const Map: FC<IMapProps> = ({ locationSearchResults, coordinates }) => {
    const center = getCenter(coordinates()) as TMapboxCenter;

    const [viewport, setViewport] = useState<IMapboxViewport>({
        width: '100%',
        height: '100%',
        latitude: center?.latitude ?? 37.7577,
        longitude: center?.longitude ?? -122.4376,
        zoom: 11,
    });

    const [clickedLocation, setClickedLocation] = useState<
        Partial<ILocationSearchResult>
    >({});

    return (
        <ReactMapGL
            {...viewport}
            mapStyle="mapbox://styles/mraps98/ckswoo04k6yko17pr9qkcjigq"
            mapboxApiAccessToken={process.env.MAPBOX_KEY}
            onViewportChange={(nextViewport: IMapboxViewport) =>
                setViewport(nextViewport)
            }
        >
            {locationSearchResults.map((result) => (
                <Fragment key={result.img}>
                    <Marker
                        latitude={result.lat}
                        longitude={result.long}
                        offsetLeft={-20}
                        offsetTop={-10}
                    >
                        <p
                            className="cursor-pointer text-2xl animate-bounce z-0"
                            onClick={() => setClickedLocation(result)}
                        >
                            📌
                        </p>
                    </Marker>
                    {clickedLocation.long === result.long && (
                        <Popup
                            latitude={clickedLocation.lat as number}
                            longitude={clickedLocation.long as number}
                            onClose={() => setClickedLocation({})}
                            closeOnClick
                            className="z-10"
                        >
                            {result.title}
                        </Popup>
                    )}
                </Fragment>
            ))}
        </ReactMapGL>
    );
};

export default Map;
