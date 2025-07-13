const { MY_USERNAME, PASSWORD } = process.env;
// const connString = process.env.CONN_STRING;
const connString ="mongodb+srv://" + MY_USERNAME + ":" + PASSWORD +"@cluster0.ytme9ti.mongodb.net/productDB?retryWrites=true&w=majority&appName=Cluster0";

// "mongodb+srv://pikaop125:<db_password>@cluster0.ytme9ti.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
// const connString =
//   "mongodb+srv://pikaop125:ClusterNext@cluster0.ytme9ti.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

export default connString;
