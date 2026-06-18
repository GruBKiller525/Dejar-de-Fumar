// characters.js — Dragon Ball Quit Smoking App

const heroesPool = [
  {
    id: 'goku_gt', name: 'Goku (GT)', emoji: '🌀', role: 'captain',
    icon: 'Goku_GT',
    forms: [
      { name: 'Trusted by Friends',            attack: 'Kamehameha',          power: 200,   image: '5.Goku_GT,Trusted_by_Friends' },
      { name: 'Battle to Become the Strongest', attack: 'Kamehameha (Extreme)', power: 800,  image: '4.Super_Saiyan_Goku_GT,Battle_to_Become_the_Strongest' },
      { name: 'Ultimate Saiyan Power Roar',    attack: 'Super Dragon Fist',   power: 3200,  image: '3.Super_Saiyan_3_Goku_GT_Golden_Giant_Ape,Ultimate_Saiyan_Power_Roar' },
      { name: 'Ultimate Saiyan Power Roar',    attack: 'Super Flame Cannon',  power: 12800, image: '2.Super_Saiyan_3_Goku_GT_Golden_Giant_Ape,Ultimate_Saiyan_Power_Roar' },
      { name: 'Ultimate Saiyan Power Roar',    attack: 'Dragon Strike Waltz', power: 40000, image: 'Super_Saiyan_4_Goku,Ultimate Saiyan_Power_Roar' },
    ]
  },
  {
    id: 'vegeta', name: 'Vegeta', emoji: '👑', role: 'captain',
    forms: [
      { name: 'Base',       attack: 'Galick Gun',       power: 500   },
      { name: 'Super Saiyan', attack: 'Big Bang Attack', power: 2000  },
      { name: 'Majin Vegeta', attack: 'Final Explosion', power: 8000  },
      { name: 'SSJ Blue',   attack: 'Final Flash',       power: 38000 },
    ]
  },
  {
    id: 'gohan', name: 'Gohan', emoji: '⚡', role: 'subcaptain',
    forms: [
      { name: 'Base',         attack: 'Masenko',                    power: 300   },
      { name: 'Super Saiyan', attack: 'SSJ Masenko',                power: 1200  },
      { name: 'SSJ2',         attack: 'Kamehameha Padre e Hijo',    power: 5000  },
      { name: 'Gohan Definitivo', attack: 'Asalto Implacable',      power: 15000 },
    ]
  },
  {
    id: 'piccolo', name: 'Piccolo', emoji: '💚', role: 'strategist',
    forms: [
      { name: 'Base',          attack: 'Rayo Especial',        power: 600  },
      { name: 'Sin Capa',      attack: 'Zona Infierno',        power: 2500 },
      { name: 'Fusión con Kami', attack: 'Granada de Luz',     power: 8000 },
    ]
  },
  {
    id: 'trunks', name: 'Trunks del Futuro', emoji: '⚔️', role: 'attacker',
    forms: [
      { name: 'Base',       attack: 'Burning Attack',    power: 400  },
      { name: 'Super Saiyan', attack: 'Finish Buster',   power: 1500 },
      { name: 'SSJ Rabia',  attack: 'Sword of Hope',     power: 5500 },
      { name: 'Super Trunks', attack: 'Heat Dome Attack', power: 8000 },
    ]
  },
  {
    id: 'android18', name: 'Androide 18', emoji: '💛', role: 'attacker',
    forms: [
      { name: 'Base',             attack: 'Onda de Energía',     power: 800  },
      { name: 'Energía Infinita', attack: 'Ráfaga Sin Fin',      power: 3000 },
      { name: 'Máximo Poder',     attack: 'Bala Infinita',       power: 8000 },
    ]
  },
  {
    id: 'krillin', name: 'Krilin', emoji: '🔴', role: 'defender',
    forms: [
      { name: 'Base',         attack: 'Disco Destructor',   power: 150  },
      { name: 'Kaioken',      attack: 'Golpe Kaioken',      power: 600  },
      { name: 'Máximo Poder', attack: 'Solar Flare ×100',   power: 4000 },
    ]
  },
  {
    id: 'gotenks', name: 'Gotenks', emoji: '🌀', role: 'subcaptain',
    forms: [
      { name: 'Base Fusión',    attack: 'Donut Galáctico',            power: 800   },
      { name: 'Super Saiyan',   attack: 'Super Fantasma Kamikaze',    power: 3500  },
      { name: 'SSJ3 Gotenks',   attack: 'Súper Donut Galáctico',      power: 15000 },
    ]
  },
  {
    id: 'vegito', name: 'Vegito', emoji: '✨', role: 'captain',
    forms: [
      { name: 'Vegito Base',     attack: 'Big Bang Kamehameha',  power: 2500  },
      { name: 'Vegito SSJ',      attack: 'Final Kamehameha',     power: 10000 },
      { name: 'Vegito SSJ Blue', attack: 'Espada del Espíritu',  power: 40000 },
    ]
  },
  {
    id: 'beerus', name: 'Beerus', emoji: '😺', role: 'special',
    forms: [
      { name: 'Relajado',     attack: 'Energía de Destrucción', power: 1000 },
      { name: 'Modo Combate', attack: 'Hakai',                  power: 2000 },
    ]
  },
  {
    id: 'whis', name: 'Whis', emoji: '🪄', role: 'support',
    forms: [
      { name: 'Paseo',         attack: 'Golpe de Bastón',     power: 500  },
      { name: 'Modo Entrenamiento', attack: 'Buff Temporal',  power: 4000 },
    ]
  },
  {
    id: 'android17', name: 'Androide 17', emoji: '🌿', role: 'defender',
    forms: [
      { name: 'Guardabosques', attack: 'Power Blitz',           power: 400  },
      { name: 'Máximo Poder',  attack: 'Barrera Bomba',         power: 1500 },
      { name: 'Super 17',      attack: 'Super Rayo Eléctrico',  power: 4000 },
    ]
  },
  {
    id: 'yamcha', name: 'Yamcha', emoji: '🐺', role: 'special',
    forms: [
      { name: 'Puño del Lobo', attack: 'Puño del Lobo Volador', power: 300  },
      { name: 'Bola Espiritual', attack: 'Spirit Ball',         power: 2000 },
    ]
  },
  {
    id: 'tien', name: 'Tenshinhan', emoji: '👁️', role: 'strategist',
    forms: [
      { name: 'Base',          attack: 'Dodonpa',      power: 400  },
      { name: 'Tercer Ojo',    attack: 'Puño Voléibol', power: 1700 },
      { name: 'Neo Kikoho',    attack: 'Neo Kikoho',   power: 8000 },
    ]
  },
  {
    id: 'goten', name: 'Goten', emoji: '🌟', role: 'support',
    forms: [
      { name: 'Base',         attack: 'Kamehameha Jr.',    power: 200  },
      { name: 'Super Saiyan', attack: 'Kamehameha SSJ',    power: 800  },
      { name: 'Milagro SSJ',  attack: 'Rayo Milagro SSJ',  power: 4000 },
    ]
  },
];

