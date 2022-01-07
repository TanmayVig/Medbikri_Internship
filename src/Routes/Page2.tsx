import * as React from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import moment from "moment";

import { ILaunch } from "../interfaces/launch";
import { Placeholder } from "../Components";

const Page2: React.FC = () => {
  const [launch, setLaunch] = React.useState<ILaunch>();
  const [loading, setLoading] = React.useState<boolean>(false);
  const { id } = useParams<{ id?: string | undefined }>();

  const getData = async () => {
    setLoading(true);
    try {
      const { data } = await axios.get<ILaunch>(
        `https://api.spacexdata.com/v4/launches/${id}`
      );
      console.log(data);
      setLaunch(data);
    } catch (err) {
      console.log(err);
      alert("Ooops. An error occured");
    } finally {
      setLoading(false);
    }
  };

  React.useEffect(() => {
    getData();
  }, []);

  return (
    <div className="w-full h-full flex justify-center items-center bg-gray-200">
      {loading ? (
        <Placeholder height={"100vh"} />
      ) : (
        <>
          <div className="flex flex-col justify-center bg-white w-10/12 md:w-5/12 my-2 px-4 py-2 rounded-md items-start shadow-lg">
            <div className="flex flex-col sm:flex-row justify-between w-full ">
              <h1 className="text-xl md:text-5xl">{launch?.name || "N/A"}</h1>
              <h1>{moment(launch?.date_local).format("DD-MMM-YYYY")}</h1>
            </div>
            <h1 className="py-2">{launch?.details || "N/A"}</h1>
          </div>
        </>
      )}
    </div>
  );
};

export default Page2;
