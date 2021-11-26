const targets = ['@filecoin-shipyard/lotus-client-rpc',
    '@filecoin-shipyard/lotus-client-provider-nodejs',
    '@filecoin-shipyard/lotus-client-schema'];
const withTM = require('next-transpile-modules')(targets);

module.exports = withTM({
    reactStrictMode: true,
    images: {
        domains: ['i.postimg.cc', 'cdn.pixabay.com', 'images.unsplash.com', '157.230.119.255'],
    }
});
