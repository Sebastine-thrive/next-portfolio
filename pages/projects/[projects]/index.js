import { ProjectItems } from '@/components/project/ProjectItems';
import React from 'react';
// import  ProjectDetail  from '@/components/project/ProjectDetail';
import ProjectDetail from "../../../src/components/project/ProjectDetail"

const ProjectsPage = ( { data, pageName } ) => {
    return (
        <div>
            <ProjectItems
            data={data}
            // pageName={pageName}
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
    // console.log(id)

    const { projects } = await import('/data/data.json');
    const data = projects.filter((project) => project?.class === id)
    return {
        props: {
            data,
            // pageName: id
        }
    }
}