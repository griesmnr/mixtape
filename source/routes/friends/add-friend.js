import dbClient from "../../db/db-client";

export default function addFriend(context) {
  let body = context.request.body;

  let newSong = dbClient.get('friends')
    .insert({ name: body.name })
    .write();

  context.body = "added";
}
