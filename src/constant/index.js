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
    test0,
    test1,
    test2,
    test3,
    hr_service,
    digital_excellence,
    corparate_training,
    // counseling_service,
    blog_1,
    blog_2,
    blog_3,
    blog_4,
} from '../assets/index';
import { FaBusinessTime, FaDigitalTachograph, FaPeopleCarry, FaLaptopCode, FaTicketAlt } from "react-icons/fa";

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
        description : "At Evvi Solutions, we are your trusted partner in driving business success through our expertise in Business Consulting, with a focus on People Excellence and Digital Transformation. Our holistic approach integrates IT consulting, HR consulting, digital marketing, and cutting-edge web and mobile app development. We tailor our solutions to meet the unique needs of startups and SMEs, guiding you through today’s dynamic business landscape to achieve your strategic goals.",
        btn : "Read More",
        url : '/About',
        lists : [
            {
                id : 0,
                heading : "Business Consulting:",
                content : 'Holistic solutions designed to enhance your organization’s growth, efficiency, and impact.',
                icon : FaTicketAlt,
                width : 20,
            },
            {
                id : 1,
                heading : "Digital Excellence:",
                content : 'Innovative strategies to boost your brand’s online presence and engagement.',
                icon : FaTicketAlt,
                width : 20,
            },
            {
                id : 2,
                heading : "HR Consulting:",
                content : 'End-to-end HR services, from virtual HR support to talent acquisition and compliance management.',
                icon : FaTicketAlt,
                width : 20,
            },
            {
                id : 3,
                heading : "IT Consulting:",
                content : 'Comprehensive IT solutions including cloud services, technical support, and advanced web & mobile app development.',
                icon : FaTicketAlt,
                width : 20,
            }
        ]
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
                content : 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.',
                icon : quote_icon,
                cust_icon : test0,
                cust_name : 'Sathya',
                position : 'Digital Marketing',
                height : 40,
                width : 40,
            },
            {
                id : 1,
                content : 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.',
                icon : quote_icon,
                cust_icon : test1,
                cust_name : 'Rasi Max',
                position : 'Web Developer',
                width : 40,
                height : 40
            },
            {
                id : 2,
                content : 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.',
                icon : quote_icon,
                cust_icon : test2,
                cust_name : 'Nandha',
                position : 'UI/UX Designer',
                width : 40,
                height : 40
            },
            {
                id : 3,
                content : 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.',
                icon : quote_icon,
                cust_icon : test3,
                cust_name : 'Kemy',
                position : 'Professor',
                width : 40,
                height : 40
            },
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
                description : "Unlock your business's full potential with our comprehensive consulting services. From strategic planning to process optimization, we provide actionable insights that drive growth and efficiency.",
                img : digital_excellence,
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
                heading : 'Boost your brand with innovative digital strategies.',
                description : 'Boost your online presence with our cutting-edge digital marketing solutions. We tailor strategies to amplify your brand and connect with your target audience effectively.',
                img : hr_service,
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
                heading : 'Your trusted partner for comprehensive HR solutions.',
                description : 'People are the cornerstone of your success. Our HR Consulting services offer end-to-end support, from talent acquisition and onboarding to compliance management and employee development.',
                img : corparate_training,
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
        img: digital_excellence,
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
        img: corparate_training,
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
        lists : [
            {
                id : 0,
                img : blog_1,
                icon_1 : date_icon,
                date : '03 June 2024',
                title : "Here is Update of web Devlopments and Amazing",
                description : "ldddorem ipsum dolor sit amet, consectetur,lorem ipsum dolor sit amet, consectetur ,ldddorem ipsum dolor sit amet, consectetur,lorem ipsum dolor sit amet, consectetu,ldddorem ipsum dolor sit amet, consectetur,lorem ipsum dolor sit amet, consectetu,ldddorem ipsum dolor sit amet, consectetur,lorem ipsum dolor sit amet, consectetu" ,
                link : "Learn More",
                width : 18,
                icon_2 : right_arrow,
                url:'/blog_1'
            },
            {
                id : 1,
                img : blog_2,
                icon_1 : date_icon,
                date : '03 June 2024',
                title : "Here is Update of web Devlopments and Amazing",
                description : "ldddorem ipsum dolor sit amet, consectetur,lorem ipsum dolor sit amet, consectetur ,ldddorem ipsum dolor sit amet, consectetur,lorem ipsum dolor sit amet, consectetu,ldddorem ipsum dolor sit amet, consectetur,lorem ipsum dolor sit amet, consectetu,ldddorem ipsum dolor sit amet, consectetur,lorem ipsum dolor sit amet, consectetu" ,
                link : "Learn More",
                width : 18,
                icon_2 : right_arrow,
                url:'/blog_2'
            },
            {
                id : 2,
                img : blog_3,
                icon_1 : date_icon,
                date : '03 June 2024',
                title : "Here is Update of web Devlopments and Amazing",
                description : "ldddorem ipsum dolor sit amet, consectetur,lorem ipsum dolor sit amet, consectetur ,ldddorem ipsum dolor sit amet, consectetur,lorem ipsum dolor sit amet, consectetu,ldddorem ipsum dolor sit amet, consectetur,lorem ipsum dolor sit amet, consectetu,ldddorem ipsum dolor sit amet, consectetur,lorem ipsum dolor sit amet, consectetu" ,
                link : "Learn More",
                width : 18,
                icon_2 : right_arrow,
                url:'/blog_3'
            },
            {
                id : 3,
                img : blog_4,
                icon_1 : date_icon,
                date : '03 June 2024',
                title : "Here is Update of web Devlopments and Amazing",
                description : "ldddorem ipsum dolor sit amet, consectetur,lorem ipsum dolor sit amet, consectetur ,ldddorem ipsum dolor sit amet, consectetur,lorem ipsum dolor sit amet, consectetu,ldddorem ipsum dolor sit amet, consectetur,lorem ipsum dolor sit amet, consectetu,ldddorem ipsum dolor sit amet, consectetur,lorem ipsum dolor sit amet, consectetu" ,
                link : "Learn More",
                width : 18,
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
        heading : 'Get Appointment',
        title : 'Get the appointment with Doctor for your solution',
        button : 'Make an Appointment'
    }
]

