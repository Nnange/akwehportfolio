import { describe, it, expect } from 'vitest';
import resumeData from '../resumeData';

describe('resumeData integrity', () => {
  it('has required top-level fields', () => {
    expect(resumeData.name).toBeTruthy();
    expect(resumeData.role).toBeTruthy();
    expect(resumeData.aboutme).toBeTruthy();
    expect(resumeData.address).toBeTruthy();
  });

  it('has at least one social link with a valid URL', () => {
    expect(resumeData.socialLinks.length).toBeGreaterThan(0);
    resumeData.socialLinks.forEach((link) => {
      expect(link.url).toMatch(/^https?:\/\//);
      expect(link.name).toBeTruthy();
      expect(link.className).toBeTruthy();
    });
  });

  it('has at least one portfolio item with all required fields', () => {
    expect(resumeData.portfolio.length).toBeGreaterThan(0);
    resumeData.portfolio.forEach((item) => {
      expect(item.name).toBeTruthy();
      expect(item.description).toBeTruthy();
      expect(item.imgurl).toBeTruthy();
      expect(item.projectImg).toMatch(/^https?:\/\//);
    });
  });

  it('portfolio items with a githubUrl have a valid GitHub URL', () => {
    resumeData.portfolio
      .filter((item) => item.githubUrl)
      .forEach((item) => {
        expect(item.githubUrl).toMatch(/^https:\/\/github\.com\//);
      });
  });

  it('has work entries with required fields', () => {
    expect(resumeData.work.length).toBeGreaterThan(0);
    resumeData.work.forEach((job) => {
      expect(job.CompanyName).toBeTruthy();
      expect(job.specialization).toBeTruthy();
      expect(job.Tasks.length).toBeGreaterThan(0);
    });
  });

  it('has education entries with required fields', () => {
    expect(resumeData.education.length).toBeGreaterThan(0);
    resumeData.education.forEach((edu) => {
      expect(edu.UniversityName).toBeTruthy();
      expect(edu.specialization).toBeTruthy();
    });
  });

  it('has skill groups each with a category and at least one item', () => {
    expect(resumeData.skills.length).toBeGreaterThan(0);
    resumeData.skills.forEach((group) => {
      expect(group.category).toBeTruthy();
      expect(group.items.length).toBeGreaterThan(0);
    });
  });
});
