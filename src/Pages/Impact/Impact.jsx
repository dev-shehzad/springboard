import { GoChevronDown } from "react-icons/go";
import { FaPlay } from "react-icons/fa6";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ReactModal from "react-modal";
import { IoCloseCircleOutline } from "react-icons/io5";
import { IoIosCloseCircleOutline } from "react-icons/io";
import Slider from "react-slick";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
const Impact = () => {
  const CustomPrevArrow = (props) => (
    <button {...props}>
      <FaChevronLeft size={30} className="text-red-500 absolute" />
    </button>
  );

  const CustomNextArrow = (props) => (
    <button {...props}>
      <FaChevronRight size={30} className="text-red-500" />
    </button>
  );
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    draggable: true,
    autoSlide: false,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
  };

  const dataArray = [
    {
      name: "Alhassan Abdul Aziz",
      role: "Student",
      image: "/vidbg/1.jpg",
      videoUrl: "/bg.mp4",
      coreimg: "/vidbg/core.png",
    },
    {
      name: "Alhassan Kamilu",
      role: "Student",
      image: "/vidbg/2.jpg",
      videoUrl: "/bg.mp4",

      coreimg: "/vidbg/core.png",
    },
    {
      name: "Bright Fiafenyo",
      role: "Entrepreneur",
      image: "/vidbg/3.jpg",
      videoUrl: "/bg.mp4",

      coreimg: "/vidbg/core.png",
    },
    {
      name: "Clara Dansoa",
      role: "Painter",
      image: "/vidbg/4.jpg",
      videoUrl: "/bg.mp4",

      coreimg: "/vidbg/core.png",
    },
    {
      name: "Dede Dora Anim",
      role: "CEO, Dove Interior and Events Management",
      image: "/vidbg/5.jpg",
      videoUrl: "/bg.mp4",
      coreimg: "/vidbg/core.png",
    },
    {
      name: "Douglas Ayensu",
      role: "Electrician",
      image: "/vidbg/6.jpg",
      videoUrl: "/bg.mp4",
      coreimg: "/vidbg/core.png",
    },
    {
      name: "Ekua Klaye",
      role: "CEO, Keeba Knots",
      image: "/vidbg/7.jpg",
      videoUrl: "/bg.mp4",
      coreimg: "/vidbg/core.png",
    },
    {
      name: "Elizabeth Bukari",
      role: "Health Practitioner",
      image: "/vidbg/8.jpg",
      videoUrl: "/bg.mp4",
      coreimg: "/vidbg/core.png",
    },
    {
      name: "Gideon Sosu Jnr.",
      role: "CEO, GADV",
      image: "/vidbg/11.jpg",
      videoUrl: "/bg.mp4",
      coreimg: "/vidbg/core.png",
    },
    {
      name: "Godson Kumah",
      role: "Credit Officer",
      image: "/vidbg/12.jpg",
      videoUrl: "/bg.mp4",
      coreimg: "/vidbg/core.png",
    },
    {
      name: "Nana Akua Asantewaa Afram",
      role: "Pencil Artist",
      image: "/vidbg/13.jpg",
      videoUrl: "/bg.mp4",
      coreimg: "/vidbg/core.png",
    },
    {
      name: "Nathaniel Attuquaye",
      role: "Student",
      image: "/vidbg/14.jpg",
      videoUrl: "/bg.mp4",
      coreimg: "/vidbg/core.png",
    },
    {
      name: "Phillip Abeiku Sam",
      role: "Student",
      image: "/vidbg/15.jpg",
      videoUrl: "/bg.mp4",
      coreimg: "/vidbg/core.png",
    },
    {
      name: "Dzidedi Fiadzigbey",
      role: "Electrician",
      image: "/vidbg/16.jpg",
      videoUrl: "/bg.mp4",
      coreimg: "/vidbg/core.png",
    },
    {
      name: "Richard Abeiku Bonney",
      role: "Student",
      image: "/vidbg/17.jpg",
      videoUrl: "/bg.mp4",
      coreimg: "/vidbg/core.png",
    },
    {
      name: "Rukmini Adjetey",
      role: "Businesswoman",
      image: "/vidbg/18.jpg",
      videoUrl: "/bg.mp4",
      coreimg: "/vidbg/core.png",
    },
    {
      name: "Samuel Nketia",
      role: "Electrical Engineer",
      image: "/vidbg/19.jpg",
      videoUrl: "/bg.mp4",
      coreimg: "/vidbg/core.png",
    },
    {
      name: "Samuel Owusu Addo",
      role: "Cobbler",
      image: "/vidbg/20.jpg",
      videoUrl: "/bg.mp4",
      coreimg: "/vidbg/core.png",
    },
    {
      name: "Seidu Iddrisu",
      role: "Student",
      image: "/vidbg/20.jpg",
      videoUrl: "/bg.mp4",
      coreimg: "/vidbg/core.png",
    },
    // Add more items as needed
  ];

  const [yourOriginalItems, setYourOriginalItems] = useState([]);
  const [sortOptions, setSortOptions] = useState({
    "A-Z": false,
    "Z-A": false,
    "Date-LowToHigh": false,
    "Date-HighToLow": false,
  });
  const [interventionOptions, setInterventionOptions] = useState({
    "Select an Intervention...": false,
    CoRe: false,
  });
  const [filteredAndSortedItems, setFilteredAndSortedItems] = useState([]);
  const [visibleItems, setVisibleItems] = useState(6);
  const [searchQuery, setSearchQuery] = useState("");
  const [isSortOpen, setIsSortOpen] = useState(false);
  const [isInterventionOpen, setIsInterventionOpen] = useState(false);

  useEffect(() => {
    // Mock data fetching, replace with your actual data fetching logic
    const mockData = [
      {
        name: "CoRe Story",
        author: "Selom Apanya",
        backgroundImage: "./Selom.jpg",
        date: "2024-01-01",
        intervention: "CoRe",
        content:
          "Driving innovation for positive social impact. Yaw is a tech entrepreneur who believes in using technology to address social issues..." /* other properties */,
        readmore: "Read More",
        info: "“I wish there could be a way this programme could be made more permanent…” These are the words of Selom as he considers how impactful the CoRe Programme has been to him and others amid a major disruption in work and career pursuits. I am Selom Apanya, Lead for the Monitoring & Evaluation Unit of the CoRe Programme. I work as an independent consultant engaged in the provision of Data Collection, Research and M&E Services to development partners in Ghana. At the latter part of the year 2019, I checked out of full-time employment with my previous employer to pursue other opportunities that had surfaced at the time. Opportunities in the offing included international consulting collaborations and the prospect of pursuing my PhD in the United Kingdom. Following the outbreak of COVID-19, all these opportunities evaporated. Honestly, I was very disappointed and confused because the future looked very uncertain to me. I also questioned my decision to leave my former employment. But being part of this programme and getting to learn from others really opened my eyes to realize that life happens, and uncertainty is part of life. Hence, when such uncertain situations occur, that is not the end of the story. As part of my duties for the CoRe Programme, I oversaw collating impact stories and conducting surveys. This opened my eyes to the experiences of so many people and made me realized everyone was affected – one way or the other. It also dawned on me that if these persons have now been built and equipped with the skills to bounce back, then why not me? I took the decision to listen to all the e-learning videos, and this was an amazing expedition. I have now built the resilience to know that irrespective of what life throws at me, I can overcome it. If people are given the right skills and knowledge, there is nothing they cannot overcome. From the survey and other responses from people, I concluded that people were in direr situations than I was, but they have all been equipped with the skills to bounce back. It saddens me that this programme has come to an end. It is my desire that everything that has been built over the past six months turns into something more permanent. As a relatively young person myself, I can say that young people really need help. It may not be monetary help per se, but we need knowledge, and we need to be helped to think anew. I wish there could be a way this CoRe Programme could be designed to be made more permanent and even incorporated into the syllabus of schools and so on. I thank Rev. Albert and Comfort Ocran and the Mastercard Foundation and Solidaridad for making this CoRe Programme happen.",
      },
      {
        name: "CoRe Story",
        author: "Kweku Buah",
        backgroundImage: "./testimonials/kweku.jpg",
        date: "2024-02-01",
        intervention: "Other",
        content:
          "New perspectives for greater impact. As a manager of a football club and a market survey associate, Kweku’s livelihoods were hugely impacted by the...",
        readmore: "Read More",
        info: "As a manager of a football club and a market survey associate, Kweku’s livelihoods were hugely impacted by the outbreak of the pandemic. He got introduced to the CoRe Programme and it has made a whole lot of difference in his life and the team he manages. The sessions on talent discovery gave him an entirely new perspective which he is applying to his football club. I am Kweku Buah. I was with the Administrative unit of CoRe. I was managing my juvenile football team, TopBase Community Football Club, and working as a Market Survey Associate in a company when news of COVID-19 started making rounds in the world. My team had just been visited by a scout who owned a football club in Europe in February 2020. He had selected four of my players on standby for European trials. COVID-19 put all these plans on hold. I was also in the final stages of registering with the Ghana Football Association. Again, because of COVID-19, we had to put all that on hold. We did not train from March to September 2020. Most of the boys lost interest and returned to their old lifestyles – the same social vices for which reason I formed the team to take them away from. In terms of finances, my survey job was put on hold for obvious reasons – all bars, restaurants, night clubs, etc. were under lockdown. I had no income, but I was spending. A few of the boys in my team also looked up to me. Times were tough for me. Some of my friends who supported my team withdrew, either because they were also hard hit or for the fact that they knew we were not playing matches. That was when I got a call from Mrs. Ocran, upon the reference of a friend of mine. She asked if I would like to work on a social intervention project. I agreed and joined the CoRe team. My thought processes and mentality changed from the very first day I attended one of their sessions. It was a training conference being held for the YIEDIE group executives at GIMPA. I was invited to observe and familiarize myself with the project. As I would later learn, they played specific videos from the e-learning episodes to participants as part of the CoRe in-person conferences. I was privileged to listen to two episodes on, ‘Discovering your talent’ and ‘Doing business with your talent’. After listening to the teachings by Rev. Ocran in the 15-minute videos, I immediately had ideas on how to make some income. I had a snooker board in my living room which had been sitting idle. I started scouting for possible places that I could station it for people to play and pay. I also built a table tennis table, I observed that there were a lot of kids at home at the time, and they would be interested in table tennis, so I designed a quite simple one. Because it was mobile, I could send it to different locations. I turned my passion for sports into a simple business. Indirectly, I have employed two of my players to take care of the two boards, and I give them stipends every week. It was exciting because I was not only making some money but helping others as well. As a football talent hunter, owner, and manager of a football team, I have learnt the key factors to discovering your talent. I have taught this subject to my boys. I know a lot of them joined the team for the love of football, and not that they are particularly talented. As a result, two of them have joined the Management team because they have discovered they have a hidden talent in organizing and coordinating. To conclude, I would say that “information is ad infinitum” I thought I knew it all when it came to issues bordering on talents, but I learnt a great deal about it, and it is helping me run my football team. In one of the CoRe Hangout shows, discussing digital branding, I learnt how to look out for engagement triggers to engage with the people we would like to connect with in the social media and internet space. With this cue, I started engaging with a professional footballer I needed to connect with. I keep commenting on his statuses on WhatsApp, till one day he wrote back. Today, he has promised to support my team with a set of jerseys and to visit and inspire the boys when he next comes to Ghana. I believe the CoRe Programme should go beyond COVID-19 and enter into full time sensitization and engagement of the youth.",

        /* other properties */
      },
      {
        name: "CoRe Story",
        author: "Napoleon Kofie",
        backgroundImage: "./testimonials/napolen.jpg",
        date: "2024-02-01",
        intervention: "Other",
        content:
          "Leveraging technology to impart lives.  Napoleon shares how the CoRe programme has stretched his ability and given him incredible skills and knowledge to complement...",
        readmore: "Read More",
        info: "Napoleon shares how the CoRe programme has stretched his ability and given him incredible skills and knowledge to complement his expertise as a digital consultant. He shares his amazing experiences. My name is Napoleon Kofie. I am a digital consultant and I served as Digital Lead for the CoRe Programme. Before the outbreak of the COVID-19 pandemic, I was involved in several projects including providing of strategic directions, building technology systems, and designing client experiences for businesses. The biggest recent need is that of businesses and organizations seeking to successfully upgrade their business operations online. This enables their employees to work remotely and remain efficient and productive as well as customers also accessing services and products through online platforms. I found the CoRe Programme to be a very fascinating initiative largely because of my passion for youth development. I also saw this as a more fulfilling opportunity to make a mark during these times. Joining the CoRe Programme team allowed me to contribute to designing and implementing the digital architecture for our three key interventions, namely e-Learning, e-Counselling, and e-Mentoring. We also built a phenomenal web and mobile experience for our beneficiaries and developed an unparalleled strategy that saw us leverage the digital landscape to reach millions of young people every month. I am humbled by the impact of these initiatives. I cannot forget the incredible and touching stories I received first-hand from beneficiaries across the country about the immense impact of the CoRe Programme on their lives. During the CoRe Programme, I picked up incredible skills and knowledge to complement my current level of expertise. The CoRe Programme has really expanded my capacity for executing nationwide projects of this magnitude. I have also seen how technology can normalize the risk of a very damaging event such as the COVID-19 pandemic and can be used to show empathy in impacting the lives of people. This intervention has shown that we can leverage technology for social good and even leapfrog human capital to its fullest potential. I’m extremely glad to have serve in undoubtedly the biggest youth intervention programme in Ghana during the COVID-19 pandemic. This is a significant accomplishment and I do not take it for granted. Many thanks",
      },
      {
        name: "CoRe Story",
        author: "Ibrahim Elijah",
        backgroundImage: "./testimonials/ibrahim.jpg",
        date: "2024-02-01",
        intervention: "Other",
        content:
          "Repositioned to explore more opportunities.  During the challenges posed by the pandemic, Ibrahim’s business was not exempted. He shares his story about how the...",
        readmore: "Read More",
        info: "During the challenges posed by the pandemic, Ibrahim’s business was not exempted. He shares his story about how the CoRe Programme gave him and his family hope as he looks forward to exploring other business avenues. My name is Ibrahim Elijah, Northern Regional support staff on the CoRe Programme. COVID-19 came as a big surprise to everybody all over the world especially as the New Year began with so much promise. I was working on my small retail and animal rearing business before the outbreak of the pandemic. The moment Ghana recorded its first case, my fears and anxiety increased as I never knew what the future would look like. My retail business which was basically into the selling of consumables was affected because of the associated lockdowns and restrictions in movement. The business nearly collapsed but God being so good I managed to survive the situation. The benefits of the CoRe Programme cannot be overemphasized. I have become a more resilient person. Through the programme, I have learnt how to market my business amid difficult economic situations and how to identify opportunities even in difficult situations and prevail. CoRe came at a time when my life and family were turning upside down, but for the intervention of the programme, I’m now better placed to take up new business opportunities. Thanks to CoRe for the wonderful opportunity. My family and I have been immensely impacted and the CoRe Programme have become a household name in my home.",
      },
      {
        name: "CoRe Story",
        author: "Augustine Bediako",
        backgroundImage: "./testimonials/augstine.jpg",
        date: "2024-02-01",
        intervention: "CoRe",
        content:
          "Who Moved My Cheese? Augustine mentions that during the many unanswered questions bothering his mind, the story “who moved my cheese?” which chronicled amazing...",
        readmore: "Read More",
        info: "Augustine mentions that during the many unanswered questions bothering his mind, the story “who moved my cheese?” which chronicled amazing ways of dealing with change and the superb presentation of the story in the e-learning sessions calmed him down and kept him on track. He shares his story. I am Augustine Bediako. A Project support responsible for regions in the Southern Sector of Ghana on the CoRe Programme. “Man proposes, but God disposes” I had an agreement in place with the National Board for Small-Scale Industries in the Ashanti Region to organize the Youth Inclusive Entrepreneurial Development Initiative for Employment (YIEDIE) members in all the districts to develop group business plans for them to access grants and loans. I visited four districts and organized five groups. Again, the electrical association of the Sekyere South District invited me to conduct workshops and develop business plans for interested members, but I could not do so because of the pandemic. News of the pandemic was first heard from afar, but it drew closer and eventually infected fellow countrymen, especially in Kumasi where I live. Watching television channels updating the public about the number of infected persons abroad and in Ghana frightened me. However, the lockdown was timely and did slow down some of my fears. My livelihood as a technical business advisor and executive director of Skyhoz business consult was affected. The contracts I was about to sign with some customers could not materialize. My hopes were dashed. COVID-19 also affected my life spiritually. During and after lockdown, my children’s desire for going to church reduced drastically because they felt the quiet time and Bible studies, we did at home were enough. Generally, many people in my church were reluctant to come back to church after the lockdown because of fear. My social life was reduced to phone calls. There was no opportunity to attend social programmes because of fear and the restrictions imposed. The CoRe Programme implemented by Springboard Road Show Foundation became the game changer in my life. Apart from provision of employment in terms of income, I listened to every single episode and shared it with my friends. I participated in most of the mentoring groups and did join most of the hangout sessions as well. These became the antidote to what I thought were challenges or problems. In fact, every component of the CoRe Programme influenced my life very positively ranging from resilience, health awareness, safety and wellness, workplace skills and job readiness. One major question I grappled with was the question of how the whole world came to a standstill because of a virus. I had no answer. I went back to the Bible trying to understand it, but the situation kept growing from bad to worse.  The magical story of “who moved my cheese?” and its amazing prescription for dealing with change and that superb presentation of the story on the CoRe e-Learning session by Rev. Albert Ocran calmed me down and kept me on track. The programme was characterized by great teamwork, rich content, excellent presentations, and useful information gathering and application. Here are my lessons: Everything is possible if attention is paid to it in detail. I became a mentee in several mentoring platforms, and I really learnt a lot. Social media platforms such as Facebook, WhatsApp and tweeter are more effective as compared to radio and television. When planning, one must consider unforeseen circumstances. In conclusion, I think the CoRe programme has been one of the best responses to the coronavirus pandemic. I highly recommend that it continuous even after the pandemic to positively affect the lives of direct and indirect beneficiaries across the country. Thank you.",
      },
      {
        name: "CoRe Story",
        author: "Madonna Yaa Oduro",
        backgroundImage: "./testimonials/maddona.jpg",
        date: "2024-02-01",
        intervention: "CoRe",
        content:
          "A humbling, insightful and fulfilling encounter.  The feedback from beneficiaries of the CoRe Programme about how it has helped them has been a humbling...",
        readmore: "Read More",
        info: "The feedback from beneficiaries of the CoRe Programme about how it has helped them has been a humbling and fulfilling experience for Madonna. Having heard the stories of many of the mentees, she is happy to have been given the opportunity to be a blessing to them through the programme. She shares her story. My name is Madonna Yaa Oduro. I served as Project Coordinator for the CoRe Programme. Before the outbreak of COVID-19, I was working on another youth initiative project and when the number of cases increased in the country my organization asked its employees to work from home. This presented an opportunity for me to learn the ropes of working effectively and productively from home to meet deliverables. Personally, aside dealing with the anxiety that came with the pandemic, my husband had to be away for about a year because of the country’s lockdown and the closure of its international borders and airport. Working on the CoRe project made me grateful and grounded because I realized I was fortunate. I had to look at the positive side of everything as I continuously heard the stories of other youth who were not as fortunate as myself. I also acquired a lot of knowledge from the different components of the project, and I was therefore better prepared to deal with the challenges that came with the pandemic. The project made me to better appreciate that when technology is used appropriately and effectively, it can be a great tool to create an impact in the lives of youth. One great highlight of the project for me was the effective use of messaging platforms such as WhatsApp to provide mentoring and counselling to beneficiaries. I also embraced the new way of life which was that technology was going to play a crucial role in every aspect of our lives. It was always such a joy to hear from our beneficiaries through feedback and success stories about how the project has impacted their lives through listening to our weekly e-learning episodes or being counselled and mentored on the project.",
      },
      {
        name: "CoRe Story",
        author: "Sylvia Akuffo",
        backgroundImage: "./testimonials/sylvia.jpg",
        date: "2024-02-01",
        intervention: "Other",
        content:
          "I learnt to build resilience and strength.  Sylvia has learnt how to build resilience in the face of unexpected situations including COVID-19 and its...",
        readmore: "Read More",
        info: "Sylvia has learnt how to build resilience in the face of unexpected situations including COVID-19 and its effects. She has developed the agility and mental strength needed to prevail and thrive amid crisis moments. My name is Sylvia Akuffo, e-Counselling Lead for the CoRe Programme. Before COVID-19, I was primarily at home taking care of my family because a project I was working on had just ended. As a stay-at-home mother, I faced a lot of mental stress and anxiety with the outbreak of COVID-19. I was burdened with the uncertainties and risks of the pandemic and the effect it could have on my family, especially because some close family members because of the nature of their work had no option but to go out very often. I was honestly very scared, asking so many questions such as “what if they contracted the virus and what if the whole family subsequently contracted it?” Joining the CoRe Programme within that period and being the lead on the e-Counselling intervention of the programme, I was fortunate to be exposed to most of the counselling sessions on the programme. I must confess I benefitted immensely from the sessions. I learnt how to deal with unexpected situations including COVID, building and developing my mental strength to go through crisis moments, bouncing forward and being more resilient in all situations. I consequently became better able to manage my anxieties especially as a family person. I learnt and became more relaxed and encouraged close relations to strictly adhere to the precautionary measures and protocols of COVID as part of the learnings received in dealing with my anxieties relating to COVID. The programme has really helped me to build my mental strength and be better placed to deal with my anxieties, which hitherto was a challenge. Prior to joining the programme, I never imagined that social media and, in this case, WhatsApp could be utilized to implement a huge programme such as CoRe and impact the lives of thousands of young people in Ghana and even beyond. I have thus come to realize through the CoRe programme that it is possible to transform and even save lives virtually by putting in place the right infrastructure and systems.",
      },
      {
        name: "CoRe Story",
        author: "Eric Otchere",
        backgroundImage: "./testimonials/eric.jpg",
        date: "2024-02-01",
        intervention: "Other",
        content:
          "I was stretched to accomplish more.  Eric is filled with awe and amazement about the way technology and social media have been harnessed so...",
        readmore: "Read More",
        info: "Eric is filled with awe and amazement about the way technology and social media have been harnessed so effectively to impact the lives of so many across the globe before his very eyes. As the e-Mentoring lead for the CoRe Programme, he has been challenged to aspire to greater heights. I Eric Otchere, and I had the honour of serving as the e-Mentoring Lead for the CoRe Programme. Before COVID-19, I was working as Church Administrator and a Probationer Pastor of the International Central Gospel Church in Accra, Ghana. My world was totally disrupted when COVID-19 unleashed its multiple effects upon all of us. I could not do the normal duties of a pastor including attending meetings and services, pulpit ministry, and visiting members, not to talk of going to the office to work. We were thrown into a different world altogether. One major realisation for me was that no job was secured. When I joined the CoRe programme, initially through the Thursday hangout, Rev. Albert Ocran shared a three-part message about Talent Discovery, Development and Deployment. It set me on a path to thinking about what I have been doing with my talents, experiences, and education. I got back to blogging and started another initiative of podcasting. The writing spurred me on to begin sending articles to news outlets such as myjoyonline.com, citifmonline, ghanaweb.com and modernghana.com. I also had the opportunity to write for some new bloggers I got to know. My eyes were totally opened to a new world of blogging and sharing daily content to help other people. I then got the invitation to be part of the CoRe Team as the Lead for e-Mentoring. Initially, I felt it would be too much, knowing the workload at my workplace. But I was challenged to join the team and I found it amazing. Here are a few things I have learnt: One, a common tool like WhatsApp can transform generations if used for educating people. Even though I knew it was possible, in my very eyes, I saw over 9,000 young people sign up to groups and be mentored. Two, it is possible to do more than we are doing now. I learnt as a team member that we can always stretch ourselves to do more than what we are currently doing at work. CoRe has stretched me to do more and achieve more. Coordinating over 300 mentors and assistants, 9,000 mentees and groups proved to be humbling. Being part of CoRe is arguably one of the most fulfilling ventures I have undertaken in my entire life, even though the fallouts COVID-19 led to 2020 being described as a period of destruction.",
      },
      {
        name: "CoRe Story",
        author: "Matthew Peprah Boateng",
        backgroundImage: "./testimonials/mathew.jpg",
        date: "2024-02-01",
        intervention: "Other",
        content:
          "Many will reference CoRe as their turning point.  Matthew saw at close range how COVID-19 abruptly disrupted the Springboard 2020 Road Show as well...",
        readmore: "Read More",
        info: "Matthew saw at close range how COVID-19 abruptly disrupted the Springboard 2020 Road Show as well as his master’s Programme. He describes how the CoRe Programme became arguably a far bigger outlet for expressing his passion for developing young people. The global news coverage in December 2019 of a new coronavirus and its rapid spread appeared as one of those conventional happenings that capture the world’s attention for a short while and quietly fade out without much fuss. Little did I know that this outbreak will escalate into a global pandemic in record time and considerably change my life within a few months. My name is Matthew Peprah Boateng, and I oversee operations at the Springboard Road Show Foundation. I served as a Deputy Project Manager in charge of Operations on the CoRe Programme from June to December 2020. When the President of Ghana directed that all public events should be put on hold as a COVID-19 preventive measure in March 2020, our team was feverishly preparing for the Global Convocation of the Springboard 2020 Road Show in Accra. Our mandate for the 14th annual edition of that nationwide youth development intervention was to train and mentor five thousand emerging leaders, young entrepreneurs, and tertiary students through zonal conferences and a million others through digital channels. Before the directive, we had held two highly successful events in Kumasi and Cape Coast. We had the finale slated in 6 days’ time at the Accra International Conference Centre when the COVID-19 lockdown was announced. All pre-conference activities and stakeholder engagements were terminated with significant financial and logistical implications. On a personal front, I was, at the time, preparing for the final semester of my Master of Arts (MA) in Marketing Strategy with the University of Ghana Business School. I had planned to take an extended break from work to concentrate on academic activities. Suddenly, one could not be sure of anything. The various uncertainties clouded my passion for driving change and improving lives. The hopes of many young people who depended on Springboard’s roadshows for career and personal development guidance was fading. After a while, it became clear that young people needed to urgently reskill to be relevant during and post-COVID-19. Amidst all these uncertainties, the CoRe Programme became the bridge for the gap in my life. Contributing to the planning and scoping of the CoRe Programme and being so directly involved in its implementation brought me fulfilment and renewed hope. CoRe created new and limitless avenues to reach more young people, something I’ve been passionately pursuing for the most part of my professional life. Initially, the task of using digital platforms and mainstream media to provide support for young people to survive the challenges of the pandemic appeared daunting from the onset, considering the many technology and internet limitations among the target beneficiaries.  However, through teamwork, a learning spirit, hard work and dedicated leadership, CoRe reached record numbers with an average of over three million young people benefitting from the e-learning broadcasts each month throughout the period. Through the e-Learning episodes, young people were guided to nurture and utilize their talents. They were counselled to cope with job losses, anxieties, and traumatic experiences, and groomed to develop skills relevant for the post-COVID-19 world of work. The Group Counselling and Group Mentoring sessions brought beneficiaries closer to professionals for psychosocial and technical support, respectively. By far, the most gratifying part of this CoRe Programme has been the opportunity to hear, at first hand, the impact stories of beneficiaries, many of whom expressed deep appreciation to Mastercard Foundation, Springboard Road Show Foundation and Solidaridad as well as their mentors, counsellors and facilitators. I firmly believe that the lessons and impact of the CoRe Programme will be felt for many more years. The stories and testimonies will continue to pour in, and the overall impact will grow bigger and bigger over time. I will not be surprised to hear people share stories soon and refer to the CoRe Programme as the turning point in their lives. Thank you, Mastercard Foundation, for investing in young people’s lives and rekindling my passion.",
      },
      {
        name: "CoRe Story",
        author: "Dr. Albert Sedohia",
        backgroundImage: "./testimonials/albert.jpg",
        date: "2024-02-01",
        intervention: "Other",
        content:
          "I am delighted to have served.  Dr. Sedohia is happy about the many lives that were imparted through the CoRe. He shares his enthused...",
        readmore: "Read More",
        info: "Dr. Sedohia is happy about the many lives that were imparted through the CoRe. He shares his enthused about persons who contacted him about mental health cases and how he helped link them to the relevant facilities. I am Dr. Albert Sedohia, a Psychiatrist Specialist at the Korle-Bu Teaching Hospital. I was with the Psychiatry Mentoring Group of the CoRe Programme. The CoRe Programme has offered me the unique opportunity to reach out to a far larger audience particularly through virtual means with the message of mental health. The peculiarity of this subject area is that quite a few persons are ambivalent and ignorant about the presence of these conditions in their lives. It was however worthy of note that through this programme, a good number of persons have contacted me and cases that ought to be linked to the appropriate facilities have been referred. The programme has also helped me to keep abreast with latest happenings and topics within and outside my practice. I am really delighted to have had the opportunity to serve as a mentor because, “to whom much is given, much is expected”. I commend the organizers of this remarkable programme for taking advantage of the digital space to transform lives.",
      },
      {
        name: "CoRe Story",
        author: "Shirley Ama Atta Hayford",
        backgroundImage: "./testimonials/shirley.jpg",
        date: "2024-02-01",
        intervention: "Other",
        content:
          "I met people from different backgrounds.  I met a whole lot of people from different backgrounds…”, Shirley asserts, as she chronicles how the opportunity...",
        readmore: "Read More",
        info: "I met a whole lot of people from different backgrounds…”, Shirley asserts, as she chronicles how the opportunity to network with different minds and perspectives have served as an eye opener for her. My name is Shirley Ama Atta Hayford. I served as an e-Counsellor on the CoRe Programme. Through the programme, I have gleaned a lot of knowledge from programme beneficiaries, my counterparts, and the Springboard-CoRe team. The CoRe Programme was an eye opener for me especially the topics which bordered on finance. My level of knowledge and understanding has shot up and I’m able to make an impact on my beneficiaries and family. Imagining or placing myself in the shoes of beneficiaries has enabled me to understand them better and relate with them more empathetically. I met a whole lot of people from different backgrounds, shared ideas and we learned from each other in such an awe-inspiring feeling of togetherness. I also got a lot of fulfilment from counselling participants who shared their challenges with me. Indeed, beneficiaries of the programme gave a lot of good feedback about how they have been impacted through the various modules of the programme and how they have thus improved upon their skills and are making progressive changes in their lives. Aside of the numerous impact areas of the programme, beneficiaries are indeed happy and have developed a more positive outlook on their lives and future. Making new friends and establishing contacts with others has really served to expand my scope of networks which I believe will be relevant in my career pursuits. I must say that it has been a good experience and we are returning to our various workplaces with a lot of new discoveries, talents, and ideas from the CoRe programme. Kudos to the engineers behind this great intervention called the CoRe Programme.",
      },
      {
        name: "CoRe Story",
        author: "Sarah Getahun Woldeamanuel",
        backgroundImage: "./testimonials/sarah.jpg",
        date: "2024-02-01",
        intervention: "Other",
        content:
          "This has been a soul- inspiring and uplifting experience.  Sarah talks about the huge impact the Core programme has had on mentees and participants...",
        readmore: "Read More",
        info: "Sarah talks about the huge impact the Core programme has had on mentees and participants and how she was filled with so much joy and fulfilment because of that. She shares why she is confident that the programme has achieved its goal. My name is Sarah Getahun Woldeamanuel, a counsellor. I served as e-Counsellor on the CoRe Programme with the CoRe Wonderful group. When I received a message from the Ghana Psychological Association (GPA) office asking me if I was ready to work as a front-liner for COVID-19, although I gladly said yes, thinking that it was one of the face-to-face assignments that I did earlier, little did I know that I was going to become ‘omnipresent’; traveling to every region, entering every room, and simultaneously speaking to everyone in the comfort of their space. After working for a while, I realized that although the programme is targeted at bringing resilience to the youth of Ghana who have been affected by the disruptions of the COVID-19 pandemic, I can confidently say that as one of the e-counsellors, I have also benefited from the programme in various ways. First and foremost, was the joy and the fulfilment that I got when I understood the positive transformation that was taking place in the lives of the targeted population. As I observed their migration from hopelessness to optimism, from fear and anxiety to resilience, from joblessness to productivity and earning incomes, each day became exciting because of all these transformational experiences being expressed on the platform and through phone communications with the beneficiaries. Secondly, it was a blessing hearing the testimonies of the individually counselled youth concerning their victories over suicidal ideation, substance abuse, depression, and other psychosocial-related issues. Furthermore, it was uplifting to observe our professional intervention being appreciated by the new generation and their in-depth understanding of the importance of the role that counselling psychology is playing in aiding mankind’s total well-being. It was heart-warming to observe their readiness to serve as ambassadors of counselling psychology wherever they found themselves. Here are some of the expressions that have been taken from some of the beneficiaries’ posts and phone conversations: Annati Christian, who became very enthusiastic about the role of professional counselling said: “…I think there should be a professional counsellor in every organization.” He also said during another discussion: “Now I know that I have to get a professional counsellor in a company that I am trying to set up” In another session, he asked the following question in despair: “How many young people are aware of professional pre-marital counselling?” Another group member, Joseph Bukwe, expressed his disappointment towards some of his friends’ ignorance revealed in their response to another friend who had lost both parents in an accident on the same day. “When I wanted to connect him to a counsellor, his friends said they could handle him. You see, how society doesn’t even know the value of experts?” During a screening session, another lady also said in appreciation “I know that a counselling service is very expensive. We are grateful for the opportunity given to us to get it for free; and we intend to make full use of it.”. Consequently, while they were benefiting more and more, they did not want to keep it only to themselves but started sharing and seeking help and interventions for their friends and family members who were not part of the CoRe programme, and counselling services were provided for them. We can all now confidently say ‘change is inevitable but bouncing back is possible.’ Initially, beneficiaries were not ready to share and discuss their issues on the platform. But as we moved on, they developed trust and confidence not just in their counsellor but in themselves as well. Subsequently, I was no-longer a counsellor alone but a significant other and a source of social support. I remember during one of our sessions when I asked the group to write the names and contact numbers of at least 3-5 people to serve as their social supports, some of the members said my name and contact number would be among their list, which I also gladly replied saying “Sure!” and I have become one. They do call or send me messages any time the need arises. We have enjoyed each other’s company during our sessions; although the programme was designed to last for one-hour (7:00-8:00pm), it has never been so in the CoRe Wonderful group. The meetings kept going on and on even as late as 9:30 pm. My group members were not bothered about checking their time, and I didn’t want to remind them either. When duty is calling, time becomes irrelevant. In general, I can confidently say that the programme has achieved its goal successfully. However, I would also like to give some suggestions that could help in preventing the reoccurrence of some of the challenges experienced during this programme. In my opinion, the responsibilities of screening beneficiaries, forming the groups, and procedures of joining the groups should have been given to the e-counsellors from the onset of the programme so that the following challenges would not have been faced: The issues of having uneven numbers in each group especially during the time we were on Telegram. The challenges of starting with Telegram and moving to WhatsApp that drew us back in our services leading to the missing of extra days. The issue of having an open group that contributed to members being in multiple groups (group shopping). This had the effect of drawing back the groups any time new members were joining. The challenges of unqualified individuals joining groups since there wasn’t adequate pre- screening. Finally, I would like to express my enormous gratitude to the brilliant minds behind the planning and designing of this programme, and to the commitment and hard work of everyone in turning the simple social media into making ways and changing lives and for bringing mental health service to every doorstep and making it reachable. Thank you, Ghana Psychological Association (GPA), the CoRe team, Springboard Road Show Foundation, Solidaridad, and Mastercard foundation. I say Ayekoo! God bless you all!",
      },
      {
        name: "CoRe Story",
        author: "Alice Elsie Afram",
        backgroundImage: "./testimonials/alice.jpg",
        date: "2024-02-01",
        intervention: "Other",
        content:
          "An experience of joy and satisfaction.  Alice had the fulfilling opportunity to offer her services as counsellor during the CoRe Programme. She shares how...",
        readmore: "Read More",
        info: "Alice had the fulfilling opportunity to offer her services as counsellor during the CoRe Programme. She shares how it proved to be a fulfilling experience and the insights and exposure she gained in the process. My name is Alice Elsie Afram, a counsellor. I served as an e-Counsellor for the CoRe Peace Group. The CoRe Programme gave me an opportunity to offer my skills and help to those who needed it the most. It gave me great joy and satisfaction as I pursued my passion and purpose in life. I learnt a lot from the programme as it pushed me to do more research on the various topics that were discussed. The CoRe Programme has been an eye- opener for me to start providing online counselling services. I have gained more confidence in myself. I say a big thank you to Springboard Road Show Foundation and the Ghana Psychological Association.",
      },
      {
        name: "CoRe Story",
        author: "Augustina Atkinson Dadebo",
        backgroundImage: "./testimonials/gashti.jpg",
        date: "2024-02-01",
        intervention: "Other",
        content:
          "I got my life back through helping others.  Having been psychologically traumatized and filled with fear after the outbreak of the COVID–19 pandemic, Augustina...",
        readmore: "Read More",
        info: "Having been psychologically traumatized and filled with fear after the outbreak of the COVID–19 pandemic, Augustina gained back her life and composure after she seized the opportunity to help others through their difficult moments and the effects the pandemic had on them. She shares her experiences. My name is Augustina Atkinson Dadebo. For me the CoRe e-Counselling programme was a blessing. I was not just a counsellor, but I can confidently say I was a beneficiary as well. The video and audio on ‘Dealing with the unexpected’ brought me joy and peace. 2020 started so well with me and COVID-19 brought the unexpected. Amidst the fear of contracting the disease, loneliness, and idleness, I fell terribly sick, and it was such an emotional experience. I took up the challenge to serve on the CoRe programme and it helped me to build resilience even on my sick bed. The Ghana Psychological Association (GPA) coordinator held debriefings for all psychologists after every session. The interaction and stories from other counsellors did me a world of good. They were refreshing. I realized that my fear was gone. The joy of always preparing to impact lives brought back life to me. I had to read and prepare to meet intelligent young people. I had to check up on my group members to remind them of meetings. I had brilliant group members who when given assignments, would prepare and present their work as if they were presenting them in class for marks. This made me more alert to read and research more to facilitate my group. God bless the dreamers and the coordinators of CoRe. God bless all the e-counsellors. God bless our Association (GPA). God bless our homeland, Ghana.",
      },
      {
        name: "CoRe Story",
        author: "Charlotte Amoah Saben",
        backgroundImage: "./testimonials/empty.png",
        date: "2024-02-01",
        intervention: "Other",
        content:
          "It’s been a rare opportunity.  Charlotte had the rare opportunity of moderating e-counselling sessions of the CoRe Programme. It was a really enriching experience...",
        readmore: "Read More",
        info: "Charlotte had the rare opportunity of moderating e-counselling sessions of the CoRe Programme. It was a really enriching experience for which she remains grateful, coupled with the new knowledge she acquired. Let’s hear her story. My name is Charlotte Amoah Saben. Joining the CoRe programme has been of immense benefit and exposure to me, particularly the virtual, focused group discussions. I had the opportunity to moderate some of the sessions and I must admit that I enjoyed the experience as I was equipped with the requisite technological tools to aid my work. The medium for the e-Counselling was good because participants were on the various social media platforms which were deployed for this purpose, thus making participation easier. I must also say that the program audios were crucial for my career. I gleaned a lot from them. I learnt how to manage my time better and how to schedule and plan my days to maximize my participation in the programme. Apart from that, my own emotional struggles were dealt with, and I have become more patient with my clients. I have learnt to be resilient and calm and persist in the pursuit of my goals in life.",
      },
      {
        name: "CoRe Story",
        author: "Paulina L. Essel",
        backgroundImage: "./testimonials/paul.jpg",
        date: "2024-02-01",
        intervention: "Other",
        content:
          "This has been revealing and fulfilling.  Paulina was doubtful about how feasible the idea of e-counselling was going to be as she had had...",
        readmore: "Read More",
        info: "Paulina was doubtful about how feasible the idea of e-counselling was going to be as she had had no previous experience. To her amazement, she realized the enormous potential in e-counselling as beneficiaries were able to share their stories and receive help. She calls it a revealing period of her life. I am Paulina L. Essel, a Counseling Psychologist. I was initially wondering if I wanted to join this CoRe e-Counselling programme. I considered the fact that I had not had e-Counselling for a group in my three years of experience as a Counselling Psychologist. I however took up the challenge. It is with a grateful heart and great joy that I state that this e-Counselling programme has been a most fulfilling experience in my life. One topic which I felt was an eye opener for the beneficiaries was the topic on ‘dealing with the unexpected’ handled so expertly by my colleague, Dr. Joana Larry-Afutu, and subsequently used for the group sessions. In my counselling career, one issue I try to avoid is assisting clients in crisis because it makes me emotional. Ironically two of the beneficiaries were in crisis and I had to apply all my skills to intervene. Surprisingly, I dealt with them to their admiration and within a few weeks, they had bounced back earlier than I even expected. Those who wanted to privately message me to assist them also did so. All in all, it was a revealing period of my life and the experience gained was enormous. I am appreciative of Springboard and other partners for coming out with such a programme to assist our young ones in their lives’ journeys.",
      },
      {
        name: "CoRe Story",
        author: "Ben A. Mikado",
        backgroundImage: "./testimonials/ben.jpg",
        date: "2024-02-01",
        intervention: "Other",
        content:
          "I was both a counsellor and beneficiary.  Ben has gained valuable experience in E-counselling, and he believes it will serve him well in the....",
        readmore: "Read More",
        info: "Ben has gained valuable experience in E-counselling, and he believes it will serve him well in the future as a young counselling psychologist. He shares his story. My name is Ben A. Mikado, a counsellor. The CoRe e-Counselling programme has been very impactful for me. I was not just a counsellor but also a beneficiary. As a young counselling psychologist, it gave me the opportunity to learn from very experienced psychologists from various branches in the field. This was due to the constant debriefing sessions and several webinars prior to the programme take-off to equip us with the best practices regarding e-counselling. I really learnt a lot. Now, I have gathered a lot of experience regarding e-counselling, which has become a necessary part of counselling in the world today. The information contained in the videos and audios meant for beneficiaries proved useful as I also gleaned lessons from them. I also had the opportunity to do a lot of reading and research on the topics before my sessions and it served me well. Through the programme, I had the opportunity to interact with youth from various backgrounds in our dear nation. God bless the organizers of the programme (SRSF) and the Ghana Psychological Association (GPA) for accepting the challenge and providing the necessary resources for a successful programme. I saw during some of the translations of the e-learning audios and video into the various local languages. What I noticed, especially with the local language, is that recordings related to mental health issues were translated by persons who were not practitioners, and it was a bit challenging for them. I suggestion that in future, psychologists who are equally versed in the local language can be consulted to assist in the translation, especially, the local psychological terms and words before recording. Thanks.",
      },
      {
        name: "CoRe Story",
        author: "Hilda Dwamena Boateng",
        backgroundImage: "./testimonials/hilda.jpg",
        date: "2024-02-01",
        intervention: "Other",
        content:
          "A humbling experience.  Hilda came on board the CoRe Programme as a volunteer to counsel others. She however encountered other experienced professionals who really...",
        readmore: "Read More",
        info: "Hilda came on board the CoRe Programme as a volunteer to counsel others. She however encountered other experienced professionals who really made a huge impact in her life. It has been an extremely enriching experience for her. I am Hilda Dwamena Boateng. I volunteered for the CoRe e-Counseling programme with the hope of impacting the youth, since that is my area of interest. Through this programme, the self-impact has been massive. I have had the exposure and the opportunity to meet and learn from experienced counsellors and to a larger extent, it has been a very humbling experience. I also learnt a lot from the e-learning sessions on the topics like “Identifying your talent, doing business with your talent, doing business the new normal way, etc”. My knowledge has also expanded due to the additional reading and research I had to engage in during the programme. I have had the opportunity to meet and interact greatly with persons I have never met on the individual and group level. My use of social media has greatly increased like never. I have come to the realization that, to get to the youth, through social media, WhatsApp is one of the most convenient channels. Simply watching clients’ statuses and reading other posts has provided helpful clues for counselling. Altogether, the programme has given me practical insights into counselling. I got introduced to the use of zoom and telegram in a better way. To the initiators, facilitators, coordinators, and Springboard, I say God bless you for the opportunity.",
      },

      // ... more items
    ];

    setYourOriginalItems(mockData);
    setFilteredAndSortedItems(mockData); // Initially set the items unfiltered and unsorted
  }, []); // Empty dependency array ensures the effect runs only once during component mount

  const handleSortChange = (option) => {
    const newSortOptions = Object.fromEntries(
      Object.keys(sortOptions).map((key) => [key, false])
    );

    newSortOptions[option] = true;
    setSortOptions(newSortOptions);

    const sortedItems = [...filteredAndSortedItems];
    switch (option) {
      case "A-Z":
        sortedItems.sort((a, b) => a.author.localeCompare(b.author));
        break;
      case "Z-A":
        sortedItems.sort((a, b) => b.author.localeCompare(a.author));
        break;
      case "Date-LowToHigh":
        sortedItems.sort((a, b) => new Date(a.date) - new Date(b.date));
        break;
      case "Date-HighToLow":
        sortedItems.sort((a, b) => new Date(b.date) - new Date(a.date));
        break;
      default:
        break;
    }

    setFilteredAndSortedItems(sortedItems);
  };

  const toggleSortDropdown = () => {
    setIsSortOpen(!isSortOpen);
  };

  const handleInterventionChange = (option) => {
    const newInterventionOptions = Object.fromEntries(
      Object.keys(interventionOptions).map((key) => [key, false])
    );

    newInterventionOptions[option] = true;
    setInterventionOptions(newInterventionOptions);

    // Implement logic based on the selected intervention option
    const filteredItems = yourOriginalItems.filter(
      (item) => item.intervention === option
    );
    setFilteredAndSortedItems(filteredItems);
  };

  const toggleInterventionDropdown = () => {
    setIsInterventionOpen(!isInterventionOpen);
  };

  const handleSearchChange = (e) => {
    const newSearchQuery = e.target.value;
    console.log("New Search Query:", newSearchQuery);
    setSearchQuery(newSearchQuery);
  };

  const handleApplySearch = () => {
    console.log("Applying Search...");

    const searchResult = yourOriginalItems.filter(
      (item) =>
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.author.toLowerCase().includes(searchQuery.toLowerCase())
    );

    console.log("Search Result:", searchResult);

    // Apply sorting or other logic if needed
    const sortedSearchResult = searchResult.sort((a, b) =>
      a.name.localeCompare(b.name)
    );

    // Apply slicing based on visibleItems
    const slicedSearchResult = sortedSearchResult.slice(0, visibleItems);

    setFilteredAndSortedItems(slicedSearchResult);
    console.log("Filtered and Sorted Items:", slicedSearchResult);
  };

  const loadMore = () => {
    const newVisibleItems = visibleItems + 4;
    setVisibleItems(newVisibleItems);
  };

  const [popupOpen, setPopupOpen] = useState(null);
  const [modalWidth, setModalWidth] = useState("50%");
  const [openedPopupIndex, setOpenedPopupIndex] = useState(null);
  const [customModalStyles, setCustomModalStyles] = useState({
    overlay: {
      backgroundColor: 'rgba(0, 0, 0, 0.7)',
    },
    content: {
      width: modalWidth,
      height: "fit-content",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      padding: "50px",
      backgroundColor: "#fff",
      border: "1px solid #ccc",
      zIndex: "1",
      overflowY: "auto",
      backgroundColor: 'rgba(0, 0, 0, 0.7)',
      
      
    },
  });

  const handlePopupToggle = (index) => {
    setOpenedPopupIndex(openedPopupIndex === index ? null : index);
  };

  useEffect(() => {
    const updateModalStyles = () => {
      const newWidth = window.innerWidth >= 850 ? "100%" : "95%";
      const windowHeight = window.innerHeight;
      const newHeight = windowHeight >= 850 ? "fit-content" : "fit-content"; // Adjust the breakpoint (600) and height value as needed
      const newPadding = window.innerWidth >= 850 ? "250px" : "20px"; // Adjust the padding value as needed

      setModalWidth(newWidth);

      const updatedStyles = {
        ...customModalStyles.content,
        width: newWidth,
        height: newHeight,
        padding: newPadding,
      };

      setCustomModalStyles({
        ...customModalStyles,
        content: updatedStyles,
      });
    };

    updateModalStyles();
    window.addEventListener("resize", updateModalStyles);

    return () => {
      window.removeEventListener("resize", updateModalStyles);
    };
  }, [customModalStyles]);
  

  const [openedVideoIndex, setOpenedVideoIndex] = useState(null);
  const [openedReadMoreIndex, setOpenedReadMoreIndex] = useState(null);
  const handleVideoToggle = (index) => {
    setOpenedVideoIndex(openedVideoIndex === index ? null : index);
  };

  // Function to handle opening/closing the "Read More" popup
  const handleReadMoreToggle = (index) => {
    setOpenedReadMoreIndex(openedReadMoreIndex === index ? null : index);
  };




