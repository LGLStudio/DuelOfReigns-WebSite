module.exports = {
    input: ['src/**/*.{js,jsx}'], // Scanner tous les fichiers .js et .jsx
    output: './src/locales',
    options: {
        debug: false,
        func: {
            list: ['t'], // Détecte les chaînes dans t("key")
        },
        lngs: ['en', 'fr'], // Langues supportées
        defaultLng: 'en',
        resource: {
            loadPath: './src/locales/{{lng}}.json',
            savePath: './src/locales/{{lng}}.json',
            jsonIndent: 2,
        },
    },
};
