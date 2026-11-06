import { copy, disciplines, software } from './site'

export const services = [
  {
    slug: 'mechanical-design',
    index: '01',
    title: 'Mechanical Design',
    kicker: 'Concepts through CAD',
    summary:
      'Concepts and prototypes through formal engineering, stress analysis and designing.',
    body: copy.fullService,
    points: [
      'Concepts and prototypes',
      'Formal engineering',
      'Stress analysis',
      'CATIA V5, SolidWorks, AutoCAD',
    ],
  },
  {
    slug: 'project-management',
    index: '02',
    title: 'Project Management',
    kicker: 'Risk and schedule',
    summary:
      'Risk and schedule management, delivering projects and products with a 99% on time rating.',
    body: copy.pm,
    points: [
      'End-to-end management',
      'Risk management',
      'Schedule management',
      '99% on-time rating',
    ],
  },
  {
    slug: 'dfm',
    index: '03',
    title: 'Design for Manufacturing',
    kicker: 'Build what was drawn',
    summary:
      'Design-build from the Puget Sound area, taking drawings into manufacture, test and installation.',
    body: copy.about,
    points: [
      'Design for manufacture',
      'Precision electro-mechanical assembly',
      'Clean room assembly',
      'Testing and installation',
    ],
  },
  {
    slug: 'engineering',
    index: '04',
    title: 'Engineering',
    kicker: 'One programme',
    summary:
      'Expert engineering and manufacturing support teams using end-to-end management and lean practices.',
    body: copy.assembly,
    points: [...disciplines],
    tools: [...software],
  },
] as const

export type Service = (typeof services)[number]

export function getService(slug: string) {
  return services.find((service) => service.slug === slug)
}

export const phases = [
  {
    id: 'concept',
    num: '01',
    title: 'Concept',
    gate: 'Brief',
    body: 'JLI provides concepts and prototypes before a line is cut. What it must do, and what success looks like on the floor.',
    output: 'Concept and prototype',
  },
  {
    id: 'engineer',
    num: '02',
    title: 'Engineer',
    gate: 'Design review',
    body: 'Formal engineering, stress analysis and designing. Metallurgical, mechanical, structural and fluid dynamics sit in the same programme.',
    output: 'Engineering package',
  },
  {
    id: 'dfm',
    num: '03',
    title: 'Design for manufacture',
    gate: 'Build plan',
    body: 'Design for Manufacturing so the part can be made, inspected and installed — not only drawn.',
    output: 'DFM and build plan',
  },
  {
    id: 'manufacture',
    num: '04',
    title: 'Manufacture',
    gate: 'Assembly',
    body: 'Precision electro-mechanical assembly and clean room assembly capabilities, managed end to end.',
    output: 'Built hardware',
  },
  {
    id: 'prove',
    num: '05',
    title: 'Test & install',
    gate: 'Handover',
    body: 'Full service includes manufacturing, testing and installation. Risk and schedule stay on the same desk through delivery.',
    output: 'Tested and installed',
  },
] as const

export const gates = [
  {
    num: '01',
    after: 'After concept',
    title: 'Risk review',
    body: 'Experienced in risk and schedule management before the programme is committed.',
  },
  {
    num: '02',
    after: 'After design',
    title: 'Schedule commitment',
    body: 'A plan the shop and the customer can hold. Nothing moves on unreviewed.',
  },
  {
    num: '03',
    after: 'After install',
    title: 'On-time delivery',
    body: 'Delivering projects and products with a 99% on time rating.',
  },
] as const
