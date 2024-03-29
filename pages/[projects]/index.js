import { ProjectItems } from '@/components/project/ProjectItems';
import React from 'react';


const ProjectsPage = ( { data} ) => {
    return (
        <div>
            <ProjectItems
            data={data}
            />
        </div>
    )
}

export default ProjectsPage;

export async function getStaticPaths() {
    const { projects } = await import('/data/data.json');
    const allPaths = projects.map((project) => {
        return {
            params: {
                projects: project.class.toString()
            }
        }
    }
    )
    return {
        paths: allPaths,
        fallback: false,
    }
}

export async function getStaticProps(context) {
    const id = context?.params.projects;

    const { projects } = await import('/data/data.json');
    const data = projects.filter((project) => project?.class === id)
    return {
        props: {
            data,
        }
    }
}