import { ChangeEvent, FC, FormEvent, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
    SearchIcon,
    GlobeAltIcon,
    MenuIcon,
    UserCircleIcon,
    UsersIcon,
} from '@heroicons/react/solid';
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { DateRangePicker, OnDateRangeChangeProps } from 'react-date-range';
import { useRouter } from 'next/dist/client/router';

const Header: FC = () => {
    const [searchInput, setSearchInput] = useState('');
    const [dateRangePickerStartDate, setDateRangePickerStartDate] = useState(
        new Date()
    );
    const [dateRangePickerEndDate, setDateRangePickerEndDate] = useState(
        new Date()
    );
    const [numberOfGuests, setNumberOfGuests] = useState(1);
    const router = useRouter();

    const dateRangePickerSelectionRange = {
        startDate: dateRangePickerStartDate,
        endDate: dateRangePickerEndDate,
        key: 'selection',
    };

    const handleChangeSearchInput = (e: ChangeEvent<HTMLInputElement>) => {
        setSearchInput(e.target.value);
    };

    const handleChangeDateRangePicker = (
        ranges: OnDateRangeChangeProps | any
    ) => {
        setDateRangePickerStartDate(ranges.selection.startDate);
        setDateRangePickerEndDate(ranges.selection.endDate);
    };

    const handleNumberOfGuestsChange = (e: ChangeEvent<HTMLInputElement>) => {
        setNumberOfGuests(+e.target.value);
    };

    const handleCancelClick = () => {
        setSearchInput('');
        setDateRangePickerStartDate(new Date());
        setDateRangePickerEndDate(new Date());
        setNumberOfGuests(1);
    };

    const handleSearchClick = () => {
        pushToSearchPage();
    };

    const handleSearchFormSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        pushToSearchPage();
    };

    const pushToSearchPage = () => {
        !!searchInput &&
            router.push({
                pathname: 'search',
                query: {
                    location: searchInput,
                    startDate: dateRangePickerStartDate.toISOString(),
                    endDate: dateRangePickerEndDate.toISOString(),
                    numberOfGuests,
                },
            });
        setSearchInput('');
    };

    return (
        <header className="sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md p-5 md:px-10">
            <div className="relative flex items-center h-10 cursor-pointer my-auto">
                <Link href="/">
                    <Image
                        src="https://links.papareact.com/qd3"
                        layout="fill"
                        objectFit="contain"
                        objectPosition="left"
                    />
                </Link>
            </div>
            <div className="flex items-center md:border-2 rounded-full py-2 md:shadow-sm hover:bg-gray-50 transition duration-300">
                <form
                    onSubmit={handleSearchFormSubmit}
                    className="flex items-center flex-grow"
                >
                    <input
                        className="pl-5 bg-transparent outline-none flex-grow text-sm text-gray-600 placeholder-gray-400 transition duration-300"
                        placeholder="Start your search"
                        value={searchInput}
                        required
                        onChange={handleChangeSearchInput}
                    />
                    <SearchIcon
                        className="h-8 bg-red-400 hover:bg-red-300 transition duration-300 text-white rounded-full p-2 cursor-pointer hidden md:inline-flex md:mx-2"
                        onClick={handleSearchClick}
                    />
                </form>
            </div>
            <div className="flex items-center justify-end space-x-4 text-gray-500">
                <p className="hidden md:inline cursor-pointer text-right">
                    Become a host
                </p>
                <GlobeAltIcon className="h-6 cursor-pointer" />
                <div className="flex items-center space-x-2 p-2 border-2 rounded-full">
                    <MenuIcon className="h-6" />
                    <UserCircleIcon className="h-6" />
                </div>
            </div>

            {searchInput && (
                <div className="col-span-3 sm:mx-auto mt-2 flex flex-col max-w-screen">
                    <DateRangePicker
                        ranges={[dateRangePickerSelectionRange]}
                        minDate={new Date()}
                        rangeColors={['#FD5B61']}
                        onChange={handleChangeDateRangePicker}
                        scroll={{ enabled: true }}
                    />
                    <div className="flex items-center border-b mb-4">
                        <h2 className="text-2xl flex-grow font-semibold">
                            Number of guests
                        </h2>
                        <UsersIcon className="h-5" />
                        <input
                            type="number"
                            className="w-12 pl-2 outline-none text-red-400"
                            value={numberOfGuests}
                            onChange={handleNumberOfGuestsChange}
                            min={1}
                        />
                    </div>
                    <div className="flex">
                        <button
                            className="text-gray-400 flex-grow"
                            onClick={handleCancelClick}
                        >
                            Cancel
                        </button>
                        <button
                            onClick={handleSearchClick}
                            className="text-red-400 flex-grow"
                        >
                            Search
                        </button>
                    </div>
                </div>
            )}
        </header>
    );
};

export default Header;
