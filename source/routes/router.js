import Router from "koa-router";
import getSongs from "./songs/get-songs";
import addSong from "./songs/add-song";
import addFriend from "./friends/add-friend";
import getFriends from "./friends/get-friends";
import getPlaylists from "./playlists/get-playlists";
import addPlaylist from "./playlists/add-playlist";
import updatePlaylist from "./playlists/update-playlist";

let router = new Router();

router.get("/songs", getSongs);
router.post("/songs", addSong);

router.get("/friends", getFriends);
router.post("/friends", addFriend);

router.get("/playlists", getPlaylists);
router.post("/playlists", addPlaylist);
router.put("/playlists/:id", updatePlaylist);

export default router;