const villainsPool = [
  {
    id: 'broly', name: 'Broly', emoji: '🟢', role: 'captain',
    forms: [
      { name: 'Base',          attack: 'Blaster Shell',          power: 1000  },
      { name: 'Colérico',      attack: 'Rugido Gigantesco',      power: 4000  },
      { name: 'LSSJ',          attack: 'Omega Blaster',          power: 16000 },
      { name: 'LSSJ Máximo',   attack: 'Destrucción Gigantesca', power: 40000 },
    ]
  },
  {
    id: 'frieza_villain', name: 'Frieza', emoji: '👾', role: 'captain',
    forms: [
      { name: '1ª Forma',      attack: 'Rayo de Muerte',          power: 1000  },
      { name: '2ª Forma',      attack: 'Bola de Muerte',          power: 4000  },
      { name: 'Forma Final',   attack: 'Supernova',               power: 15000 },
      { name: 'Frieza Dorado', attack: 'Bola de Muerte Dorada',   power: 40000 },
    ]
  },
  {
    id: 'cell_villain', name: 'Cell', emoji: '🧬', role: 'subcaptain',
    forms: [
      { name: 'Cell Imperfecto',     attack: 'Drenaje de Energía',   power: 1500  },
      { name: 'Cell Semi-Perfecto',  attack: 'Barrera Perfecta',     power: 6000  },
      { name: 'Cell Perfecto',       attack: 'Kamehameha Solar',     power: 15000 },
    ]
  },
  {
    id: 'turles', name: 'Turles', emoji: '🌑', role: 'attacker',
    forms: [
      { name: 'Base',            attack: 'Kill Driver',       power: 800  },
      { name: 'Poder Aumentado', attack: 'Tormenta Súbita',   power: 3000 },
      { name: 'Árbol del Poder', attack: 'Poder del Árbol',   power: 8000 },
    ]
  },
  {
    id: 'baby', name: 'Baby Vegeta', emoji: '🦠', role: 'subcaptain',
    forms: [
      { name: 'Baby',         attack: 'Revenge Death Ball',  power: 1200  },
      { name: 'Super Baby 1', attack: 'Revenge Blaster',     power: 5000  },
      { name: 'Super Baby 2', attack: 'Blast del Gran Simio', power: 15000 },
    ]
  },
  {
    id: 'android13', name: 'Androide 13', emoji: '🔩', role: 'defender',
    forms: [
      { name: 'Base 13',   attack: 'Bomba Letal S.S.',      power: 800  },
      { name: 'Super 13',  attack: 'Bala Infinita S.S.',    power: 4000 },
    ]
  },
  {
    id: 'slug', name: 'Lord Slug', emoji: '🐌', role: 'defender',
    forms: [
      { name: 'Base',             attack: 'Rayo del Ojo Oscuro', power: 300  },
      { name: 'Slug Gigante',     attack: 'Pisotón Gigante',     power: 1400 },
      { name: 'Slug Potenciado',  attack: 'Blast de Oscuridad',  power: 4000 },
    ]
  },
  {
    id: 'zarbon', name: 'Zarbon', emoji: '💙', role: 'strategist',
    forms: [
      { name: 'Forma Élite',    attack: 'Blaster Elegante', power: 1500 },
      { name: 'Forma Monstruo', attack: 'Monster Break',    power: 8000 },
    ]
  },
  {
    id: 'dodoria', name: 'Dodoria', emoji: '🩷', role: 'special',
    forms: [
      { name: 'Normal',       attack: 'Onda Bucal de Energía', power: 600  },
      { name: 'Modo Rabia',   attack: 'Cabezazo de Dodoria',   power: 2000 },
    ]
  },
  {
    id: 'raditz_villain', name: 'Raditz', emoji: '🖤', role: 'support',
    forms: [
      { name: 'Normal',         attack: 'Double Sunday',  power: 600  },
      { name: 'Potenciado',     attack: 'Weekend',        power: 2000 },
    ]
  },
  {
    id: 'nappa', name: 'Nappa', emoji: '💪', role: 'defender',
    forms: [
      { name: 'Base',        attack: 'Tormenta Ardiente', power: 700  },
      { name: 'Nappa Power', attack: 'Break Cannon',      power: 4000 },
    ]
  },
  {
    id: 'cooler', name: 'Cooler', emoji: '❄️', role: 'subcaptain',
    forms: [
      { name: '4ª Forma',    attack: 'Rayo de Muerte',        power: 1000  },
      { name: '5ª Forma',    attack: 'Supernova de Cooler',   power: 4500  },
      { name: 'Meta-Cooler', attack: 'Nova Rayo de Muerte',   power: 15000 },
    ]
  },
  {
    id: 'janemba', name: 'Janemba', emoji: '😈', role: 'attacker',
    forms: [
      { name: 'Janemba Gordo', attack: 'Bola Janemba',    power: 2000 },
      { name: 'Super Janemba', attack: 'Espada Dimensional', power: 8000 },
    ]
  },
  {
    id: 'bojack', name: 'Bojack', emoji: '🏴‍☠️', role: 'attacker',
    forms: [
      { name: 'Base',          attack: 'Galactic Buster',     power: 500  },
      { name: 'Transformado',  attack: 'Blaster Ball',        power: 2200 },
      { name: 'Máximo Poder',  attack: 'Full Power Blaster',  power: 8000 },
    ]
  },
  {
    id: 'omega', name: 'Omega Shenron', emoji: '🐉', role: 'strategist',
    forms: [
      { name: 'Dragón Sombra', attack: 'Trueno del Dragón',         power: 2000 },
      { name: 'Modo Omega',    attack: 'Bola de Energía Negativa',  power: 8000 },
    ]
  },
];
