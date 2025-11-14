// Configuration for random title functionality
const randomTitleConfig = {
  // Array of possible titles
  possibleTitles: [
    'PENGENBUAT',
    'RASAYANG-PERNAHADA',
    'SEMENJAK-DULUKALA',
    'PENGENTAPI-BELUMKESAMPAIAN',
    'INILAH',
    'MUNGKIN',
    'ISENGISENG',
    'HASRATYANG-TERWUJUD',
    'ADALAH',
    'HANYALAH-SEBUAH',
    'INI',
    'BENARKAH?',
    'YUKS',
    'KALAU-INI',
    'TIMERNYA',
    'BEGITULAH',
    'LUPANAMA-INGATRASA',
    'MASIHINGATKAH-PADAKU',
    'SEANDAINYA-WAKTUITU',
    'INIDULU-CURHATBELAKANGAN',
    'OTEWE',
    'KENAPA-YA',
    'SULIT-MELUPAKAN',
    '',
  ],

  // Update interval in milliseconds (5 minutes)
  updateInterval: 300000,

  // Function to get a random title
  getRandomTitle: function () {
    const randomIndex = Math.floor(Math.random() * this.possibleTitles.length);
    return this.possibleTitles[randomIndex];
  },
};

// Export for use in other modules (if using modules)
if (typeof module !== 'undefined' && module.exports) {
  module.exports = randomTitleConfig;
}
