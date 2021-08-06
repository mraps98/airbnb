import Head from 'next/head';
import Header from '../components/Header';
import Banner from '../components/Banner';
import CityCard from '../components/CityCard';
import LivingFeatureCard from '../components/LivingFeatureCard';

export default ({ cities, livingFeatures }) => {
    return (
        <div>
            <Head>
                <title>airbnb</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            {/* Header */}
            <Header />

            {/* Banner */}
            <Banner />

            <main className="max-w-7xl mx-auto px-8 sm:px-16">
                <section className="pt-6">
                    <h2 className="text-4xl font-semibold pb-5">
                        Explore nearby
                    </h2>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                        {cities?.map((city) => (
                            <CityCard key={city.location} location={city} />
                        ))}
                    </div>
                </section>
                <section>
                    <h2 className="text-4xl font-semibold py-8">
                        Live anywhere
                    </h2>
                    <div className="flex space-x-3 overflow-x-scroll overflow-y-hidden scrollbar-hide p-3 -ml-3">
                        {livingFeatures.map((livingFeature) => (
                            <LivingFeatureCard livingFeature={livingFeature} />
                        ))}
                    </div>
                </section>
            </main>
        </div>
    );
};

export const getStaticProps = async () => {
    const cities = await (
        await fetch('https://links.papareact.com/pyp')
    ).json();

    const livingFeatures = await (
        await fetch('https://links.papareact.com/zp1')
    ).json();

    return {
        props: {
            cities,
            livingFeatures,
        },
    };
};
