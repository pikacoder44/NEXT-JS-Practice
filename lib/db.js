const { MY_USERNAME, PASSWORD } = process.env;
// const connString = process.env.CONN_STRING;
const connString ="mongodb+srv://" + MY_USERNAME + ":" + PASSWORD +"@cluster0.ytme9ti.mongodb.net/productDB?retryWrites=true&w=majority&appName=Cluster0";


export default connString;