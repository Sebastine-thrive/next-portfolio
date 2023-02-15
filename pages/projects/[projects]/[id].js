import ProjectDetail from '@/components/project/ProjectDetail';


const SingleProjectPage = ({ data, pageName}) => {
    return (
        <div>
            <ProjectDetail
            data={data}
            pageName={pageName}
            />
        </div>
    )
}

export default SingleProjectPage;


export async function getStaticPaths() {
    const data = await import('/data/data.json');
    const allProjects = data.projects;

    const allPaths = allProjects.map((path) => {
        return {
            params: {
                projects: project,
                id: path.id,
            }
        };
    })

    return {
        paths: allPaths,
        fallback: false,
    }
}

export async function getStaticProps(context) {
    const id = context.params.id;
    const { allProjects } = await import('/data/data.json');
    const eventData = allProjects.find((project) => id === project.id);

    return {
        props: {
            data: eventData
        }
    }
}