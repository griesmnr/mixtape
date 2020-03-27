import Router from "koa-router";
import getSongs from "./songs/get-songs";
import addSong from "./songs/add-song";
import addFriend from "./friends/add-friend";
import getFriends from "./friends/get-friends";

let router = new Router();

router.get("/songs", getSongs);
router.post("/songs", addSong);

router.get("/friends", getFriends);
router.post("/friends", addFriend);

export default router;
