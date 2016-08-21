import express from 'express';
import webpack from 'webpack';
import webpackConfig from './webpack.config';

const app = express();

const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

const compiler = webpack(webpackConfig);
app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: webpackConfig.output.publicPath
}));

app.use(require('webpack-hot-middleware')(compiler));
app.use(express.static('public'));


const state = {todoItem: [], filterName: 'All'};

app.post('/todos', (req, res) => {

  state.todoItem.push({ text:req.body.text, isDone: false});
  res.json(state.todoItem);
});

app.delete('/todos',(req,res)=>{

  state.todoItem.splice(req.body.index, 1);
  res.json(state.todoItem);
});

app.put('/todos',(req,res)=>{
  state.todoItem[req.body.index].isDone = !state.todoItem[req.body.index].isDone;
  res.json(state.todoItem);
});

app.put('/setName',(req,res)=>{
  state.filterName=req.body.name;
  res.json(state);
});


app.listen(3000, function() {
  console.log("server started at http://localhost:3000");
});