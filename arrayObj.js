const arrObj = [
  {
    number: 1,
    numerology: "Born leader. Independent, ambitious, determined, and goal-oriented.",
    destinyNumber: 'Leadership, independence, initiative.',
    name: 'Pioneer and Innovator',
    soul: 'Desires freedom and independence.',
    expressionOfSoul: 'Strong will and self-expression.',
    projectPurpose: 'To initiate and inspire new beginnings.',
    personalYear: 'Year of personal growth and taking charge.',
    personalMonth: 'Month focused on new projects and leadership.'
  },
  {
    number: 2,
    numerology: "Diplomatic and sensitive. Values harmony, cooperation, and sincere relationships.",
    destinyNumber: 'Diplomacy, cooperation, sensitivity.',
    name: 'Supportive and Good Manager',
    soul: 'Seeks peace and balance in relationships.',
    expressionOfSoul: 'Gentle, nurturing communication.',
    projectPurpose: 'To build bridges and mediate conflicts.',
    personalYear: 'Year of partnerships and cooperation.',
    personalMonth: 'Month of teamwork and harmony.'
  },
  {
    number: 3,
    numerology: "Communicative, creative, and optimistic. Expressive, social, and often artistic.",
    destinyNumber: 'Creativity, expression, joy.',
    name: 'Advisor and Motivator',
    soul: 'Joyful and expressive spirit.',
    expressionOfSoul: 'Creative and playful communication.',
    projectPurpose: 'To inspire through art and speech.',
    personalYear: 'Year of creativity and social growth.',
    personalMonth: 'Month for sharing ideas and joy.'
  },
  {
    number: 4,
    numerology: "Practical, reliable, and organized. Loves stability, hard work, and structure.",
    destinyNumber: 'Stability, hard work, organization.',
    name: 'Disciplined and Executor',
    soul: 'Seeks order and reliability.',
    expressionOfSoul: 'Methodical and disciplined expression.',
    projectPurpose: 'To create strong foundations.',
    personalYear: 'Year for building and hard work.',
    personalMonth: 'Month of focus and perseverance.'
  },
  {
    number: 5,
    numerology: "Freedom-loving and adventurous. Curious, energetic, and open to change.",
    destinyNumber: 'Adventure, freedom, versatility.',
    name: 'Free Spirit',
    soul: 'Craves freedom and variety.',
    expressionOfSoul: 'Dynamic and versatile communication.',
    projectPurpose: 'To explore and embrace change.',
    personalYear: 'Year of personal freedom and exploration.',
    personalMonth: 'Month for new experiences and spontaneity.'
  },
  {
    number: 6,
    numerology: "Caring, empathetic, and responsible. Strong sense of family, duty, and justice.",
    destinyNumber: 'Harmony, responsibility, service.',
    name: 'Protector and Responsible',
    soul: 'Driven by love and responsibility.',
    expressionOfSoul: 'Nurturing and compassionate expression.',
    projectPurpose: 'To serve and care for others.',
    personalYear: 'Year of family and community focus.',
    personalMonth: 'Month for responsibility and care.'
  },
  {
    number: 7,
    numerology: "Introspective, analytical, and spiritual. Loves solitude and deep thinking.",
    destinyNumber: 'Intuition, analysis, spirituality.',
    name: 'Specialist and Perfectionist',
    soul: 'Seeks knowledge and spiritual truth.',
    expressionOfSoul: 'Thoughtful and precise communication.',
    projectPurpose: 'To deepen wisdom and understanding.',
    personalYear: 'Year for study and reflection.',
    personalMonth: 'Month focused on inner growth.'
  },
  {
    number: 8,
    numerology: "Ambitious and powerful. Focused on success, leadership, and material achievements.",
    destinyNumber: 'Ambition, material success, power.',
    name: 'Great Strategist',
    soul: 'Driven by success and abundance.',
    expressionOfSoul: 'Confident and authoritative expression.',
    projectPurpose: 'To manifest power and wealth responsibly.',
    personalYear: 'Year of achievement and leadership.',
    personalMonth: 'Month to focus on goals and ambition.'
  },
  {
    number: 9,
    numerology: "Compassionate and idealistic. Driven by service, wisdom, and a global mindset.",
    destinyNumber: 'Humanitarianism, compassion, wisdom.',
    name: 'Creative Genius and Idealist',
    soul: 'Compelled to serve humanity.',
    expressionOfSoul: 'Expressive and idealistic communication.',
    projectPurpose: 'To inspire and uplift the world.',
    personalYear: 'Year of completion and compassion.',
    personalMonth: 'Month of generosity and healing.'
  },
  {
    number: 11,
    numerology: "Master number of intuition and inspiration. Visionary, spiritual, and emotionally deep.",
    destinyNumber: 'Inspiration, idealism, creativity and expression. Healers and motivators.',
    name: 'Transformational Master',
    soul: 'Highly intuitive and spiritually aware.',
    expressionOfSoul: 'Visionary and inspiring expression.',
    projectPurpose: 'To enlighten and transform others.',
    personalYear: 'Year for spiritual breakthroughs.',
    personalMonth: 'Month of heightened intuition.'
  },
  {
    number: 22,
    numerology: "Master builder. Practical dreamer who can turn big visions into reality.",
    destinyNumber: 'Visionary who transforms the world. Building, manifestation, pragmatism.',
    name: 'Power in Service of Spirit',
    soul: 'Visionary with strong practical skills.',
    expressionOfSoul: 'Effective and impactful communication.',
    projectPurpose: 'To build lasting legacies.',
    personalYear: 'Year of powerful manifestation.',
    personalMonth: 'Month to focus on goals and foundations.'
  }
];


const letterNumberMap = [
  { letter: 'A', number: 1 },
  { letter: 'J', number: 1 },
  { letter: 'S', number: 1 },
  { letter: 'B', number: 2 },
  { letter: 'T', number: 2 },
  { letter: 'C', number: 3 },
  { letter: 'Ç', number: 3 },
  { letter: 'L', number: 3 },
  { letter: 'U', number: 3 },
  { letter: 'D', number: 4 },
  { letter: 'M', number: 4 },
  { letter: 'E', number: 5 },
  { letter: 'N', number: 5 },
  { letter: 'Ñ', number: 5 },
  { letter: 'W', number: 5 },
  { letter: 'F', number: 6 },
  { letter: 'O', number: 6 },
  { letter: 'X', number: 6 },
  { letter: 'G', number: 7 },
  { letter: 'P', number: 7 },
  { letter: 'Y', number: 7 },
  { letter: 'H', number: 8 },
  { letter: 'Q', number: 8 },
  { letter: 'Z', number: 8 },
  { letter: 'I', number: 9 },
  { letter: 'R', number: 9 },
  { letter: 'K', number: 11 },
  { letter: 'V', number: 22 }
];

const VOWEL = ['A', 'E', 'I', 'O', 'U'];
const CONSONANT = [
  'B', 'C', 'D', 'F', 'G', 'H', 'J', 'K', 'L', 'M',
  'N', 'P', 'Q', 'R', 'S', 'T', 'V', 'W', 'X', 'Y', 'Z'
];
