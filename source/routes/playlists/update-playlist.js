import dbClient from "../../db/db-client";

export default function updatePlaylist(context) {
  let body = context.request.body;

  let newSong = dbClient.get('playlists')
    .find({ id: context.params.id })
    .assign({ friend_id: body.friend_id, song_ids: body.song_ids })
    .write();

  context.body = "updated";
}