export const Address = [
    {
        id : 0,
        icon : location_icon,
        content : "Evvi Solutions PVT Limited,",
        content2 : "TCE - TBI,Thiagarajar Advanced Research Centre,",
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

export const questions = [
    "What is your name?",
    "What is your favorite color?",
    "What do you do?"
];

export const answers = {
    "What is your name?": {
        answer: "My name is ChatGPT.",
        followUp: ["How old are you?", "Where are you from?"]
    },
    "What is your favorite color?": {
        answer: "My favorite color is blue.",
        followUp: ["Why do you like blue?", "What other colors do you like?"]
    },
    "What do you do?": {
        answer: "I help people with information.",
        followUp: ["How do you help?", "What else can you do?"]
    }
};

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
        // header:"Our Mission",
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
        
    }
]

export const Teams = [
    { id: 1, src: test1, contentId: "content1", title:"Visutha", subTitle : "React Developer",urli:"https://www.instagram.com/",urll:"https://www.linkedin.com/",urlf:"https://www.facebook.com/",urlx: "https://x.com/?lang=en", },
    { id: 2, src: test1, contentId: "content2", title:"Gopinath Pandian", subTitle : "CEO", urli:"https://www.instagram.com/",urll:"https://www.linkedin.com/",urlf:"https://www.facebook.com/",urlx: "https://x.com/?lang=en", },
    { id: 3, src: test1, contentId: "content3", title:"Shanthi Subramanian", subTitle : "Founder",urli:"https://www.instagram.com/",urll:"https://www.linkedin.com/",urlf:"https://www.facebook.com/",urlx: "https://x.com/?lang=en", },
    { id: 4, src: test1, contentId: "content4", title:"Nandha Kumar", subTitle : "Creative Designer",urli:"https://www.instagram.com/",urll:"https://www.linkedin.com/",urlf:"https://www.facebook.com/",urlx: "https://x.com/?lang=en", },
    { id: 5, src: test1, contentId: "content5", title:"Rasi Kumar", subTitle : "React Developer",urli:"https://www.instagram.com/",urll:"https://www.linkedin.com/",urlf:"https://www.facebook.com/",urlx: "https://x.com/?lang=en",},
    { id: 6, src: test1, contentId: "content6", title:"Sathya Priya", subTitle : "Digital Marketer",urli:"https://www.instagram.com/",urll:"https://www.linkedin.com/",urlf:"https://www.facebook.com/",urlx: "https://x.com/?lang=en", },
    { id: 7, src: test1, contentId: "content7", title:"Sankar", subTitle : "Flutter Developer",urli:"https://www.instagram.com/",urll:"https://www.linkedin.com/",urlf:"https://www.facebook.com/",urlx: "https://x.com/?lang=en", },
    { id: 8, src: test1, contentId: "content8", title:"Mohamed Fazil", subTitle : "MERN Developer",urli:"https://www.instagram.com/",urll:"https://www.linkedin.com/",urlf:"https://www.facebook.com/",urlx: "https://x.com/?lang=en", },
  ];