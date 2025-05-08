import DesignBuildTemplate from '@/components/DesignBuildTemplate';
import React from 'react'

function page() {
    const greenBuildingData = {
        title: "🌿 Green Building Concept",
        subtitle: "A Green Building for a Better Future",
        features: [
            {
                title: "✅ Sustainable Design & Materials: ",
                description: "Uses eco-friendly architecture and renewable/recycled materials to minimize environmental impact."
            },
            {
                title: "✅ Energy & Water Efficiency: ",
                description: "Incorporates solar panels, LED lighting, rainwater harvesting, and water-saving fixtures."
            },
            {
                title: "✅ Smart & Healthy Living: ",
                description: "Ensures clean air, natural lighting, and smart automation for climate and energy control."
            },
            {
                title: "✅ Long-Term Savings & Certifications: ",
                description: "Reduces operational costs and targets green certifications like IGBC or LEED."
            }
        ],
        // costComparison: [
        //     {
        //         type: "Basic Green Building",
        //         cost: "₹2,000 – ₹2,500"
        //     },
        //     {
        //         type: "Mid-range Green Building",
        //         cost: "₹2,500 – ₹3,500"
        //     },
        //     {
        //         type: "Premium Green Building",
        //         cost: "₹3,500 – ₹5,000+"
        //     }
        // ],
        mainImage: "/Images/DesignBuild/green_building.jpeg",
    };

    const affordableHomeData = {
        title: "🏡 A Dream Budget Home",
        subtitle: "Affordable Living",
        features: [
            {
                title: "✅ Cost-Effective Construction: ",
                description: "Utilizes economical yet durable materials like fly ash bricks, precast slabs, and simple layouts to minimize construction costs."
            },
            {
                title: "✅ Efficient Space Planning: ",
                description: "Smart designs that maximize functionality in smaller spaces without compromising comfort or aesthetics."
            },
            {
                title: "✅ Basic Modern Amenities: ",
                description: "Includes essential features like proper ventilation, basic modular kitchen, and energy-efficient lighting."
            },
            {
                title: "✅ Low Maintenance & Utility Bills: ",
                description: "Designed for minimal maintenance with affordable monthly costs in mind—ideal for first-time homeowners."
            }
        ],
        // costComparison: [
        //     {
        //         type: "Basic Budget Home",
        //         cost: "₹1,200 – ₹1,500"
        //     },
        //     {
        //         type: "Mid-range Budget Home",
        //         cost: "₹1,500 – ₹2,000"
        //     },
        //     {
        //         type: "Higher-end Budget Home",
        //         cost: "₹2,000 – ₹2,500"
        //     }
        // ],
        mainImage: "/Images/DesignBuild/dream_budget_home.jpeg",
    };

    const premiumHomeData = {
        title: "🏰 Premium Home",
        subtitle: "An Opulent Home",
        features: [
            {
                title: "✅ Luxury Architecture & Finishes: ",
                description: "Designed with high-end materials like Italian marble, hardwood floors, and premium exterior facades."
            },
            {
                title: "✅ Spacious & Custom Interiors: ",
                description: "Expansive layouts, double-height ceilings, custom-designed rooms, walk-in closets, and home theatres."
            },
            {
                title: "✅ Smart & Lifestyle Features: ",
                description: "Fully automated smart home systems, central air-conditioning, luxury kitchen appliances, and wellness amenities like gyms or saunas."
            },
            {
                title: "✅ Prestige & Comfort: ",
                description: "Built in prime locations with top-tier security, private gardens/pools, and elegant landscaping for a lavish lifestyle."
            }
        ],
        // costComparison: [
        //     {
        //         type: "Entry-level Premium Home",
        //         cost: "₹4,000 – ₹6,000"
        //     },
        //     {
        //         type: "Mid-level Premium Home",
        //         cost: "₹6,000 – ₹9,000"
        //     },
        //     {
        //         type: "Ultra Luxury Home",
        //         cost: "₹9,000 – ₹15,000+"
        //     }
        // ],
        mainImage: "/Images/DesignBuild/premium_home.jpeg",
    };

    const premiumPlusHomeData = {
        title: "🛕 Premium Plus Home",
        subtitle: "A Super Luxurious Mansion Home",
        features: [
            {
                title: "✅ Grand Architectural Design: ",
                description: "Features palace-like facades, expansive multi-floor layouts, atriums, and signature exterior styling with imported stone and glasswork."
            },
            {
                title: "✅ Ultra-Luxury Interiors & Finishes: ",
                description: "Customized high-end interiors with designer furniture, rare marble, gold-leaf detailing, chandeliers, and art-integrated décor."
            },
            {
                title: "✅ Elite Amenities & Automation: ",
                description: "Includes private elevators, home theatres, indoor pools, wine cellars, full smart-home automation, and personal wellness zones (spa, gym, salon)."
            },
            {
                title: "✅ Exclusivity & Prestige: ",
                description: "Located in ultra-prime areas with tight security, private driveways, landscaped courtyards, helipads, and high social status appeal."
            }
        ],
        // costComparison: [
        //     {
        //         type: "Entry-level Mansion Home",
        //         cost: "₹12,000 – ₹18,000"
        //     },
        //     {
        //         type: "Ultra Luxury Mansion",
        //         cost: "₹18,000 – ₹30,000"
        //     },
        //     {
        //         type: "Bespoke Mansion (Fully Custom)",
        //         cost: "₹30,000+"
        //     }
        // ],
        costComparison: [
            {
                type: "Green Building Concept",
                cost: "₹2,500 – ₹3,500"
            },
            {
                type: "A Dream Budget Home",
                cost: "₹1,500 – ₹2,000"
            },
            {
                type: "Premium Home",
                cost: "₹6,000 – ₹9,000"
            },
            {
                type: "Premium Plus Home",
                cost: "₹18,000 – ₹30,000"
            }
        ],
        mainImage: "/Images/DesignBuild/premium_plus_home.jpeg",
    };

    return (
        <div>
            <DesignBuildTemplate data={greenBuildingData} />
            <DesignBuildTemplate data={affordableHomeData} />
            <DesignBuildTemplate data={premiumHomeData} />
            <DesignBuildTemplate data={premiumPlusHomeData} />
        </div>
    )
}

export default page
