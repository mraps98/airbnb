import Header from '../components/Header';
import Footer from '../components/Footer';
import { FC } from 'react';
import SearchFilter from '../components/SearchFilter';
import { useRouter } from 'next/dist/client/router';
import { format } from 'date-fns';
import { ILocationSearchResult } from '../interfaces';
import InfoCard from '../components/InfoCard';
import Map from '../components/Map';

interface IProps {
    locationSearchResults: Array<ILocationSearchResult>;
}

const Search: FC<IProps> = ({ locationSearchResults }) => {
    const router = useRouter();
    const { location, startDate, endDate, numberOfGuests } = router.query;
    const formattedStartDate = format(
        new Date(startDate as string),
        'dd MMMM yy'
    );
    const formattedEndDate = format(new Date(endDate as string), 'dd MMMM yy');
    const dateRange = `${formattedStartDate} - ${formattedEndDate}`;

    return (
        <>
            <Header
                placeholder={`${location} | ${dateRange} | ${numberOfGuests} guests`}
            />

            <main className="flex">
                <section className="flex-grow pt-14 px-6">
                    <p className="text-xs">
                        300+ stays - {dateRange} - for {numberOfGuests} guests
                    </p>
                    <h1 className="text-3xl font-semibold mt-2 mb-6">
                        Stays in {location}
                    </h1>
                    <div className="hidden lg:inline-flex space-x-3 text-gray-800 whitespace-nowrap">
                        <SearchFilter>Cancellation Flexibility</SearchFilter>
                        <SearchFilter>Type of place</SearchFilter>
                        <SearchFilter>Price</SearchFilter>
                        <SearchFilter>Rooms and beds</SearchFilter>
                        <SearchFilter>More filter</SearchFilter>
                    </div>

                    <div className="flex flex-col space-y-6 border-t mb-10 mt-4">
                        {locationSearchResults.map((locationSearchResult) => (
                            <InfoCard
                                locationSearchResult={locationSearchResult}
                                locationSearched={location as string}
                            />
                        ))}
                    </div>
                </section>

                <section className="hidden xl:inline-flex xl:min-w-[600px]">
                    <Map
                        locationSearchResults={locationSearchResults}
                        coordinates={() =>
                            locationSearchResults.map((result) => ({
                                latitude: result.lat,
                                longitude: result.long,
                            }))
                        }
                    />
                </section>
            </main>

            <Footer />
        </>
    );
};

export default Search;

export const getServerSideProps = async () => {
    const locationSearchResults = await (
        await fetch('https://links.papareact.com/isz')
    ).json();
    return {
        props: {
            locationSearchResults,
        },
    };
};
