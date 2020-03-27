import dbClient from "../../db/db-client";

export default function addSong(context) {
  let body = context.request.body;
  
  let newSong = dbClient.get('songs')
    .insert({ artist: body.artist, title: body.title })
    .write();

  context.body = "added";
}
