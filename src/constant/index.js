import {
    date_icon,
    email_icon,
    // left_arrow,
    location_icon,
    phone_call_icon,
    right_arrow,
    // right_up_arrow,
    // search_icon,
    list_style_icon,
    quote_icon,
    // test3,
    hr_service,
    digital_excellence,
    corparate_training,
    counseling_service,
    blog_1,
    blog_2,
    blog_3,
    blog_4,
    vision,
    mission,
    value,
    Fazil,
    Gopi,
    Rasi,
    Sankar,
    Nanda,
    Shanthi,
    Sathya,
    Visutha
} from '../assets/index';
import { FaBusinessTime, FaDigitalTachograph, FaPeopleCarry, FaLaptopCode } from "react-icons/fa";

export const scrollItems = [
  { text: "Business Consulting", Icon: FaBusinessTime, bgColor :"#fff", tcolor : "#000"  },
  { text: "Digital Transformation", Icon: FaDigitalTachograph, bgColor :"#0b1a5f", tcolor : "#E7DEAB"  },
  { text: "HR Consulting", Icon: FaPeopleCarry, bgColor :"#fff" , tcolor : "#000" },
  { text: "IT Consulting", Icon: FaLaptopCode, bgColor :"#F67629", tcolor : "#0b1a5f"  }
];
export const HeroText = [
    // {
    //     id :0,
    //     content: "Get Healthy, Be Happy"
    // },
    {
        id : 0,
        content : "From People to Digital Excellence",
        subheading : "Your Partner in Business Success"
    },
    {
        id : 1,
        content : "Explore more",
        url:'/Service'
    },
]

export const Navigation = [
    {
        id : 0,
        title : 'Home',
        url : '/'
    },
    {
        id : 1,
        title : 'About Us',
        url : '/About',
    },
    {
        id : 2,
        title : 'Services',
        url : '/Service',
        sub : [
            {
                id :0,
                title : 'Business Consulting',
                url : '/Business_Consulting',
            },
            {
                id : 1,
                title : 'Digital Transformation',
                url : '/Digital_Marketing',
            },
            {
                id : 2,
                title : 'HR Consulting',
                url : '/HR_Service',
            },
            {
                id : 3,
                title : 'IT Consulting',
                url : '/IT_Development',
            }
        ]
    },
    {
        id : 3,
        title : 'Features',
        url : '/Products',
        // sub : [
        //     {
        //         id : 0,
        //         title : 'Blogs',
        //         url : '/Blogs',
        //     },
        //     {
        //         id : 1,
        //         title : 'Products',
        //         url : '/Products',
        //     }
        // ]
    },
    {
        id : 4,
        title : 'Contact Us',
        url : '/Contact_Us'
    },
]

export const AboutUs = [
    {
        id : 0,
        heading : 'About Us',
        title : 'Make Your Choice for Greatness!',
        description : "Welcome to Evvi Solutions—Your Gateway to Success and Innovation. We are your strategic partner in driving business excellence through comprehensive Business Consulting, focusing on People Excellence and Digital Transformation. Our holistic approach integrates IT consulting, HR consulting, digital marketing, and innovative web and mobile app development. We tailor our solutions to the unique needs of startups and SMEs, guiding you through today’s dynamic business landscape to achieve your strategic goals.",
        description2 : "Trust in our expertise, embrace tailored solutions, and set your course for unparalleled success. At Evvi Solutions, we are more than just a choice; we are your partner on the path to excellence. Choose Evvi for your journey to greatness!",
        description3 : "Ready to take the next step?",
        btn : "Read More",
        url : '/About',
        // lists : [
        //     {
        //         id : 0,
        //         heading : "Business Consulting:",
        //         content : 'Holistic solutions designed to enhance your organization’s growth, efficiency, and impact.',
        //         icon : FaTicketAlt,
        //         width : 20,
        //     },
        //     {
        //         id : 1,
        //         heading : "Digital Excellence:",
        //         content : 'Innovative strategies to boost your brand’s online presence and engagement.',
        //         icon : FaTicketAlt,
        //         width : 20,
        //     },
        //     {
        //         id : 2,
        //         heading : "HR Consulting:",
        //         content : 'End-to-end HR services, from virtual HR support to talent acquisition and compliance management.',
        //         icon : FaTicketAlt,
        //         width : 20,
        //     },
        //     {
        //         id : 3,
        //         heading : "IT Consulting:",
        //         content : 'Comprehensive IT solutions including cloud services, technical support, and advanced web & mobile app development.',
        //         icon : FaTicketAlt,
        //         width : 20,
        //     }
        // ]
    }
]

