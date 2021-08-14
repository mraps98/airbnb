import Header from '../components/Header';
import Footer from '../components/Footer';
import { FC } from 'react';
import SearchFilter from '../components/SearchFilter';

const Search: FC = () => {
    return (
        <>
            <Header />

            <main className="flex">
                <section className="flex-grow pt-14 px-6">
                    <p className="text-xs">300+ stays for 5 number of guests</p>
                    <h1 className="text-3xl font-semibold mt-2 mb-6">
                        Stays in New Delhi
                    </h1>

                    <div className="hidden lg:inline-flex space-x-3 text-gray-800 whitespace-nowrap">
                        <SearchFilter>Cancellation Flexibility</SearchFilter>
                        <SearchFilter>Type of place</SearchFilter>
                        <SearchFilter>Price</SearchFilter>
                        <SearchFilter>Rooms and beds</SearchFilter>
                        <SearchFilter>More filter</SearchFilter>
                    </div>
                </section>
            </main>

            <Footer />
        </>
    );
};

export default Search;
