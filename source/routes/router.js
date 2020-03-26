import Router from "koa-router";
import getSongs from "./songs/get-songs";

let router = new Router();

router.get("/songs", getSongs);

export default router;
