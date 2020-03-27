import dbClient from "../../db/db-client";

export default function getFriends(context) {
  context.body = dbClient.get('friends')
    .value();
}