export const Testimonials =[
    {
        id : 0,
        heading : 'Why Choose Evvi?',
        title : "Your Vision, Our Mission",
        subtitle : "Achieve Excellence Together",
        items: [{
            id:0,
            heading:"Tailored Strategies",
            content:"We design customized solutions for your unique business needs.",
        },
        {
            id:1,
            heading:"Diverse Expertise",
            content: "From HR consulting to digital innovation, we cover all bases.",
        },
        {
            id:2,
            heading:"Results-Driven",
            content: "Our focus is on delivering measurable success and ROI.",
        },
        {
            id:3,
            heading:"Client-Focused",
            content: "Your goals guide our every move and decision.",
        },],
        lists : [
            {
                id : 0,
                content : 'Supportive colleagues and plenty of opportunities for professional development. The atmosphere is positive and motivating',
                icon : quote_icon,
                cust_icon : 'https://lh3.googleusercontent.com/a/ACg8ocI1owBtHYSNbdhXmxYmCynQx5fMwR0yxfpzmVPCfTEdhgiIFQ=s40-c-rp-mo-br100',
                cust_name : 'Mohamed Fazil',
                position : 'Software Dev',
                height : 40,
                width : 40,
            },
            {
                id : 1,
                content : 'Beautiful working environment... Everyone get attached easily...',
                icon : quote_icon,
                cust_icon : 'https://lh3.googleusercontent.com/a/ACg8ocLZa6hDRM6JMoPVpw_jArKRMZKYEes5uS0gI4bdkO6xJ53iHohY=s40-c-rp-mo-br100',
                cust_name : 'Rasi Max',
                position : 'Web Developer',
                width : 40,
                height : 40
            },
            {
                id : 2,
                content : 'Good place to learn new skills and work .Friendly motivating colleagues.',
                icon : quote_icon,
                cust_icon : 'https://lh3.googleusercontent.com/a-/ALV-UjV8UI5kttHO4ZVJQQ7oiflIrlQp2cyENv623JlIA2CD7Eq2lDME=s40-c-rp-mo-br100',
                cust_name : 'Nandha',
                position : 'Creative Designer',
                width : 40,
                height : 40
            },
            // {
            //     id : 3,
            //     content : 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.',
            //     icon : quote_icon,
            //     cust_icon : test3,
            //     cust_name : 'Kemy',
            //     position : 'Professor',
            //     width : 40,
            //     height : 40
            // },
        ]
    }
]

