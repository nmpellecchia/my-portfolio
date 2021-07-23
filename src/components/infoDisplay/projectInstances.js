import knightTour from './projectImgs/knight-tour.png';
import recipe from './projectImgs/recipes.png';
import quiz from './projectImgs/quiz.png';
import readingList from './projectImgs/reading-list.png';

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

const projectOne = new Project(
  "Warnsdoff's Knight Tour",
  knightTour,
  'js, html, css',
  "Interactive site where you can learn and try yourself what's a Knight Tour and how to solve it",
  'https://github.com/nmpellecchia/Knight-Tour',
  'https://nmpellecchia.github.io/Knight-Tour/'
);
const projectTwo = new Project(
  'Random Recipes from TheMealDB',
  recipe,
  'js, html, css, rest api',
  'In this website you can get a random recipe every time you enter. You can also, of course, choose a category and the site will give you the dish, ingredients and preparations methods!',
  'https://github.com/nmpellecchia/recipe-site',
  'https://nmpellecchia.github.io/recipe-site/'
);
const projectThree = new Project(
  'CRT style Trivia',
  quiz,
  'js, html, css, rest api',
  "Want to test your knowledge? Then this site is for you! Inside what seems like an old terminal you can choose between three difficulties and try to answer the question the best you can all the times you want.  's",
  'https://github.com/nmpellecchia/Retro-looking-Trivia',
  'https://nmpellecchia.github.io/Retro-looking-Trivia/'
);
const projectFour = new Project(
  'Reading List with Flask API',
  readingList,
  'jquery, html, bootstrap, flask',
  "A handmade API made using the Python library 'Flask'. You can add, delete and edit the books you want!",
  'https://github.com/nmpellecchia/Reading-List',
  ''
);

const projects = [projectOne, projectTwo, projectThree, projectFour];

export { projects };
