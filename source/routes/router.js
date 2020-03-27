import Router from "koa-router";
import getSongs from "./songs/get-songs";
import addSong from "./songs/add-song";

let router = new Router();

router.get("/songs", getSongs);
router.post("/songs", addSong);

export default router;
