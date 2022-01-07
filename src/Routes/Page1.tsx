import * as React from "react";
import axios from "axios";

import {ILaunchPad} from '../interfaces/launchpad';
import {Placeholder} from '../Components';

const Page1: React.FC = () => {
  const [launchPads, setLaunchPads] = React.useState<ILaunchPad[]>([]);
  const [loading, setLoading] = React.useState<boolean>(false);

  const getData = async () => {
    setLoading(true);
    try {
      const {data} = await axios.get<ILaunchPad[]>('https://api.spacexdata.com/v4/launchpads');

      for(const launchPad of data) {
        const newLaunches = [];
        let count = 0;
        for(const launch of launchPad.launches || []) {
          if(count > 2) {
            break;
          }
          const {data: newLaunch} = await axios.get(`https://api.spacexdata.com/v4/launches/${launch}`)
          newLaunches.push(newLaunch);
          count++;
        }
        launchPad.launches = newLaunches;
      }
      setLaunchPads(data);
    } catch(err) {
      console.log(err);
      alert('Ooops. An error occured');
    } finally {
      setLoading(false);
    }
  }

  React.useEffect(() => {
    getData();
  }, []);

  return (
    <div className='w-screen h-screen flex flex-wrap justify-center bg-gray-50'>
      {
        loading
        ?
          <Placeholder height={600} /> 
        :
          <>
            {launchPads.map(pad => (
              <div className='w-full p-4 flex justify-center items-center'>
                <div className='w-5/6 shadow-md border border-gray-100'>
                  <div className='w-full p-4 border-b border-gray-100 flex justify-between'>
                    <span className='text-xl'>{pad.name}</span>
                    <span>{pad.status.toLowerCase().replace(/(^|\s)\S/g, L => L.toUpperCase())}</span>
                  </div>
                  <div className='w-full px-4 pb-4 pt-2 border-b border-gray-100'>
                    <p>{pad.details}</p>
                  </div>
                  <div className='w-full'>
                    <div className='w-full text-lg px-4 py-2 border-b border-gray-50'>Top 3 Launches</div>
                    <div className='w-full px-2 pb-4 flex flex-wrap'>
                      {pad.launches.length > 0
                      ?
                        pad.launches.map((launch, index) => (
                          <span className='w-full px-8 py-1'>{`${index+1}. ${launch.name}`}</span>
                        ))
                      :
                      <span className='w-full flex justify-center'>No Launches</span>
                    }
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </>
      }
    </div>
  )
}

export default Page1;