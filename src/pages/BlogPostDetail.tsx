import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ChevronLeft, Calendar, User, Tag } from 'lucide-react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import CallToAction from '@/components/ui/CallToAction';
import BlogCard from '@/components/ui/BlogCard';

interface BlogPostInfo {
  slug: string;
  title: string;
  excerpt: string;
  image: string;
  date: string;
  author: string;
  content: string[];
  tags: string[];
  relatedPosts?: {
    title: string;
    excerpt: string;
    image: string;
    date: string;
    slug: string;
  }[];
}

const BlogPostDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.1 });

    const elements = document.querySelectorAll('.animate-on-scroll');
    elements.forEach(el => observer.observe(el));

    return () => {
      elements.forEach(el => observer.unobserve(el));
    };
  }, []);

  const blogPostsData: Record<string, BlogPostInfo> = {
    'maintain-garbage-disposal': {
      slug: 'maintain-garbage-disposal',
      title: 'How to Maintain Your Garbage Disposal',
      excerpt: 'Learn essential maintenance tips to extend the life of your garbage disposal and avoid common issues.',
      image: 'https://images.unsplash.com/photo-1581092335397-9583eb92d232?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80',
      date: 'June 15, 2023',
      author: 'Mike Peterson',
      tags: ['Kitchen Plumbing', 'Maintenance', 'DIY Tips'],
      content: [
        "A properly functioning garbage disposal is essential for maintaining a clean and efficient kitchen. However, many homeowners don't realize that these handy appliances require regular maintenance to perform at their best and avoid costly repairs. In this comprehensive guide, we'll share professional tips to keep your garbage disposal running smoothly for years to come.",
        
        "## The Importance of Regular Maintenance",
        "Your garbage disposal works hard to grind food waste into small particles that can safely flow through your plumbing system. Without proper maintenance, food particles, grease, and debris can build up inside the unit, leading to clogs, unpleasant odors, and mechanical failures. Regular maintenance not only extends the life of your disposal but also helps prevent expensive plumbing problems down the line.",
        
        "## Daily Best Practices",
        "**1. Always run cold water:** Always run cold water before, during, and after using your disposal. Start the water before turning on the disposal, and let it run for 15-20 seconds after you've finished grinding food to flush the pipes properly.",
        
        "**2. Grind small amounts gradually:** Avoid overloading your disposal with large amounts of food waste at once. Feed small amounts gradually to ensure proper grinding and prevent jams.",
        
        "**3. Avoid problematic foods:** Some items should never go into your garbage disposal:",
        "- Fibrous foods (celery, corn husks, onion skins)",
        "- Hard items (bones, fruit pits, seafood shells)",
        "- Starchy foods (potato peels, rice, pasta) which can expand and cause clogs",
        "- Fats, oils, and grease that solidify in pipes",
        "- Coffee grounds and eggshells which can create granular waste that sticks to pipes",
        
        "## Weekly Cleaning Routine",
        "**1. Ice cube cleaning:** Place a tray of ice cubes and a cup of rock salt in the disposal, then run cold water and turn on the disposal. The ice helps scrape away buildup while the salt scours the grinding elements.",
        
        "**2. Citrus freshener:** After the ice treatment, cut a lemon, lime, or orange into small pieces and grind them in the disposal with cold running water. The citrus oils help clean and deodorize the unit naturally.",
        
        "**3. Cleaning the splash guard:** The rubber splash guard (baffle) that sits at the drain opening can harbor bacteria and food particles. Pull it out if removable, or scrub it in place with a toothbrush, hot water, and dish soap.",
        
        "## Monthly Deep Cleaning",
        "**1. Baking soda and vinegar:** With the disposal off, pour half a cup of baking soda down the drain followed by a cup of white vinegar. The mixture will fizz and bubble, helping to remove buildup and neutralize odors. Let it work for 10-15 minutes, then flush with hot water.",
        
        "**2. Inspect visible components:** Using a flashlight, look inside the disposal for any visible debris or objects that might cause jams. With the power completely disconnected, you can use tongs or pliers (never your hands) to remove any visible objects.",
        
        "## Troubleshooting Common Issues",
        "**If your disposal jams:** Turn off and unplug the unit before attempting any fix. Most disposals come with a hex wrench that fits into the hole at the bottom of the unit. Insert the wrench and work it back and forth to free the impeller plate. Some units have a reset button on the bottom that you may need to press.",
        
        "**For persistent odors:** Try grinding coarsely ground ice with rock salt and lemon peels. For stubborn odors, commercial garbage disposal cleaners are available, but natural methods are typically effective and less harsh on your plumbing.",
        
        "## When to Call a Professional",
        "While routine maintenance can prevent many problems, some issues require professional attention:",
        "- If the disposal won't turn on or makes unusual noises",
        "- If it frequently trips the reset button or circuit breaker",
        "- If you experience persistent leaks from the unit",
        "- If the disposal is more than 10 years old and showing signs of failure",
        
        "Our professional plumbers at PlumbingPulse can quickly diagnose and repair garbage disposal issues or recommend a replacement if necessary. We install high-quality, quiet, and energy-efficient models that will serve your kitchen needs for years to come.",
        
        "By following these maintenance tips, you'll extend the life of your garbage disposal, prevent clogs, eliminate odors, and avoid the inconvenience and expense of emergency repairs. Remember, a little preventive care goes a long way in keeping your kitchen plumbing running smoothly."
      ],
      relatedPosts: [
        {
          title: 'Signs You Need Clogged Drain Repair',
          excerpt: 'Recognize the early warning signs of a clogged drain before it becomes a major plumbing emergency.',
          date: 'July 22, 2023',
          image: 'https://images.unsplash.com/photo-1585704032915-c3400ca199e7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80',
          slug: 'signs-clogged-drain-repair'
        },
        {
          title: 'Benefits of Installing a Tankless Water Heater',
          excerpt: 'Discover how tankless water heaters can save space, energy, and money while providing endless hot water.',
          date: 'August 10, 2023',
          image: 'https://images.unsplash.com/photo-1631646109206-4c986f548012?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80',
          slug: 'benefits-tankless-water-heater'
        }
      ]
    },
    'signs-clogged-drain-repair': {
      slug: 'signs-clogged-drain-repair',
      title: 'Signs You Need Clogged Drain Repair',
      excerpt: 'Recognize the early warning signs of a clogged drain before it becomes a major plumbing emergency.',
      image: 'https://images.unsplash.com/photo-1585704032915-c3400ca199e7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80',
      date: 'July 22, 2023',
      author: 'Sarah Johnson',
      tags: ['Drain Repair', 'Maintenance', 'Emergency Plumbing'],
      content: [
        "Clogged drains are among the most common plumbing problems homeowners face, yet many people wait until a complete blockage occurs before taking action. Identifying the early warning signs of a developing clog can save you from water damage, expensive emergency repairs, and the inconvenience of unusable plumbing fixtures. In this comprehensive guide, we'll help you recognize the symptoms of a clogged drain and explain when it's time to call for professional drain repair.",
        
        "## Common Warning Signs of a Clogged Drain",
        
        "### 1. Slow Drainage",
        "The most obvious sign of a developing clog is water that drains more slowly than usual. If you notice that your sink, shower, or tub is taking longer to empty, it's likely that a partial blockage is forming in the drain pipe. Even minor slowdowns should be addressed, as they almost always worsen over time.",
        
        "### 2. Gurgling Sounds",
        "Unusual gurgling or bubbling noises coming from your drains, especially after using appliances like washing machines or dishwashers, indicate that air is trapped in the pipes due to a blockage. These sounds may also occur when you flush a toilet or use a sink in another part of the house, suggesting a potential main line issue.",
        
        "### 3. Multiple Clogged Drains",
        "If more than one drain in your home is backing up simultaneously, this is a red flag that the problem may be in your main sewer line rather than an isolated fixture. When multiple fixtures are affected, professional attention is required immediately to prevent sewage backup into your home.",
        
        "### 4. Water Backing Up",
        "When using one plumbing fixture causes water to back up in another—such as running the washing machine makes water rise in your shower drain or toilet—you're dealing with a serious blockage in the main drainage system. This cross-connection backup indicates that water is seeking the path of least resistance due to a significant obstruction.",
        
        "### 5. Unpleasant Odors",
        "Foul smells emanating from drains are often caused by food, hair, soap scum, and other organic matter decomposing within the pipes. These odors not only create an unpleasant living environment but also signal that waste material is accumulating instead of flowing properly through your plumbing system.",
        
        "### 6. Recurring Clogs",
        "If you're repeatedly dealing with clogs in the same fixture despite clearing them, there may be a deeper issue such as a partial obstruction further down the pipe, improper venting, pipe damage, or even tree root intrusion if the problem is in main lines.",
        
        "### 7. Unexplained Wet Areas",
        "Damp spots on walls, floors, or ceilings, especially those adjacent to or below plumbing fixtures, may indicate a leaking pipe caused by pressure from a clog. These leaks can lead to water damage, mold growth, and structural issues if not addressed promptly.",
        
        "### 8. Toilet Water Level Changes",
        "Fluctuations in your toilet's water level or bubbling when not in use can indicate drainage problems. An unusually high or low water level might mean that pressure in the pipes is affected by a developing clog.",
        
        "## Common Causes of Drain Clogs",
        
        "Understanding what causes clogs can help you prevent them:",
        
        "**In kitchen drains:**",
        "- Grease, fats, and oils that solidify in pipes",
        "- Food particles, especially starchy or fibrous foods",
        "- Coffee grounds",
        "- Improper use of garbage disposals",
        
        "**In bathroom drains:**",
        "- Hair accumulation",
        "- Soap scum buildup",
        "- Toothpaste and dental floss",
        "- Bath bombs and bath oils",
        
        "**In main sewer lines:**",
        "- Tree root intrusion",
        "- Flushing inappropriate items (wipes, feminine products, etc.)",
        "- Pipe scale buildup",
        "- Pipe collapse or offset due to age or ground shifting",
        
        "## DIY vs. Professional Drain Repair",
        
        "While minor clogs can sometimes be addressed with household plungers or hand augers, many drain issues require professional intervention. Here's when to call in the experts:",
        
        "- When chemical drain cleaners fail (we generally don't recommend these due to potential pipe damage)",
        "- When multiple drains are affected",
        "- When clogs recur despite DIY efforts",
        "- When there are unusual sounds or odors from plumbing systems",
        "- When water is backing up into multiple fixtures",
        "- When there's any sign of sewage backup",
        
        "## Professional Drain Repair Solutions",
        
        "Our professional plumbers at PlumbingPulse utilize several advanced techniques to diagnose and clear drain clogs:",
        
        "**1. Video Camera Inspection:** We can insert a specialized waterproof camera into your pipes to visually identify the exact location and nature of the blockage, pipe damage, or other issues.",
        
        "**2. Hydro Jetting:** This powerful technique uses high-pressure water streams to blast away stubborn blockages, grease buildup, tree roots, and other debris while thoroughly cleaning pipe walls.",
        
        "**3. Mechanical Drain Cleaning:** For certain types of blockages, professional-grade drain snakes and augers can effectively break up or retrieve clogging materials.",
        
        "**4. Pipe Repair or Replacement:** In cases of damaged pipes contributing to recurring clogs, we can provide repair or replacement services using minimally invasive techniques whenever possible.",
        
        "## Preventive Maintenance",
        
        "The best way to deal with clogs is to prevent them from forming:",
        
        "- Install drain screens to catch hair and food particles",
        "- Never pour grease down drains",
        "- Flush drains weekly with hot water",
        "- Schedule regular professional drain cleaning as preventive maintenance",
        "- Be mindful of what you flush or put down drains",
        
        "## Conclusion",
        
        "Addressing drain clogs at the first sign of trouble can save you time, money, and significant inconvenience. If you notice any of the warning signs mentioned above, don't wait until you're facing a complete blockage or overflow situation. Contact our professional plumbers at PlumbingPulse for prompt, effective drain repair services that resolve the current issue and help prevent future problems."
      ],
      relatedPosts: [
        {
          title: 'How to Maintain Your Garbage Disposal',
          excerpt: 'Learn essential maintenance tips to extend the life of your garbage disposal and avoid common issues.',
          date: 'June 15, 2023',
          image: 'https://images.unsplash.com/photo-1581092335397-9583eb92d232?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80',
          slug: 'maintain-garbage-disposal'
        },
        {
          title: 'Benefits of Installing a Tankless Water Heater',
          excerpt: 'Discover how tankless water heaters can save space, energy, and money while providing endless hot water.',
          date: 'August 10, 2023',
          image: 'https://images.unsplash.com/photo-1631646109206-4c986f548012?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80',
          slug: 'benefits-tankless-water-heater'
        }
      ]
    },
    'benefits-tankless-water-heater': {
      slug: 'benefits-tankless-water-heater',
      title: 'Benefits of Installing a Tankless Water Heater',
      excerpt: 'Discover how tankless water heaters can save space, energy, and money while providing endless hot water.',
      image: 'https://images.unsplash.com/photo-1631646109206-4c986f548012?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80',
      date: 'August 10, 2023',
      author: 'James Wilson',
      tags: ['Water Heaters', 'Energy Efficiency', 'Home Improvement'],
      content: [
        "If you're considering upgrading your water heater, tankless models offer several compelling advantages over traditional tank-style units. Also known as on-demand water heaters, these innovative appliances heat water directly without the use of a storage tank, providing hot water only as needed. In this blog post, we'll explore the key benefits of tankless water heaters and help you determine if one is right for your home.",
        
        "## Endless Hot Water Supply",
        
        "Perhaps the most appreciated benefit of tankless water heaters is their ability to provide an endless supply of hot water. Unlike conventional tank heaters that can run out of hot water during periods of high demand (leaving someone with a cold shower), tankless systems heat water on demand as it flows through the unit.",
        
        "This means you can take consecutive showers, run the dishwasher, and do laundry simultaneously without worrying about depleting your hot water supply. For large families or homes with high hot water demands, this continuous supply is a significant advantage.",
        
        "## Space-Saving Design",
        
        "Tankless water heaters have a compact, wall-mounted design that takes up significantly less space than bulky storage tank models. A typical tankless unit is about the size of a small suitcase and can be installed on virtually any wall, both indoors and outdoors (with proper weatherproofing).",
        
        "This space-saving design is particularly valuable in smaller homes, condos, or properties where utility space is limited. The freed-up floor space can be used for storage or other purposes, adding functional square footage to your home.",
        
        "## Impressive Energy Efficiency",
        
        "Tankless water heaters operate only when hot water is needed, eliminating the standby energy losses associated with storage tank heaters that must constantly maintain a tank of hot water. According to the U.S. Department of Energy, homes that use 41 gallons or less of hot water daily can achieve 24-34% greater energy efficiency with tankless water heaters compared to conventional models.",
        
        "Even homes with higher hot water usage (around 86 gallons per day) can still see energy efficiency improvements of 8-14%. These efficiency gains translate directly into lower utility bills and reduced energy consumption year after year.",
        
        "## Longer Lifespan",
        
        "Tankless water heaters typically last 20 years or more, which is nearly twice the lifespan of conventional tank-style heaters (10-15 years). This extended service life is due to several factors:",
        
        "- Fewer parts that are susceptible to mineral buildup and corrosion",
        "- Easily replaceable parts when needed",
        "- Built-in self-cleaning functions in many models",
        "- No tank to rust or leak",
        
        "The longer lifespan not only means fewer replacements over time but also contributes to the overall return on investment for upgrading to a tankless system.",
        
        "## Reduced Risk of Water Damage",
        
        "Traditional water heaters can cause significant property damage if the tank leaks or ruptures. A typical 50-gallon tank that fails can release a substantial amount of water that can damage flooring, walls, and personal belongings.",
        
        "Tankless water heaters eliminate this risk since they don't store water. This reduced risk of water damage provides peace of mind and may even qualify you for discounts on homeowners insurance from some providers.",
        
        "## Precise Temperature Control",
        
        "Modern tankless water heaters feature advanced digital temperature controls that allow you to set your desired water temperature precisely. This not only ensures comfort but also enhances safety by reducing the risk of scalding, especially important in homes with children or elderly residents.",
        
        "Many models also offer Wi-Fi connectivity, allowing you to monitor and adjust your water heater settings remotely through smartphone apps.",
        
        "## Environmental Benefits",
        
        "The energy efficiency of tankless water heaters translates directly into environmental benefits. Lower energy consumption means reduced greenhouse gas emissions and a smaller carbon footprint for your home. Additionally, the longer lifespan of tankless units results in fewer appliances ending up in landfills over time.",
        
        "For environmentally conscious homeowners, a tankless water heater represents a significant step toward a more sustainable household.",
        
        "## Potential Tax Credits and Rebates",
        
        "Many energy-efficient tankless water heaters qualify for federal tax credits, local utility rebates, or other incentive programs designed to promote energy conservation. These financial incentives can help offset the higher initial installation cost, making tankless systems more affordable.",
        
        "Our team at PlumbingPulse can help you identify and apply for all available rebates and incentives in your area, maximizing your savings.",
        
        "## Considerations Before Installation",
        
        "While tankless water heaters offer numerous benefits, they're not the perfect solution for every home. Some important factors to consider include:",
        
        "**Initial Cost:** Tankless units typically cost more to purchase and install than conventional water heaters, though this cost difference is offset by longer lifespan and energy savings.",
        
        "**Installation Requirements:** Gas-powered tankless units may require larger gas lines and venting modifications, which can add to installation costs.",
        
        "**Water Hardness:** Homes with hard water may need water softening systems to prevent mineral buildup that can affect tankless heater efficiency.",
        
        "**Simultaneous Usage:** While tankless heaters provide endless hot water, they do have flow rate limitations. Very high simultaneous demands might require multiple units or a larger capacity model.",
        
        "## Is a Tankless Water Heater Right for You?",
        
        "Tankless water heaters offer the greatest benefits for:",
        
        "- Households that use a lot of hot water throughout the day",
        "- Homes where space is at a premium",
        "- Environmentally conscious homeowners looking to reduce energy usage",
        "- Homeowners planning to stay in their homes long-term",
        "- Properties in areas with available rebates or incentives",
        
        "At PlumbingPulse, our experienced technicians can assess your home's specific needs and help you determine if a tankless water heater is the right choice. We provide professional installation services for all major brands of tankless water heaters, ensuring you get the maximum performance and efficiency from your new system.",
        
        "Ready to explore the benefits of tankless water heaters for your home? Contact us today for a consultation and personalized recommendation."
      ],
      relatedPosts: [
        {
          title: 'How to Maintain Your Garbage Disposal',
          excerpt: 'Learn essential maintenance tips to extend the life of your garbage disposal and avoid common issues.',
          date: 'June 15, 2023',
          image: 'https://images.unsplash.com/photo-1581092335397-9583eb92d232?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80',
          slug: 'maintain-garbage-disposal'
        },
        {
          title: 'Signs You Need Clogged Drain Repair',
          excerpt: 'Recognize the early warning signs of a clogged drain before it becomes a major plumbing emergency.',
          date: 'July 22, 2023',
          image: 'https://images.unsplash.com/photo-1585704032915-c3400ca199e7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80',
          slug: 'signs-clogged-drain-repair'
        }
      ]
    },
    'prevent-winter-plumbing-problems': {
      slug: 'prevent-winter-plumbing-problems',
      title: 'How to Prevent Winter Plumbing Problems',
      excerpt: 'Protect your home from frozen pipes and other cold-weather plumbing issues with these essential preventive measures.',
      image: 'https://images.unsplash.com/photo-1608754482405-77638b3c9690?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1769&q=80',
      date: 'November 5, 2023',
      author: 'Robert Thompson',
      tags: ['Winter Maintenance', 'Pipe Protection', 'Seasonal Tips'],
      content: [
        "As temperatures drop and winter approaches, your home's plumbing system faces unique challenges that can lead to inconvenient and expensive problems if not properly addressed. Frozen pipes, water heater failures, and other cold-weather plumbing issues can disrupt your daily routine and potentially cause significant water damage. In this comprehensive guide, we'll share professional strategies to protect your plumbing system during the winter months.",
        
        "## Understanding the Risks",
        
        "Winter plumbing problems typically stem from one primary issue: the expansion of water when it freezes. When water freezes inside pipes, it expands by approximately 9%, creating tremendous pressure that can cause pipes to crack or burst. When these frozen pipes eventually thaw, they can release hundreds of gallons of water per hour, causing extensive property damage.",
        
        "Other common winter plumbing concerns include:",
        
        "- Increased strain on water heaters due to colder incoming water",
        "- Outdoor spigot and irrigation system damage",
        "- Sewer line issues from ground freezing and thawing",
        "- Drain problems from increased holiday cooking and guests",
        
        "## Pipe Protection Strategies",
        
        "### Insulate Vulnerable Pipes",
        
        "One of the most effective ways to prevent frozen pipes is proper insulation. Focus on pipes in unheated areas such as:",
        
        "- Basements and crawl spaces",
        "- Attics and garages",
        "- Exterior walls",
        "- Under sinks adjacent to exterior walls",
        
        "Use foam pipe insulation sleeves, which are inexpensive and easy to install. For extra protection in extremely cold areas, consider using thermostatically controlled heat tape or cables that automatically supply heat when temperatures drop.",
        
        "### Maintain Consistent Indoor Temperatures",
        
        "Keep your home heated to at least 55°F (13°C) at all times during cold weather, even when you're away. While it might be tempting to lower the thermostat significantly when you're not home to save on heating costs, the potential expense of repairing damage from frozen pipes far outweighs these savings.",
        
        "For vacation homes or properties that will be vacant during winter, consider a smart thermostat that alerts you to significant temperature drops.",
        
        "### Allow Faucets to Drip",
        
        "When temperatures are expected to drop below freezing, allow faucets connected to vulnerable pipes to drip slightly. Moving water is less likely to freeze, and the slight flow relieves pressure that could build up if ice does form in the pipes.",
        
        "Focus on faucets furthest from where water enters your home, as these typically have the longest pipe runs and are most susceptible to freezing.",
        
        "### Keep Interior Doors Open",
        
        "Leave interior doors open, including bathroom and kitchen cabinet doors, to allow warmer air to circulate around plumbing. This is particularly important for cabinets that house pipes on exterior walls.",
        
        "### Seal Drafts and Insulate",
        
        "Inspect your home for air leaks near water supply lines and seal any gaps found with caulk or insulation. Pay special attention to areas where pipes enter your home through exterior walls.",
        
        "Proper home insulation not only helps prevent frozen pipes but also improves energy efficiency, potentially lowering your heating bills.",
        
        "## Outdoor Plumbing Protection",
        
        "### Disconnect Garden Hoses",
        
        "Before the first freeze, disconnect, drain, and store all garden hoses. Leaving hoses connected can trap water, which may freeze and expand back into the faucet and connected interior pipes.",
        
        "### Winterize Outdoor Faucets",
        
        "Install insulated covers on outdoor faucets and spigots. For additional protection, consider shut-off valves for outdoor faucet lines, which allow you to turn off water to exterior spigots while maintaining water service inside the home.",
        
        "### Drain Sprinkler Systems",
        
        "If you have an irrigation system, it must be properly winterized to prevent damage. This typically involves:",
        
        "1. Shutting off the water supply to the system",
        "2. Draining all water from pipes and components",
        "3. Using compressed air to blow out any remaining water (often best done by professionals)",
        "4. Insulating above-ground components like backflow preventers",
        
        "## Water Heater Maintenance",
        
        "Your water heater works harder during winter months due to colder incoming water and higher hot water demands. Prepare it for the additional strain with these steps:",
        
        "### Flush the Tank",
        
        "Before winter arrives, flush your water heater tank to remove sediment buildup that can reduce efficiency and cause premature failure. This simple maintenance task can extend the life of your water heater and improve its performance during high-demand periods.",
        
        "### Check the Temperature Setting",
        
        "Set your water heater temperature to 120°F (49°C) for optimal efficiency and safety. Higher settings waste energy and can pose scalding risks, while lower settings may not kill harmful bacteria.",
        
        "### Insulate the Tank and Pipes",
        
        "Consider adding an insulating blanket to your water heater tank and insulating the hot water pipes leading from it. This helps maintain water temperature and reduces energy usage.",
        
        "## Know Your Emergency Procedures",
        
        "Despite your best preventive efforts, plumbing emergencies can still occur. Be prepared by knowing:",
        
        "### Main Water Shut-Off Valve Location",
        
        "Every household member should know where the main water shut-off valve is located and how to operate it. In case of a pipe burst, shutting off the main water supply quickly can significantly minimize damage.",
        
        "### How to Thaw Frozen Pipes Safely",
        
        "If you discover a frozen pipe (water trickles or doesn't flow from a faucet), thaw it carefully using these methods:",
        
        "- Apply heat using an electric heating pad wrapped around the pipe",
        "- Use a hair dryer, pointing the flow of hot air directly at the frozen section",
        "- Wrap pipes in towels soaked in hot water",
        
        "Never use an open flame or devices with an open flame such as blowtorches, kerosene or propane heaters, or charcoal stoves to thaw pipes.",
        
        "### Professional Contact Information",
        
        "Keep our contact information readily available for plumbing emergencies. Our 24/7 emergency service ensures that help is always available when you need it most.",
        
        "## Preparing for Extended Absences",
        
        "If you'll be away from home for an extended period during winter, take these additional precautions:",
        
        "1. Have someone check your home regularly if possible",
        "2. Consider shutting off the main water supply and draining the system",
        "3. Set your thermostat to at least 55°F (13°C)",
        "4. Leave cabinet doors open to allow heat to reach pipes",
        "5. Ensure all doors and windows are securely closed and sealed",
        
        "## Conclusion",
        
        "Investing time in winter plumbing preparation can save you from the inconvenience, expense, and potential property damage associated with frozen pipes and other cold-weather plumbing issues. By following these preventive measures, you can protect your home's plumbing system throughout the winter months.",
        
        "If you'd like professional assistance preparing your plumbing for winter, or if you encounter any plumbing issues during the cold season, don't hesitate to contact our experienced team at PlumbingPulse. We're committed to helping you maintain a safe, functional plumbing system year-round."
      ],
      relatedPosts: [
        {
          title: 'Benefits of Installing a Tankless Water Heater',
          excerpt: 'Discover how tankless water heaters can save space, energy, and money while providing endless hot water.',
          date: 'August 10, 2023',
          image: 'https://images.unsplash.com/photo-1631646109206-4c986f548012?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80',
          slug: 'benefits-tankless-water-heater'
        },
        {
          title: 'Signs You Need Clogged Drain Repair',
          excerpt: 'Recognize the early warning signs of a clogged drain before it becomes a major plumbing emergency.',
          date: 'July 22, 2023',
          image: 'https://images.unsplash.com/photo-1585704032915-c3400ca199e7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80',
          slug: 'signs-clogged-drain-repair'
        }
      ]
    }
  };

  const post = blogPostsData[slug || ''] || {
    slug: '',
    title: 'Post Not Found',
    excerpt: 'The requested blog post is not available.',
    image: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1',
    date: '',
    author: '',
    content: ['Please navigate back to our blog page to find available posts.'],
    tags: []
  };

  const formatContent = (content: string) => {
    let formattedContent = content
      .replace(/^## (.*$)/gm, '<h2 class="text-2xl font-semibold mt-6 mb-3">$1</h2>')
      .replace(/^### (.*$)/gm, '<h3 class="text-xl font-semibold mt-5 mb-2">$1</h3>')
      .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
      .replace(/- (.*?)$/gm, '<li class="ml-6 mb-1">$1</li>');
    
    const listsRegex = /<li class="ml-6 mb-1">(.*?)<\/li>/g;
    let match;
    let listHtml = '';
    let isInList = false;
    
    while ((match = listsRegex.exec(formattedContent)) !== null) {
      if (!isInList) {
        listHtml += '<ul class="list-disc my-3">';
        isInList = true;
      }
      listHtml += match[0];
      
      if (listsRegex.lastIndex >= formattedContent.length || 
          !formattedContent.substring(listsRegex.lastIndex).match(/^<li/)) {
        listHtml += '</ul>';
        isInList = false;
      }
    }
    
    if (listHtml) {
      formattedContent = formattedContent.replace(/<li class="ml-6 mb-1">(.*?)<\/li>/g, '');
      formattedContent = formattedContent.replace(/(<h[23].*?<\/h[23]>)/g, '$1' + listHtml);
    }
    
    formattedContent = formattedContent
      .split(/\n\n/)
      .map(para => {
        if (!para.startsWith('<h') && !para.startsWith('<ul') && para.trim().length > 0) {
          return `<p class="mb-4">${para}</p>`;
        }
        return para;
      })
      .join('');
    
    return formattedContent;
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <div className="bg-gradient-to-b from-secondary/50 to-secondary/10 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Link to="/blog" className="inline-flex items-center text-primary mb-6 hover:underline">
              <ChevronLeft className="h-4 w-4 mr-1" />
              Back to All Posts
            </Link>
            
            <h1 className="text-3xl md:text-4xl font-bold mb-4">{post.title}</h1>
            
            <div className="flex flex-wrap items-center text-sm text-muted-foreground mb-6">
              <div className="flex items-center mr-6 mb-2">
                <Calendar className="h-4 w-4 mr-1" />
                <span>{post.date}</span>
              </div>
              
              {post.author && (
                <div className="flex items-center mr-6 mb-2">
                  <User className="h-4 w-4 mr-1" />
                  <span>{post.author}</span>
                </div>
              )}
              
              {post.tags && post.tags.length > 0 && (
                <div className="flex flex-wrap items-center mb-2">
                  <Tag className="h-4 w-4 mr-1" />
                  {post.tags.map((tag, index) => (
                    <span key={index} className="mx-1">
                      {tag}{index < post.tags.length - 1 && ','}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      
      <article className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="rounded-lg overflow-hidden mb-8 animate-on-scroll">
              <img 
                src={post.image} 
                alt={post.title} 
                className="w-full h-[400px] object-cover"
              />
            </div>
            
            <div className="prose max-w-none">
              {post.content.map((paragraph, index) => (
                <div 
                  key={index} 
                  className="animate-on-scroll" 
                  style={{ animationDelay: `${index * 50}ms` }}
                  dangerouslySetInnerHTML={{ __html: formatContent(paragraph) }}
                />
              ))}
            </div>
            
            {post.tags && post.tags.length > 0 && (
              <div className="mt-10 pt-6 border-t border-border">
                <div className="flex flex-wrap items-center">
                  <span className="font-semibold mr-2">Tags:</span>
                  {post.tags.map((tag, index) => (
                    <span 
                      key={index} 
                      className="bg-secondary/50 text-muted-foreground px-3 py-1 rounded-full text-sm mr-2 mb-2"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </article>
      
      {post.relatedPosts && post.relatedPosts.length > 0 && (
        <section className="py-16 bg-secondary/10">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl font-semibold mb-8">Related Articles</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {post.relatedPosts.map((relatedPost, index) => (
                  <div key={index} className="animate-on-scroll" style={{ animationDelay: `${index * 100}ms` }}>
                    <BlogCard {...relatedPost} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}
      
      <CallToAction 
        title="Need Professional Plumbing Help?" 
        subtitle="Our expert team is ready to assist with any plumbing issues you're experiencing."
        primaryButtonText="Contact Us"
        primaryButtonLink="/contact"
      />

      <Footer />
    </div>
  );
};

export default BlogPostDetail;
