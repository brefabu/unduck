import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import pages from '../pages';
import Config from '../config.json';

const replace = (str: string, config: Record<string, string> = Config) => {
    return str.replace(/:(\w+)/g, (match, key) => {
        return config[key] || match;
    });
};

const useMetaData = () => {
    const location = useLocation();

    const [metadata, setMetadata] = useState({
        title: '',
        description: '',
    });

    useEffect(() => {
        const page = pages.find(page => page.route === location.pathname);

        setMetadata({
            title: replace(page ? page.title : 'Default Title', Config),
            description: replace(page ? page.description : 'Default Description', Config),
        });
    }, [location.pathname]);

    return metadata;
};

export default useMetaData;
