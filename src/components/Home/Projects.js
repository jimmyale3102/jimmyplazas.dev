import React from 'react';
import { Card, CardContent, CardMedia, Typography, Container } from '@mui/material';
import { useThemeContext, MarginDefault, BorderRadiusCard } from '../ThemeContext';

function Projects() {
	const { mode } = useThemeContext();
	
	return (
		<Container>
			<Typography
				variant="h4"
				style={{ margin: MarginDefault }}>
				<span style={{ color: mode === 'light' ? '#0d47a1' : '#FFD700' }} >Projects</span>
			</Typography>
			<Card style={{ borderRadius: BorderRadiusCard }}>
				<CardMedia image="/profile.jpg" title="Project Screenshot" style={{ height: 140 }} />
				<CardContent>
					<Typography variant="h5">Project Title</Typography>
					<Typography variant="body1">Description of the project.</Typography>
					<a href="repository_link">View Repository</a>
				</CardContent>
			</Card>
		</Container>
	);
}

export default Projects;