export const OurServices = [
    {
        id : 0,
        heading : 'Our Services',
        title : 'Explore Our Range Of Services',
        lists :[
            {
                id : 0,
                content : 'Business Consulting',
                url: '/Business_Consulting'
            },
            {
                id : 1,
                content : 'Digital Transformation',
                url : '/Digital_Marketing',
                
            },
            {
                id : 2,
                content : 'HR Consulting',
                url : '/HR_Service',
            },
            {
                id : 3,
                content : 'IT Consulting',
                url : '/IT_Development',
            },
            ],
        lists_items : [
            {
                id : 0,
                heading : 'Tailored strategies for sustainable growth',
                description : "Unlock your business full potential with our comprehensive consulting services. From strategic planning to process optimization, we provide actionable insights that drive growth and efficiency.",
                img : counseling_service,
                listo : [
                    {
                        id : 0,
                        icon : list_style_icon,
                        content : 'Strategic Planning',
                    },
                    {
                        id : 1,
                        icon : list_style_icon,
                        content : 'Operational Optimization',
                    },
                    {
                        id : 2,
                        icon : list_style_icon,
                        content : 'Change Management',
                    },
                    {
                        id : 3,
                        icon : list_style_icon,
                        content : 'Workforce Management',
                    },
                    // {
                    //     id : 4,
                    //     icon : list_style_icon,
                    //     content : 'Labouratory and Diagnostic Service',
                    // },
                    // {
                    //     id : 5,
                    //     icon : list_style_icon,
                    //     content : 'Labouratory and Diagnostic Service',
                    // },
                    // {
                    //     id : 6,
                    //     icon : list_style_icon,
                    //     content : 'Labouratory and Diagnostic Service',
                    // },
                    // {
                    //     id : 7,
                    //     icon : list_style_icon,
                    //     content : 'Labouratory and Diagnostic Service',
                    // },
                ],
                btn : 'Read More',
                url : '/Business_Consulting',
            },
            {
                id : 1,
                heading : 'Boost your brand with innovative digital strategies',
                description : 'Boost your online presence with our cutting-edge digital marketing solutions. We tailor strategies to amplify your brand and connect with your target audience effectively.',
                img : digital_excellence,
                listo : [
                    {
                        id : 0,
                        icon : list_style_icon,
                        content : 'Digital Marketing Strategy',
                    },
                    {
                        id : 1,
                        icon : list_style_icon,
                        content : 'Telemarketing & WhatsApp Marketing',
                    },
                    {
                        id : 2,
                        icon : list_style_icon,
                        content : 'Google Ads & Analytics',
                    },
                    {
                        id : 3,
                        icon : list_style_icon,
                        content : 'Google My Business Optimization',
                    },
                    // {
                    //     id : 4,
                    //     icon : list_style_icon,
                    //     content : 'Labouratory and Diagnostic Service',
                    // },
                    // {
                    //     id : 5,
                    //     icon : list_style_icon,
                    //     content : 'Labouratory and Diagnostic Service',
                    // },
                    // {
                    //     id : 6,
                    //     icon : list_style_icon,
                    //     content : 'Labouratory and Diagnostic Service',
                    // },
                    // {
                    //     id : 7,
                    //     icon : list_style_icon,
                    //     content : 'Labouratory and Diagnostic Service',
                    // },
                ],
                btn : 'Read More',
                url : '/Digital_Marketing',
            },
            {
                id : 2,
                heading : 'Your trusted partner for comprehensive HR solutions',
                description : 'People are the cornerstone of your success. Our HR Consulting services offer end-to-end support, from talent acquisition and onboarding to compliance management and employee development.',
                img : hr_service,
                listo : [
                    {
                        id : 0,
                        icon : list_style_icon,
                        content : 'Talent Acquisition & Management',
                    },
                    {
                        id : 1,
                        icon : list_style_icon,
                        content : 'Compliance and Legal Advisory',
                    },
                    {
                        id : 2,
                        icon : list_style_icon,
                        content : 'Employee Onboarding & Engagement',
                    },
                    {
                        id : 3,
                        icon : list_style_icon,
                        content : 'Virtual HR Support',
                    },
                    // {
                    //     id : 4,
                    //     icon : list_style_icon,
                    //     content : 'Labouratory and Diagnostic Service',
                    // },
                    // {
                    //     id : 5,
                    //     icon : list_style_icon,
                    //     content : 'Labouratory and Diagnostic Service',
                    // },
                    // {
                    //     id : 6,
                    //     icon : list_style_icon,
                    //     content : 'Labouratory and Diagnostic Service',
                    // },
                    // {
                    //     id : 7,
                    //     icon : list_style_icon,
                    //     content : 'Labouratory and Diagnostic Service',
                    // },
                ],
                btn : 'Read More',
                url : '/HR_Service',
            },
            {
                id : 3,
                heading : 'Empower your business with cutting-edge IT solutions',
                description : 'Stay ahead in the digital era with our IT Consulting services. We provide robust and scalable solutions, from cloud services to web and app development, ensuring your IT infrastructure meets your business needs.',
                img : corparate_training,
                listo : [
                    {
                        id : 0,
                        icon : list_style_icon,
                        content : 'Cloud Services (Infrastructure Creation & Maintenance)',
                    },
                    {
                        id : 1,
                        icon : list_style_icon,
                        content : 'End-to-End Technical Support',
                    },
                    {
                        id : 2,
                        icon : list_style_icon,
                        content : 'Website Design & Development',
                    },
                    {
                        id : 3,
                        icon : list_style_icon,
                        content : 'Mobile App & Web App Development',
                    },
                    // {
                    //     id : 4,
                    //     icon : list_style_icon,
                    //     content : 'Labouratory and Diagnostic Service',
                    // },
                    // {
                    //     id : 5,
                    //     icon : list_style_icon,
                    //     content : 'Labouratory and Diagnostic Service',
                    // },
                    // {
                    //     id : 6,
                    //     icon : list_style_icon,
                    //     content : 'Labouratory and Diagnostic Service',
                    // },
                    // {
                    //     id : 7,
                    //     icon : list_style_icon,
                    //     content : 'Labouratory and Diagnostic Service',
                    // },
                ],
                btn : 'Read More',
                url : '/IT_Development'
            },

        ]
    },
]

