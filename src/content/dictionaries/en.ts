import type { Dictionary } from "./es";

/**
 * English copy, for cross-border brands, promoters and touring artists.
 * Same structure as es.ts (enforced by the Dictionary type).
 *
 * Items marked PLACEHOLDER must be replaced with verified content before launch.
 */
export const en: Dictionary = {
  meta: {
    siteName: "AF Marketing",
    defaultTitle: "AF Marketing · Event & Marketing Agency in Tijuana",
    titleTemplate: "%s · AF Marketing",
    description:
      "Tijuana event agency: production, logistics, staffing, press, digital marketing, sponsorships and drone video for brands and artists in Baja California.",
    ogAlt: "AF Marketing. Your event, in expert hands.",
  },

  common: {
    skipToContent: "Skip to content",
    openMenu: "Open menu",
    closeMenu: "Close menu",
    menu: "Menu",
    switchLocale: "Español",
    switchLocaleLabel: "Ver esta página en español",
    primaryCta: "Tell us about your event",
    whatsappCta: "Message us on WhatsApp",
    emailCta: "Send us an email",
    exploreService: "Explore service",
    allServices: "See all services",
    home: "Home",
    breadcrumb: "Breadcrumb",
    backToTop: "Back to top",
    whatsappMessage: "Hi AF Marketing, I'd like to talk about an event.",
    serviceOf: "of",
    newTab: "(opens in a new tab)",
  },

  anchors: {
    services: "services",
    work: "work",
    process: "process",
    faq: "faq",
    about: "who-we-are",
  },

  nav: {
    services: "Services",
    work: "Work",
    about: "About",
    contact: "Contact",
    mainLabel: "Main navigation",
    servicesMenu: "Services by area",
    viewAll: "All services",
  },

  pillars: {
    produce: { name: "Produce", tagline: "Make it happen, without friction." },
    amplify: { name: "Amplify", tagline: "Make it seen and heard." },
    connect: { name: "Connect", tagline: "Bring audiences and brands in." },
  },

  services: {
    events: {
      name: "Event Planning & Production",
      navName: "Event Planning & Production",
      short: "From concept to wrap: design, budget, vendors and on-site direction.",
      what: "We design and produce your event end to end: concept, budget, vendors, build, run of show and overall direction on event day.",
      why: "Without central direction, an event piles up delays, overruns and communication gaps — and the audience notices.",
      result: "An event that starts on time, stays on budget and looks the way you pictured it.",
      deliverables: [
        "Event concept and script",
        "Itemized, all-in budget",
        "Vendor selection and management",
        "Floor plan and staging design",
        "Permits and safety coordination",
        "Minute-by-minute run of show",
        "On-site event direction",
        "Wrap-up report",
      ],
      audiences: {
        business: "Conventions, launches, anniversaries, openings and year-end parties.",
        artists: "Concerts, album releases, showcases and fan meetups.",
      },
      faq: [
        {
          q: "How far in advance should I reach out?",
          a: "For large-scale events we recommend 8 to 12 weeks; for corporate events, 3 to 6. If your date is closer, write to us — we'll tell you honestly what's feasible.",
        },
        {
          q: "Can you work with my vendors?",
          a: "Yes. We bring your trusted vendors into the run of show and coordinate them under the same direction.",
        },
        {
          q: "Do you handle permits?",
          a: "We manage the permits and civil protection coordination your event requires, depending on the municipality and the type of venue.",
        },
      ],
      seo: {
        title: "Event Planning & Production in Tijuana",
        description:
          "Event planning and production in Tijuana and Baja California: concept, budget, vendors, permits and on-site direction for brands and artists.",
      },
    },
    activations: {
      name: "Brand Activations",
      navName: "Brand Activations",
      short: "Experiences that put your brand in people's hands.",
      what: "We design and run brand experiences: sampling, booths, interactive games, pop-ups and activations at events or in retail.",
      why: "People see an ad; they tell others about an experience. Activations create direct contact, data and organic content.",
      result: "Real interactions with your audience, measurable sign-ups and content people actually share.",
      deliverables: [
        "Activation creative concept",
        "Booth design and build",
        "Trained brand ambassadors",
        "Participation mechanics",
        "Data and lead capture",
        "Interaction report with evidence",
      ],
      audiences: {
        business: "Product launches, sampling, festival presence and retail activations.",
        artists: "Fan experiences, merch pop-ups and sponsor activations.",
      },
      faq: [
        {
          q: "Can you activate my brand at someone else's event?",
          a: "Yes. We negotiate the space with the organizer, build the booth and run the activation throughout the event.",
        },
        {
          q: "How do you measure an activation?",
          a: "We set the KPIs before we start — interactions, sign-ups, samples handed out, content generated — and deliver them in a report with evidence.",
        },
      ],
      seo: {
        title: "Brand Activations in Tijuana",
        description:
          "Brand activations in Tijuana and Baja California: sampling, booths, pop-ups and interactive experiences at events and in retail, with data capture and reporting.",
      },
    },
    logistics: {
      name: "Logistics & Operations",
      navName: "Logistics & Operations",
      short: "Staffing, entry and timing: the operation that makes everything work.",
      what: "We plan the operation and put people on the ground: staff, entry, accreditation, crowd flow, transport and vendor coordination on event day.",
      why: "Audiences never see the logistics. They only notice when it fails.",
      result: "Smooth entry, a run of show that holds and a team on the ground that knows exactly what to do.",
      deliverables: [
        "Operations plan and timeline",
        "Event staff, hosts and support crew",
        "Access control and accreditation",
        "Crowd flow and signage",
        "Artist transport and hospitality",
        "Security and civil protection coordination",
        "Load-in and load-out",
      ],
      audiences: {
        business: "Conventions, trade shows, large-scale and registration-based events.",
        artists: "Riders, hospitality, ground transport, backstage and production credentials.",
      },
      faq: [
        {
          q: "Is the staff your own?",
          a: "The staff we deploy wears the AF Marketing uniform and is briefed before every date: they know the run of show, the entrances and who to report to.",
        },
        {
          q: "Can you run logistics only, for an event that's already produced?",
          a: "Yes. We can join just for on-site operations, staffing or access control.",
        },
      ],
      seo: {
        title: "Event Logistics & Staffing in Tijuana",
        description:
          "Event logistics and operations in Tijuana: staffing, hosts, access control, accreditation, crowd flow and artist hospitality across Baja California.",
      },
    },
    pr: {
      name: "PR & Media Relations",
      navName: "PR & Media Relations",
      short: "Press conferences and media relations that get your story published.",
      what: "We design the communications strategy and manage the media: press conferences, press releases, invitations, interviews and coverage monitoring.",
      why: "Earned media builds a credibility that paid advertising can't buy.",
      result: "Journalists in the room, stories published and one consistent message across print, radio, TV and digital.",
      deliverables: [
        "Strategy and key messages",
        "Press release writing",
        "Media invitations and accreditation",
        "Press conference production",
        "Interview management",
        "Coverage monitoring and reporting",
      ],
      audiences: {
        business: "Announcements, openings, investments and spokesperson positioning.",
        artists: "Releases, tours, shows and media interviews.",
      },
      faq: [
        {
          q: "Do you guarantee coverage?",
          a: "Nobody can guarantee what an outlet decides to publish. What we do guarantee is well-targeted outreach, publication-ready materials and timely follow-up with every outlet.",
        },
        {
          q: "Which media do you work with?",
          a: "Print, radio, TV and digital outlets across Baja California, plus national media depending on the project.",
        },
      ],
      seo: {
        title: "Press Conferences & PR in Tijuana",
        description:
          "Public relations in Tijuana: press conferences, press releases, media outreach, interviews and coverage monitoring across Baja California.",
      },
    },
    digital: {
      name: "Digital Marketing",
      navName: "Digital Marketing",
      short: "Social campaigns that sell out dates and build audiences.",
      what: "We plan and run social media campaigns: content, paid media, creator partnerships, live coverage and reporting.",
      why: "The conversation about an event starts weeks before and continues days after. That's where tickets get sold and brands get remembered.",
      result: "More reach, more sign-ups or tickets sold, and a community that comes back for the next one.",
      deliverables: [
        "Phased campaign: teaser, sales, event and wrap",
        "Content calendar and production",
        "Paid media on Meta, TikTok and Google",
        "Creator partnerships",
        "Live coverage",
        "Metrics report",
      ],
      audiences: {
        business: "Launches, registration-based events and brand campaigns.",
        artists: "Ticket sales, releases and community growth.",
      },
      faq: [
        {
          q: "Is ad spend included in the price?",
          a: "Ad spend is budgeted separately and paid directly to the platforms. Our proposal covers strategy, execution and reporting.",
        },
        {
          q: "Can you handle social media just for event day?",
          a: "Yes. We offer live coverage per date, as well as full campaigns.",
        },
      ],
      seo: {
        title: "Digital Marketing for Events in Tijuana",
        description:
          "Digital marketing for events in Tijuana: social media campaigns, paid media on Meta, TikTok and Google, creator partnerships and live coverage.",
      },
    },
    sponsorship: {
      name: "Sponsorship Management",
      navName: "Sponsorships",
      short: "We connect brands with events that speak to their audience.",
      what: "We build sponsorship packages, find and negotiate with brands, manage in-kind trade deals and make sure every benefit is delivered.",
      why: "A good sponsorship funds the event and gives the brand an audience it couldn't reach through advertising.",
      result: "Better-funded events, and brands that renew because they can see what they got.",
      deliverables: [
        "Sponsorship deck and packages",
        "Brand prospecting and pitching",
        "Negotiation and contracts",
        "In-kind trade deals",
        "Sponsor benefit activation",
        "Fulfillment report for sponsors",
      ],
      audiences: {
        business: "Find events aligned with your audience and measure sponsorship return.",
        artists: "Fund tours, festivals and productions with like-minded brands.",
      },
      faq: [
        {
          q: "Do you charge per sponsorship secured?",
          a: "It depends on the project: we work on a fixed fee, commission or a mix of both. We define it in the proposal.",
        },
        {
          q: "What is an in-kind trade deal?",
          a: "An agreement where a brand contributes products or services — drinks, transport, lodging, media — instead of cash, in exchange for visibility at the event.",
        },
      ],
      seo: {
        title: "Event Sponsorship Management in Tijuana",
        description:
          "Sponsorship management in Tijuana and Baja California: sponsorship decks, brand prospecting, negotiation, in-kind trade deals and sponsor reporting.",
      },
    },
    creative: {
      name: "Creative Studio",
      navName: "Creative Studio",
      short: "Graphic design, video production and aerial drone footage.",
      what: "We create your event's look and capture it: visual identity, graphic design, photography, video production and editing, and aerial drone footage.",
      why: "Content is what remains when the event ends. Well produced, it sells the next date.",
      result: "A consistent look before, during and after the event, with content ready for social, press and sponsors.",
      deliverables: [
        "Event visual identity",
        "Print and digital design",
        "Event photography",
        "Promo video and aftermovie",
        "Aerial drone footage",
        "Edits for reels and shorts",
      ],
      audiences: {
        business: "Corporate video, event coverage and launch content.",
        artists: "Promo videos, tour content and visuals for social.",
      },
      faq: [
        {
          q: "How quickly do you deliver content?",
          a: "A selection of photos for social can be ready the same day; the aftermovie and full edit are delivered in the following days, depending on the agreed scope.",
        },
        {
          q: "Can you fly a drone at any venue?",
          a: "It depends on the location and applicable regulations. We review restrictions and permits before committing to aerial shots.",
        },
      ],
      seo: {
        title: "Video, Design & Drone Footage in Tijuana",
        description:
          "Creative studio in Tijuana: graphic design, event photography, promo videos, aftermovies and aerial drone cinematography for events, brands and artists.",
      },
    },
  },

  home: {
    hero: {
      eyebrow: "Event & marketing agency",
      location: "Tijuana, Mexico",
      coordinates: "32.51° N · 117.03° W",
      titleLine1: "Your event,",
      titleLine2: "in expert hands.",
      lead: "We plan, produce and promote events for brands and artists across Baja California and the San Diego–Tijuana region. Logistics, staffing, press, sponsorships and content — run by one team that answers for all of it.",
      secondaryCta: "Explore services",
      founderRole: "Founder. Leads every project in person.",
      caption: "Grand Coliseo, Tijuana — before doors open",
      imageAlt:
        "Tijuana bullring with hundreds of tables and chairs arranged in circles around a rodeo ring and a stage with a screen, ready before the event.",
      scroll: "Scroll",
    },
    trust: {
      label: "AF Marketing by the numbers",
      // PLACEHOLDER: replace the first three figures with verified numbers.
      stats: [
        { value: "150", prefix: "+", label: "events produced and run" },
        { value: "10", prefix: "+", label: "years in live entertainment" },
        { value: "60", prefix: "+", label: "media outlets and creators in our network" },
        { value: "7", prefix: "", label: "disciplines under one roof" },
      ],
      marqueeLabel: "Types of events we produce",
      marquee: [
        "Concerts",
        "Rodeos & jaripeos",
        "Press conferences",
        "Brand launches",
        "Festivals",
        "Corporate events",
        "Retail activations",
        "Artist tours",
        "Galas & award nights",
        "Wine experiences",
      ],
    },
    value: {
      eyebrow: "The problem we solve",
      title: "An event has a hundred moving parts. *We answer for every one.*",
      body: "Audio, permits, staff, press, sponsors, social, video. When every vendor works alone, the coordination — and the risk — lands on you. At AF Marketing, one team plans, runs and communicates your event, led by a single person who knows every detail.",
      points: [
        {
          title: "One point of contact",
          body: "One person owns budget, timeline and results. No email chains between vendors.",
        },
        {
          title: "Production and promotion, together",
          body: "Press, social and content are planned from day one — not the week of the event.",
        },
        {
          title: "Craft on the ground",
          body: "Staff wearing our shirt, and a documented plan B for every critical point.",
        },
      ],
      diagram: {
        label: "Comparison: separate vendors versus a single team",
        toggleLabel: "Switch scenario",
        before: { label: "Separate vendors", caption: "7 vendors · 7 conversations · your risk" },
        after: { label: "With AF Marketing", caption: "1 team · 1 conversation · our risk" },
        you: "You",
        vendors: ["Audio", "Staff", "Press", "Social", "Design", "Sponsors", "Permits"],
      },
    },
    services: {
      eyebrow: "Services",
      title: "Seven disciplines. *One team.*",
      intro: "Hire them one at a time or as a complete system. Each works on its own; together, your event takes less coordinating and delivers more.",
      indexLabel: "Service index",
      labels: { what: "What it is", why: "Why it matters", result: "The result" },
      help: {
        title: "Not sure where to start?",
        body: "Tell us what you want to achieve and we'll tell you which disciplines you need — and which you don't.",
        cta: "Book a discovery call",
      },
    },
    difference: {
      eyebrow: "The AF difference",
      title: "What changes when *one team runs everything.*",
      intro: "Hiring vendors separately looks cheaper — until event day. Here's how it compares.",
      columns: { criterion: "Aspect", others: "Separate vendors", af: "AF Marketing" },
      rows: [
        {
          criterion: "Point of contact",
          others: "Five or more contacts, each with their own agenda.",
          af: "One project lead who answers for everything.",
        },
        {
          criterion: "Budget",
          others: "Scattered quotes and costs that surface at the end.",
          af: "One itemized budget, from the very start.",
        },
        {
          criterion: "Press & social",
          others: "Hired when the event is already around the corner.",
          af: "Planned from day one, alongside production.",
        },
        {
          criterion: "Staff",
          others: "Temp workers with no context on the event.",
          af: "Uniformed staff who know the run of show and their role.",
        },
        {
          criterion: "The unexpected",
          others: "Each vendor fixes — or doesn't — their own part.",
          af: "A contingency plan and a single chain of command.",
        },
        {
          criterion: "After the event",
          others: "Scattered photos and no report.",
          af: "A results report and content ready to use.",
        },
      ],
    },
    staffBand: {
      eyebrow: "On the ground",
      title: "Our shirt. *Our standard.*",
      body: "The staff welcoming your guests wear our name on their chest. That's why we prepare them ourselves: they know the run of show, the entrances and who to call.",
      caption: "AF Marketing staff at Grand Coliseo, Tijuana.",
      alt: "Two AF Marketing staff members in black branded shirts at the Tijuana bullring, with rows of tables and the stage set up behind them.",
    },
    process: {
      eyebrow: "How we work",
      title: "From the first call *to the final applause.*",
      intro: "A clear process with dates and deliverables at every stage. You always know where your event stands.",
      steps: [
        {
          name: "Discovery",
          body: "A 30-minute call to understand your goal, audience, date and budget. Free of charge.",
          time: "Day 1",
        },
        {
          name: "Proposal",
          body: "Concept, scope and an itemized budget. You know exactly what every line covers before you sign.",
          time: "48–72 h",
        },
        {
          name: "Pre-production",
          body: "Vendors, permits, sponsors, press and campaign move in parallel on a shared timeline.",
          time: "Weeks before",
        },
        {
          name: "Show day",
          body: "On-site direction, staff on the ground and content coverage. You host your guests; we handle everything else.",
          time: "Event day",
        },
        {
          name: "Wrap-up",
          body: "A report on attendance, reach and press coverage, plus edited content ready to use.",
          time: "The week after",
        },
      ],
    },
    work: {
      eyebrow: "Work",
      title: "Proof, *not promises.*",
      intro: "A look at the work behind real events in Baja California.",
      labels: {
        challenge: "The challenge",
        solution: "What we did",
        scope: "Scope",
        results: "Results",
        viewService: "View service",
      },
      cases: [
        {
          client: "Grand Coliseo",
          category: "Rodeo & concert",
          location: "Bullring · Tijuana, B.C.",
          title: "A bullring turned into a venue for thousands of guests.",
          challenge: "Welcoming thousands of people into an arena running tables, a stage and a bull-riding ring at the same time.",
          solution: "Floor layout, uniformed staff, access control and on-site coordination with the show's production team.",
          scope: ["Staffing", "Logistics", "On-site operations"],
          // PLACEHOLDER metrics: confirm real numbers with the client.
          metrics: [
            { value: "2,000+", label: "guests" },
            { value: "30+", label: "staff on the ground" },
            { value: "0", label: "major incidents" },
          ],
          photo: "arena",
          alt: "Tijuana bullring with hundreds of tables and chairs arranged in circles around a rodeo ring and a stage with a screen.",
          service: "logistics",
        },
        {
          client: "Barón Balché",
          category: "Press conference",
          location: "Baja California",
          title: "A Valle de Guadalupe winery in front of the region's press.",
          challenge: "Bringing print, radio and digital media to an announcement — and getting the story published.",
          solution: "Key messages, media invitations and accreditation, press conference production and publication follow-up.",
          scope: ["Public relations", "Media outreach", "Production"],
          // PLACEHOLDER metrics: confirm real numbers with the client.
          metrics: [
            { value: "15+", label: "media outlets present" },
            { value: "30+", label: "stories and mentions" },
            { value: "3", label: "spokespeople at the table" },
          ],
          photo: "press",
          alt: "Adrián Fernández of AF Marketing at a press conference table next to Mario Rodríguez of Barón Balché, with media microphones in front of them.",
          service: "pr",
        },
      ],
      next: {
        title: "Your event could be *the next case.*",
        body: "Tell us what you have in mind and we'll show you how we'd approach it.",
      },
    },
    testimonials: {
      eyebrow: "Testimonials",
      title: "What clients say *after the lights go down.*",
      // PLACEHOLDER: replace with real, approved client quotes.
      items: [
        {
          quote: "We came in with a date and an idea. They came back with a plan, a clear budget and an event that ran exactly as we approved it.",
          name: "Mariana T.",
          role: "Brand Manager",
          org: "Beverage company · Tijuana",
        },
        {
          quote: "What I value most is having a single contact. Adrián and his team handled production, press and sponsors while I focused on the show.",
          name: "Luis R.",
          role: "Artist manager",
          org: "Regional Mexican music",
        },
        {
          quote: "Their staff knew the run of show better than we did. Entry flowed and nobody had to improvise.",
          name: "Daniela M.",
          role: "Director of Operations",
          org: "Entertainment venue · Baja California",
        },
      ],
    },
    about: {
      eyebrow: "Who's behind it",
      title: "The hands *behind your event.*",
      body: "AF Marketing was born in Tijuana from a simple idea: whoever organizes an event shouldn't have to coordinate ten vendors to get it right. Adrián Fernández brought production, operations and communications together in one team — and still leads every project.",
      // PLACEHOLDER: confirm the quote with Adrián.
      quote: "Events are won in the details nobody sees.",
      quoteBy: "Adrián Fernández, founder",
      facts: [
        { value: "Tijuana", label: "Home base" },
        { value: "B.C. + border", label: "Regional coverage" },
        { value: "ES · EN", label: "Bilingual service" },
        { value: "1", label: "Accountable lead per project" },
      ],
      figCaption: "Fig. 01 — The good hands.",
      cta: "Meet the agency",
      alt: "Portrait of Adrián Fernández, founder of AF Marketing, in a purple windowpane suit with his hands clasped under his chin, facing press microphones.",
    },
    faq: {
      eyebrow: "FAQ",
      title: "Before *you ask.*",
      intro: "The questions we hear most before a project starts.",
      contactPrompt: "Don't see your question?",
      contactLink: "Write to us",
      items: [
        {
          q: "What kinds of events do you organize?",
          a: "Concerts, rodeos and jaripeos, festivals, brand launches, corporate events, press conferences, galas and activations. If it brings people together and needs production, communications or both, we can help.",
        },
        {
          q: "Can I hire just one service?",
          a: "Yes. You can hire a single discipline — staffing or a press conference, for example — or the full system. The proposal is built around what your event actually needs.",
        },
        {
          q: "How far in advance should I contact you?",
          a: "Ideally 8 to 12 weeks ahead for large-scale events and 3 to 6 weeks for corporate events or press conferences. If your date is closer, reach out — we'll tell you honestly what's feasible.",
        },
        {
          q: "How do you quote?",
          a: "After the discovery call we send a proposal with scope, timeline and a budget itemized line by line. The proposal is free and carries no commitment.",
        },
        {
          q: "Do you work outside Tijuana?",
          a: "Yes. We operate across Baja California — Tijuana, Rosarito, Ensenada, Valle de Guadalupe, Tecate and Mexicali — and work with clients on both sides of the border. For other cities, just ask.",
        },
        {
          q: "Do you work with independent artists?",
          a: "Yes. We produce shows, launches and tours for artists and their managers, and we find sponsors to help fund them.",
        },
        {
          q: "What if something goes wrong on event day?",
          a: "Every event has a contingency plan for each critical point — weather, entry, power, vendors — and a single chain of command on site. Problems get solved before your guests notice.",
        },
        {
          q: "Do you issue invoices?",
          a: "Yes. We issue official Mexican invoices (CFDI) for all our services.",
        },
      ],
    },
    finalCta: {
      eyebrow: "Next step",
      title: "When's *your event?*",
      body: "Tell us the date, the goal and the audience. We'll get back to you within one business day to book a free discovery call.",
      reassurance: ["Reply within 1 business day", "Free proposal", "No commitment"],
    },
  },

  servicesPage: {
    seo: {
      title: "Event & Marketing Services in Tijuana",
      description:
        "Seven disciplines to produce, amplify and connect your event: planning, activations, logistics, PR, digital marketing, sponsorships and creative studio.",
    },
    eyebrow: "Services",
    title: "Your whole event. *One team.*",
    intro: "Seven disciplines across three fronts: producing the event, amplifying it, and connecting it with audiences and brands. Hire one or all of them.",
    servicesCount: "services",
  },

  servicePage: {
    whatLabel: "What it is",
    whyLabel: "Why it matters",
    resultLabel: "The result",
    includedEyebrow: "What's included",
    includedTitle: "What we *deliver.*",
    audienceEyebrow: "Who it's for",
    audienceTitle: "Built for brands *and artists.*",
    business: "For companies & brands",
    artists: "For artists",
    faqEyebrow: "Questions about this service",
    faqTitle: "What clients *usually ask.*",
    relatedEyebrow: "Pairs well with",
    relatedTitle: "Services that *add up.*",
    proofEyebrow: "On the ground",
    ctaTitle: "Ready to *get started?*",
    ctaBody: "Tell us about your event and we'll send a proposal with scope and an itemized budget.",
    ctaButton: "Get a quote for this service",
  },

  aboutPage: {
    seo: {
      title: "About: Adrián Fernández and the Team",
      description:
        "Meet AF Marketing, the Tijuana event and marketing agency founded by Adrián Fernández: production, operations and communications from a single team.",
    },
    hero: {
      eyebrow: "About",
      title: "The hands *behind your event.*",
      intro: "We're an event and marketing agency based in Tijuana. We produce, run and promote events for brands and artists across Baja California.",
    },
    story: {
      eyebrow: "Our story",
      title: "A simple idea: *one accountable team.*",
      // PLACEHOLDER: confirm the founding story with Adrián.
      paragraphs: [
        "AF Marketing was born in Tijuana from a problem we saw at every event: the organizer ends up coordinating ten vendors who never talk to each other. Delays, budget overruns and event-day stress almost always start there.",
        "Adrián Fernández founded the agency to solve it with a single direction: production, logistics, staffing, press, social, sponsorships and content under one roof, with one person who knows every detail.",
        "Today we work with companies, venues, promoters and artists who need their event to go right — and to be seen everywhere.",
      ],
      signatureRole: "Founder & Director",
    },
    principles: {
      eyebrow: "How we think",
      title: "Four principles, *every event.*",
      items: [
        {
          title: "One accountable lead",
          body: "Every project has a director who answers for budget, timing and results.",
        },
        {
          title: "The details are the job",
          body: "Entry points, schedules, signage, staff hydration. What nobody sees is what makes everything work.",
        },
        {
          title: "Communicate from day one",
          body: "Press and social aren't an add-on at the end: they're planned alongside production.",
        },
        {
          title: "Human first",
          body: "Behind every event are people with something at stake. We treat them that way.",
        },
      ],
    },
    team: {
      eyebrow: "Our team on the ground",
      title: "Our shirt. *Our standard.*",
      body: "Uniformed staff, briefed on every event, with a clear chain of command. When someone on our team welcomes your guests, they represent your brand and ours.",
    },
    coverage: {
      eyebrow: "Coverage",
      title: "Based in Tijuana. *Working across the region.*",
      body: "We produce events in Tijuana, Rosarito, Ensenada, Valle de Guadalupe, Tecate and Mexicali, and work with brands and artists on both sides of the border.",
      mapLabel: "AF Marketing coverage map across Baja California and San Diego",
      base: "Base",
      border: "Mexico – United States border",
    },
    press: {
      eyebrow: "In the media",
      title: "We know the press conference *from the head table.*",
      body: "We don't just invite the media — we sit in front of them. That experience from both sides shows in every press event we prepare.",
    },
    cta: {
      title: "Shall we work *together?*",
      body: "Tell us about your event. The first call is for listening.",
    },
  },

  contactPage: {
    seo: {
      title: "Contact: Get a Quote for Your Event",
      description:
        "Tell us about your event in Tijuana or Baja California. Reply within one business day and a free, no-commitment proposal.",
    },
    eyebrow: "Contact",
    title: "Tell us about *your event.*",
    intro: "The more we know, the sharper the proposal. Don't have every detail yet? No problem — share what you have.",
    stepsTitle: "What happens next",
    steps: [
      "We review your message and get back to you within one business day.",
      "We book a free 30-minute discovery call.",
      "You receive a proposal with scope, timeline and an itemized budget.",
    ],
    channelsTitle: "Prefer to reach us directly?",
    channels: { email: "Email", whatsapp: "WhatsApp", base: "Base", social: "Social" },
    form: {
      title: "Event brief",
      required: "Required",
      optional: "Optional",
      name: "Full name",
      namePlaceholder: "What's your name?",
      org: "Company or project",
      orgPlaceholder: "Brand, company or artist name",
      email: "Email",
      emailPlaceholder: "name@company.com",
      phone: "Phone or WhatsApp",
      phonePlaceholder: "+1 619 000 0000",
      profile: "I'm reaching out as",
      profileOptions: ["A company or brand", "An artist or manager", "A promoter or venue", "An agency", "Other"],
      eventType: "Event type",
      eventTypePlaceholder: "Select an option",
      eventTypes: [
        "Concert or show",
        "Rodeo or jaripeo",
        "Festival",
        "Corporate event",
        "Product launch",
        "Press conference",
        "Brand activation",
        "Gala or awards",
        "Other",
      ],
      services: "Services you're interested in",
      servicesHint: "Choose all that apply.",
      date: "Estimated date",
      datePlaceholder: "e.g. November 15 or spring 2027",
      city: "City or venue",
      cityPlaceholder: "e.g. Tijuana, Valle de Guadalupe",
      guests: "Expected attendance",
      guestsPlaceholder: "Select a range",
      guestsOptions: ["Under 100", "100 to 500", "500 to 2,000", "2,000 to 10,000", "Over 10,000"],
      budget: "Approximate budget",
      budgetHint: "It helps us propose the right scope.",
      budgetPlaceholder: "Select a range",
      budgetOptions: [
        "Not sure yet",
        "Under $5,000 USD",
        "$5,000 to $15,000 USD",
        "$15,000 to $50,000 USD",
        "Over $50,000 USD",
      ],
      message: "Tell us more",
      messagePlaceholder: "Event goal, audience, ideas, questions…",
      consentBefore: "I have read and accept the",
      consentLink: "privacy notice",
      submit: "Send request",
      submitWhatsapp: "Send via WhatsApp",
      submitEmail: "Send via email",
      sending: "Sending…",
      fallbackNote: "Sending opens WhatsApp or your email app with your brief ready to go.",
      successTitle: "Received!",
      successBody: "Thanks, {name}. We'll be in touch within one business day to book your discovery call.",
      successHandoff: "Finish sending the message in the window that just opened. We'll be in touch within one business day.",
      again: "Send another request",
      error: "We couldn't send your request. Please try again or email us at {email}.",
      errors: {
        name: "Please enter your name.",
        email: "Please enter a valid email.",
        consent: "We need your consent to reply to you.",
        summary: "Please check the highlighted fields.",
      },
      briefIntro: "Hi AF Marketing, here's the brief for my event:",
      emailSubject: "Event brief — {name}",
    },
  },

  privacyPage: {
    seo: {
      title: "Privacy Notice",
      description:
        "AF Marketing privacy notice: what personal data we collect, how we use it and how to exercise your rights.",
    },
    eyebrow: "Legal",
    title: "Privacy notice",
    updated: "Last updated: October 1, 2026",
    intro:
      "AF Marketing respects your privacy. This notice explains what personal data we collect through this website and our contact channels, how we use it and how you can exercise your rights under Mexico's Federal Law on the Protection of Personal Data Held by Private Parties. The Spanish version prevails.",
    // Have this text reviewed by a legal advisor before launch.
    sections: [
      {
        heading: "Data controller",
        body: [
          "AF Marketing, based in Tijuana, Baja California, Mexico, is responsible for processing your personal data. You can contact us at {email}.",
        ],
      },
      {
        heading: "Data we collect",
        body: [
          "Identification and contact data: name, email address, phone number and company or project.",
          "Information about your event that you choose to share: event type, date, venue, expected attendance, approximate budget and message. We do not request sensitive personal data.",
        ],
      },
      {
        heading: "Purposes",
        body: [
          "Primary purposes: responding to your information and quote requests, preparing and following up on proposals, delivering contracted services and issuing invoices.",
          "Secondary purpose: sending you information about AF Marketing services and events. You can opt out at any time by writing to {email}; opting out does not affect the primary purposes.",
        ],
      },
      {
        heading: "Transfers",
        body: [
          "We do not sell your data or share it with third parties for their own purposes. We only share it when needed to deliver the service you requested — for example, with vendors involved in your event, under confidentiality obligations — or when required by a competent authority.",
        ],
      },
      {
        heading: "Your ARCO rights",
        body: [
          "You have the right to access, rectify and cancel your personal data, to object to its processing and to withdraw your consent. Send your request to {email} with your name, the right you wish to exercise and how we can reply. We will respond within the time limits set by law.",
        ],
      },
      {
        heading: "Contact form and third-party services",
        body: [
          "If you send your request through a form service, WhatsApp or your email app, that provider processes the data under its own privacy policy.",
        ],
      },
      {
        heading: "Cookies",
        body: [
          "This website does not use tracking or advertising cookies. If we add analytics tools in the future, we will update this notice.",
        ],
      },
      {
        heading: "Changes to this notice",
        body: ["Any changes to this notice will be published on this page with the date of the update."],
      },
    ],
  },

  footer: {
    servicesTitle: "Services",
    agencyTitle: "Agency",
    contactTitle: "Contact",
    agencyLinks: {
      about: "About",
      work: "Work",
      process: "Process",
      faq: "FAQ",
      contact: "Contact",
    },
    location: "Tijuana, Baja California, Mexico",
    localTime: "Local time",
    rights: "All rights reserved.",
    privacy: "Privacy notice",
    madeIn: "Made in Tijuana.",
  },
};
