import { FaNodeJs, FaReact, FaCss3, FaHtml5, FaJava } from 'react-icons/fa'
import { DiGitBranch, DiScrum, } from 'react-icons/di'
import { SiAngular, SiMicrosoftsqlserver, SiPostgresql, SiSpring } from 'react-icons/si'

import {GrDocker} from 'react-icons/gr'
const data = [

  {
    id: 1,
    image: <FaNodeJs size={50} />,
    title: 'NodeJS',
    domaine: 'Backend'
   
  },
  {
    id: 2,
    image: <FaHtml5 size={50}/>,
    title: 'HTML5',
    domaine: 'Frontend'
   
  },
  {
    id: 3,
    image: <GrDocker size={50}/>,
    title: 'Docker',
    domaine: 'Outil'
  },
  {
    id: 4,
    image: <FaReact size={50}/>,
    title: 'React',
    domaine: 'Frontend'
  },
  {
    id: 5,
    image: <FaCss3 size={50}/>,
    title: 'CSS3',
    domaine: 'Frontend'
  },
  {
    id: 6,
    image: <SiMicrosoftsqlserver size={50}/>,
    title: 'SQL Server',
    domaine: 'Data'
   
  },
  {
    id: 7,
    image: <DiGitBranch size={50}/>,
    title: 'Git',
    domaine: 'Outil'
   
  },
  {
    id: 8,
    image: <SiAngular size={50} />,
    title: 'Angular',
    domaine: 'Frontend'
  },
  {
    id: 9,
    image: <FaJava size={50}/>,
    title: 'Java',
    domaine: 'Backend'
  },
  {
    id: 10,
    image: <SiSpring size={50}/>,
    title: 'Spring',
    domaine: 'Backend'
  },
  {
    id: 11,
    image: <DiScrum size={50}/>,
    title: 'Scrum',
    domaine: 'Outil'
  },
  {
    id: 12,
    image: <SiPostgresql size={50}/>,
    title: 'PostgreSQL',
    domaine: 'Data'
  },
]
export default data
