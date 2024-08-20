import {
    date_icon,
    email_icon,
    // left_arrow,
    location_icon,
    phone_call_icon,
    right_arrow,
    // right_up_arrow,
    // search_icon,
    tick_circle,
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


export const scrollItems =[ "Webservice" , "Digital Marketing" , "Counseling" , "Corparate Training"]

export const HeroText = [
    {
        id :0,
        content: "Get Healthy, Be Happy"

    },
    {
        id : 1,
        content : "We are ready to Help your health Problems"
    },
    {
        id : 2,
        content : "Explore more"
    },
    {
        id : 3,
        content : "+91 9876543210"
    }
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
        title : 'Service',
        url : '/Services',
        sub : [
            {
                id : 0,
                title : 'HR Service',
                url : '/HR_Service',
            },
            {
                id : 1,
                title : 'Digital Marketing',
                url : '/Digital_Marketing',
            },
            {
                id : 2,
                title : 'IT Development',
                url : '/IT_Development',
            }
        ]
    },
    {
        id : 3,
        title : 'Features',
        url : '/Features',
        sub : [
            {
                id : 0,
                title : 'Blogs',
                url : '/Blogs',
            },
            {
                id : 1,
                title : 'Products',
                url : '/Products',
            }
        ]
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
        description : "Welcome to Evvi Solutions, Your Gateway to Success and Innovation. We integrate Comprehensive HR Consulting, groundbreaking Psychometric Assessments, transformative Behavioral Skills Training, and personalized Counseling. Seize the advantage of Digital Excellence. Trust our expertise, embrace bespoke solutions, and embark on a journey to unparalleled success. Evvi Solutions isn't just a choice; we're your Strategic Partner on the Path to Excellence. Make Evvi Your Choice for Greatness!",
        btn : "Read More",
        url : '/About',
        lists : [
            {
                id : 0,
                content : 'Labouratory and Diagnostic Service',
                icon : tick_circle,
                width : 20,
            },
            {
                id : 1,
                content : 'Labouratory and Diagnostic Service',
                icon : tick_circle,
                width : 20,
            },
            {
                id : 2,
                content : 'Labouratory and Diagnostic Service',
                icon : tick_circle,
                width : 20,
            },
            {
                id : 3,
                content : 'Labouratory and Diagnostic Service',
                icon : tick_circle,
                width : 20,
            }
        ]
    }
]

