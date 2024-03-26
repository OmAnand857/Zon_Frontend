import axios from "axios";
const instance=axios.create({
    baseURL:"https://zon-server.vercel.app/"
});
export default instance;