export const ServicePage =[
    {
        id :0,
        header : 'Business Consulting',
        content : "Unlock your business's full potential with our comprehensive consulting services. From strategic planning to process optimization, we provide actionable insights that drive growth and efficiency.",
        img: counseling_service,
        btn:"Read More",
        url : '/Business_Consulting'
    },
    {
        id :1,
        header : 'Digital Transformation',
        content : "Boost your online presence with our cutting-edge digital marketing solutions. We tailor strategies to amplify your brand and connect with your target audience effectively.",
        img: digital_excellence,
        btn:"Read More",
        url : '/Digital_Marketing'
    },
    {
        id:2,
        header : "HR Service",
        content : "People are the cornerstone of your success. Our HR Consulting services offer end-to-end support, from talent acquisition and onboarding to compliance management and employee development.",
        img: hr_service,
        btn:"Read More",
        url : '/HR_Service'
    },
    {
        id:3,
        header : "IT Development",
        content : "Stay ahead in the digital era with our IT Consulting services. We provide robust and scalable solutions, from cloud services to web and app development, ensuring your IT infrastructure meets your business needs.",
        img: corparate_training,
        btn:"Read More",
        url : '/IT_Development'
    }
]

export const Blogs = [
    {
        id : 0,
        heading : 'Latest Updates',
        title : "See Our Latest's Updates & Articles",
        btn : "Read More Our Blogs",
        link : '/Blog',
        lists : [
            {
                id : 0,
                img : blog_1,
                icon_1 : date_icon,
                date : '03 June 2024',
                title : "Retreat",
                description : "As we continue to adapt to the constantly changing landscape of the modern workplace, it has become increasingly clear that prioritizing employee wellbeing and mental health is crucial for creating a healthy, productive, and sustainable work environment. Providing support for employee well-being encompasses addressing physical, mental, and emotional health, which are all interconnected and vital for overall satisfaction and performance. Mental health deserves special attention, as it can have a significant impact on employee engagement, productivity, and organizational success." ,
                link : "Learn More",
                width : 14,
                icon_2 : right_arrow,
                url:'/blog_1'
            },
            {
                id : 1,
                img : blog_2,
                icon_1 : date_icon,
                date : '03 June 2024',
                title : "Valuable",
                description : "In today's fast-paced professional world, it's essential to create a culture that values continuous learning, steadfast achievement, and the cultivation of a lasting legacy. That's where & 'VALUABLE' comes in - it's an acronym that embodies the essence of nurturing employee talent for unparalleled success." ,
                link : "Learn More",
                width : 14,
                icon_2 : right_arrow,
                url:'/blog_2'
            },
            {
                id : 2,
                img : blog_3,
                icon_1 : date_icon,
                date : '03 June 2024',
                title : "GROWTH",
                description : "The 'GROWTH' framework—Guiding, Recognizing, Opportunity, Wealthing, Training, and Holisticing—revolutionizes the employee-employer dynamic by fostering a supportive and dynamic work environment. This model emphasizes guiding employees through impactful mentorship, recognizing achievements to elevate morale, and creating abundant opportunities for advancement. Wealthing focuses on bolstering financial growth and benefits, while training ensures continuous skill development. Holisticing promotes overall well-being, integrating work-life balance and personal growth. Together, these elements cultivate a mutually beneficial relationship, enhancing employee satisfaction and productivity, while propelling organizational success and sustainability. The GROWTH approach encapsulates a comprehensive strategy for thriving workplace dynamics." ,
                link : "Learn More",
                width : 14,
                icon_2 : right_arrow,
                url:'/blog_3'
            },
            {
                id : 3,
                img : blog_4,
                icon_1 : date_icon,
                date : '03 June 2024',
                title : "”Feel Good Friday”- abstract.",
                description : " In the Indian corporate culture, 'Feel Good Friday' or 'Fun Friday' has become quite popular. As the week comes to a close, many companies use Fridays for activities that break the routine. These activities can range from wearing casual clothes and playing games to having office parties and wellness sessions. The goal is to create a relaxed and enjoyable atmosphere, allowing employees to unwind and socialize with their colleagues. This not only makes work more enjoyable, but also fosters creativity and teamwork. In this series, we will explore whether Fun Friday is beneficial for our team or if it's unnecessary." ,
                link : "Learn More",
                width : 14,
                icon_2 : right_arrow,
                url:'/blog_4'
            },
        ]
    }
]

