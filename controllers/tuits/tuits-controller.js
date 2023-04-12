import * as tuitsDao from './tuits-dao.js'

//import posts from "./tuits.js";
//let tuits = posts;

const createTuit = async (req, res) => {
  const newTuit = req.body;
  // newTuit._id = (new Date()).getTime()+'';
  newTuit.topic = "Mental Health";
  newTuit.userName = "Kiki";
  newTuit.handle = "@Kiki";
  newTuit.time = "2h";
  newTuit.image = "spaceX.jpeg";
  newTuit.title = "Are you feeling good in your workplace?";
  newTuit.likes = 0;
  newTuit.liked = false;
  newTuit.replies = 0;
  newTuit.retuits = 0;
  // tuits.push(newTuit);
  //res.json(newTuit);
  const insertedTuit = await tuitsDao.createTuit(newTuit);
  res.json(insertedTuit);
}

const findTuits = async(req, res) =>{
    const tuits = await tuitsDao.findTuits();
    res.json(tuits);
}


const updateTuit = async (req, res) => {
  const tuitdIdToUpdate = req.params.tid;
  const updates = req.body;
  const status = await tuitsDao.updateTuit(tuitdIdToUpdate, updates);
  res.json(status);
  //const tuitIndex = tuits.findIndex(
  //  (t) => t._id === tuitdIdToUpdate)
  //tuits[tuitIndex] = 
  //  {...tuits[tuitIndex], ...updates};
  //res.sendStatus(200);
}

const deleteTuit = async (req, res) => {
  const tuitdIdToDelete = req.params.tid;
  const status = await tuitsDao.deleteTuit(tuitdIdToDelete);
  res.json(status);
  //tuits = tuits.filter((t) =>
  //  t._id !== tuitdIdToDelete);
  //res.sendStatus(200);
}

export default (app) => {
 app.post('/api/tuits', createTuit);
 app.get('/api/tuits', findTuits);
 app.put('/api/tuits/:tid', updateTuit);
 app.delete('/api/tuits/:tid', deleteTuit);
}
