import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import Portfolio from '../components/Portfolio';

const mockData = {
  portfolio: [
    {
      name: 'TaskFlow',
      description: 'A task management app.',
      imgurl: '/assets/taskflow.png',
      projectImg: 'https://taskflow.awongnnange.com/',
      githubUrl: 'https://github.com/Nnange/TaskFlow',
    },
    {
      name: 'RosterLoop',
      description: 'A cleaning roster app.',
      imgurl: '/assets/rosterLoop.png',
      projectImg: 'https://rosterloop.awongnnange.com/',
      githubUrl: 'https://github.com/Nnange/rosterLoop',
    },
  ],
};

const mockDataNoGithub = {
  portfolio: [
    {
      name: 'Amazon Clone',
      description: 'An e-commerce clone.',
      imgurl: '/assets/amazon.jpg',
      projectImg: 'https://nnange.github.io/Amazon-Clone/',
    },
  ],
};

describe('Portfolio', () => {
  it('renders the section heading', () => {
    render(<Portfolio resumeData={mockData} />);
    expect(screen.getByText(/check out some of my works/i)).toBeInTheDocument();
  });

  it('renders a card for each portfolio item', () => {
    render(<Portfolio resumeData={mockData} />);
    expect(screen.getByText('TaskFlow')).toBeInTheDocument();
    expect(screen.getByText('RosterLoop')).toBeInTheDocument();
  });

  it('shows both GitHub and Live Demo buttons when githubUrl is present', () => {
    render(<Portfolio resumeData={mockData} />);
    const githubLinks = screen.getAllByText('GitHub');
    const demoLinks = screen.getAllByText('Live Demo');
    expect(githubLinks).toHaveLength(2);
    expect(demoLinks).toHaveLength(2);
  });

  it('shows only Live Demo button when githubUrl is absent', () => {
    render(<Portfolio resumeData={mockDataNoGithub} />);
    expect(screen.queryByText('GitHub')).not.toBeInTheDocument();
    expect(screen.getByText('Live Demo')).toBeInTheDocument();
  });

  it('GitHub links point to the correct URLs', () => {
    render(<Portfolio resumeData={mockData} />);
    const githubLinks = screen.getAllByText('GitHub');
    expect(githubLinks[0].closest('a')).toHaveAttribute('href', 'https://github.com/Nnange/TaskFlow');
    expect(githubLinks[1].closest('a')).toHaveAttribute('href', 'https://github.com/Nnange/rosterLoop');
  });
});
