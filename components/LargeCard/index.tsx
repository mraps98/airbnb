import { FC } from 'react';
import Image from 'next/image';

interface IProps {
    img: string;
    title: string;
    description: string;
    buttonText: string;
}
const LargeCard: FC<IProps> = ({
    img,
    title,
    description,
    buttonText,
}: IProps) => (
    <div className="relative">
        <div className="relative h-96 min-w-full">
            <Image
                className="rounded-2xl"
                layout="fill"
                src={img}
                objectFit="cover"
            />
        </div>
        <div className="absolute top-32 left-12">
            <h3 className="text-3xl sm:text-4xl mb-3 w-full sm:w-64">
                {title}
            </h3>
            <p>{description}</p>
            <button className="text-sm text-white bg-gray-900 px-4 py-2 rounded-lg mt-5">
                {buttonText}
            </button>
        </div>
    </div>
);

export default LargeCard;
