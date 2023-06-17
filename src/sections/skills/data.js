import { DiJava, DiNodejs, DiPython, DiSwift, DiPostgresql, DiFirebase, DiHeroku, DiGithubBadge, DiGit, DiUnitySmall, DiVisualstudio, DiScrum, DiHtml5, DiJsBadge, DiReact, DiBootstrap } from 'react-icons/di';
import { TbBrandCSharp, TbApi, TbSql } from 'react-icons/tb'
import { FaItchIo, FaAws, FaCss3Alt } from 'react-icons/fa'
import { SiPostman, SiIntellijidea, SiMarkdown } from 'react-icons/si'
import { BiTachometer } from 'react-icons/bi'
import { CgWebsite } from 'react-icons/cg'

const shuffle = arr => [...arr].sort(() => Math.random() - 0.5);

const list = [
    {id: 1, icon: <DiNodejs />, title: 'Framework', desc: "Node.js"},
    {id: 2, icon: <DiPython />, title: 'Language', desc: "Python"},
    {id: 3, icon: <DiSwift />, title: 'Language', desc: "Swift"},
    {id: 4, icon: <TbBrandCSharp />, title: 'Language', desc: "C#"},
    {id: 5, icon: <DiJava />, title: 'Language', desc: "Java"},
    {id: 6, icon: <TbApi />, title: 'RESTful APIs', desc: "API"},
    {id: 7, icon: <DiPostgresql />, title: 'Database', desc: "PostgreSQL"},
    {id: 8, icon: <TbSql />, title: 'Language', desc: 'SQL'},
    {id: 9, icon: <DiFirebase />, title: 'Platform', desc: "Firebase"},
    {id: 10, icon: <DiHeroku />, title: 'Platform', desc: "Heroku"},
    {id: 11, icon: <FaItchIo />, title: 'Platform', desc: "Itch.io"},
    {id: 12, icon: <DiGithubBadge />, title: 'Platform', desc: "Github Pages"},
    {id: 13, icon: <DiGit />, title: 'Tool', desc: "Git"},
    {id: 14, icon: <DiGithubBadge />, title: 'Platform', desc: "GitHub"},
    {id: 15, icon: <DiVisualstudio />, title: 'IDE', desc: "VSCode"},
    {id: 16, icon: <FaAws />, title: 'Platform', desc: "AWS"},
    {id: 17, icon: <SiIntellijidea />, title: 'IDE', desc: "IntelliJ IDEA"},
    {id: 18, icon: <SiPostman />, title: 'Platform', desc: "Postman"},
    {id: 19, icon: <DiUnitySmall />, title: 'Platform', desc: "Unity"},
    {id: 1, icon: <DiHtml5 />, title: 'Language', desc: "HTML"},
    {id: 2, icon: <FaCss3Alt />, title: 'Styling', desc: "CSS"},
    {id: 3, icon: <DiJsBadge />, title: 'Language', desc: "JavaScript"},
    {id: 4, icon: <DiReact />, title: 'Framework', desc: "React"},
    {id: 5, icon: <DiBootstrap />, title: 'Framework', desc: "Bootstrap"},
    {id: 6, icon: <SiMarkdown />, title: 'Language', desc: "Markdown"},
    {id: 2, icon: <CgWebsite />, title: 'Design', desc: 'Responsive Web Design'},
    {id: 3, icon: <BiTachometer />, title: 'Skill', desc: 'Performance Optimization'},
    {id: 4, icon: <DiScrum />, title: 'Methodology', desc: "Scrum"}
]

const data = shuffle(list);

export default data;