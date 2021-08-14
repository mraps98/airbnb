import { FC, ReactNode } from 'react';

interface IProps {
    children: ReactNode;
}
const SearchFilter: FC<IProps> = ({ children }) => {
    return (
        <p className="px-4 py-2 border rounded-full hover:shadow-lg active:scale-95 active:bg-gray-100 cursor-pointer transition transform duration-300 ease-out">
            {children}
        </p>
    );
};

export default SearchFilter;
