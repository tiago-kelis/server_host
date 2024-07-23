
import { fastify} from "fastify";

import {DatabaseMemory} from "./database.js";

const dataB = new DatabaseMemory();

const server = fastify();



server.post("/video", (request, reply) => {  
    
    const {title, description, duration} = request.body;   
    
    dataB.create({
    title,
    description,
    duration,

    }) 

    console.log(dataB.list());
    
   return reply.status(201).send();
})


server.get("/video", () => {

   const video = dataB.list();
   
   return video;
})

server.put("/video/:id", (request, reply) => {

    const videoId = request.params.id;
    const {title, description, duration} = request.body; 

    dataB.update(videoId, {
        title,
        description,
        duration,
    })

    return reply.status(204).send();
    
})

server.delete("/video/:id", (request, reply) => {

    const videoId = request.params.id;
    dataB.delete(videoId);

    return reply.status(204).send();
   
})


server.listen({
    port: 8080,  
})
