//Code React element here
console.log(React)
let interests = React.createElement('ul',{className:'duncan_interests'},
  [
    React.createElement('li',{key:1},'JavaScript'),
    React.createElement('li',{key:2},'React'),
    React.createElement('li',{key:3},'Movies'),
    React.createElement('li',{key:4},'Ice cream')
  ]
);
let title = React.createElement('h1',{},'Duncan');
let description = React.createElement('p',{},'Who is learning React');
let profile = React.createElement('div',{className:'me'},
  title,
  description,
  interests
);

ReactDOM.render(
  profile,
  document.getElementById('main')
)
