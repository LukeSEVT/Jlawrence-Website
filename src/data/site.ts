export const site = {
  name: 'J Lawrence Industries',
  short: 'JLI',
  tagline: 'Manufacturing assembly tooling & components',
  location: 'Puget Sound, WA',
  established: 2009,
  email: 'info@jlawrenceindustries.com',
  phone: '360.202.7342',
  phoneHref: 'tel:3602027342',
  emailHref: 'mailto:info@jlawrenceindustries.com',
  onTime: 99,
  nasaParts: 750,
  industries: 6,
}

export const nav = [
  { to: '/work', label: 'Work' },
  { to: '/about', label: 'About' },
  { to: '/services', label: 'Services' },
  { to: '/process', label: 'Process' },
] as const

export const people = [
  {
    name: 'Jeffry Tomson',
    role: 'President',
    lines: ['P.O. Box 219', 'North Lakewood, WA 98259'],
    phone: '360 202 7342',
    email: 'Jeffry.tomson@jlawrenceindustries.com',
  },
  {
    name: 'Dr. Raymond Davies, Ph.D.',
    role: 'Director of UK Operations',
    lines: [],
    phone: '+44 7480 826385',
    email: 'dr.raymondj.davies@gmail.com',
  },
] as const

export const certifications = [
  { label: 'Certification', value: 'JCP' },
  { label: 'CAGE', value: '89UU8' },
  { label: 'DUNS', value: '829909873' },
  { label: 'WA UBI', value: '602 889 425' },
] as const

export const cards = ['VISA', 'MasterCard', 'American Express'] as const

export const naics = [
  '238290',
  '238990',
  '313210',
  '313320',
  '314910',
  '314994',
  '315990',
  '325211',
  '326199',
  '326220',
  '331110',
  '331491',
  '332119',
  '332160',
  '332216',
  '332311',
  '332312',
  '332322',
  '332439',
  '332510',
  '332710',
  '332722',
  '332919',
  '332992',
  '332994',
  '332999',
  '333413',
  '333415',
  '333515',
  '333612',
  '333618',
  '333923',
  '333924',
  '333992',
  '333996',
  '333999',
  '334220',
  '334290',
  '334417',
  '334418',
  '334511',
  '334515',
  '334519',
  '335122',
  '335129',
  '335311',
  '335312',
  '335929',
  '335931',
  '335932',
  '336413',
  '336612',
  '337127',
  '337214',
  '337215',
  '339113',
  '339940',
  '423610',
  '451110',
  '541420',
  '811121',
] as const

export const disciplines = [
  'Metallurgical',
  'Mechanical',
  'Structural',
  'Fluid Dynamics',
  'Design',
  'Management',
  'Stress Analysis',
] as const

export const software = ['CATIA V5', 'SolidWorks', 'AutoCAD'] as const

export const copy = {
  homeLead:
    'JLI is a contract manufacturer of complex equipment and systems with quality precision electro-mechanical assembly and clean room assembly capabilities.',
  about:
    'JLI is a design build company located in the Puget Sound area, providing Mechanical Design, Project Management, and Design for Manufacturing (DFM), since 2009.',
  pm: 'JLI has strong project management skills, experienced in risk and schedule management, delivering projects and products with a 99% on time rating.',
  fullService:
    'JLI provides concepts and prototypes through formal engineering, stress analysis and designing. JLI’s full service also includes manufacturing, testing and installation.',
  assembly:
    'Projects are managed by expert engineering and manufacturing support teams using end-to-end management and lean practices.',
  nasa: 'J Lawrence Industries has manufactured more than 750 various parts and pieces for NASA.',
}
