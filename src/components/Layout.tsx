import React from 'react';

import { Helmet } from 'react-helmet-async';

import Header from './main/Header';
import Footer from './main/Footer';
import useMetaData from '../utils/useMetadata';

type LayoutProps = {
    children: React.ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
    const metadata = useMetaData();

    return (
        <>
            <Helmet>
                <title>{metadata.title}</title>
                <meta property="og:title" content={metadata.title}></meta>
                <meta name='description' content={metadata.description}></meta>
                <meta property="og:description" content={metadata.description}></meta>
                <meta property="og:url" content={process.env.REACT_APP_PUBLIC_URL}></meta>
            </Helmet>
            <Header />
            <div>
                {children}
            </div>
            <Footer />
        </>
    );
};

export default Layout;