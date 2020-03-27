import dbClient from "../../db/db-client";

export default function getSongs(context) {
  context.body = dbClient.get('songs')
    .value();
}
