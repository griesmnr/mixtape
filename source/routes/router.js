import Router from "koa-router";
import getSongs from "./songs/get-songs";
import addSong from "./songs/add-song";
import addFriend from "./friends/add-friend";

let router = new Router();

router.get("/songs", getSongs);
router.post("/songs", addSong);

router.post("/friend", addFriend);

export default router;