export const Testimonials =[
    {
        id : 0,
        heading : 'Why Choose Our Clinic',
        title : "we're the Right Fit for Your Healthcare Needs",
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
                content : 'HR Consulting',
                url : '/HR_Service',
            },
            {
                id : 1,
                // content : 'Corparate Training',
                content : 'Digital Marketing',
                url : '/Digital_Marketing',
            },
            {
                id : 2,
                // content : 'Counseling Service',
                content : 'IT Development',
                url : '/IT_Development',
            },
            // {
            //     id : 3,
            //     content : 'Digital Excellence',
            // },
        ],
        lists_items : [
            {
                id : 0,
                heading : 'Explore Our Comprenensive Services',
                description : 'We provide a unique blend of HR Consulting, Psychometric Assessments, Behavioral Skills Training, and Personalized CounselingWe provide a unique blend of HR Consulting, Psychometric Assessments, Behavioral Skills Training, and Personalized CounselingWe provide a unique blend of HR Consulting, Psychometric Assessments, Behavioral Skills Training, and Personalized Counselings',
                img : hr_service,
                listo : [
                    {
                        id : 0,
                        icon : list_style_icon,
                        content : 'Labouratory and Diagnostic Service',
                    },
                    {
                        id : 1,
                        icon : list_style_icon,
                        content : 'Labouratory and Diagnostic Service',
                    },
                    {
                        id : 2,
                        icon : list_style_icon,
                        content : 'Labouratory and Diagnostic Service',
                    },
                    {
                        id : 3,
                        icon : list_style_icon,
                        content : 'Labouratory and Diagnostic Service',
                    },
                    {
                        id : 4,
                        icon : list_style_icon,
                        content : 'Labouratory and Diagnostic Service',
                    },
                    {
                        id : 5,
                        icon : list_style_icon,
                        content : 'Labouratory and Diagnostic Service',
                    },
                    {
                        id : 6,
                        icon : list_style_icon,
                        content : 'Labouratory and Diagnostic Service',
                    },
                    {
                        id : 7,
                        icon : list_style_icon,
                        content : 'Labouratory and Diagnostic Service',
                    },
                ],
                btn : 'Read More',
                url : '/HR_Service',
            },
            {
                id : 1,
                heading : 'Explowre Our Comprenensive Services',
                description : 'We provide a unique blend of HR Consulting, Psychometric Assessments, Behavioral Skills Training, and Personalized CounselingWe provide a unique blend of HR Consulting, Psychometric Assessments, Behavioral Skills Training, and Personalized CounselingWe provide a unique blend of HR Consulting, Psychometric Assessments, Behavioral Skills Training, and Personalized Counselings',
                img : digital_excellence,
                listo : [
                    {
                        id : 0,
                        icon : list_style_icon,
                        content : 'Labouratory and Diagnostic Service',
                    },
                    {
                        id : 1,
                        icon : list_style_icon,
                        content : 'Labouratory and Diagnostic Service',
                    },
                    {
                        id : 2,
                        icon : list_style_icon,
                        content : 'Labouratory and Diagnostic Service',
                    },
                    {
                        id : 3,
                        icon : list_style_icon,
                        content : 'Labouratory and Diagnostic Service',
                    },
                    {
                        id : 4,
                        icon : list_style_icon,
                        content : 'Labouratory and Diagnostic Service',
                    },
                    {
                        id : 5,
                        icon : list_style_icon,
                        content : 'Labouratory and Diagnostic Service',
                    },
                    {
                        id : 6,
                        icon : list_style_icon,
                        content : 'Labouratory and Diagnostic Service',
                    },
                    {
                        id : 7,
                        icon : list_style_icon,
                        content : 'Labouratory and Diagnostic Service',
                    },
                ],
                btn : 'Read More',
                url : '/Digital_Marketing',
            },
            {
                id : 2,
                heading : 'Explore Our Comprenensive Services',
                description : 'We provide a unique blend of HR Consulting, Psychometric Assessments, Behavioral Skills Training, and Personalized CounselingWe provide a unique blend of HR Consulting, Psychometric Assessments, Behavioral Skills Training, and Personalized CounselingWe provide a unique blend of HR Consulting, Psychometric Assessments, Behavioral Skills Training, and Personalized Counselings',
                img : corparate_training,
                listo : [
                    {
                        id : 0,
                        icon : list_style_icon,
                        content : 'Labouratory and Diagnostic Service',
                    },
                    {
                        id : 1,
                        icon : list_style_icon,
                        content : 'Labouratory and Diagnostic Service',
                    },
                    {
                        id : 2,
                        icon : list_style_icon,
                        content : 'Labouratory and Diagnostic Service',
                    },
                    {
                        id : 3,
                        icon : list_style_icon,
                        content : 'Labouratory and Diagnostic Service',
                    },
                    {
                        id : 4,
                        icon : list_style_icon,
                        content : 'Labouratory and Diagnostic Service',
                    },
                    {
                        id : 5,
                        icon : list_style_icon,
                        content : 'Labouratory and Diagnostic Service',
                    },
                    {
                        id : 6,
                        icon : list_style_icon,
                        content : 'Labouratory and Diagnostic Service',
                    },
                    {
                        id : 7,
                        icon : list_style_icon,
                        content : 'Labouratory and Diagnostic Service',
                    },
                ],
                btn : 'Read More',
                url : '/IT_Development',
            },
            // {
            //     id : 3,
            //     heading : 'Explore Our Comprenensive Services',
            //     description : 'We provide a unique blend of HR Consulting, Psychometric Assessments, Behavioral Skills Training, and Personalized CounselingWe provide a unique blend of HR Consulting, Psychometric Assessments, Behavioral Skills Training, and Personalized CounselingWe provide a unique blend of HR Consulting, Psychometric Assessments, Behavioral Skills Training, and Personalized Counselings',
            //     img : counseling_service,
            //     listo : [
            //         {
            //             id : 0,
            //             icon : list_style_icon,
            //             content : 'Labouratory and Diagnostic Service',
            //         },
            //         {
            //             id : 1,
            //             icon : list_style_icon,
            //             content : 'Labouratory and Diagnostic Service',
            //         },
            //         {
            //             id : 2,
            //             icon : list_style_icon,
            //             content : 'Labouratory and Diagnostic Service',
            //         },
            //         {
            //             id : 3,
            //             icon : list_style_icon,
            //             content : 'Labouratory and Diagnostic Service',
            //         },
            //         {
            //             id : 4,
            //             icon : list_style_icon,
            //             content : 'Labouratory and Diagnostic Service',
            //         },
            //         {
            //             id : 5,
            //             icon : list_style_icon,
            //             content : 'Labouratory and Diagnostic Service',
            //         },
            //         {
            //             id : 6,
            //             icon : list_style_icon,
            //             content : 'Labouratory and Diagnostic Service',
            //         },
            //         {
            //             id : 7,
            //             icon : list_style_icon,
            //             content : 'Labouratory and Diagnostic Service',
            //         },
            //     ]
            // },

        ]
    },
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
        content : "Galaxy tower, textile circle, Sun city - 2530, Canada"
    },
    {
        id : 1,
        icon : phone_call_icon,
        content : "+1 234 567 8901"
    },
    {
        id : 2,
        icon : email_icon,
        content : "dummmy@gmail.com"
    }
]

