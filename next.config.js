module.exports = {
    reactStrictMode: true,
    images: {
        domains: ['i.postimg.cc', 'cdn.pixabay.com', 'images.unsplash.com'],
    },
    env: {
        BASE_URL: process.env.BASE_URL,
        ALGOLIA_APP_ID: 'E6YQUILULJ',
        ALGOLIA_API_KEY: 'c2ac6e18abde19a94d2b2b51e1785108',
        PROFILES_INDEX_NAME: 'filgram',
        SHOULD_REINDEX: false
    }
}
