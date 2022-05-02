import React from 'react'

//components
import { MapContainer, TileLayer, useMap, Marker, Popup } from 'react-leaflet'

//icons
import { AiOutlineCopy } from 'react-icons/ai'
import { RiDirectionLine } from 'react-icons/ri'

const MapView = (props) => {
    return (
        <>
            <div className='my-5'>
						<h4 className='text-xl font-medium'>Call</h4>
						<h5 className='text-zred-500 font-medium'>{props.phoneNo}</h5>
					</div>
					<div className='my-5'>
						<h4 className='text-xl font-medium mb-1'>Direction</h4>
						<div className='w-full h-48'>
							<MapContainer center={props.mapLocation} zoom={13} scrollWheelZoom={false}>
								<TileLayer
									attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
									url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
								/>
								<Marker position={props.mapLocation}>
									<Popup>
										{props.restaurantName}
									</Popup>
								</Marker>
							</MapContainer>
						</div>
					</div>
					<p>{props.address}</p>
					<div className='flex items-center gap-2 my-5'>
						<button>
							<span className='flex gap-1 items-center border px-3 py-1 border-zred-400 rounded-md text-zred-400 hover:text-white hover:bg-zred-400'><AiOutlineCopy />Copy</span></button>
						<button>
							<span className='flex gap-1 items-center border px-3 py-1 border-zred-400 rounded-md text-zred-400 hover:text-white hover:bg-zred-400'><RiDirectionLine />Directions</span>
						</button>
					</div>
        </>
    )
}

export default MapView