export const Supports = [
    {
        id : 0,
        content : "Support",
        lists : [
            {
                id : 0,
                content : "Emergency Care"
            },
            {
                id : 1,
                content : "Donate"
            },
            {
                id : 2,
                content : "Online Service"
            }
        ]
    }
]

export const Footerend = [
    {
        id : 0,
        content : "@2023 All rights reserved."
    },
    {
        id :1,
        content : ["About Us", "News", "Career", "Privacy"]
    }
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
        header:"Empowering Innovators, Connecting Communities",
        paragraph:"Your hub for cutting-edge tutorials, vibrant forums, networking events project showcase, and career opportunities in the world of technology."
    },
    {
        id:1,
        header:"About",
        subtitle:"Make Your Choice for Greatness!",
        paragraph1:"Welcome to Evvi Solutions, the origin of our journey lies in the realm of HR Consulting services, where we discovered the undeniable power of talents as the cornerstone of any success story. Recognizing that talents could be cultivated, our vision expanded, embracing the profound notion of individual empowerment as the gateway to organizational triumph. This realization led us to delve into the intricacies of individuals—their abilities, personalities, interests, and values—an understanding achieved through comprehensive psychometric assessments. To further nurture these talents, we incorporated transformative behavioral skills training into our offerings.",
        paragraph2:"In a world where support is paramount, especially in times of confusion and the quest for clarity, we identified the critical need for counseling services. In the digital age, we recognized the imperative for digital excellence, seamlessly integrating it with our array of services. At Evvi Solutions, our journey is a testament to the belief that every individual holds the power to shape their success story, and we are here to guide, support, and empower every step of the way."
    },
    {
        id:2,
        header:"Our Mission",
        title:"Evvi: A Legacy of Aspiration",
        paragraph1:"n the heart of our identity lies a tale as ancient as time, a legacy that echoes the aspirations of an ancient king. Evvi, a name of Tamil origin, signifies the profound journey of making flowing water reach higher landscapes. This echoes the spirit of an ancient ruler who sought not just to rule but to uplift. Like the gentle stream that navigates the terrain, we are dedicated to helping individuals and organizations reach greater heights.",
        paragraph2:"The name Evvi is more than a label; it's a commitment to a legacy of service, inspiration, and the relentless pursuit of excellence. As we carry this heritage forward, we strive to be the guiding force in every success story, just as the ancient king envisioned."
    },
    {
        id:3,
        header: "Join us",
        paragraph : "Join Evvi Solutions to expand your tech skills and knowledge! Learn programming languages, technical tools, soft skills and industry insights. Gain project management expertise, explore entrepreneurship, and embrace continuous learning. Elevate your tech career with our supportive community!",
        btn : "Contact Us",
        url: '/Contact_Us'
        
    }
]
