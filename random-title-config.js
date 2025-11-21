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
    'BENARKAH-INI?',
    'YUKS',
    'KALAU-INI',
    'TIMERNYA',
    'BEGITULAH',
    'LUPANAMA-INGATRASA',
    'MASIHINGATKAH-PADAKU',
    'SEANDAINYA-WAKTUITU',
    'INIDULU-CURHATBELAKANGAN',
    'OTEWEIN',
    'KENAPA-YA',
    'SULIT-MELUPAKAN',
    'SEKEDAR-JANJI',
    'HANYA-SEKEDAR',
    'DIHATIMU',
    'KAMULAH-SATUSATUNYA',
    'TISARO-STATIS-TAPIROMANTIS',
    'TAKBISA-MELUPAKANMU',
    'KENANGAN',
    'NYAMAN-DENGANMU',
    'KISAHYANG-TAK-PERNAHADA',
    'PASTI-INI',
    'AKU-YAKIN',
    'LELAH-MENGEJAR',
    'SKIBIDIPAP',
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
