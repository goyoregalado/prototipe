import {useEffect, useState} from 'react';

export const DeviceList = () => {
    const [devices, setDevices] = useState([]);


    console.log(devices);

    useEffect(() => {
        const fetchDevices = async () => {
            const response = await fetch('https://api.restful-api.dev/objects');
            const data = await response.json();
            setDevices(data);
        }

        fetchDevices();

    }, []);
    
    
    return (
        <div>
            <h1>Device List</h1>
            {
                devices.map((device: any, index: number) => (<p key={index}>{device.name}</p>))
            }
        </div>
    );
}
    
    