import envalid from "envalid";

export default envalid.cleanEnv(process.env, {
  NODE_ENV: envalid.str({
    desc: "The environemnt for the application",
    choices: [ 'development', 'test', 'production' ],
    default: "development"
  }),
  PORT: envalid.num({ desc: "The port the service runs on" })
});