export const Faqs = [
    {
        id :0,
        heading : 'FAQs',
        title : "Frequently Asked Questions",
        lists : [
            {
                id : 0,
                question : "How do I book an appointment ?",
                answer : "We Offer a wide range of healthcare service including general check-ups, specialist consultations, diagnostic tests, preventive care, and surgical procedures."
            },
            {
                id : 1,
                question : "How do I book an appointment ?",
                answer : "We Offer a wide range of healthcare service including general check-ups, specialist consultations, diagnostic tests, preventive care, and surgical procedures."
            },
            {
                id : 2,
                question : "How do I book an appointment ?",
                answer : "We Offer a wide range of healthcare service including general check-ups, specialist consultations, diagnostic tests, preventive care, and surgical procedures."
            },
            {
                id : 3,
                question : "How do I book an appointment ?",
                answer : "We Offer a wide range of healthcare service including general check-ups, specialist consultations, diagnostic tests, preventive care, and surgical procedures."
            }
        ]
    }
]

export const ContactUs = [
    {
        id : 0,
        heading : 'Contact Us',
        title : 'Get in Touch With us',
        button : 'Sumbit'
    }
]

export const Address = [
    {
        id : 0,
        icon : location_icon,
        // content : "",
        content2 : "TCE - TBI, Thiyagarajar Advanced Research Centre,",
        content3 : "Thiruparankundram,",
        content4 : "Madurai -625015"
    },
    {
        id : 1,
        icon : phone_call_icon,
        content : "+99 99009 65657"
    },
    {
        id : 2,
        icon : email_icon,
        content : "info@evvisolutions.com"
    }
]

// export const Supports = [
//     {
//         id : 0,
//         content : "Support",
//         lists : [
//             {
//                 id : 0,
//                 content : "Emergency Care"
//             },
//             {
//                 id : 1,
//                 content : "Donate"
//             },
//             {
//                 id : 2,
//                 content : "Online Service"
//             }
//         ]
//     }
// ]

export const Footerend = [
    {
        id : 0,
        content : "@2024 All rights reserved."
    },
    // {
    //     id :1,
    //     content : ["About Us", "News", "Career", "Privacy"]
    // }
]

// export const questions = [
//     "What is your name?",
//     "What is your favorite color?",
//     "What do you do?"
// ];

// export const answers = {
//     "What is your name?": {
//         answer: "My name is ChatGPT.",
//         followUp: ["How old are you?", "Where are you from?"]
//     },
//     "What is your favorite color?": {
//         answer: "My favorite color is blue.",
//         followUp: ["Why do you like blue?", "What other colors do you like?"]
//     },
//     "What do you do?": {
//         answer: "I help people with information.",
//         followUp: ["How do you help?", "What else can you do?"]
//     }
// };

