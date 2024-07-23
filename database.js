 import { randomUUID} from "node:crypto";
 
 export class DatabaseMemory{

    #vedeo = new Map();

    list(){
        return Array.from(this.#vedeo.entries()).map(videosArray => {

            const id = videosArray[0];
            const date = videosArray[1];
            return {
                id,
                ...date,
            }

        });
    }

    create(video){
        const videoId = randomUUID();
        this.#vedeo.set(videoId, video);
    }

    update(id, video){
        this.#vedeo.set(id,video);
    }

    delete(id){
        this.#vedeo.delete(id);
    }

}