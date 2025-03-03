import {BlogPost} from "../types/blogTypes";

export const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'The Future of Electric Supercars',
    slug: 'future-of-electric-supercars',
    excerpt: 'Exploring how electric technology is transforming the world of high-performance vehicles.',
    content: `
      <p>The automotive world is experiencing a profound transformation as electric technology redefines what's possible in high-performance vehicles. Electric supercars are not just matching their combustion counterparts—they're beginning to surpass them in key metrics.</p>
      
      <h2>Performance Beyond Combustion</h2>
      <p>Electric motors deliver instant torque, creating acceleration capabilities that leave traditional engines behind. The Rimac Nevera's 0-60 mph time of 1.85 seconds demonstrates the raw potential of electric powertrains.</p>
      
      <h2>Reimagining Design</h2>
      <p>Without the constraints of accommodating large combustion engines, designers are free to explore new proportions and aerodynamic solutions that were previously impossible. The low center of gravity created by floor-mounted battery packs is enabling unprecedented handling characteristics.</p>
      
      <h2>The Sound of the Future</h2>
      <p>While purists mourn the loss of engine notes, manufacturers are creating distinctive sonic signatures for their electric models. Some brands are embracing the futuristic whir of electric motors, while others are developing augmented soundscapes to enhance the driving experience.</p>
      
      <h2>Future Outlook</h2>
      <p>As battery technology advances and charging infrastructure expands, electric supercars will continue to evolve. The next frontier lies in sustainable manufacturing, longer ranges, and faster charging capabilities. The era of electric performance has only just begun.</p>
    `,
    coverImage: 'https://images.unsplash.com/photo-1611858246382-da4877c6mentc?ixlib=rb-4.0.3',
    category: 'Technology',
    tags: ['Electric', 'Supercar', 'Future', 'Performance'],
    author: {
      id: '1',
      name: 'Alex Morgan',
      avatar: 'https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3',
      bio: 'Automotive journalist with a passion for emerging technologies and their impact on the future of driving.'
    },
    publishedDate: '2023-06-15',
    readTime: 6,
    featured: true
  },
  {
    id: '2',
    title: 'Restoring Vintage Cars: Art & Science',
    slug: 'restoring-vintage-cars',
    excerpt: 'A deep dive into the meticulous process of bringing classic automobiles back to their original glory.',
    content: `
      <p>Vintage car restoration sits at the intersection of art, craftsmanship, and mechanical expertise. The process of reviving a classic automobile requires patience, precision, and profound respect for automotive heritage.</p>
      
      <h2>Research and Authentication</h2>
      <p>Before any restoration work begins, thorough research is essential. Historical documents, factory specifications, and period photographs help ensure authenticity. For rare models, connecting with marque experts and owners' clubs can provide invaluable guidance.</p>
      
      <h2>Disassembly and Documentation</h2>
      <p>Careful disassembly is crucial, with each component logged, photographed, and assessed. This meticulous record-keeping becomes a roadmap for the restoration journey ahead.</p>
      
      <h2>Balancing Originality and Functionality</h2>
      <p>Restorers often face difficult decisions between preserving originality and enhancing reliability. Modern materials and technologies can extend a vehicle's life, but may compromise its historical integrity. The best restorations find thoughtful compromise between these competing concerns.</p>
      
      <h2>The Rewards of Restoration</h2>
      <p>While financially demanding and time-intensive, restoration offers profound rewards. Beyond potential value appreciation, there's the satisfaction of preserving automotive history and experiencing driving as it was intended decades ago.</p>
    `,
    coverImage: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?ixlib=rb-4.0.3',
    category: 'Classics',
    tags: ['Vintage', 'Restoration', 'Classics', 'Craftsmanship'],
    author: {
      id: '2',
      name: 'Eleanor Hayes',
      avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3',
      bio: 'Classic car restorer and historian with over 25 years of experience bringing automotive legends back to life.'
    },
    publishedDate: '2023-05-28',
    readTime: 8
  },
  {
    id: '3',
    title: 'Track Day Essentials: Prepare Like a Pro',
    slug: 'track-day-essentials',
    excerpt: 'Everything you need to know before taking your car to the racetrack for the first time.',
    content: `
      <p>Your first track day can be both exhilarating and intimidating. Proper preparation ensures you'll have a safe, enjoyable experience while maximizing your car's performance potential.</p>
      
      <h2>Vehicle Preparation</h2>
      <p>Before heading to the track, ensure your car is mechanically sound. Check brake pads and fluid, tire condition and pressures, and all fluid levels. Remove unnecessary items from the car to reduce weight and prevent loose objects from becoming hazards.</p>
      
      <h2>Safety Equipment</h2>
      <p>Even for beginners, safety should be prioritized. A proper helmet is essential, and though not always required, driving gloves can improve grip and control. Consider the benefits of a fire extinguisher and upgraded harnesses for additional protection.</p>
      
      <h2>Mental Preparation</h2>
      <p>Study the track layout before arrival, understanding the driving line, braking zones, and corner characteristics. Many circuits offer video guides online, and simulator programs can provide valuable familiarization.</p>
      
      <h2>Trackside Etiquette</h2>
      <p>Track days have their own code of conduct. Learn flag signals, passing rules, and pit lane procedures. Remember that track days are about improvement and enjoyment, not competition—respect faster and slower drivers equally.</p>
    `,
    coverImage: 'https://images.unsplash.com/photo-1554744512-d6c603f27c54?ixlib=rb-4.0.3',
    category: 'Motorsports',
    tags: ['Track Day', 'Performance', 'Driving', 'Safety'],
    author: {
      id: '3',
      name: 'Marcus Chen',
      avatar: 'https://images.unsplash.com/photo-1566492031773-4f4e44671857?ixlib=rb-4.0.3',
      bio: 'Former racing driver turned driving coach with experience across multiple disciplines from touring cars to GT racing.'
    },
    publishedDate: '2023-04-12',
    readTime: 7
  },
  {
    id: '4',
    title: 'Automotive Photography: Capturing the Perfect Shot',
    slug: 'automotive-photography-guide',
    excerpt: 'Professional tips for photographing cars in ways that highlight their design and character.',
    content: `
      <p>Automotive photography requires technical skill, creative vision, and an understanding of what makes each vehicle special. Whether you're shooting for personal enjoyment or professional purposes, these principles will elevate your car photography.</p>
      
      <h2>Finding the Right Location</h2>
      <p>Location selection dramatically impacts your final image. Clean, uncluttered backgrounds prevent distraction from the vehicle. Urban environments with modern architecture can complement contemporary designs, while classic cars often pair beautifully with natural settings or historic backdrops.</p>
      
      <h2>Understanding Light</h2>
      <p>The golden hours after sunrise and before sunset provide soft, flattering light that enhances a car's curves and minimizes harsh reflections. For dramatic effect, side lighting emphasizes texture and dimension, while backlighting can create striking silhouettes.</p>
      
      <h2>Composition Techniques</h2>
      <p>Experiment with different angles to find what best showcases the vehicle's character. Low angles often create a sense of power and presence, while three-quarter views effectively capture both the front and side aspects of the design. Don't overlook details—emblems, distinctive grilles, and unique features tell the car's story.</p>
      
      <h2>Post-Processing Approach</h2>
      <p>When editing, maintain a balance between enhancement and authenticity. While certain adjustments can improve the image, excessive manipulation can create an artificial appearance that detracts from the car's true character.</p>
    `,
    coverImage: 'https://images.unsplash.com/photo-1494976388531-d1058494cdd8?ixlib=rb-4.0.3',
    category: 'Photography',
    tags: ['Photography', 'Creative', 'Technique', 'Visual'],
    author: {
      id: '4',
      name: 'Sophia Williams',
      avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3',
      bio: 'Professional automotive photographer whose work has appeared in leading car magazines and manufacturer campaigns worldwide.'
    },
    publishedDate: '2023-03-20',
    readTime: 5
  },
  {
    id: '5',
    title: 'Design Evolution: The Modern SUV',
    slug: 'design-evolution-modern-suv',
    excerpt: "Tracing how the utilitarian sport utility vehicle transformed into today's sophisticated crossovers.",
    content: `
      <p>The modern SUV represents one of the most significant evolutionary paths in automotive design history. From rugged, purpose-built utility vehicles to today's refined urban crossovers, the SUV's transformation reflects changing consumer priorities and technological advancements.</p>
      
      <h2>Military Origins to Family Functionality</h2>
      <p>Born from military necessity, early civilian SUVs like the Jeep CJ and Land Rover Series maintained utilitarian design focused on capability rather than comfort. The suburban boom of the 1980s and 1990s saw these vehicles gradually adopt features appealing to family use, beginning the shift toward the modern crossover.</p>
      
      <h2>The Crossover Revolution</h2>
      <p>The introduction of unibody construction fundamentally changed SUV design, prioritizing on-road dynamics and interior space over extreme off-road capability. This architectural shift enabled more car-like proportions while maintaining the high driving position consumers had come to prefer.</p>
      
      <h2>Aerodynamic Considerations</h2>
      <p>As fuel efficiency concerns grew, traditional SUVs' boxy profiles gave way to more streamlined shapes. Sloping rooflines, reduced ground clearance, and smoother surfacing helped reduce drag while creating more visually dynamic designs.</p>
      
      <h2>Future Directions</h2>
      <p>The electrification of SUVs is driving another design revolution. Without the need to accommodate traditional drivetrains, designers are exploring more radical proportions and interior layouts that maximize space efficiency while maintaining the commanding presence that defines the segment.</p>
    `,
    coverImage: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?ixlib=rb-4.0.3',
    category: 'Design',
    tags: ['SUV', 'Design', 'Evolution', 'Trends'],
    author: {
      id: '5',
      name: 'Jonathan Reed',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3',
      bio: 'Automotive design historian and former vehicle designer with a special interest in evolving market segments and consumer preferences.'
    },
    publishedDate: '2023-02-08',
    readTime: 6
  },
  {
    id: '6',
    title: 'Understanding Vehicle Aerodynamics',
    slug: 'understanding-vehicle-aerodynamics',
    excerpt: 'How air flow affects performance, efficiency, and design in modern automobiles.',
    content: `
      <p>Aerodynamics plays a crucial role in shaping modern vehicles, influencing everything from fuel efficiency and performance to stability and noise levels. Understanding the basic principles helps appreciate the intent behind contemporary automotive design.</p>
      
      <h2>The Basics of Airflow</h2>
      <p>When a vehicle moves, it must push air out of its way, creating resistance known as drag. The shape of the vehicle determines how efficiently it moves through the air. Streamlined forms reduce drag, while boxy shapes increase it. Drag directly impacts fuel consumption and top speed.</p>
      
      <h2>Downforce and Lift</h2>
      <p>Beyond drag, aerodynamicists must manage vertical forces. Lift can reduce tire contact at high speeds, compromising stability and handling. Performance vehicles use various features like spoilers, diffusers, and splitters to generate downforce that presses the car into the road, improving grip and control.</p>
      
      <h2>The Compromise in Design</h2>
      <p>The most aerodynamically efficient shape isn't always the most practical or aesthetically pleasing. Designers must balance aerodynamic requirements with passenger space, cargo capacity, styling preferences, and manufacturing constraints. This balance explains why certain design elements appear across different manufacturers.</p>
      
      <h2>Future Trends</h2>
      <p>As electric vehicles become more prevalent, aerodynamic efficiency becomes even more critical for maximizing range. We're likely to see more radical shapes as designers prioritize slipping through the air with minimal resistance. Active aerodynamic elements that adjust based on speed and conditions will become increasingly common.</p>
    `,
    coverImage: 'https://images.unsplash.com/photo-1553260169-01682e52f407?ixlib=rb-4.0.3',
    category: 'Engineering',
    tags: ['Aerodynamics', 'Engineering', 'Performance', 'Efficiency'],
    author: {
      id: '6',
      name: 'Dr. Amelia Torres',
      avatar: 'https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?ixlib=rb-4.0.3',
      bio: 'Mechanical engineer specializing in fluid dynamics with research experience in Formula 1 and production vehicle development.'
    },
    publishedDate: '2023-01-25',
    readTime: 9
  }
];

export const categories: { id: string; name: string; slug: string }[] = [
  { id: '1', name: 'Technology', slug: 'technology' },
  { id: '2', name: 'Classics', slug: 'classics' },
  { id: '3', name: 'Motorsports', slug: 'motorsports' },
  { id: '4', name: 'Photography', slug: 'photography' },
  { id: '5', name: 'Design', slug: 'design' },
  { id: '6', name: 'Engineering', slug: 'engineering' },
];