export const About_Full = [
    { 
        id:0,
        header:"Your Partner in Transforming Business Ambitions",
        paragraph:"Leveraging our core values of Excellence and Innovation to guide you towards unparalleled growth and success."
    },
    {
        id:1,
        header:"About",
        subtitle:"Make Your Choice for Greatness!",
        paragraph1:"At Evvi Solutions, we are dedicated to being more than just a service provider; we are your strategic partner in achieving business excellence. With a focus on empowering startups, entrepreneurs, solopreneurs, and SMEs, we bring a wealth of expertise across multiple domains.",
        paragraph2:"Our integrated approach combines Business Consulting, Digital Excellence, and HR Solutions to offer tailored strategies and solutions that drive growth and success. By leveraging our core values of Excellence, Value-driven, Versatility, and Innovation, we ensure that every engagement is marked by integrity, adaptability, and a commitment to delivering impactful results. Discover how our holistic support can transform your business aspirations into reality."
        
    },
    {
        id:2,
        header:"Evvi: A Legacy of Aspiration",
        paragraph1:"In the heart of our identity lies a tale as ancient as time, a legacy that echoes the aspirations of an ancient king. Evvi, a name of Tamil origin, signifies the profound journey of making flowing water reach higher landscapes. This echoes the spirit of an ancient ruler who sought not just to rule but to uplift. Like the gentle stream that navigates the terrain, we are dedicated to helping individuals and organizations reach greater heights.",
        paragraph2:"The name Evvi is more than a label; it's a commitment to a legacy of service, inspiration, and the relentless pursuit of excellence. As we carry this heritage forward, we strive to be the guiding force in every success story, just as the ancient king envisioned."
    },
    {
        id:3,
        header: "Join us",
        paragraph : "We're here to help you achieve your business goals! Whether you have a question, need more information, or want to explore how we can work together, feel free to reach out. Let’s start a conversation and discover the path to success together.",
        btn : "Contact Us",
        url: '/Contact_Us'
    },
    {
        id:4,
        vision_mission : [
            {
                id : 0,
                header : "Vision",
                content : "Transforming ambitions into achievements by providing comprehensive support and strategic guidance to startups and SMEs.",
                img : vision
            },
            {
                id : 1,
                header : "Mission",
                content : "Our mission is to deliver personalized consulting, cutting-edge digital strategies, and robust HR solutions to startups and SMEs, providing the clear direction and support needed to transform their goals into accomplishments.",
                img : mission
            },
            {
                id : 2,
                header : "value",
                content : "Our mission is to deliver personalized consulting, cutting-edge digital strategies, and robust HR solutions to startups and SMEs, providing the clear direction and support needed to transform their goals into accomplishments.",
                img : value
            }
        ]
    }
]

export const Teams = [
    { id: 1, src: Visutha, contentId: "content1", title:"Visutha", subTitle : "React Developer",urli:"https://www.instagram.com/visutharamalingam",urll:"https://www.linkedin.com/in/visutha-r/",urlf:"https://www.facebook.com/",urlx: "https://x.com/?lang=en", },

    { id: 2, src: Gopi, contentId: "content2", title:"Gopinath Pandian", subTitle : "Founder / Techincal - Director", urli:"https://www.instagram.com/technlite_gopinath/",urll:"https://www.linkedin.com/in/gopinathap4/",urlf:"https://www.facebook.com/",urlx: "https://x.com/?lang=en", },

    { id: 3, src: Shanthi, contentId: "content3", title:"Shanthi Subramani", subTitle : "Co - Founder / Operations Director",urli:"https://www.instagram.com/shanthi2point0/",urll:"https://www.linkedin.com/in/shanthisubramani/",urlf:"https://www.facebook.com/",urlx: "https://x.com/?lang=en", },

    { id: 4, src: Nanda, contentId: "content4", title:"Nandha Kumar", subTitle : "Creative Designer",urli:"https://www.instagram.com/mr.black__sqard?utm_source=qr&igsh=MTd2Y2JpbmRhYXJhZw==",urll:"https://www.linkedin.com/in/nandha-kumar-112559280?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",urlf:"https://www.facebook.com/",urlx: "https://x.com/?lang=en", },

    { id: 5, src: Rasi, contentId: "content5", title:"Rasi Kumar", subTitle : "React Developer",urli:"https://www.instagram.com/rasi_max/",urll:"https://www.linkedin.com/in/rasikumar/",urlf:"https://www.facebook.com/",urlx: "https://x.com/?lang=en",},

    { id: 6, src: Sathya, contentId: "content6", title:"Sathya Priya", subTitle : "Digital Marketer",urli:"https://www.instagram.com/social_spark_buzz/",urll:"https://www.linkedin.com/in/sathya-priya-j-636bb8305/",urlf:"https://www.facebook.com/",urlx: "https://x.com/?lang=en", },

    { id: 7, src: Sankar, contentId: "content7", title:"Sankar", subTitle : "Flutter Developer",urli:"https://www.instagram.com/mr_naughty_boy_13_/",urll:"https://www.linkedin.com/in/sankar-k-09032a2a7/",urlf:"https://www.facebook.com/",urlx: "https://x.com/?lang=en", },

    { id: 8, src: Fazil, contentId: "content8", title:"Mohamed Fazil", subTitle : "MERN Developer",urli:"https://www.instagram.com/",urll:"https://www.linkedin.com/",urlf:"https://www.facebook.com/",urlx: "https://x.com/?lang=en", },
  ]; 