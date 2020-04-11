const config = {
    env: process.env.NODE_ENV || 'development',
    port: process.env.PORT || 3000,
    jwSecret: process.env.JW_SECRET || "SECRET KEY",
    mongoUri: process.env.MONGODB_URL || process.env.MONGODB_HOST ||
    'mongodb://' + (process.env.IP || 'localhost') + ':' + (process.env.MONGODB_PORT || '27017') +
    '/productManagement'
}

export default config;