import { Projects } from '@/components/project/Projects';
import React from 'react';

const ProjectsPage = ( {data, pageName} ) => {
    return (
        <div>
            <Projects 
            data={data}
            pageName={pageName}
            />
        </div>
    )
}

export default ProjectsPage;

export async function getStaticPaths() {
    const { events_categories } = await import('../../../data/data.json');
    const allPaths = events_categories.map((ev) => {
        // console.log(ev)
        return {
            params: {
                projects: ev.id.toString(),
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
    console.log(id)

    const { allEvents } = await import('/data/data.json');
    const data = allEvents.filter((ev) => ev?.city === id)
    return {
        props: {
            data,
            pageName: id
        }
    }
}