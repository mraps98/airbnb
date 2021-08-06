import Head from 'next/head';
import Header from '../components/Header';
import Banner from '../components/Banner';

export default () => {
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
        </div>
    );
};
