export const industries = [
  {
    id: 'aerospace',
    label: 'Aerospace',
    image: '/work/industry-aerospace.jpg',
  },
  {
    id: 'hydro-power',
    label: 'Hydro Power',
    image: '/work/industry-hydro.jpg',
  },
  {
    id: 'industrial',
    label: 'Industrial',
    image: '/work/industry-industrial.jpg',
  },
  {
    id: 'marine',
    label: 'Marine',
    image: '/work/industry-marine.jpg',
  },
  {
    id: 'structures',
    label: 'Structures',
    image: '/work/industry-structures.jpg',
  },
  {
    id: 'transportation',
    label: 'Transportation',
    image: '/work/industry-transportation.jpg',
  },
] as const

export type IndustryId = (typeof industries)[number]['id']

export type Project = {
  slug: string
  title: string
  industry: IndustryId
  summary: string
  image: string
  gallery?: string[]
  client?: string
  metric?: { label: string; value: string }
  video?: string
  featured?: boolean
}

export const projects: Project[] = [
  {
    slug: 'jack-tester',
    title: 'Jack Tester',
    industry: 'aerospace',
    client: 'Boeing',
    summary:
      'Removal and replacement of all hydraulics and control systems. Strip and paint.',
    image: '/work/jack-tester.jpg',
    featured: true,
  },
  {
    slug: 'spar-assembly-tool',
    title: 'Boeing 777 Spar Assembly Tool',
    industry: 'aerospace',
    client: 'Boeing',
    summary:
      'J Lawrence was subcontracted by an international equipment manufacturer to assist in installation and integration of the Spar Assembly Tool.',
    image: '/work/spar-assembly.jpg',
    gallery: ['/work/spar-2.jpg', '/work/spar-rotation.jpg'],
    featured: true,
  },
  {
    slug: 'nasa-viper-chassis',
    title: 'NASA Viper Chassis',
    industry: 'aerospace',
    client: 'NASA',
    summary:
      'J Lawrence Industries has manufactured more than 750 various parts and pieces for NASA. Multiple versions of the NASA Viper Chassis were manufactured.',
    image: '/work/nasa-viper.png',
    gallery: ['/work/viper-drill.jpg', '/work/viper-chimney.jpg'],
    metric: { label: 'NASA parts', value: '750+' },
    featured: true,
  },
  {
    slug: 'airbus-a319-mill-fixture',
    title: 'Airbus A319 Gear Rib Rotation Mill Fixture',
    industry: 'aerospace',
    client: 'Airbus',
    summary:
      'Design-build. Reduce set-up time by 75%, equal to three days per ship set. Low-cost rotation and lock-out.',
    image: '/work/airbus-a319.jpg',
    gallery: [
      '/work/airbus-s1.jpg',
      '/work/airbus-s2.jpg',
      '/work/airbus-s3.jpg',
      '/work/airbus-s4.jpg',
    ],
    metric: { label: 'Set-up time', value: '−75%' },
    featured: true,
  },
  {
    slug: 'ketchikan-wicket-gate',
    title: 'Ketchikan Hydroelectric — Wicket Gate Housing',
    industry: 'hydro-power',
    summary:
      'The hydro plant, built in the 1920s, needed repairs. During a three-month winter shutdown the equipment was repaired and running when spring arrived. The repairs put out more power than before.',
    image: '/work/ketchikan.jpg',
    gallery: ['/work/ketchikan-2.jpg'],
    featured: true,
  },
  {
    slug: 'missile-tube-tooling',
    title: 'Missile Tube Ring Tooling',
    industry: 'marine',
    summary:
      'Critical alignment for manufacture and installation of submarine-mounted missile tubes.',
    image: '/work/missile-tube.jpg',
    gallery: [
      '/work/missile-align.jpg',
      '/work/missile-insert.jpg',
      '/work/missile-lift.jpg',
    ],
    featured: true,
  },
  {
    slug: 'plenum-lay-up-mandrel',
    title: 'Plenum Lay-Up Mandrel',
    industry: 'aerospace',
    summary:
      'Design-build 737 plenum tooling — pressure reaction tooling that allows for removal of jigsaw-type tooling after a part is cured.',
    image: '/work/plenum.jpg',
    gallery: ['/work/plenum-2.jpg'],
  },
  {
    slug: 'tube-ring-insertion-tool',
    title: 'Tube Ring Insertion Tool',
    industry: 'aerospace',
    summary:
      'Critical alignment for manufacture and installation of submarine-mounted missile tubes.',
    image: '/work/tube-ring-insert.jpg',
  },
  {
    slug: 'tube-ring-lifting-fixture',
    title: 'Tube Ring Lifting Fixture',
    industry: 'aerospace',
    summary:
      'Lifting fixture for manufacture and installation of submarine-mounted missile tubes.',
    image: '/work/tube-ring-lift.jpg',
  },
  {
    slug: 'aircraft-hydraulic-test-fittings',
    title: 'Aircraft Hydraulic Test Fittings',
    industry: 'aerospace',
    summary: 'High-pressure test fittings for hydraulic system flow tests.',
    image: '/work/hydraulic-fittings.jpg',
  },
  {
    slug: 'gulfstream-g4-mill-fixture',
    title: 'Gulfstream G-4 Wing Stringer Mill Fixture',
    industry: 'aerospace',
    client: 'Gulfstream',
    summary:
      'Design-build for use in 100 configurations. The fixture supports multiple extrusion types.',
    image: '/work/gulfstream.jpg',
    metric: { label: 'Configurations', value: '100' },
  },
  {
    slug: 'spar-rotation-fixture',
    title: 'Aircraft Spar Rotation Fixture',
    industry: 'aerospace',
    client: 'Boeing',
    summary:
      'Design, manufacture and install spar rotation fixture, used in composite spar inspection processes for the 777X program.',
    image: '/work/spar-rotation.jpg',
    video: 'https://www.youtube.com/embed/Fi-cmhH1yaM',
  },
  {
    slug: 'tube-access-platform',
    title: 'Tube Access Platform & Covers',
    industry: 'aerospace',
    summary:
      'Fast-deployment missile tube access cages manufactured and delivered ahead of schedule.',
    image: '/work/tube-access.jpg',
  },
  {
    slug: 'rocket-lift-turnover',
    title: 'Rocket Lift and Turnover System',
    industry: 'aerospace',
    summary:
      'Engineering analysis for a rocket manufacturer lift and turnover station. Extremely low deflection allowance system analyzed utilizing finite element analysis. Dynamic loading including seismic and impact loads.',
    image: '/work/rocket-lift.jpg',
  },
  {
    slug: 'commercial-aircraft-test-fixture',
    title: 'Commercial Aircraft Test Fixture',
    industry: 'aerospace',
    summary:
      'Design-build custom test fixtures for recertification of in-service airplane components for an FAA repair station.',
    image: '/work/test-fixture-1.jpg',
    gallery: [
      '/work/test-fixture-2.jpg',
      '/work/test-fixture-3.jpg',
      '/work/test-fixture-4.jpg',
    ],
  },
  {
    slug: 'aircraft-6000-psi-fittings',
    title: '6,000 psi Aircraft Test Fittings',
    industry: 'aerospace',
    summary:
      'Aircraft test fittings for 6,000 psi hydraulic system tests during aircraft assembly.',
    image: '/work/aircraft-fittings.jpg',
    metric: { label: 'Test pressure', value: '6,000 psi' },
  },
  {
    slug: 'viper-drill-support',
    title: 'Viper Drill Upper Support',
    industry: 'aerospace',
    client: 'NASA',
    summary: 'Viper Drill Upper Support — 6" × 25".',
    image: '/work/viper-drill.jpg',
  },
  {
    slug: 'viper-chimney-cap',
    title: 'Viper Chimney Cap Center Panel',
    industry: 'aerospace',
    client: 'NASA',
    summary: 'Viper Chimney Cap Center Panel — 12" × 18".',
    image: '/work/viper-chimney.jpg',
  },
  {
    slug: 'hydro-overhaul',
    title: 'Hydro-Electric Repair & Overhaul',
    industry: 'hydro-power',
    summary:
      'J Lawrence Industries works closely with the hydro repair community to support the repair and overhaul of working and water surfaces back to original manufacture condition.',
    image: '/work/rock-island.jpg',
  },
  {
    slug: 'landsburg-dam',
    title: 'Landsburg Dam Tainter Gate',
    industry: 'hydro-power',
    client: 'Seattle PUD',
    summary:
      'Refurbishment of Tainter gate and gearbox lift system. Design and build Tainter gate chain, bronze and stainless steel.',
    image: '/work/landsburg.jpg',
    gallery: ['/work/tainter-chain.jpg'],
  },
  {
    slug: 'navy-procurement',
    title: 'Product Procurement & Customization',
    industry: 'industrial',
    client: 'US Navy',
    summary: 'Product procurement and customization for US Navy PSNS-IMF PDQ.',
    image: '/work/navy-procurement.jpg',
  },
  {
    slug: 'oil-well-scissor-lift',
    title: 'Oil Well Facility Scissor Lift',
    industry: 'industrial',
    summary:
      'Complete engineering analysis of a 15-ton scissor lift system including dynamic reactions, wind loading and seismic loading. Finite element analysis and dynamic loads from scissor motion.',
    image: '/work/oil-lift.jpg',
    metric: { label: 'Capacity', value: '15 ton' },
  },
  {
    slug: 'double-girder-crane',
    title: '100 Ton Double Girder Crane',
    industry: 'industrial',
    summary:
      'Engineering analysis and finite element analysis of the complete structural system including seismic and other dynamic analysis.',
    image: '/work/crane.jpg',
    metric: { label: 'Capacity', value: '100 ton' },
  },
  {
    slug: 'aluminum-ingot-lift',
    title: 'Aluminum Ingot Lift System',
    industry: 'industrial',
    summary:
      'Complete engineering design and analysis of the lift system. Design of custom manipulators and actuators within the lift system.',
    image: '/work/ingot-lift.jpg',
  },
  {
    slug: 'assembly-scissor-lift',
    title: 'Assembly Scissor Lift',
    industry: 'industrial',
    client: 'US Navy',
    summary: 'Modified scissor lift system for US Navy application.',
    image: '/work/scissor-lift.jpg',
  },
  {
    slug: 'chassis-lift-rotation',
    title: 'Chassis Lift and Rotation System',
    industry: 'industrial',
    summary:
      'System used to provide all-around welding and assembly access to the chassis. Electro-hydraulic positioning system. Engineering analysis utilizing finite element analysis and industry-standard calculations.',
    image: '/work/chassis-lift.jpg',
  },
  {
    slug: 'trailer-curtain-rollers',
    title: 'Truck & Trailer Side Curtain Rollers',
    industry: 'industrial',
    summary: 'Developed tractor-trailer side curtain roller system.',
    image: '/work/trailer-roller.jpg',
  },
  {
    slug: 'ten-ton-toe-jack',
    title: 'Customized 10 Ton Toe Jack',
    industry: 'industrial',
    summary: 'Customized 10-ton toe jack for equipment maintenance.',
    image: '/work/toe-jack.jpg',
    metric: { label: 'Capacity', value: '10 ton' },
  },
  {
    slug: 'custom-metal-pallets',
    title: 'Custom Metal Pallets',
    industry: 'industrial',
    summary: 'Project-specific modified steel pallets.',
    image: '/work/metal-pallets.jpg',
  },
  {
    slug: 'hydraulic-test-cylinder',
    title: 'Hydraulic Test Cylinder',
    industry: 'industrial',
    summary: 'Custom hydraulic test cylinder.',
    image: '/work/hydraulic-cylinder.jpg',
  },
  {
    slug: 'specialized-racking',
    title: 'Specialized Racking System',
    industry: 'industrial',
    summary: 'Specialized racking system utilizing COTS hardware.',
    image: '/work/racking.jpg',
  },
  {
    slug: 'forge-billet-manipulator',
    title: 'Forge Billet Manipulator',
    industry: 'industrial',
    summary: 'JLI developed a 3,000 lb. forge billet manipulator.',
    image: '/work/forge-manipulator.jpg',
    gallery: ['/work/forge-pockets.jpg'],
    metric: { label: 'Capacity', value: '3,000 lb' },
  },
  {
    slug: 'submarine-maintenance-platforms',
    title: 'Submarine Maintenance Platforms',
    industry: 'marine',
    summary:
      'Fast-deployment maintenance platforms and missile tube stands manufactured and delivered ahead of schedule.',
    image: '/work/maintenance-platform.jpg',
  },
  {
    slug: 'dot-quiet-pile',
    title: 'DOT Quiet Pile Prototypes',
    industry: 'marine',
    client: 'WSDOT',
    summary:
      'The Washington State Department of Transportation provided construction tubing for the piles. The UW and WSDOT put together a symposium on the new quiet pile technology with the marine construction industry.',
    image: '/work/quiet-pile.jpg',
  },
  {
    slug: 'navair-drone-retrieval',
    title: 'NAVAIR Drone Retrieval System',
    industry: 'marine',
    client: 'NAVAIR',
    summary: 'Technical support for Drone Catcher project.',
    image: '/work/drone.jpg',
  },
  {
    slug: 'flow-indicators',
    title: 'Flow Indicators',
    industry: 'marine',
    client: 'US Navy',
    summary: 'Pump calibration for US Navy ship-based water pumping systems.',
    image: '/work/flow-indicators.jpg',
  },
  {
    slug: 'hydrostatic-testing-cell',
    title: 'Hydrostatic Testing Cell',
    industry: 'marine',
    client: 'US Navy',
    summary:
      'Sea chest castings were cast, machined, and tested for the Navy. Material is NiCu.',
    image: '/work/hydrostatic.jpg',
  },
  {
    slug: 'marine-stairwell',
    title: 'Custom Marine Application Stairwell',
    industry: 'marine',
    summary:
      'Weather-tight welded steel stairwell that can be moved with a forklift as well as overhead lift points. The stairwell drops into place and replaces three platforms that would have to be constructed on site.',
    image: '/work/marine-stair.jpg',
    gallery: ['/work/marine-stair-wide.jpg'],
  },
  {
    slug: 'laconner-recover',
    title: 'La Conner Marine Boat Yard Recover',
    industry: 'structures',
    summary:
      'JLI has an installation team experienced in fabric structure construction. The recover project is 60 feet wide by 120 feet long. The installation required two cranes to raise and drape the cover. Completed in three weeks.',
    image: '/work/laconner.jpg',
    metric: { label: 'Cover', value: '60 × 120 ft' },
  },
  {
    slug: 'sdot-fabric-structure',
    title: 'SDOT Fabric Structure',
    industry: 'structures',
    client: 'Seattle DOT',
    summary:
      'JLI was responsible for permits, layout, ecology block erection, truss and cover installation. Two weeks from start to finish. The building is 40′ × 50′, used for Seattle Department of Transportation bulk material storage.',
    image: '/work/sdot.jpg',
    metric: { label: 'Building', value: '40 × 50 ft' },
  },
  {
    slug: 'port-of-everett-covers',
    title: 'Port of Everett Marina Slip Covers',
    industry: 'structures',
    client: 'Port of Everett',
    summary:
      'Overhead covers installed to protect high-value yachts and equipment from condensation and rust.',
    image: '/work/everett.jpg',
  },
  {
    slug: 'gearbox-grounding',
    title: 'Gearbox Grounding System',
    industry: 'transportation',
    summary:
      'JLI developed a more efficient grounding system extending gearbox life.',
    image: '/work/gearbox.jpg',
  },
]

export function industryLabel(id: IndustryId) {
  return industries.find((item) => item.id === id)?.label ?? id
}

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug)
}

export function featuredProjects() {
  return projects.filter((project) => project.featured)
}

export function projectsByIndustry(id?: IndustryId | 'all') {
  if (!id || id === 'all') return projects
  return projects.filter((project) => project.industry === id)
}
