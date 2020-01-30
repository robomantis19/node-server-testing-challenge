const express = require('express');
const helmet = require('helmet'); 

const ProjectRouter = require('./routes/project-router')

const server = express(); 

server.use(express.json()); 
server.use(helmet());
server.use('/api', ProjectRouter)

module.exports = server;