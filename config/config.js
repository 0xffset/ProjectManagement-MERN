const config = {
    env: process.env.NODE_ENV || 'production',
    port: process.env.PORT || 3000,
    jwSecret: process.env.JW_SECRET || "12s1dsqrsprsqzxs2-secret",
    mongoUri: 'mongodb://uyypaup5leuiffbniqxm:SC2KzSKT2dnWyzrXLO3r@bzsbc1jacqfyloz-mongodb.services.clever-cloud.com:27017/bzsbc1jacqfyloz'
    // mongoUri: process.env.MONGODB_URL || process.env.MONGODB_HOST ||
    // 'mongodb://' + (process.env.IP || 'localhost') + ':' + (process.env.MONGODB_PORT || '27017') +
    // '/productManagement'
}

export default config;