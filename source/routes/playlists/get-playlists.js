import dbClient from "../../db/db-client";

export default function getPlaylists(context) {
  context.body = dbClient.get('playlists')
    .value();
}
