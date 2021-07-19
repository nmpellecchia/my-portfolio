class Project {
  constructor(title, img, tools, desc, repoURL, liveURL) {
    this.title = title;
    this.img = img;
    this.tools = tools;
    this.desc = desc;
    this.repoURL = repoURL;
    this.liveURL = liveURL;
  }
}

const testDesc =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tincidunt condimentum rutrum. Praesent quis eros nec lectus consectetur commodo et ac sapien. Vivamus condimentum auctor arcu, ac vulputate tortor vehicula ullamcorper. Morbi imperdiet lacus arcu, vitae pharetra risus placerat sed. Cras ullamcorper at turpis a posuere. Donec porta pretium turpis.';

const projectOne = new Project(
  'Test title1',
  '#',
  'js,html,css',
  testDesc,
  'google.com',
  'google.com'
);
const projectTwo = new Project(
  'Test title2',
  '#',
  'JQuery, Bootstrap, html',
  testDesc,
  'google.com',
  'google.com'
);
const projectThree = new Project(
  'Test title3',
  '#',
  'React, SASS, pug',
  testDesc,
  'google.com',
  'google.com'
);
const projectFour = new Project(
  'Test title4',
  '#',
  'Vue, SCSS, html',
  testDesc,
  'google.com',
  ''
);

const projects = [projectOne, projectTwo, projectThree, projectFour];

export { projects };
