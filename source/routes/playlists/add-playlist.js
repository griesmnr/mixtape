import dbClient from "../../db/db-client";

export default function addPlaylist(context) {
  let body = context.request.body;

  let newSong = dbClient.get('playlists')
    .insert({ friend_id: body.friend_id, song_ids: body.song_ids })
    .write();

  context.body = "added";
}
