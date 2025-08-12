import React ,{useState,useEffect} from 'react'
import styles from  './Project.module.css'
import { ProjectCard } from './ProjectCard';
export const Project = () => {
  const [projects, setProjects]=useState([]);
  const [loading, setLoading]=useState(true);
  const [error, setError]=useState(null);

  useEffect(()=>{
    fetch('https://raw.githubusercontent.com/Umangakhanal/JSON-FOR-PORTFOLIO/refs/heads/main/project.json')
    .then(response=>{
      if(!response.ok){
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data=>{
      setProjects(data);
      setLoading(false);
    })
    .catch(err =>{
      setError(err.message);
      setLoading(false);
    });
  },[]);

  if(loading) return <p>Loading projects ...</p>
  if(error) return <p>Error Loading projects: {error}</p>
  return( <section id='projects' className={styles.container}>
    <h2 className={styles.title}>Projects</h2>
    <div className={styles.projects}>
        {
           projects.map((project,id)=>{
            return (
                <ProjectCard key={id} project={project}/>
            )

           }) 

        }
    </div>


  </section>
  )
}
