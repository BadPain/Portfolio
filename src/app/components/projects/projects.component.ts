import { Component } from '@angular/core';
import { TranslateService, TranslateModule } from '@ngx-translate/core';
import { CommonModule } from '@angular/common';

interface Project {
  titleKey: string;
  image: string;
  descriptionHeadlineKeys: string[];
  descriptionKeys: string[];
  usedSkillHeadline: string;
  usedSkillKeys: string[];
  link?: string;
  repo?: string;
}

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
})
export class ProjectsComponent {
  projects: Project[] = [
    {
      titleKey: 'PROJECTS.PROJECTONE.TITLE',
      image: 'assets/img/projects/ElPolloLoco.png',
      descriptionHeadlineKeys: [
        'PROJECTS.PROJECTONE.DESCRIPTIONS.DESCRIPTIONONE.HEADLINE',
        'PROJECTS.PROJECTONE.DESCRIPTIONS.DESCRIPTIONTWO.HEADLINE',
        'PROJECTS.PROJECTONE.DESCRIPTIONS.DESCRIPTIONTHREE.HEADLINE',
      ],
      descriptionKeys: [
        'PROJECTS.PROJECTONE.DESCRIPTIONS.DESCRIPTIONONE.TEXT',
        'PROJECTS.PROJECTONE.DESCRIPTIONS.DESCRIPTIONTWO.TEXT',
        'PROJECTS.PROJECTONE.DESCRIPTIONS.DESCRIPTIONTHREE.TEXT',
      ],
      usedSkillHeadline: 'PROJECTS.PROJECTONE.SKILLHEADLINE',
      usedSkillKeys: [
        'PROJECTS.PROJECTONE.SKILLONE',
        'PROJECTS.PROJECTONE.SKILLTWO',
        'PROJECTS.PROJECTONE.SKILLTHREE',
      ],
      link: 'https://www.irving-webdev.de/portfolio/browser/',
      repo: 'https://github.com/BadPain/portfolio',
    },
    {
      titleKey: 'PROJECTS.PROJECTTWO.TITLE',
      image: 'assets/img/projects/ElPolloLoco.png',
      descriptionHeadlineKeys: [
        'PROJECTS.PROJECTTWO.DESCRIPTIONS.DESCRIPTIONONE.HEADLINE',
        'PROJECTS.PROJECTTWO.DESCRIPTIONS.DESCRIPTIONTWO.HEADLINE',
        'PROJECTS.PROJECTTWO.DESCRIPTIONS.DESCRIPTIONTHREE.HEADLINE',
      ],
      descriptionKeys: [
        'PROJECTS.PROJECTTWO.DESCRIPTIONS.DESCRIPTIONONE.TEXT',
        'PROJECTS.PROJECTTWO.DESCRIPTIONS.DESCRIPTIONTWO.TEXT',
        'PROJECTS.PROJECTTWO.DESCRIPTIONS.DESCRIPTIONTHREE.TEXT',
      ],
      usedSkillHeadline: 'PROJECTS.PROJECTTWO.SKILLHEADLINE',
      usedSkillKeys: [
        'PROJECTS.PROJECTTWO.SKILLONE',
        'PROJECTS.PROJECTTWO.SKILLTWO',
        'PROJECTS.PROJECTTWO.SKILLTHREE',
      ],
      link: 'https://www.irving-webdev.de/projects/ElPolloLoco/index.html',
      repo: 'https://github.com/BadPain/2d-game',
    },
    {
      titleKey: 'PROJECTS.PROJECTTHREE.TITLE',
      image: 'assets/img/projects/ElPolloLoco.png',
      descriptionHeadlineKeys: [
        'PROJECTS.PROJECTTHREE.DESCRIPTIONS.DESCRIPTIONONE.HEADLINE',
        'PROJECTS.PROJECTTHREE.DESCRIPTIONS.DESCRIPTIONTWO.HEADLINE',
        'PROJECTS.PROJECTTHREE.DESCRIPTIONS.DESCRIPTIONTHREE.HEADLINE',
      ],
      descriptionKeys: [
        'PROJECTS.PROJECTTHREE.DESCRIPTIONS.DESCRIPTIONONE.TEXT',
        'PROJECTS.PROJECTTHREE.DESCRIPTIONS.DESCRIPTIONTWO.TEXT',
        'PROJECTS.PROJECTTHREE.DESCRIPTIONS.DESCRIPTIONTHREE.TEXT',
      ],
      usedSkillHeadline: 'PROJECTS.PROJECTTHREE.SKILLHEADLINE',
      usedSkillKeys: [
        'PROJECTS.PROJECTTHREE.SKILLONE',
        'PROJECTS.PROJECTTHREE.SKILLTWO',
        'PROJECTS.PROJECTTHREE.SKILLTHREE',
      ],
      link: 'https://www.irving-webdev.de/projects/Join/html/login.html',
      repo: 'https://github.com/BadPain/Join',
    },
    {
      titleKey: 'PROJECTS.PROJECTFOUR.TITLE',
      image: 'assets/img/projects/ElPolloLoco.png',
      descriptionHeadlineKeys: [
        'PROJECTS.PROJECTFOUR.DESCRIPTIONS.DESCRIPTIONONE.HEADLINE',
        'PROJECTS.PROJECTFOUR.DESCRIPTIONS.DESCRIPTIONTWO.HEADLINE',      
        'PROJECTS.PROJECTFOUR.DESCRIPTIONS.DESCRIPTIONTHREE.HEADLINE',
      ],
      descriptionKeys: [
        'PROJECTS.PROJECTFOUR.DESCRIPTIONS.DESCRIPTIONONE.TEXT',
        'PROJECTS.PROJECTFOUR.DESCRIPTIONS.DESCRIPTIONTWO.TEXT',
        'PROJECTS.PROJECTFOUR.DESCRIPTIONS.DESCRIPTIONTHREE.TEXT',
      ],
      usedSkillHeadline: 'PROJECTS.PROJECTFOUR.SKILLHEADLINE',
      usedSkillKeys: [
        'PROJECTS.PROJECTFOUR.SKILLONE',
        'PROJECTS.PROJECTFOUR.SKILLTWO',
        'PROJECTS.PROJECTFOUR.SKILLTHREE',
      ],
      link: 'https://www.irving-webdev.de/projects/discord-bot/index.html',
      repo: 'https://github.com/BadPain/discord-bot',
    },
  ];

  activeProjectIndex = 0;

  setActiveProject(index: number) {
    this.activeProjectIndex = index;
  }
}
