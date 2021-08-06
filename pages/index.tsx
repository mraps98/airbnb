import Head from 'next/head';
import Header from '../components/Header';

export default () => {
    return (
        <div>
            <Head>
                <title>Create Next App</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            {/* Header */}
            <Header />

            {/* Banner */}
        </div>
    );
};
