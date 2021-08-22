import { FC } from 'react';
import { ILocationSearchResult } from '../../interfaces';
import Image from 'next/image';
import { HeartIcon } from '@heroicons/react/outline';
import { StarIcon } from '@heroicons/react/solid';

interface IProps {
    locationSearchResult: ILocationSearchResult;
    locationSearched: string;
}
const InfoCard: FC<IProps> = ({ locationSearchResult, locationSearched }) => {
    return (
        <div className="flex space-x-2 duration-300 shadow-md hover:shadow-lg p-4 cursor-pointer hover:opacity-80 active:scale-90">
            <div className="relative h-24 w-40 md:h-52 md:w-80 flex-shrink-0">
                <Image
                    src={locationSearchResult.img}
                    layout="fill"
                    className="object-cover rounded-2xl"
                />
            </div>
            <div className="flex flex-col flex-grow pl-5">
                <div className="flex justify-between">
                    <p>Private room in center of {locationSearched}</p>
                    <HeartIcon className="h-7 cursor-poiner hover:scale-125 transform transition duration-300 active:scale-90" />
                </div>
                <h4 className="text-xl">{locationSearchResult.title}</h4>
                <hr className="my-2" />
                <p className="pt-2 text-sm text-gray-500 flex-grow">
                    {locationSearchResult.description}
                </p>
                <div className="flex justify-between">
                    <p className="flex items-center">
                        {locationSearchResult.star}
                        <StarIcon className="h-5 text-red-500" />
                    </p>
                    <div className="flex flex-col items-end">
                        <p className="font-semibold text-lg lg:text-2xl pb-2">
                            {locationSearchResult.price}
                        </p>
                        <p className="font-extralight">
                            {locationSearchResult.total}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default InfoCard;