//   const isMobile = window.innerWidth <= 850; // Adjust the breakpoint as needed

// const modalStyle = {
//   overlay: {
//     backgroundColor: 'rgba(0, 0, 0, 0.7)',
//   },
//   content: {
//     position: 'absolute',
//     top: '50%',
//     left: '50%',
//     Width:'100%',
//     // minHeight:'fit-content',
//     transform: 'translate(-50%, -50%)',
//     width: isMobile ? '90%' : '60%',
//     height: isMobile ? 'fit-content' : '80%',
//   },
// };

  return (
    <div className="w-full">
      {/* impact */}
      <div className="w-full">
        <div className="w-full h-[470px] bg-[url('/impact.jpg')] bg-no-repeat bg-cover flex items-center ">
          <div className="w-full h-full bg-black bg-opacity-[0.5]">
            <div className="max-w-[1500px] mx-auto h-full flex items-center max-tab:justify-center px-[80px] max-tab:px-[40px] max-md:px-[28px]">
              <div className="text-[64px] text-white font-bold max-tab:text-center">
                Impact
              </div>
            </div>
          </div>
        </div>
        <div className="w-full max-w-[1500px] mx-auto  py-[40px] flex justify-center px-[80px] max-tab:px-[40px] max-md:px-[28px]">
          <div className="w-full">
            <div className="text-[16px] font-sans font-[400] max-md:text-start">
              With fifteen years of experience in youth mobilisation, engagement
              and mentoring, the Springboard Road Show Foundation is Ghana’s
              leading promoter of youth entrepreneurship, talent development and
              investment among tertiary students, graduates, young executives,
              and formal and informal youth groups nationwide.
              <div className="pt-3 font-sans">
                The Foundation has over the years documented stories of young
                people who have been mentored into entrepreneurship and have
                gone on to build thriving businesses. The nationwide Springboard
                Road Show has over 300,000 alumni.
              </div>
              <div className="pt-3 font-sans">
                In 2020, the experience gained in this field was recognised when
                Mastercard Foundation partnered with Springboard for the
                COVID-19 Recovery and Resilience (CoRe) Programme. The CoRe
                Programme ended up reaching and empowering an estimated
                twenty-three million young people using technologically driven
                solutions like e-Learning, e-Mentoring, and e-Counselling. A
                notable outcome of the CoRe Programme was a publication of 200
                success stories about young people bouncing back from COVID-19,
                many of which are entrepreneurial in orientation.
              </div>
              <div className="pt-3 font-sans">
                Springboard engages youth from the grassroots level with a
                multi-layered mentoring approach. Our bootcamp for teenagers,
                TEENPreneurship, targets youth between 12-17 years. Our
                nationwide Roadshow targets secondary and tertiary students and
                young professionals largely between the ages of 18-35 years. Our
                continuous education initiatives (Publications, Radio, TV and
                Online shows) offer programming that cuts across all youth
                demographics. We also offer specialized mentoring for young
                ladies under our Ladies Empowerment and Advocacy Development
                (LEAD) initiative. At Springboard, we believe no youth must be
                left behind.
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* testimonial */}
      <div className="w-full text-center max-w-[1500px] mx-auto px-[80px] max-tab:px-[40px] max-md:px-[28px]">
        <div className="text-[45px] font-bold text-[#56008c]">Testmonials</div>
        <div className="w-full mt-[30px] flex justify-center max-tab:flex-col max-tab:gap-[30px]">
          <div className="w-full mt-[30px] flex justify-center max-tab:flex-col max-tab:gap-[30px]">
            <div className="w-[30%] flex flex-col items-start max-tab:w-full">
              {/* Sort Dropdown */}
              <div className="w-full h-auto flex flex-col">
                <div
                  className={`flex justify-between items-center w-full h-[40px] bg-gray-50 border border-gray-300 px-4 text-gray-600 text-[17px] cursor-pointer ${
                    isSortOpen ? "white" : ""
                  }`}
                  onClick={toggleSortDropdown}
                >
                  Sort:{" "}
                  {Object.entries(sortOptions).find(
                    ([key, value]) => value
                  )?.[0] || "None"}
                  {!isSortOpen && <GoChevronDown />}
                </div>
                {isSortOpen && (
                  <div className="w-full font-sans border-l border-r border-b border-grey-600 shadow-xl  h-auto flex flex-col  font-[400] items-start text-gray-600">
                    <button
                      onClick={() => handleSortChange("A-Z")}
                      className={`py-1 px-3 w-full text-start ${
                        sortOptions["A-Z"]
                          ? "bg-blue-500 text-white"
                          : "bg-white"
                      }`}
                    >
                      Alphabetic from A to Z
                    </button>
                    <button
                      onClick={() => handleSortChange("Z-A")}
                      className={`py-1 px-3 w-full text-start ${
                        sortOptions["Z-A"]
                          ? "bg-blue-500 text-white"
                          : "bg-white"
                      }`}
                    >
                      Alphabetic from Z to A
                    </button>
                    <button
                      onClick={() => handleSortChange("Date-LowToHigh")}
                      className={`py-1 px-3 w-full text-start ${
                        sortOptions["Date-LowToHigh"]
                          ? "bg-blue-500 text-white"
                          : "bg-white"
                      }`}
                    >
                      Sort By Date (Low to High)
                    </button>
                    <button
                      onClick={() => handleSortChange("Date-HighToLow")}
                      className={`py-1 px-3 w-full text-start ${
                        sortOptions["Date-HighToLow"]
                          ? "bg-blue-500 text-white"
                          : "bg-white"
                      }`}
                    >
                      Sort By Date (High to Low)
                    </button>
                  </div>
                )}
              </div>

              {/* Intervention Dropdown */}
              <div className="w-full border-l border-r border-b border-grey-600  h-auto flex items-start justify-start flex-col mt-3">
                <div
                  className={`flex justify-between  items-center w-full h-[40px] bg-gray-50 border border-gray-300 px-4 text-gray-600 text-[17px] cursor-pointer ${
                    isInterventionOpen ? "white" : ""
                  }`}
                  onClick={toggleInterventionDropdown}
                >
                  Intervention:{" "}
                  {Object.entries(interventionOptions).find(
                    ([key, value]) => value
                  )?.[0] || "None"}
                  {!isInterventionOpen && <GoChevronDown />}
                </div>
                {isInterventionOpen && (
                  <div className="w-full font-sans font-[400] h-auto flex items-start flex-col text-gray-600">
                    <button
                      onClick={() => handleInterventionChange("CoRe")}
                      className={`py-1 px-3 w-full text-start ${
                        interventionOptions["CoRe"] ? "bg-blue-500" : "bg-white"
                      }`}
                    >
                      CoRe
                    </button>
                    {/* ... (similar entries for other intervention options) */}
                  </div>
                )}
              </div>

              {/* Search Input */}
              <input
                type="text"
                id="input-group-1"
                className="bg-gray-50 border mt-3 border-gray-300 text-gray-900 text-[17px] focus:ring-blue-500 block w-full h-[50px] ps-5 dark:border-gray-600 border-opacity-[0.2] outline-none dark:placeholder-gray-400 "
                placeholder="Search"
                value={searchQuery}
                onChange={handleSearchChange}
              />

              {/* Apply Search Button */}
              <button
                type="submit"
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium mt-3 text-[17px] px-5 py-3 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                onClick={handleApplySearch}
              >
                Apply Search
              </button>
            </div>

            {/* Display Items */}
            <div className="w-[60%] flex flex-wrap justify-between gap-[30px] max-tab:w-full ml-6 max-tab:ml-0">
              {filteredAndSortedItems
                .slice(0, visibleItems)
                .map((item, index) => (
                  <div
                    key={index}
                    className={`w-[350px]    relative h-[600px]  bg-no-repeat bg-cover bg-center max-tab:w-[350px] max-md:w-full flex items-end`}
                  >
                    <img
                      src={item.backgroundImage} // Replace with your actual image property
                      alt=""
                      className="absolute inset-0 w-full h-full object-contain max-tab:object-cover object-top"
                    />
                    <div className="w-full text-white font-[600] h-[60%] p-[30px] bg-[#521776] flex items-center justify-center relative">
                      <div className="bg-[#68B241] absolute -top-4 right-6 text-[12px] py-[8px] px-[8px] rounded-[20px]">
                        {item.name}
                      </div>
                      <div className="flex flex-col gap-[15px]">
                        <h3 className="text-[20px]">{item.author}</h3>
                        <p className="text-[13px] font-normal font-sans">
                          {item.content}
                        </p>

                        <Link
                          to={`/testimonial/${item.author}`}
                          onClick={() => handlePopupToggle(index)}
                          className="py-[7px] text-[14px] font-[400] mt-[20px] text-black font-sans bg-white w-[40%] mx-auto rounded-[30px] hover:bg-[#521776] hover:border-[2px] hover:text-white transition-all duration-[3]"
                        >
                          {item.readmore}
                        </Link>
                      </div>
                    </div>
                    <ReactModal
                      isOpen={openedPopupIndex === index}
                      onRequestClose={() => handlePopupToggle(index)}
                      contentLabel="Popup"
                      style={customModalStyles}
                    >
                      <div className="nwn h-[35px] px-[10px] w-full bg-[#521776] flex justify-between items-center text-white">
                        <p>{item.name}</p>
                        <button onClick={() => handlePopupToggle(index)}>
                          <IoCloseCircleOutline size={20} />
                        </button>
                      </div>
                      <div className="w-full py-[60px] h-[90%] px-[20px] flex items-center">
                        <div className="flex gap-[40px] max-tab:flex-col max-tab:gap-[70px] max-tab:items-center">
                          <div className="w-[450px] max-tab:w-[296px] max-md:w-full h-[306px]">
                            <img
                              src={item.backgroundImage}
                              alt=""
                              className="w-full h-full object-contain "
                            />
                            <h3 className="text-[19px] font-sans font-[700] text-[#56008C] mt-3">
                              {item.author}
                            </h3>
                            <p className="text-[14px] font-[500] font-sans">
                              {item.intervention}
                            </p>
                          </div>
                          <div className="right w-fit max-tab:w-full">
                            <h3 className="text-[30px] font-sans font-[800] text-[#56008C] max-md:leading-8">
                              CoRe must be replicated in our schools.{" "}
                            </h3>
                            <div className="text-[16px] font-sans font-[400] max-md:text-start">
                              {item.info}
                            </div>
                          </div>
                        </div>
                        <div></div>
                      </div>
                    </ReactModal>
                  </div>
                ))}
              {visibleItems < filteredAndSortedItems.length && (
                <button
                  className="text-[14px] text-white w-full py-[15px] bg-[#2238E2]"
                  onClick={loadMore}
                >
                  Load More
                </button>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="last mt-[50px] grid flex-wrap grid-cols-3 max-tab:grid-cols-2 max-md:grid-cols-1">
        {dataArray.map((item, index) => (
          <div
            key={index}
            className="w-full relative h-[550px] bg-[url('{item.videoUrl}')] bg-cover cursor-pointer"
          >
            <img
              src={item.image}
              alt=""
              className="w-full object-cover h-full absolute z-[-1]"
            />

            <div className="w-full h-full flex items-center group">
              <div className="hvr opacity-0 w-full h-full bg-[#521776] group-hover:flex items-center justify-center transition-all duration-3000 ease-in-out group-hover:opacity-100">
                <div className="center text-white flex flex-col gap-[40px] items-center">
                  <div className="text-center cursor-pointer">
                    <FaPlay
                      size={35}
                      onClick={() => handleVideoToggle(index)}
                    />
                  </div>
                  <div className="flex flex-col gap-[20px]">
                    <h3 className="text-[32px] font-bold">{item.name}</h3>
                    <p className="text-[12px] text-center">{item.role}</p>
                    <div className="flex items-center justify-center">
                      <img src={item.coreimg} alt="" className="w-[200px]" />
                    </div>
                  </div>
                </div>
                {/* Video Modal */}
                <ReactModal
                  isOpen={openedVideoIndex === index}
                  onRequestClose={() => handleVideoToggle(index)}
                  contentLabel="Video Popup"
                  style={customModalStyles}
                >
                  <div className="relative ">
                    <FaChevronLeft
                      size={30}
                      className="text-[#ACB1B7] absolute top-[50%] left-2 cursor-pointer z-[1000]"
                      onClick={() => handleVideoToggle(index - 1)}
                    />
                    <FaChevronRight
                      size={30}
                      className="text-[#ACB1B7] absolute top-[50%] right-2 cursor-pointer z-[1000]"
                      onClick={() => handleVideoToggle(index + 1)}
                    />
                    <div className="flex justify-between px-4">
                    <h2 className="text-xl font-bold mb-4 opacity-0">
                      {item.name}'s Video
                    </h2> <button
                    className=" -mt-[15px] text-white absolute max-tab:block -right-[200px] max-tab:right-2 -top-[200px] max-tab:top-2"
                    onClick={() => handleVideoToggle(index)}
                  >
                    <IoCloseCircleOutline size={25} />
                  </button>
                  </div>
                    <div className="w-full h-full flex items-center justify-center">
                      <div className="w-[95%] ">
                        <Slider {...settings} initialSlide={openedVideoIndex}>
                          <div key={openedVideoIndex} className="w-full h-full">
                            <video
                              controls
                              className="w-[50%] max-tab:w-auto h-full mx-auto max-w-full  object-cover"
                            >
                              <source
                                src={dataArray[openedVideoIndex]?.videoUrl}
                                type="video/mp4"
                              />
                              Your browser does not support the video tag.
                            </video>
                            <h2 className="text-xl max-md:text-[15px] text-center text-white font-bold mb-4">
                      {item.name}'s Video
                    </h2>
                          </div>
                        </Slider>
                      </div>
                    </div>
                  </div>
                </ReactModal>
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* Read More Popup */}

      <div className="end w-full flex max-tab:flex-col ">
        <div className="one bg-[#56008C] w-[50%] py-[100px] max-tab:py-[50px] max-tab:w-full flex items-center justify-center">
          <div className="w-[60%]  flex flex-col items-start gap-[25px]">
            <h3 className="text-[37px] text-white font-[800]">
              Share your <br className="max-md:hidden" />
              Springboard Story
            </h3>
            <button className="py-[15px] px-[25px] bg-white rounded-[30px]">
              SUBMIT YOUR STORY
            </button>
          </div>
        </div>
        <div className="two bg-[#68B241] w-[50%] py-[100px] max-tab:py-[50px] max-tab:w-full flex items-center justify-center">
          <div className="w-[60%]  flex flex-col items-start gap-[25px]">
            <h3 className="text-[37px] max-md:text-center text-white font-[800]">
              Join Our <br className="max-md:hidden" />
              Alumni Network
            </h3>
            <button className="py-[15px] px-[25px] bg-white rounded-[30px]">
              SUBMIT YOUR STORY
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Impact;