import React, { useEffect, useState } from 'react';
import { useTheme, Typography, Container } from '@mui/material';
import { useThemeContext, MarginDefault } from '../ThemeContext';
import ProjectItem from './ProjectItem';

function Projects() {
	const [projectsData, setProjects] = useState([]);
	const { mode } = useThemeContext();

	useEffect(() => {
		fetch('./projects.json')
			.then(response => response.json())
			.then(data => setProjects(data))
			.catch(error => console.error('Error fetching project data:', error));
	}, []);

	return (
		<Container>
			<Typography
				variant="h4"
				style={{ margin: MarginDefault }}>
				<span style={{ color: mode === 'light' ? '#0d47a1' : '#FFD700' }} >Projects</span>
			</Typography>

			{projectsData.map((projectItem) => (
				<ProjectItem
					iconSrc={projectItem.iconSrc}
					title={projectItem.title}
					description={projectItem.description}
					languages={projectItem.languages}
					url={projectItem.url}
					webUrl={projectItem.webUrl}
					gitHubUrl={projectItem.gitHubUrl}
					playStoreUrl={projectItem.playStoreUrl}
				/>
			))}

		</Container>
	);
}

export default Projects;
